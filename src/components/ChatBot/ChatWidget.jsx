import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import { useChat } from "./UseChat"; // match your actual filename casing
import { FAQ } from "../../data/faq";

const SUGGESTIONS = FAQ.slice(0, 5).map((f) => f.q);

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
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat window */}
      <div
        className={`mb-3 flex h-[30rem] w-[calc(100vw-2.5rem)] max-w-[22rem] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-200 ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
        role="dialog"
        aria-label="Chat with Frans's AI assistant"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-[#e4001b]" />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">
                Ask Frans's AI
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                Available for work
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={reset}
              className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-neutral-400 transition hover:text-black"
            >
              Reset
            </button>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="h-px bg-neutral-100" />

        {/* Messages */}
        <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
          {messages.map((m, i) => (
            <MessageBubble key={i} {...m} />
          ))}

          {messages.length === 1 && !loading && (
            <div className="flex flex-wrap gap-2 pt-1">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-neutral-200 px-3 py-1.5 text-[11px] text-neutral-700 transition hover:border-black hover:bg-black hover:text-white"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="flex justify-start">
              <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-neutral-100 px-4 py-3">
                {[0, 150, 300].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>
            </div>
          )}

          {error && (
            <p className="rounded-xl bg-red-50 px-3 py-2 text-xs text-[#e4001b]">
              {error}
            </p>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form onSubmit={submit} className="flex items-center gap-2 px-4 pb-4 pt-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={500}
            placeholder="Ask about my work..."
            disabled={loading}
            className="flex-1 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-[13px] text-black placeholder-neutral-400 outline-none transition focus:border-black disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Send"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:bg-[#e4001b] disabled:cursor-not-allowed disabled:opacity-30"
          >
            →
          </button>
        </form>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="ml-auto flex items-center gap-2 rounded-full bg-black px-5 py-3 text-[13px] font-semibold text-white shadow-lg transition hover:scale-105"
      >
        {open ? (
          <>Close <span aria-hidden>✕</span></>
        ) : (
          <>
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#e4001b]" />
            Ask my AI
          </>
        )}
      </button>
    </div>
  );
}