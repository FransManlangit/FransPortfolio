import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaFigma,
  FaCamera,
  FaDumbbell,
  FaPlus,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaPenRuler,
  FaClapperboard,
} from "react-icons/fa6";

// ===== PALETTE: same red / ink / off-white as the home page =====
const BG = "#F4F2EE";
const INK = "#1A1A1A";
const RED = "#E30613";
const BODY = "#333333";

const scriptFont = { fontFamily: "'Yellowtail', cursive" };

// Same crop knob as the hero badge: "50% 0%" = top of photo, "50% 100%" = bottom
const PHOTO_POSITION = "50% 25%";

const THINGS_I_LOVE = [
  { icon: FaReact, label: "Building apps" },
  { icon: FaClapperboard, label: "Content Creation" },
  { icon: FaPenRuler, label: "Creative Design" },
  { icon: FaCamera, label: "Photo & video Editing" },
  { icon: FaDumbbell, label: "Training" },
];

const WHAT_I_CAN_DO = [
  "Web Development",
  "Mobile Apps (React Native)",
  "Backend & REST APIs",
  "UI / UX & Website Design",
  "Next.js & React",
  "WordPress Websites",
  "Video Editing & Content Creation",
  "Social Media Engagement",
  "Content Planning & Scheduling",
  "Social Media Management",
];

const SOCIALS = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/FransManlangit" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/frans-manlangit/" },
  { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/fransmanlangit25" }, // TODO: add your link
  // { icon: FaInstagram, label: "Instagram", href: "#" }, // TODO: add your link
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

const SubHeading = ({ children }) => (
  <div className="mb-5">
    <h3
      className="text-xl md:text-2xl font-extrabold uppercase tracking-tight"
      style={{ color: INK }}
    >
      {children}
    </h3>
    <span className="block w-8 h-[3px] mt-2" style={{ backgroundColor: RED }} />
  </div>
);

const Underlined = ({ children }) => (
  <span
    className="font-semibold underline decoration-2 underline-offset-4"
    style={{ color: INK, textDecorationColor: RED }}
  >
    {children}
  </span>
);

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full font-poppins text-left scroll-mt-20 overflow-hidden"
      style={{
        backgroundColor: BG,
        // faint graph-paper texture like the reference
        backgroundImage:
          "linear-gradient(rgba(26,26,26,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.045) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-20 md:py-28">
        {/* ===== HEADING ===== */}
        <motion.div {...fadeUp} className="text-center">
          <div className="flex items-center gap-4 md:gap-8">
            <span className="h-[3px] flex-1" style={{ backgroundColor: INK }} />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-none">
              <span style={{ color: INK }}>About </span>
              <span style={{ color: RED }}>Me</span>
            </h2>
            <span className="h-[3px] flex-1" style={{ backgroundColor: INK }} />
          </div>
          <p
            className="mt-4 text-[11px] md:text-xs uppercase font-medium tracking-[0.3em]"
            style={{ color: BODY }}
          >
            Allow me to introduce myself
          </p>
        </motion.div>

        {/* ===== PHOTO + BIO ===== */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-start">
          {/* POLAROID */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 relative mx-auto w-full max-w-[320px] md:max-w-none pt-14"
          >
            {/* handwritten note + arrow */}
            <div
              className="absolute top-0 left-2 md:left-6 flex items-end gap-1 -rotate-6 select-none"
              aria-hidden="true"
            >
              <span className="text-3xl md:text-4xl leading-none" style={{ ...scriptFont, color: RED }}>
                That&apos;s me
              </span>
              <svg
                viewBox="0 0 120 60"
                className="w-16 md:w-20 overflow-visible"
                fill="none"
                stroke={RED}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12 C 40 -6, 92 6, 108 46" />
                <path d="M96 38 L108 48 L120 36" />
              </svg>
            </div>

            <div className="relative mx-auto w-[85%] md:w-[88%] rotate-[-5deg] transition-transform duration-500 hover:rotate-0">
              {/* tape */}
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[4deg] w-24 h-6 z-10"
                style={{ backgroundColor: RED, opacity: 0.75 }}
                aria-hidden="true"
              />
              <div className="bg-white p-3 pb-12 shadow-[0_18px_40px_rgba(26,26,26,0.25)]">
                <div className="aspect-[4/5] overflow-hidden bg-[#E9E7E2]">
                  <img
                    src="/images/Gym.JPEG"
                    alt="Frans Manlangit"
                    draggable="false"
                    className="w-full h-full object-cover mix-blend-multiply"
                    style={{ objectPosition: PHOTO_POSITION }}
                  />
                </div>
                <p
                  className="absolute bottom-3 left-0 w-full text-center text-2xl leading-none"
                  style={{ ...scriptFont, color: INK }}
                >
                  Frans Manlangit
                </p>
              </div>
            </div>
          </motion.div>

          {/* BIO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 flex flex-col gap-5 text-sm md:text-base leading-relaxed"
            style={{ color: BODY }}
          >
            <p>
              I&apos;m an IT graduate from Taguig who enjoys turning ideas into{" "}
              <Underlined>engaging digital experiences</Underlined>. From web and mobile
              development to video editing and content creation, I love combining
              technology with creativity.
            </p>
            <p>
              My background spans <Underlined>full-stack development</Underlined> with
              React, Next.js, React Native, and Node.js, alongside creating visuals
              and content that are clean, purposeful, and user-friendly.
            </p>
            <p>
              Beyond the screen, I enjoy shooting photos, exploring creative ideas,
              and pushing myself to improve. When I&apos;m not creating, you&apos;ll
              probably find me training at the gym.
            </p>
            {/* CTA + SOCIALS */}
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-6">
              <a
                href="/frans-resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 text-white font-medium px-7 py-3 rounded-full shadow-lg hover:scale-105 hover:brightness-95 transition duration-300"
                style={{ backgroundColor: RED }}
              >
                Download Resume <FaDownload className="text-sm" />
              </a>

              <div className="flex gap-3">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.12 }}
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-base transition-colors duration-300 hover:text-white hover:bg-[#1A1A1A]"
                    style={{ borderColor: INK, color: INK }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== THINGS I LOVE + WHAT I CAN DO ===== */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <motion.div {...fadeUp} className="md:col-span-5">
            <SubHeading>Things I love</SubHeading>
            <div className="flex flex-wrap gap-6">
              {THINGS_I_LOVE.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 w-20">
                  <span
                    className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-2xl transition duration-300 hover:bg-[#1A1A1A] hover:text-[#F4F2EE] hover:-translate-y-1"
                    style={{ borderColor: INK, color: INK }}
                  >
                    <Icon />
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.18em] font-medium text-center"
                    style={{ color: BODY }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="md:col-span-7">
            <SubHeading>Look what I can do</SubHeading>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {WHAT_I_CAN_DO.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 text-sm md:text-base"
                  style={{ color: BODY }}
                >
                  <FaPlus className="shrink-0 text-xs" style={{ color: RED }} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;