import { BOT_CONTEXT } from "../src/data/botContext";

const MODEL = "llama-3.1-8b-instant"; // check Groq docs for current free models
const MAX_MESSAGE_CHARS = 500;
const MAX_HISTORY = 8;

// Best-effort rate limit (in-memory; resets on cold starts, fine for a portfolio)
const hits = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = req.headers["x-forwarded-for"]?.split(",")[0] || "unknown";
  if (rateLimited(ip)) {
    return res.status(429).json({ error: "Too many messages. Please wait a minute." });
  }

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({ error: "Server is not configured." });
  }

  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Invalid request." });
    }

    // Sanitize: only user/assistant roles, trimmed length, limited history
    const clean = messages
      .filter((m) => ["user", "assistant"].includes(m.role) && typeof m.content === "string")
      .slice(-MAX_HISTORY)
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_CHARS) }));

    const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "system", content: BOT_CONTEXT }, ...clean],
        temperature: 0.4,
        max_tokens: 350,
      }),
    });

    if (!upstream.ok) {
      const status = upstream.status === 429 ? 429 : 502;
      return res.status(status).json({
        error:
          status === 429
            ? "The assistant is busy right now. Try again shortly."
            : "The assistant is unavailable right now.",
      });
    }

    const data = await upstream.json();
    const reply = data.choices?.[0]?.message?.content?.trim();
    return res.status(200).json({ reply: reply || "Sorry, I couldn't come up with a reply." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong." });
  }
}