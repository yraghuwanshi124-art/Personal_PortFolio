
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Code2,
  Lightbulb,
} from "lucide-react";
import profile3 from "../assets/assets/profile3.jpeg";
import { aboutInfo } from "../assets/assets/assets";

const highlights = [
  {
    icon: GraduationCap,
    title: "Computer Science",
    description: "Building strong programming fundamentals.",
  },
  {
    icon: Code2,
    title: "Project Driven",
    description: "Turning concepts into practical applications.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Exploring tools and improving every day.",
  },
];

const About = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: reduceMotion ? 0 : 0.65,
    ease: "easeOut",
  };

  return (
    <section
      id="about"
      className="relative isolate scroll-mt-20 overflow-hidden px-5 py-24 sm:px-8 lg:py-32"
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute -left-40 top-36 -z-10 h-80 w-80 rounded-full blur-[110px]"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full blur-[110px]"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={transition}
          className="mb-16 text-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{
              borderColor: "var(--accent-border)",
              backgroundColor: "var(--accent-soft)",
              color: "var(--accent)",
            }}
          >
            A little about me
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            About <span style={{ color: "var(--accent)" }}>Me.</span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            The person behind the code, driven by curiosity and a passion
            for building useful digital experiences.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: 0.15,
            }}
            className="mx-auto mt-7 h-1 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </motion.div>

        {/* Main layout */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Profile */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -28,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={transition}
            className="flex justify-center"
          >
            <div className="group relative w-full max-w-md">
              <div
                className="absolute -inset-3 rounded-[2rem] opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ backgroundColor: "var(--accent-soft)" }}
              />

              <div
                className="relative overflow-hidden rounded-[2rem] border p-3 shadow-2xl"
                style={{
                  borderColor: "var(--border-color)",
                  backgroundColor: "var(--bg-card)",
                }}
              >
                <motion.img
                  animate={
                    reduceMotion ? {} : { scale: [1, 1.018, 1] }
                  }
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={profile3}
                  alt="Yash Raghuwanshi"
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
                />

                <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-b-[1.5rem] bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6 pt-24">
                  <p className="text-xl font-bold text-white">
                    Yash Raghuwanshi
                  </p>
                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    Computer Science Student
                  </p>
                </div>
              </div>

              {/* Floating label */}
              <motion.div
                animate={reduceMotion ? {} : { y: [0, -6, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 top-10 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur-xl sm:block sm:-right-5"
                style={{
                  borderColor: "var(--border-color)",
                  backgroundColor: "var(--bg-card)",
                }}
              >
                <span
                  className="block text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  My mindset
                </span>
                <span
                  className="mt-1 block text-sm font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  Learn. Build. Improve.
                </span>
              </motion.div>

              <div
                className="absolute -bottom-4 -left-3 -z-10 h-28 w-28 rounded-full border sm:-left-6"
                style={{ borderColor: "var(--accent-border)" }}
              />
            </div>
          </motion.div>

          {/* Journey */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 28,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ...transition,
              delay: reduceMotion ? 0 : 0.1,
            }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              My journey
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Turning curiosity into{" "}
              <span style={{ color: "var(--accent)" }}>
                real projects.
              </span>
            </h3>

            <p
              className="mt-6 text-base leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              My journey into development started with a curiosity to
              understand how websites and applications work. I began by
              learning programming fundamentals and gradually explored
              HTML, CSS, JavaScript, React, and modern web technologies.
              Building projects helps me turn what I learn into practical
              skills.
            </p>

            <p
              className="mt-5 text-base leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Currently, I’m expanding my knowledge of backend development
              with Node.js and related technologies while strengthening my
              problem-solving skills through Data Structures and Algorithms.
              I enjoy experimenting with new ideas, building useful
              applications, and continuously improving as a developer.
            </p>

            {/* Highlights */}
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 14,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      ...transition,
                      delay: reduceMotion ? 0 : index * 0.1,
                    }}
                    whileHover={reduceMotion ? {} : { y: -4 }}
                    className="rounded-2xl border p-4 transition-colors duration-300"
                    style={{
                      borderColor: "var(--border-color)",
                      backgroundColor: "var(--bg-card)",
                    }}
                  >
                    <Icon
                      size={21}
                      style={{ color: "var(--accent)" }}
                    />

                    <h4
                      className="mt-4 text-sm font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="mt-2 text-xs leading-5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Existing data-driven information */}
            {Array.isArray(aboutInfo) && aboutInfo.length > 0 && (
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {aboutInfo.map((data, index) => {
                  const Icon = data.icon;

                  return (
                    <motion.div
                      key={data.title ?? index}
                      initial={{
                        opacity: 0,
                        y: reduceMotion ? 0 : 16,
                      }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        ...transition,
                        delay: reduceMotion ? 0 : index * 0.08,
                      }}
                      whileHover={reduceMotion ? {} : { y: -4 }}
                      className="group rounded-2xl border p-5 transition-colors duration-300"
                      style={{
                        borderColor: "var(--border-color)",
                        backgroundColor: "var(--bg-card)",
                      }}
                    >
                      <div
                        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: "var(--accent-soft)",
                          color: "var(--accent)",
                        }}
                      >
                        {Icon ? (
                          <Icon size={21} />
                        ) : (
                          <ArrowUpRight size={21} />
                        )}
                      </div>

                      <h4
                        className="text-base font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {data.title}
                      </h4>

                      <p
                        className="mt-2 text-sm leading-6"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {data.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
