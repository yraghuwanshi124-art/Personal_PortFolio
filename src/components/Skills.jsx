
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../assets/assets/assets";

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative isolate scroll-mt-20 overflow-hidden px-5 py-24 sm:px-8 lg:py-32"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-80 w-80 rounded-full blur-[110px]"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-10 -z-10 h-80 w-80 rounded-full blur-[110px]"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: "easeOut",
          }}
          className="mb-14 text-center sm:mb-16"
        >
          <span
            className="inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{
              borderColor: "var(--accent-border)",
              backgroundColor: "var(--accent-soft)",
              color: "var(--accent)",
            }}
          >
            What I work with
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            My <span style={{ color: "var(--accent)" }}>Skills.</span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Technologies and tools I use to turn ideas into functional,
            responsive and user-friendly web experiences.
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

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {skills.map((data, index) => {
            const Icon = data.icon;

            return (
              <motion.article
                key={data.title ?? index}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 22,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : (index % 3) * 0.08,
                  ease: "easeOut",
                }}
                whileHover={reduceMotion ? {} : { y: -5 }}
                className="group relative h-full overflow-hidden rounded-2xl border p-6 transition-colors duration-300 sm:p-7"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-color)",
                }}
              >
                {/* Accent line */}
                <div
                  className="absolute left-0 top-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />

                {/* Soft hover glow */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: "var(--accent-soft)" }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={reduceMotion ? {} : { scale: 1.06 }}
                  transition={{ duration: 0.2 }}
                  className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border"
                  style={{
                    borderColor: "var(--accent-border)",
                    backgroundColor: "var(--accent-soft)",
                    color: "var(--accent)",
                  }}
                >
                  {Icon ? <Icon size={27} /> : null}
                </motion.div>

                {/* Content */}
                <h3
                  className="relative mb-3 text-xl font-bold transition-colors duration-300 sm:text-2xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  {data.title}
                </h3>

                <p
                  className="relative text-sm leading-7 sm:text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {data.description}
                </p>

                {/* Corner detail */}
                <div
                  className="absolute bottom-5 right-5 h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-150"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </motion.article>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            delay: 0.2,
          }}
          className="mt-12 text-center text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          <span style={{ color: "var(--accent)" }}>✳</span>{" "}
          Continuously learning, building and improving.
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
