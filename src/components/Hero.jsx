import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react";

import profile from "../assets/assets/profile3.jpeg";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: reduceMotion ? 0 : 0.65,
    ease: "easeOut",
  };

  return (
    <section
      id="home"
      className="theme-bg relative isolate flex min-h-screen scroll-mt-20 items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:pt-24"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 24, 0],
                  y: [0, -18, 0],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-80 w-80 rounded-full blur-[110px]"
          style={{ backgroundColor: "var(--accent-soft)" }}
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-10 h-96 w-96 rounded-full blur-[120px]"
          style={{ backgroundColor: "var(--accent-soft)" }}
        />

        <div
          className="absolute inset-x-0 bottom-0 h-36"
          style={{
            background:
              "linear-gradient(to top, var(--bg-primary), transparent)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        {/* Introduction */}
        <div className="order-2 lg:order-1">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.1 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border px-4 py-2"
            style={{
              borderColor: "var(--accent-border)",
              backgroundColor: "var(--accent-soft)",
            }}
          >
            <motion.span
              animate={reduceMotion ? {} : { opacity: [1, 0.45, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: "var(--accent)",
                boxShadow: "0 0 12px var(--accent-soft)",
              }}
            />

            <span
              className="text-xs font-medium tracking-wide sm:text-sm"
              style={{ color: "var(--accent)" }}
            >
              Open to learning & opportunities
            </span>

            <Sparkles size={14} style={{ color: "var(--accent)" }} />
          </motion.div>

          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.18 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.25 }}
            className="text-5xl font-black leading-[1.08] tracking-[-0.045em] sm:text-6xl md:text-7xl xl:text-[5.4rem]"
          >
            Yash
            <br />
            <span
              style={{
                color: "var(--accent)",
                textShadow: "0 0 38px var(--accent-soft)",
              }}
            >
              Raghuwanshi.
            </span>
          </motion.h1>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.34 }}
            className="mt-7 flex min-h-14 flex-wrap items-center gap-x-3 gap-y-2 text-xl font-semibold sm:text-2xl lg:text-[1.7rem]"
          >
            <Code2
              size={25}
              className="shrink-0"
              style={{ color: "var(--accent)" }}
            />

            <span style={{ color: "var(--text-secondary)" }}>
              I build
            </span>

            <span style={{ color: "var(--accent)" }}>
              <TypeAnimation
                sequence={[
                  "React Applications",
                  1800,
                  "Responsive Websites",
                  1800,
                  "Interactive Web Experiences",
                  1800,
                  "Useful Digital Products",
                  1800,
                ]}
                wrapper="span"
                speed={45}
                deletionSpeed={55}
                repeat={Infinity}
                cursor
              />
            </span>
          </motion.div>

          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.42 }}
            className="mt-6 max-w-xl text-base leading-8 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            I'm a Computer Science student focused on building clean,
            responsive web applications using React, JavaScript, and
            modern web technologies. I enjoy turning ideas into practical
            projects while continuously improving my development skills.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-3.5"
          >
            <motion.a
              href="#project"
              whileHover={reduceMotion ? {} : { y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 rounded-xl px-5 py-3.5 text-sm font-bold text-white shadow-lg transition-shadow duration-300 hover:shadow-xl sm:px-6"
              style={{
                backgroundColor: "var(--accent)",
                boxShadow: "0 8px 28px var(--accent-soft)",
              }}
            >
              Explore My Work
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="#contacts"
              whileHover={reduceMotion ? {} : { y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 rounded-xl border px-5 py-3.5 text-sm font-semibold transition-colors duration-300 sm:px-6"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--bg-card)",
                color: "var(--text-primary)",
              }}
            >
              Let's Connect
              <ArrowUpRight
                size={17}
                style={{ color: "var(--accent)" }}
              />
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.58 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <span
              className="mr-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--text-muted)" }}
            >
              Find me on
            </span>

            <motion.a
              href="https://github.com/yraghuwanshi124-art"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? {} : { y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm transition-colors"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-secondary)",
              }}
              aria-label="Visit GitHub profile"
            >
              <span className="text-sm font-bold">GH</span>
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? {} : { y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm transition-colors"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-secondary)",
              }}
              aria-label="Visit LinkedIn profile"
            >
              <span className="text-sm font-bold">in</span>
              LinkedIn
            </motion.a>
          </motion.div>
        </div>

        {/* Profile */}
        <motion.div
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.96, x: 22 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: 0.18,
            ease: "easeOut",
          }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative flex w-full max-w-[410px] items-center justify-center sm:max-w-[455px]">
            {/* Subtle orbit */}
            <motion.div
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{
                duration: 42,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute aspect-square w-[94%] rounded-full border border-dashed"
              style={{ borderColor: "var(--accent-border)" }}
            />

            <div
              className="absolute h-[70%] w-[70%] rounded-full blur-[70px]"
              style={{ backgroundColor: "var(--accent-soft)" }}
            />

            {/* Image frame */}
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-square w-[80%] rounded-full p-[3px]"
              style={{
                background:
                  "linear-gradient(145deg, var(--accent), var(--border-color), var(--accent))",
                boxShadow: "0 15px 70px var(--accent-soft)",
              }}
            >
              <div
                className="h-full w-full overflow-hidden rounded-full border-[5px]"
                style={{
                  borderColor: "var(--bg-primary)",
                  backgroundColor: "var(--bg-card)",
                }}
              >
                <img
                  src={profile}
                  alt="Yash Raghuwanshi"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
              </div>
            </motion.div>

            {/* Floating information card */}
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -5, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-[18%] flex items-center gap-3 rounded-2xl border px-3.5 py-3 shadow-xl backdrop-blur-xl sm:-left-2 sm:px-4"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              <div
                className="rounded-xl p-2.5"
                style={{
                  backgroundColor: "var(--accent-soft)",
                  color: "var(--accent)",
                }}
              >
                <Code2 size={19} />
              </div>

              <div>
                <p
                  className="text-sm font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Clean Code
                </p>
                <p
                  className="mt-0.5 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Built with care
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : { y: [0, 5, 0] }
              }
              transition={{
                duration: 5,
                delay: 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[16%] right-0 flex items-center gap-3 rounded-2xl border px-3.5 py-3 shadow-xl backdrop-blur-xl sm:-right-2 sm:px-4"
              style={{
                borderColor: "var(--accent-border)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl text-xs font-black"
                style={{
                  backgroundColor: "var(--accent-soft)",
                  color: "var(--accent)",
                }}
              >
                JS
              </div>

              <div>
                <p
                  className="text-sm font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Web Developer
                </p>
                <p
                  className="mt-0.5 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Always learning
                </p>
              </div>
            </motion.div>

            <span
              className="absolute right-[12%] top-[12%] h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: "var(--accent)",
                boxShadow: "0 0 18px var(--accent)",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: reduceMotion ? 0 : [0, 5, 0],
        }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        style={{ color: "var(--text-muted)" }}
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.24em]">
          Scroll to explore
        </span>
        <ArrowDown size={17} />
      </motion.a>
    </section>
  );
};

export default Hero;
