import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { PROJECTS } from "../../constants";
import { VIDEOS } from "../../constants/video";
import { BG, INK, RED, BODY, TILTS } from "../../constants/theme";
import VideoCard from "../VideoEdits/VideoCard";
import VideoModal from "../VideoEdits/VideoModal";




const scriptFont = { fontFamily: "'Yellowtail', cursive" };

// Image crop inside each card: "50% 0%" = top of screenshot (best for websites)
const IMAGE_POSITION = "50% 0%";

const TABS = [
  { id: "websites", label: "Websites & Web Apps" },
  { id: "videos", label: "Video Editing" },
];












const Projects = () => {
  const [activeTab, setActiveTab] = useState("websites");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const closeVideo = useCallback(() => setActiveVideo(null), []);
  // Cards show in the same order as the PROJECTS array in constants
  const projects = PROJECTS;

  const hasLink = (project) => Boolean(project?.websiteLink || project?.repoLink);
  const getHref = (project) => project?.websiteLink || project?.repoLink || undefined;

  const handleMouseEnter = (project) => {
    // custom cursor only on devices that actually hover (not touch screens)
    const canHover =
      typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
    if (canHover && hasLink(project)) setCursorVisible(true);
  };

  const handleMouseLeave = () => setCursorVisible(false);

  useEffect(() => {
    if (!cursorVisible) return;
    const onMove = (e) => setCursorPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorVisible]);

  return (
    <section
      id="projects"
      className="relative w-full font-poppins text-left scroll-mt-20 overflow-hidden"
      style={{
        backgroundColor: BG,
        // faint graph-paper texture, same as About
        backgroundImage:
          "linear-gradient(rgba(26,26,26,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.045) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-20 md:py-28">
        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center gap-4 md:gap-8">
            <span className="h-[3px] flex-1" style={{ backgroundColor: INK }} />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-none">
              <span style={{ color: INK }}>My </span>
              <span style={{ color: RED }}>Projects</span>
            </h2>
            <span className="h-[3px] flex-1" style={{ backgroundColor: INK }} />
          </div>
          <p
            className="mt-4 text-[11px] md:text-xs uppercase font-medium tracking-[0.3em]"
            style={{ color: BODY }}
          >
            Bringing ideas to life
          </p>
          <p
            className="mt-6 mx-auto max-w-xl text-sm md:text-base leading-relaxed"
            style={{ color: BODY }}
          >
            Take a look at some of the work I&apos;ve done. Each project shows my skills in{" "}
            <span
              className="font-semibold underline decoration-2 underline-offset-4"
              style={{ color: INK, textDecorationColor: RED }}
            >
              web development, design and video
            </span>
            .
          </p>
        </motion.div>

        {/* ===== TABS ===== */}
        <div className="mt-10 flex flex-wrap justify-center gap-3" role="tablist">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className="px-6 py-2.5 rounded-full border-2 text-sm md:text-base font-medium transition duration-300 hover:scale-105"
                style={
                  isActive
                    ? { backgroundColor: RED, borderColor: RED, color: "#fff" }
                    : { backgroundColor: "transparent", borderColor: INK, color: INK }
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ===== WEBSITES GRID ===== */}
        {activeTab === "websites" && (
          <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {projects.map((project, i) => {
              const href = getHref(project);
              const Card = href ? motion.a : motion.div;
              const tilt = TILTS[i % TILTS.length];
              const linkProps = href
                ? {
                  href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `View ${project.name}`,
                }
                : {};

              return (
                <Card
                  key={project.id ?? i}
                  {...linkProps}
                  onMouseEnter={() => handleMouseEnter(project)}
                  onMouseLeave={handleMouseLeave}
                  initial={{ opacity: 0, y: 40, rotate: tilt }}
                  whileInView={{ opacity: 1, y: 0, rotate: tilt }}
                  whileHover={{ rotate: 0, y: -8 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  className={`group relative block bg-white p-3 pb-4 shadow-[0_18px_40px_rgba(26,26,26,0.18)] ${href ? "cursor-pointer" : ""
                    }`}
                >
                  {/* tape */}
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 z-10"
                    style={{
                      backgroundColor: RED,
                      opacity: 0.75,
                      transform: `translateX(-50%) rotate(${i % 2 ? -4 : 4}deg)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* screenshot */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#E9E7E2]">
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      loading="lazy"
                      draggable="false"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: IMAGE_POSITION }}
                    />
                    {href && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#1A1A1A]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-xs font-medium uppercase tracking-[0.25em] border border-white/70 rounded-full px-5 py-2">
                          View project
                        </span>
                      </div>
                    )}
                  </div>

                  {/* caption */}
                  <div className="mt-4 flex items-start justify-between gap-3 px-1">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.2em]" style={{ color: RED }}>
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3
                        className="mt-1 text-lg md:text-xl font-extrabold uppercase tracking-tight leading-tight"
                        style={{ color: INK }}
                      >
                        {project.name}
                      </h3>
                      <span className="block w-8 h-[3px] mt-2" style={{ backgroundColor: RED }} />
                    </div>
                    {href && (
                      <span
                        className="shrink-0 mt-1 w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm -rotate-45 transition duration-300 group-hover:rotate-0 group-hover:text-white group-hover:bg-[#E30613] group-hover:border-[#E30613]"
                        style={{ borderColor: INK, color: INK }}
                        aria-hidden="true"
                      >
                        <FaArrowRight />
                      </span>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* ===== VIDEOS (placeholder until you add video projects) ===== */}
        {activeTab === "videos" &&
          (VIDEOS.length > 0 ? (
            <>
              <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-x-8 gap-y-14">
                {VIDEOS.map((video, i) => (
                  <VideoCard key={video.id} video={video} index={i} onPlay={setActiveVideo} />
                ))}
              </div>

              {/* <div className="mt-14 text-center">
                <a
                  href="https://www.youtube.com/@YOUR_CHANNEL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border-2 text-sm md:text-base font-medium text-white transition duration-300 hover:scale-105"
                  style={{ backgroundColor: RED, borderColor: RED }}
                >
                  More on YouTube <FaArrowRight />
                </a>
              </div> */}
            </>
          ) : (
            <div
              className="mt-14 md:mt-16 mx-auto max-w-2xl border-2 border-dashed rounded-lg px-6 py-16 text-center"
              style={{ borderColor: INK }}
            >
              <p className="text-5xl md:text-6xl leading-none" style={{ ...scriptFont, color: RED }}>
                Coming soon
              </p>
            </div>
          ))}
      </div>

      {/* ===== CUSTOM CURSOR LABEL ===== */}
      {cursorVisible && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            top: cursorPosition.y,
            left: cursorPosition.x,
            transform: "translate(14px, 14px)",
          }}
        >
          <div className="flex items-center gap-2 bg-[#1A1A1A] text-white text-xs font-medium tracking-wide px-3 py-1.5 rounded-full shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#E30613]" />
            View project
          </div>
        </div>
      )}
      {activeVideo && <VideoModal video={activeVideo} onClose={closeVideo} />}
    </section>
  );
};

export default Projects;