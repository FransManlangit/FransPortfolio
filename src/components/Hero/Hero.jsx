// import React from "react";
// import { motion } from "framer-motion";
// import { FaLink } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import RotatingText from "../TextAnimations/RotatingText";


// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative w-full min-h-screen bg-transparent overflow-hidden font-poppins flex items-center justify-center px-6 md:px-16 lg:px-24 pt-28 pb-20"
//     >
//       {/* BIG BACKGROUND TITLE (DARK) */}
//       <h1 className="absolute top-16 left-1/2 -translate-x-1/2 text-[100px] sm:text-[140px] md:text-[200px] lg:text-[260px] font-extrabold tracking-tight text-[#E30613] leading-none select-none z-0">
//         Frans
//       </h1>

//       {/* MAGAZINE SMALL TEXTS */}
//       <div className="absolute top-32 left-10 text-[10px] sm:text-xs text-[#1A1A1A] font-semibold uppercase z-10">
//         <p>Portfolio 2026</p>
//         <p>Taguig, PH</p>
//         <p>Full-Stack Developer</p>
//       </div>

//       <div className="absolute top-32 right-10 text-[10px] sm:text-xs text-[#1A1A1A] font-semibold uppercase text-right z-10">
//         <p>Available for work</p>
//         <p>React · Next.js · React Native</p>
//         <p>Open to remote</p>
//       </div>

//       <div className="absolute top-52 left-10 text-[10px] sm:text-xs text-[#1A1A1A] font-semibold uppercase z-10">
//         <p>Vide Editor</p>
//         <p>Content Creator</p>
//       </div>

//       <div className="absolute top-52 right-10 text-[10px] sm:text-xs text-[#1A1A1A] font-semibold uppercase text-right z-10">
//         <p>Photography</p>
//         <p>Fashion</p>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 z-20">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="w-full md:w-1/2 md:self-start mt-24 md:mt-36 lg:mt-52 flex flex-col gap-2 text-gray-900"
//         >
//           <p className="text-xl md:text-2xl text-left text-[#1A1A1A] font-bold">
//             Hi, I am a
//           </p>

//           <div className="leading-tight">
//             <RotatingText
//               texts={["Full-Stack Developer", "Mobile Developer", "React Engineer",]}
//               mainClassName="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
//               style={{ color: "#03AED2" }}
//             />
//           </div>                                                                                                  


//           {/* <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
//             Mobile Developer <br /> Web Developer
//           </h2> */}



//           <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
//             {/* I’m a full-stack developer from the Philippines who builds modern,
//             scalable, and user-friendly applications. I focus on clean design
//             and smooth user experience. */}
//           </p>

//           {/* BUTTONS */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-4">
//             <Link
//               to="/contact"
//               className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 hover:scale-105 transition duration-300 shadow-lg text-center"
//             >
//               Hire Me
//             </Link>

//             <a
//               href="https://www.linkedin.com/in/frans-manlangit/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition font-medium"
//             >
//               <FaLink />
//               LinkedIn
//             </a>
//           </div>
//         </motion.div>

//         {/* RIGHT IMAGE + CENTER TEXT */}
//         <div className="relative w-full md:w-1/2 flex justify-center items-center">

//           {/* IMAGE */}
//           <motion.img
//             initial={{ opacity: 0, y: -80 }}
//             animate={{ opacity: 1, y: 0, rotate: [0, 2.5, 0, -2.5, 0] }}
//             transition={{
//               opacity: { duration: 0.7 },
//               y: { duration: 0.9, ease: "easeOut" },
//               rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
//             }}
//             style={{ transformOrigin: "50% 0%" }}
//             src="/images/camera.png"
//             alt="Frans"
//             draggable="false"
//             className="w-[65%] md:w-[85%] max-w-sm lg:max-w-md md:mr-0 lg:-mr-1 z-10 drop-shadow-2xl"
//           />
//           {/* CENTER TEXT BLOCK (FROM DUSK TILL DAWN) */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-20"
//           >
//             {/* <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="text-[#E30613] font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl leading-none drop-shadow-lg"
//             >
//               From <br />
//               Dusk Till <br />
//               Dawn
//             </motion.h2> */}

//             {/* <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 1.1 }}
//               className="text-red-600 font-bold text-xl mt-2"
//             >
//               ®
//             </motion.p> */}
//           </motion.div>
//         </div>
//       </div>

//       {/* BOTTOM LEFT BIG NUMBER */}
//       <div className="absolute bottom-10 left-10 text-red-600 font-extrabold text-5xl sm:text-6xl md:text-7xl z-10">
//         10+ projects
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaLink, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import RotatingText from "../TextAnimations/RotatingText";

/*
  SETUP
  1. index.html <head>: replace the Mrs Saint Delafield link with this one
     <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet" />
  2. App.css / index.css: DELETE the default Vite "#root { max-width; padding; text-align:center }" rules.
  3. Images: /public/images/IcyFrans.png, /public/images/camera.png
     (optional) /public/images/leaf-shadow.png
*/

const RED = "#E30613";
const INK = "#1A1A1A";
const scriptFont = { fontFamily: "'Yellowtail', cursive" };

// Badge photo crop: "50% 0%" = top of photo, "50% 100%" = bottom.
// Raise the second number to show more of the body, lower it to show more headroom.
const PHOTO_POSITION = "60% 50%";

// All desktop sizes use "cqw" (1% of the hero stage width), so everything
// scales together like the mockup instead of drifting with the window.
const labelStyle = { fontSize: "clamp(9px, 0.78cqw, 13px)" };
const labelClass =
  "tracking-[0.22em] uppercase text-[#1A1A1A] font-medium leading-relaxed text-left";

const Dash = ({ right = false }) => (
  <span
    className={`block w-6 h-[2px] mt-3 ${right ? "ml-auto" : ""}`}
    style={{ backgroundColor: RED }}
  />
);

const css = `
.hf-stage{
  position:relative; container-type:inline-size; width:100%;
  min-height:100vh; display:flex; flex-direction:column; align-items:center;
  padding:7rem 1.5rem 6rem; margin:0 auto; text-align:left;
}
@media (min-width:768px){
  .hf-stage{
    display:block; padding:0; min-height:0;
    aspect-ratio:3/2;
    max-width:calc(100vh * 1.5);
    max-width:calc(100svh * 1.5);
  }
  .hf-abs{position:absolute}
  .hf-title{left:19.5%; top:15.5%}
  .hf-labels-l{left:5.5%; top:22%}
  .hf-labels-r{right:4%; top:66%}
  .hf-left{left:14%; top:48.5%}
  .hf-badge{left:60.5%; top:0; width:22cqw}
  .hf-camera{right:-2.5%; top:-2%; height:62%; width:auto}
  .hf-stats{left:14%; bottom:11%}
  .hf-brush{width:min(30%, calc(100vh * 0.435)); width:min(30%, calc(100svh * 0.435))}
}
`;

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden font-poppins bg-[#F4F2EE] text-left"
    >
      <style>{css}</style>

      {/* SVG FILTER: rough, printed-ink edges */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <filter id="rough-edge" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
          </filter>
        </defs>
      </svg>

      {/* BACKGROUND: soft window-light shadows */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-24 left-[28%] w-[18%] h-[150%] -skew-x-[22deg] bg-gradient-to-b from-black/[0.06] to-transparent blur-2xl" />
        <div className="absolute -top-24 left-[52%] w-[10%] h-[150%] -skew-x-[22deg] bg-gradient-to-b from-black/[0.05] to-transparent blur-2xl" />
        <div className="absolute -top-24 left-[70%] w-[14%] h-[150%] -skew-x-[22deg] bg-gradient-to-b from-black/[0.04] to-transparent blur-2xl" />
        <img
          src="/images/leaf-shadow.png"
          alt=""
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="hidden md:block absolute bottom-0 left-0 w-[24%] opacity-40 mix-blend-multiply"
        />
      </div>

      {/* BOTTOM-RIGHT RED BRUSH STROKE */}
      <svg
        viewBox="0 0 500 260"
        className="hf-brush absolute bottom-0 right-0 w-[60%] pointer-events-none z-10"
        style={{ filter: "url(#rough-edge)" }}
        aria-hidden="true"
      >
        <path d="M500 0 L500 80 C 330 120 200 190 120 260 L 20 260 C 120 170 300 60 500 0 Z" fill={RED} />
        <path d="M500 95 L500 150 C 400 175 320 215 270 260 L 190 260 C 270 190 380 125 500 95 Z" fill={RED} opacity="0.85" />
      </svg>

      {/* ============ STAGE ============ */}
      <div className="hf-stage">
        {/* BIG TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hf-abs hf-title relative z-10 select-none"
        >
          <h1
            className="font-extrabold leading-none tracking-tight -rotate-1"
            style={{
              color: RED,
              fontSize: "clamp(96px, 16.5cqw, 320px)",
              filter: "url(#rough-edge)",
            }}
          >
            Frans
          </h1>
          <svg
            viewBox="0 0 600 40"
            className="absolute left-[28%] w-[44%] pointer-events-none overflow-visible"
            style={{ bottom: "1.2cqw" }}
            fill="none"
            stroke={RED}
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M5 20 C 120 8 300 4 595 12" strokeWidth="14" />
            <path d="M110 36 C 240 28 360 26 500 30" strokeWidth="9" />
          </svg>
        </motion.div>

        {/* LEFT LABELS (desktop only) */}
        <div className="hf-abs hf-labels-l hidden md:block z-30">
          <div className={labelClass} style={labelStyle}>
            <p>Portfolio 2026</p>
            <p>Taguig, PH</p>
            <p>Full-Stack Developer</p>
          </div>
          <Dash />
          <div className={`${labelClass} mt-8`} style={labelStyle}>
            <p>Video Editor</p>
            <p>Content Creator</p>
          </div>
          <Dash />
        </div>

        {/* RIGHT LABELS (desktop only) */}
        <div className="hf-abs hf-labels-r hidden md:block z-30 text-right">
          <div className={`${labelClass} !text-right`} style={labelStyle}>
            <p>Available for work</p>
            <p>React · Next.js · React Native</p>
            <p>Open to remote</p>
          </div>
          <Dash right />
          {/* <div className={`${labelClass} !text-right mt-6`} style={labelStyle}>
            <p>Photography</p>
            <p>Fashion</p>
          </div> */}
          {/* <Dash right /> */}
        </div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hf-abs hf-left relative z-20 w-full md:w-auto mt-10 md:mt-0 flex flex-col gap-1"
        >
          <p
            className="font-medium leading-tight"
            style={{ color: INK, fontSize: "clamp(18px, 2.3cqw, 40px)" }}
          >
            Hi, I am a
          </p>

          <div style={{ minHeight: "clamp(64px, 7cqw, 120px)" }}>
            <RotatingText
              texts={["Full-Stack Developer", "Mobile Developer", "React Engineer", "Social Media Manager"]}
              splitBy="words"
              mainClassName="leading-[1.4] py-2 pr-6"
              style={{
                ...scriptFont,
                color: RED,
                fontSize: "clamp(36px, 4.4cqw, 76px)",
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 text-white px-7 py-3 rounded-full shadow-lg hover:scale-105 hover:brightness-90 transition duration-300"
              style={{ backgroundColor: RED }}
            >
              Hire Me <FaArrowRight className="text-sm" />
            </Link>

            <a
              href="https://www.linkedin.com/in/frans-manlangit/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-medium text-[#1A1A1A] hover:text-[#E30613] transition"
            >
              <FaLink />
              <span className="underline underline-offset-4">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* ID BADGE ON LANYARD */}
        <div className="hf-abs hf-badge relative z-20 w-[240px] mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={
              reduceMotion
                ? { opacity: 1, y: 0, rotate: 3 }
                : { opacity: 1, y: 0, rotate: [3, 5, 3, 1, 3] }
            }
            transition={{
              opacity: { duration: 0.7 },
              y: { duration: 0.9, ease: "easeOut" },
              rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
            style={{ transformOrigin: "50% 0%" }}
            className="flex flex-col items-center drop-shadow-2xl"
          >
            {/* strap */}
            <div
              className="bg-[#141414] rounded-b-sm"
              style={{
                width: "clamp(26px, 4cqw, 64px)",
                height: "clamp(120px, 15.5cqw, 320px)",
              }}
            />

            {/* metal clip */}
            <svg
              viewBox="0 0 60 90"
              className="relative z-10"
              style={{
                width: "clamp(30px, 4.6cqw, 72px)",
                marginTop: "-0.3cqw",
                marginBottom: "-0.9cqw",
              }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F2F2F2" />
                  <stop offset="0.5" stopColor="#9A9A9A" />
                  <stop offset="1" stopColor="#E6E6E6" />
                </linearGradient>
              </defs>
              <rect x="8" y="2" width="44" height="28" rx="12" fill="none" stroke="url(#metal)" strokeWidth="6" />
              <path d="M30 28 L30 70 Q30 84 40 84" fill="none" stroke="url(#metal)" strokeWidth="7" strokeLinecap="round" />
            </svg>

            {/* badge holder */}
            <div className="relative w-full">
              <div className="mx-auto w-[28%] h-3 bg-[#111] rounded-t-lg" />
              <div className="bg-[#111] rounded-2xl p-[3.5%] shadow-xl">
                <div className="bg-[#E9E9EC] rounded-md overflow-hidden aspect-[3/4.1]">
                  <img
                    src="/images/IcyFrans.png"
                    alt="Frans Manlangit, full-stack and mobile developer"
                    draggable="false"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: PHOTO_POSITION }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CAMERA (desktop only, strap runs off the top, body cropped at the right) */}
        {/* <motion.img
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{ rotate: 6 }}
          src="/images/camera.png"
          alt=""
          draggable="false"
          className="hf-abs hf-camera hidden md:block z-10 drop-shadow-2xl"
        /> */}

        {/* BOTTOM-LEFT STATS */}
        <div className="hf-abs hf-stats relative z-20 w-full md:w-auto mt-12 md:mt-0">
          <p
            className="font-extrabold leading-none"
            style={{ color: RED, fontSize: "clamp(44px, 5cqw, 92px)" }}
          >
            10+ projects
          </p>
          <div className="h-[2px] w-full mt-2" style={{ backgroundColor: RED }} />
          <p
            className="mt-3 tracking-[0.3em] uppercase text-[#1A1A1A] font-medium"
            style={labelStyle}
          >
            Web &nbsp;/&nbsp; Mobile &nbsp;/&nbsp; Design &nbsp;/&nbsp; Content
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;


