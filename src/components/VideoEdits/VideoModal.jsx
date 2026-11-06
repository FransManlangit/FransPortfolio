import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import { RED } from "../../constants/theme";
import { getYouTubeId, getEmbedUrl, getWatchUrl } from "../../utils/youtube";

export default function VideoModal({ video, onClose }) {
  const closeButtonRef = useRef(null);
  const id = getYouTubeId(video.id);
  const isShort = video.type === "short";

  useEffect(() => {
    // Remember what had focus so we can give it back when the modal closes
    const previouslyFocused = document.activeElement;

    // Stop the page behind the modal from scrolling
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    // Cleanup: undo everything this effect did
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  if (!id) return null;

  // createPortal renders into <body>, outside the card (see notes below)
  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={onClose} // click on the dark backdrop closes
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* stopPropagation: clicks inside the player must not reach the backdrop */}
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:text-white"
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = RED)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
        >
          <FaXmark />
        </button>

        <div
          className={`overflow-hidden bg-black shadow-2xl ${
            isShort ? "mx-auto aspect-[9/16] h-[80vh] max-w-full" : "aspect-video w-full"
          }`}
        >
          <iframe
            className="h-full w-full"
            src={getEmbedUrl(id)}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-4 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide">{video.title}</p>
          <a
            href={getWatchUrl(id)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
          >
            Open on YouTube ↗
          </a>
        </div>
      </div>
    </motion.div>,
    document.body
  );
}