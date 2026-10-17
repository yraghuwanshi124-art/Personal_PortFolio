
import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowDown,
  ArrowRight,
  Sparkles,
  Code2,
  ExternalLink,
} from "lucide-react";
import profile from "../assets/assets/profile.jpeg";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: reduceMotion ? 0 : 0.7,
    ease: "easeOut",
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-[#080c0a] px-5 pb-16 pt-32 text-white sm:px-8 lg:pt-28"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={
            reduceMotion
              ? {}
              : { x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.12, 1] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]"
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : { x: [0, -30, 0], y: [0, 30, 0] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]"
        />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080c0a] to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-10">
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.15 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/[0.07] px-4 py-2"
          >
            <motion.span
              animate={reduceMotion ? {} : { opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]"
            />

            <span className="text-xs font-medium tracking-wide text-green-300 sm:text-sm">
              Available for opportunities
            </span>

            <Sparkles size={14} className="text-green-400" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.25 }}
            className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-400"
          >
            Hello, world! I'm
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.35 }}
            className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Yash
            <br />
            <span className="bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              Raghuwanshi.
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.45 }}
            className="mt-6 flex min-h-10 flex-wrap items-center gap-x-3 text-xl font-semibold sm:text-2xl md:text-3xl"
          >
            <Code2 size={24} className="shrink-0 text-green-400" />

            <span className="text-gray-300">I build</span>

            <span className="text-green-400">
              <TypeAnimation
                sequence={[
                  "React Applications",
                  1800,
                  "Responsive Websites",
                  1800,
                  "Modern Web Experiences",
                  1800,
                  "Useful Digital Products",
                  1800,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={60}
                repeat={Infinity}
                cursor
              />
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.55 }}
            className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg"
          >
            I'm a Computer Science student focused on building clean,
            responsive web applications with React, JavaScript and modern
            web technologies. Always learning, building and improving.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.65 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <motion.a
              href="#project"
              whileHover={reduceMotion ? {} : { y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-xl bg-green-400 px-6 py-3.5 font-bold text-[#071009] shadow-[0_0_25px_rgba(74,222,128,0.12)] transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(74,222,128,0.3)]"
            >
              Explore My Work
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="#contacts"
              whileHover={reduceMotion ? {} : { y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition-colors duration-300 hover:border-green-400/50 hover:bg-green-400/[0.07] hover:text-green-300"
            >
              Let's Connect
              <ExternalLink size={17} />
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.75 }}
            className="mt-9 flex items-center gap-4"
          >
            <span className="text-xs uppercase tracking-[0.18em] text-gray-500">
              Find me on
            </span>

            <motion.a
              href="https://github.com/yraghuwanshi124-art"
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? {} : { y: -4, scale: 1.08 }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-gray-300 transition-colors hover:border-green-400/40 hover:text-green-400"
              aria-label="GitHub profile"
            >
              <span className="text-sm font-bold">GH</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? {} : { y: -4, scale: 1.08 }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-gray-300 transition-colors hover:border-green-400/40 hover:text-green-400"
              aria-label="LinkedIn profile"
            >
              <span className="text-sm font-bold">in</span>
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT PROFILE VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: 0.25,
            ease: "easeOut",
          }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative flex w-full max-w-[390px] items-center justify-center sm:max-w-[440px]">
            {/* Outer animated ring */}
            <motion.div
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute aspect-square w-[94%] rounded-full border border-dashed border-green-400/20"
            />

            {/* Glow */}
            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : { opacity: [0.3, 0.65, 0.3], scale: [0.95, 1.05, 0.95] }
              }
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-[72%] w-[72%] rounded-full bg-green-400/20 blur-[65px]"
            />

            {/* Profile frame */}
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square w-[82%] rounded-full p-[3px]"
              style={{
                background:
                  "linear-gradient(135deg, #86efac, #14532d 40%, #4ade80 70%, #064e3b)",
              }}
            >
              <div className="h-full w-full overflow-hidden rounded-full border-[5px] border-[#080c0a] bg-[#101713]">
                <img
                  src={profile}
                  alt="Yash Raghuwanshi - Software Developer"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
              </div>
            </motion.div>

            {/* Floating code badge */}
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -8, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-[18%] flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111915]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-3"
            >
              <div className="rounded-lg bg-green-400/10 p-2 text-green-400">
                <Code2 size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Clean Code</p>
                <p className="text-xs text-gray-400">Built with care</p>
              </div>
            </motion.div>

            {/* Floating tech badge */}
            <motion.div
              animate={reduceMotion ? {} : { y: [0, 9, 0], rotate: [0, -2, 0] }}
              transition={{
                duration: 4.5,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[17%] right-0 flex items-center gap-3 rounded-2xl border border-green-400/20 bg-[#111915]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-400/10 text-sm font-black text-green-400">
                JS
              </div>
              <div>
                <p className="text-sm font-bold text-white">Web Developer</p>
                <p className="text-xs text-gray-400">Always learning</p>
              </div>
            </motion.div>

            {/* Small decorative dots */}
            <motion.span
              animate={reduceMotion ? {} : { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute right-[13%] top-[12%] h-3 w-3 rounded-full bg-green-300 shadow-[0_0_15px_rgba(134,239,172,0.8)]"
            />

            <motion.span
              animate={reduceMotion ? {} : { scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
              className="absolute bottom-[12%] left-[13%] h-2.5 w-2.5 rounded-full bg-emerald-400"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: reduceMotion ? 0 : [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.6 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition-colors hover:text-green-400 md:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll to explore</span>
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
};

export default Hero;
