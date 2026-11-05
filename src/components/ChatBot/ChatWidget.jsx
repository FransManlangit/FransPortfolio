import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import { useChat } from "./useChat";

const SUGGESTIONS = [
  "What are Frans's top skills?",
  "Tell me about his projects",
  "Is he open to work?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, loading, error, send, reset } = useChat();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, error, open]);

  const submit = (e) => {
    e.preventDefault();
    send(input);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Chat window */}
      <div
        className={`mb-3 flex h-[28rem] w-[calc(100vw-2.5rem)] max-w-sm origin-bottom-right flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl transition-all duration-200 ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
        role="dialog"
        aria-label="Chat with Frans's AI assistant"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <div>
              <p className="text-sm font-semibold text-white">Ask Frans's AI</p>
              <p className="text-xs text-zinc-500">Usually replies in seconds</p>
            </div>
          </div>
          <div className="flex gap-1">
            <button
              onClick={reset}
              className="rounded-md px-2 py-1 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              Reset
            </button>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-md px-2 py-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.map((m, i) => (
            <MessageBubble key={i} {...m} />
          ))}

          {messages.length === 1 && !loading && (
            <div className="flex flex-wrap gap-2 pt-1">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300 hover:border-indigo-500 hover:text-white"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="flex justify-start">
              <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-zinc-800 px-4 py-3">
                {[0, 150, 300].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>
            </div>
          )}

          {error && (
            <p className="rounded-lg border border-red-900/50 bg-red-950/40 px-3 py-2 text-xs text-red-300">
              {error}
            </p>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form onSubmit={submit} className="flex gap-2 border-t border-zinc-800 p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={500}
            placeholder="Ask about my work..."
            disabled={loading}
            className="flex-1 rounded-xl bg-zinc-800 px-3 py-2 text-sm text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="rounded-xl bg-indigo-600 px-4 text-sm font-medium text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Send
          </button>
        </form>
      </div>

      {/* Floating bubble */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition hover:scale-105 hover:bg-indigo-500"
      >
        {open ? (
          <span className="text-xl">✕</span>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}