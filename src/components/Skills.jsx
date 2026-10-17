
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../assets/assets/assets";

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative scroll-mt-20 overflow-hidden bg-[#080c0a] px-5 py-24 text-white sm:px-8 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-green-500/[0.07] blur-[110px]" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-emerald-400/[0.05] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-green-400/20 bg-green-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-green-300">
            What I work with
          </span>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            My <span className="text-green-400">Skills.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Technologies and tools I use to turn ideas into functional,
            responsive and user-friendly web experiences.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 72 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.2 }}
            className="mx-auto mt-7 h-1 rounded-full bg-green-400"
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((data, index) => {
            const Icon = data.icon;

            return (
              <motion.div
                key={data.title ?? index}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 35,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : (index % 3) * 0.12,
                  ease: "easeOut",
                }}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -8,
                        transition: { duration: 0.25, ease: "easeOut" },
                      }
                }
                className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101612] p-6 transition-colors duration-300 hover:border-green-400/30 hover:bg-[#121b15] sm:p-7"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-green-400/0 blur-3xl transition-colors duration-500 group-hover:bg-green-400/10" />

                {/* Top accent */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-green-300 to-emerald-600 transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <motion.div
                  whileHover={
                    reduceMotion
                      ? {}
                      : { rotate: 5, scale: 1.08 }
                  }
                  transition={{ duration: 0.2 }}
                  className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/15 bg-green-400/[0.08] text-3xl text-green-400 transition-colors duration-300 group-hover:border-green-400/30 group-hover:bg-green-400/[0.13]"
                >
                  {Icon ? <Icon /> : null}
                </motion.div>

                {/* Skill content */}
                <h3 className="relative mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-green-300 sm:text-2xl">
                  {data.title}
                </h3>

                <p className="relative text-sm leading-7 text-gray-400 sm:text-base">
                  {data.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-5 right-5 h-2 w-2 rounded-full bg-green-400/20 transition-all duration-300 group-hover:scale-150 group-hover:bg-green-400" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.3 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          <span className="text-green-400">✳</span>{" "}
          Continuously learning, building and improving.
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
