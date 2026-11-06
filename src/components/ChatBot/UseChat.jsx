import { useState, useRef, useCallback } from "react";
import { FAQ } from "../../data/faq";

const GREETING = {
  role: "assistant",
  content:
    "Hi! 👋 I'm Frans's AI assistant. Ask me about his projects, skills, or experience.",
};

export function useChat() {
  const [messages, setMessages] = useState([GREETING]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);

  const send = useCallback(
    async (text) => {
      const content = text.trim();
      if (!content || loading) return;

      // Instant answer for FAQ chips (no API call, no quota used)
      const canned = FAQ.find(
        (f) => f.q.toLowerCase() === content.toLowerCase()
      );
      if (canned) {
        setError(null);
        setMessages((m) => [
          ...m,
          { role: "user", content },
          { role: "assistant", content: canned.a },
        ]);
        return;
      }

      setError(null);
      const next = [...messages, { role: "user", content }];
      setMessages(next);
      setLoading(true);

      abortRef.current = new AbortController();
      const timeout = setTimeout(() => abortRef.current.abort(), 20000);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            // don't send the static greeting as history
            messages: next.slice(1),
          }),
          signal: abortRef.current.signal,
        });

        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.error || "Request failed.");

        setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
      } catch (e) {
        setError(
          e.name === "AbortError"
            ? "The request timed out. Please try again."
            : e.message || "Something went wrong."
        );
      } finally {
        clearTimeout(timeout);
        setLoading(false);
      }
    },
    [messages, loading]
  );

  const reset = () => {
    abortRef.current?.abort();
    setMessages([GREETING]);
    setError(null);
    setLoading(false);
  };

  return { messages, loading, error, send, reset };
}