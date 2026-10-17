
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import profile from "../assets/assets/profile.jpeg";
import { aboutInfo } from "../assets/assets/assets";

const About = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 35 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: reduceMotion ? 0 : 0.7,
    ease: "easeOut",
  };

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#0b100d] px-5 py-24 text-white sm:px-8 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-green-500/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-emerald-400/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={transition}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-green-300">
            A little about me
          </span>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            About <span className="text-green-400">Me.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            The person behind the code, driven by curiosity and a passion
            for building useful digital experiences.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 72 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.2 }}
            className="mx-auto mt-7 h-1 rounded-full bg-green-400"
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transition, duration: reduceMotion ? 0 : 0.9 }}
            className="flex justify-center"
          >
            <div className="group relative w-full max-w-md">
              {/* Glow */}
              <div className="absolute -inset-3 rounded-[2rem] bg-green-400/10 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111914] p-3 shadow-2xl">
                <motion.img
                  animate={
                    reduceMotion ? {} : { scale: [1, 1.025, 1] }
                  }
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={profile}
                  alt="Yash Raghuwanshi"
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center transition duration-700 group-hover:brightness-110"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-b-[1.5rem] bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-20">
                  <p className="text-xl font-bold text-white">
                    Yash Raghuwanshi
                  </p>
                  <p className="mt-1 text-sm text-green-300">
                    Computer Science Student
                  </p>
                </div>
              </div>

              {/* Floating Accent */}
              <motion.div
                animate={
                  reduceMotion ? {} : { y: [0, -8, 0] }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-3 top-10 hidden rounded-2xl border border-green-400/20 bg-[#111914]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:block sm:-right-6"
              >
                <span className="block text-xs text-gray-400">
                  My mindset
                </span>
                <span className="mt-1 block font-semibold text-green-300">
                  Learn. Build. Repeat.
                </span>
              </motion.div>

              <div className="absolute -bottom-4 -left-3 -z-10 h-32 w-32 rounded-full border border-green-400/20 sm:-left-6" />
            </div>
          </motion.div>

          {/* Journey Content */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              My journey
            </span>

            <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Turning curiosity into
              <span className="text-green-400"> real projects.</span>
            </h3>

            <p className="mt-6 text-base leading-8 text-gray-400">
              My journey into development started with a curiosity to
              understand how websites and applications work. I began by
              learning programming fundamentals and gradually explored
              HTML, CSS, JavaScript, React, and modern web technologies.
              Building projects has helped me turn what I learn into
              practical skills.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-400">
              Currently, I’m expanding my knowledge of backend development
              with Node.js and related technologies while strengthening my
              problem-solving skills through Data Structures and Algorithms.
              I enjoy experimenting with new ideas, building useful
              applications, and continuously improving as a developer.
            </p>

            {/* About Information Cards */}
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutInfo.map((data, index) => {
                const Icon = data.icon;

                return (
                  <motion.div
                    key={data.title ?? index}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 22,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      ...transition,
                      delay: reduceMotion ? 0 : index * 0.12,
                    }}
                    whileHover={
                      reduceMotion
                        ? {}
                        : { y: -6, transition: { duration: 0.2 } }
                    }
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-colors duration-300 hover:border-green-400/30 hover:bg-green-400/[0.04]"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-green-400/15 bg-green-400/10 text-2xl text-green-400 transition-transform duration-300 group-hover:scale-110">
                      {Icon ? <Icon /> : null}
                    </div>

                    <h4 className="text-lg font-bold text-white">
                      {data.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {data.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
