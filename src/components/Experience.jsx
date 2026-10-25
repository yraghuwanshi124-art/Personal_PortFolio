import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { workData } from "../assets/assets/assets";

function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative isolate scroll-mt-20 overflow-hidden px-5 py-24 transition-colors duration-300 sm:px-8 sm:py-28 lg:py-32"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-0 top-24 h-72 w-72 rounded-full blur-[120px]"
          style={{ backgroundColor: "var(--accent-soft)" }}
        />
        <div
          className="absolute bottom-10 right-0 h-72 w-72 rounded-full blur-[120px]"
          style={{ backgroundColor: "var(--accent-soft)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.65 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center sm:mb-16 lg:mb-20"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{
              borderColor: "var(--accent-border)",
              backgroundColor: "var(--accent-soft)",
              color: "var(--accent)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              My Journey
            </span>
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Work{" "}
            <span style={{ color: "var(--accent)" }}>
              Experience.
            </span>
          </h2>

          <div
            className="mx-auto mt-6 h-1 w-16 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />

          <p
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            My learning journey through internships, hands-on projects,
            frontend development, React, and problem solving.
          </p>
        </motion.div>

        {/* Timeline */}
        {workData?.length > 0 ? (
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute bottom-5 left-[11px] top-5 w-px md:left-1/2 md:-translate-x-1/2"
              style={{
                background:
                  "linear-gradient(to bottom, var(--accent), var(--accent-border), transparent)",
              }}
              aria-hidden="true"
            />

            <div className="space-y-8 md:space-y-12">
              {workData.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={`${item.company}-${item.role}-${index}`}
                    initial={{
                      opacity: 0,
                      x: shouldReduceMotion ? 0 : isLeft ? -20 : 20,
                      y: shouldReduceMotion ? 0 : 10,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.2 : 0.6,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className={`relative grid grid-cols-[24px_minmax(0,1fr)] gap-4 md:grid-cols-2 md:gap-12 ${
                      isLeft ? "" : "md:[&>div:first-child]:order-2"
                    }`}
                  >
                    {/* Timeline marker */}
                    <div className="relative flex justify-center md:absolute md:left-1/2 md:top-8 md:-translate-x-1/2">
                      <span
                        className="relative z-10 mt-7 h-3 w-3 rounded-full ring-4 md:mt-0"
                        style={{
                          backgroundColor: "var(--accent)",
                          boxShadow: "0 0 16px var(--accent-soft)",
                          "--tw-ring-color": "var(--bg-primary)",
                        }}
                      />
                    </div>

                    {/* Experience card */}
                    <div
                      className={`group min-w-0 ${
                        isLeft
                          ? "md:col-start-1 md:col-end-2"
                          : "md:col-start-2 md:col-end-3"
                      }`}
                    >
                      <article
                        className="relative h-full overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-7"
                        style={{
                          backgroundColor: "var(--bg-card)",
                          borderColor: "var(--border-color)",
                        }}
                      >
                        {/* Accent edge */}
                        <div
                          className="absolute bottom-0 left-0 top-0 w-[3px] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                          style={{ backgroundColor: "var(--accent)" }}
                        />

                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                          <span
                            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
                            style={{
                              borderColor: "var(--accent-border)",
                              backgroundColor: "var(--accent-soft)",
                              color: "var(--accent)",
                            }}
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ backgroundColor: "var(--accent)" }}
                            />
                            Experience {String(index + 1).padStart(2, "0")}
                          </span>

                          <span
                            className="rounded-lg border px-3 py-1.5 text-xs font-medium"
                            style={{
                              borderColor: "var(--border-color)",
                              color: "var(--text-muted)",
                            }}
                          >
                            {item.duration}
                          </span>
                        </div>

                        <h3
                          className="text-xl font-bold leading-snug transition-colors duration-300 sm:text-2xl"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {item.role}
                        </h3>

                        <h4
                          className="mt-2 text-base font-semibold"
                          style={{ color: "var(--accent)" }}
                        >
                          {item.company}
                        </h4>

                        <div
                          className="my-5 h-px w-full"
                          style={{ backgroundColor: "var(--border-color)" }}
                        />

                        <p
                          className="text-sm leading-7 sm:text-base"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {item.description}
                        </p>
                      </article>
                    </div>

                    {/* Opposite side on desktop */}
                    <div className="hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          <p
            className="py-12 text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            Experience details will appear here soon.
          </p>
        )}

        {/* Closing text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.6 }}
          viewport={{ once: true }}
          className="mt-14 text-center text-sm sm:mt-16"
          style={{ color: "var(--text-muted)" }}
        >
          Every experience is a step forward.{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Keep learning. Keep growing.
          </span>
        </motion.p>
      </div>
    </section>
  );
}

export default Experience;