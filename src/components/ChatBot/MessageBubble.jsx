export default function MessageBubble({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
          isUser
            ? "rounded-br-sm bg-black text-white"
            : "rounded-bl-sm bg-neutral-100 text-neutral-900"
        }`}
      >
        {content}
      </div>
    </div>
  );
}