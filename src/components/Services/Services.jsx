import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaMobileScreenButton,
  FaWordpress,
  FaPenRuler,
  FaFilm,
  FaPlus,
  FaArrowRight,
} from "react-icons/fa6";

// ===== PALETTE: same red / ink / off-white as Home, About, Projects =====
const BG = "#F4F2EE";
const INK = "#1A1A1A";
const RED = "#E30613";
const BODY = "#333333";

const scriptFont = { fontFamily: "'Yellowtail', cursive" };

// Content is based on the skills and experience listed on the CV
const SERVICES = [
  {
    icon: FaCode,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web apps with the MERN stack and Next.js, from the database to deployment.",
    points: [
      "Custom web apps with React & Next.js",
      "REST APIs with Node.js & Express",
      "Authentication & role-based access",
      "MongoDB / MySQL database design",
    ],
    tags: ["React", "Next.js", "Node.js", "MongoDB", "MySQL", "TypeScript"],
  },
  {
    icon: FaMobileScreenButton,
    title: "Mobile App Development",
    description:
      "Cross-platform apps for Android and iOS, built to work smoothly with your backend.",
    points: [
      "Cross-platform apps with React Native (Expo)",
      "API & third-party integrations",
      "Reusable, responsive UI with NativeWind",
      "Web + mobile systems sharing one backend",
    ],
    tags: ["React Native", "Expo", "NativeWind", "REST APIs"],
  },
  {
    icon: FaWordpress,
    title: "WordPress & Business Websites",
    description:
      "Fast, responsive WordPress sites that match your brand and are easy for you to manage.",
    points: [
      "Custom WordPress design & setup",
      "Page layouts, navigation & UI tweaks",
      "Mobile-first, responsive on every device",
      "Client feedback rounds through final delivery",
    ],
    tags: ["WordPress", "HTML5", "CSS3", "Responsive"],
  },
  {
    icon: FaPenRuler,
    title: "SOCIAL MEDIA STRATEGY & MANAGEMENT",
    description:
      "I help businesses build a consistent online presence through thoughtful content planning, engaging copy, and on-brand visuals designed to connect with their audience.",
    points: [
      "Social media content planning & calendars",
      "Captions, hooks & calls to action (CTAs)",
      "Brand consistency & visual direction",
      "Post scheduling & content organization",

    ],
    tags: ["Canva", "Adobe Photoshop", "META Business Suite", "Hootsuite"],
  },
  {
    icon: FaFilm,
    title: "CONTENT CREATION & VIDEO EDITING",
    description:
      "I create eye-catching visuals and engaging video content that help brands communicate their message, showcase their products, and connect with audiences across social platforms.",
    points: [
      "Short-form videos for TikTok, Instagram Reels & YouTube Shorts",
      "Promotional videos & product showcases",
      "Engaging hooks, subtitles & storytelling",
      "Social media graphics, carousels & banners",
      "YouTube thumbnails & long-form video editing",
    ],
    tags: ["CapCut", "DaVinci Resolve"],
  },
];


const PROCESS = [
  {
    title: "Discover",
    text: "I learn about your brand, goals, and target audience to build a clear content direction.",
  },
  {
    title: "Plan & Create",
    text: "I develop content ideas, engaging hooks, captions, and visuals that align with your brand.",
  },
  {
    title: "Publish",
    text: "I prepare and organize content for your chosen platforms, keeping your brand consistent and on schedule.",
  },
  {
    title: "Optimize",
    text: "I review performance, identify opportunities for improvement, and refine content to better engage your audience.",
  },
];


const SubHeading = ({ children }) => (
  <div className="mb-8">
    <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight" style={{ color: INK }}>
      {children}
    </h3>
    <span className="block w-8 h-[3px] mt-2" style={{ backgroundColor: RED }} />
  </div>
);

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full font-poppins text-left scroll-mt-20 overflow-hidden"
      style={{
        backgroundColor: BG,
        // faint graph-paper texture, same as the other sections
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
              <span style={{ color: RED }}>Services</span>
            </h2>
            <span className="h-[3px] flex-1" style={{ backgroundColor: INK }} />
          </div>
          <p
            className="mt-4 text-[11px] md:text-xs uppercase font-medium tracking-[0.3em]"
            style={{ color: BODY }}
          >
            How I can help you
          </p>
          <p
            className="mt-6 mx-auto max-w-2xl text-sm md:text-base leading-relaxed"
            style={{ color: BODY }}
          >
            I combine{" "}
            <span
              className="font-semibold underline decoration-2 underline-offset-4"
              style={{ color: INK, textDecorationColor: RED }}
            >
              IT skills and creative design
            </span>{" "}
            to turn business ideas into digital products, create engaging videos, and
            manage social media presence to help brands grow online.
          </p>
        </motion.div>

        {/* ===== SERVICE CARDS ===== */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map(({ icon: Icon, title, description, points, tags }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative flex flex-col h-full bg-white p-7 md:p-8 overflow-hidden shadow-[0_14px_34px_rgba(26,26,26,0.12)] hover:shadow-[0_22px_44px_rgba(26,26,26,0.2)] transition-shadow duration-300"
            >
              {/* top accent bar grows on hover */}
              <span
                className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ backgroundColor: RED }}
                aria-hidden="true"
              />

              <div className="flex items-start justify-between">
                <span className="text-5xl font-extrabold leading-none" style={{ color: RED }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-2xl transition duration-300 group-hover:bg-[#1A1A1A] group-hover:text-[#F4F2EE]"
                  style={{ borderColor: INK, color: INK }}
                  aria-hidden="true"
                >
                  <Icon />
                </span>
              </div>

              <h3
                className="mt-6 text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-tight"
                style={{ color: INK }}
              >
                {title}
              </h3>
              <span className="block w-8 h-[3px] mt-2" style={{ backgroundColor: RED }} />

              <p className="mt-4 text-sm leading-relaxed" style={{ color: BODY }}>
                {description}
              </p>

              <ul className="mt-5 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm" style={{ color: BODY }}>
                    <FaPlus className="shrink-0 text-xs mt-1" style={{ color: RED }} />
                    {point}
                  </li>
                ))}
              </ul>

              {/* tool tags pinned to the bottom */}
              <div className="mt-auto pt-7 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.18em] font-medium border rounded-full px-3 py-1"
                    style={{ borderColor: "rgba(26,26,26,0.3)", color: INK }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}

          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex flex-col justify-between h-full p-7 md:p-8 overflow-hidden"
            style={{ backgroundColor: INK }}
          >
            <div>
              <p className="text-[11px] uppercase font-medium tracking-[0.3em] text-white/70">
                Open for work
              </p>
              <p
                className="mt-6 text-5xl md:text-6xl leading-[1.1]"
                style={{ ...scriptFont, color: RED }}
              >
                Let&apos;s work together
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white/80">
                Have a project in mind? Tell me what you need and I&apos;ll get back to you with a clear
                plan. Available for freelance and remote work.
              </p>
            </div>

            <Link
              to="/contactme"
              className="mt-8 inline-flex w-fit items-center gap-2 text-white font-medium px-7 py-3 rounded-full shadow-lg hover:scale-105 hover:brightness-95 transition duration-300"
              style={{ backgroundColor: RED }}
            >
              Hire Me <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>

        {/* ===== HOW I WORK ===== */}
        <div className="mt-20 md:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SubHeading>How I work</SubHeading>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map(({ title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t-2 pt-5"
                style={{ borderColor: INK }}
              >
                <p className="text-sm font-semibold tracking-[0.2em]" style={{ color: RED }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h4
                  className="mt-2 text-lg font-extrabold uppercase tracking-tight"
                  style={{ color: INK }}
                >
                  {title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: BODY }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;