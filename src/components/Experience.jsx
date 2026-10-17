
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { workData } from "../assets/assets/assets";

function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const accentColors = {
    green: {
      dot: "bg-green-400",
      text: "text-green-400",
      border: "group-hover:border-green-400/30",
      glow: "group-hover:shadow-green-500/5",
    },
    pink: {
      dot: "bg-pink-400",
      text: "text-pink-400",
      border: "group-hover:border-pink-400/30",
      glow: "group-hover:shadow-pink-500/5",
    },
    blue: {
      dot: "bg-blue-400",
      text: "text-blue-400",
      border: "group-hover:border-blue-400/30",
      glow: "group-hover:shadow-blue-500/5",
    },
  };

  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-[#080c0a] px-5 py-24 sm:px-8 sm:py-28"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-green-500/[0.06] blur-[120px]" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-emerald-400/[0.05] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center sm:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/[0.06] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
              My Journey
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Work{" "}
            <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-green-300 to-emerald-600" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            My learning journey through internships, hands-on projects,
            frontend development, React, and problem solving.
          </p>
        </motion.div>

        {/* Timeline */}
        {workData?.length > 0 ? (
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute bottom-5 left-[11px] top-5 w-px bg-gradient-to-b from-green-400/70 via-emerald-500/30 to-transparent md:left-1/2 md:-translate-x-1/2"
              aria-hidden="true"
            />

            <div className="space-y-10 md:space-y-14">
              {workData.map((item, index) => {
                const colors =
                  accentColors[item.color] || accentColors.green;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={`${item.company}-${item.role}-${index}`}
                    initial={{
                      opacity: 0,
                      x: shouldReduceMotion ? 0 : isLeft ? -25 : 25,
                      y: shouldReduceMotion ? 0 : 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0.2 : 0.65,
                      delay: shouldReduceMotion ? 0 : 0.08,
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
                        className={`relative z-10 mt-7 h-3 w-3 rounded-full ${colors.dot} ring-4 ring-[#080c0a] shadow-[0_0_16px_rgba(74,222,128,0.35)] md:mt-0`}
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
                      <div
                        className={`relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.045] hover:shadow-xl sm:p-7 ${colors.border} ${colors.glow}`}
                      >
                        {/* Card accent */}
                        <div
                          className={`absolute left-0 top-0 h-full w-[2px] ${colors.dot} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                        />

                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                          <span
                            className={`inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-xs font-medium ${colors.text}`}
                          >
                            <span className={`h-1.5 w-1.5 rounded-full ${colors.dot}`} />
                            Experience {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-400">
                            {item.duration}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-green-100 sm:text-2xl">
                          {item.role}
                        </h3>

                        <h4 className={`mt-2 text-base font-semibold ${colors.text}`}>
                          {item.company}
                        </h4>

                        <div className="my-5 h-px w-full bg-gradient-to-r from-white/10 via-white/[0.04] to-transparent" />

                        <p className="text-sm leading-7 text-gray-400 sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Empty opposite side on desktop */}
                    <div className="hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          <p className="py-12 text-center text-gray-400">
            Experience details will appear here soon.
          </p>
        )}

        {/* Closing text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-sm text-gray-500"
        >
          Every experience is a step forward.{" "}
          <span className="font-medium text-green-400">
            Keep learning. Keep growing.
          </span>
        </motion.p>
      </div>
    </section>
  );
}

export default Experience;
