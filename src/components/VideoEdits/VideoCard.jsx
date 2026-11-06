import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa6";
import { RED, INK, BODY, TILTS } from "../../constants/theme";
import { getYouTubeId, getWatchUrl, getAutoThumbnail } from "../../utils/youtube";

export default function VideoCard({ video, index, onPlay }) {
  const id = getYouTubeId(video.id);
  // Bad data in video.js should skip one card, not crash the whole page.
  if (!id) return null;

  const tilt = TILTS[index % TILTS.length];
  const isShort = video.type === "short";
  const thumbnail = video.thumbnail || getAutoThumbnail(id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, rotate: tilt }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      whileHover={{ rotate: 0, y: -8 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative bg-white p-3 pb-4 shadow-[0_18px_40px_rgba(26,26,26,0.18)]"
    >
      {/* tape */}
      <span
        className="absolute -top-3 left-1/2 z-10 h-5 w-20"
        style={{
          backgroundColor: RED,
          opacity: 0.75,
          transform: `translateX(-50%) rotate(${index % 2 ? -4 : 4}deg)`,
        }}
        aria-hidden="true"
      />

      {/* thumbnail: a real <button> so keyboard and screen-reader users can play it */}
      <button
        type="button"
        onClick={() => onPlay(video)}
        aria-label={`Play ${video.title}`}
        className={`relative block w-full overflow-hidden bg-[#E9E7E2] ${
          isShort ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        <img
          src={thumbnail}
          alt=""
          loading="lazy"
          draggable="false"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition duration-300 group-hover:scale-110">
          <FaPlay className="ml-0.5 text-sm" style={{ color: RED }} />
        </span>
        {video.duration && (
          <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
            {video.duration}
          </span>
        )}
      </button>

      {/* caption */}
      <div className="mt-4 px-1">
        <p className="text-xs font-semibold tracking-[0.2em]" style={{ color: RED }}>
          {String(index + 1).padStart(2, "0")}
          <span style={{ color: BODY }}>
            {" "}· {isShort ? "SHORT" : "VIDEO"} · {(video.tools || "").toUpperCase()}
          </span>
        </p>
        <h3
          className="mt-1 text-lg font-extrabold uppercase leading-tight tracking-tight md:text-xl"
          style={{ color: INK }}
        >
          {video.title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="block h-[3px] w-8" style={{ backgroundColor: RED }} />
          <a
            href={getWatchUrl(id)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-medium uppercase tracking-[0.2em] transition hover:text-[#E30613]"
            style={{ color: BODY }}
          >
            Watch on YouTube ↗
          </a>
        </div>
      </div>
    </motion.article>
  );
}