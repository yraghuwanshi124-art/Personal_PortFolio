import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "GitHub",
      shortLabel: "GH",
      url: "https://github.com/yraghuwanshi124-art",
    },
    {
      label: "LinkedIn",
      shortLabel: "in",
      url: "https://www.linkedin.com/",
    },
  ];

  return (
    <footer
      className="relative isolate overflow-hidden border-t transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-48 w-96 -translate-x-1/2 rounded-full blur-[100px]"
        style={{ backgroundColor: "var(--accent-soft)" }}
        aria-hidden="true"
      />

      {/* Animated accent line */}
      <motion.div
        initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: shouldReduceMotion ? 0.2 : 0.9,
          ease: "easeOut",
        }}
        className="h-px origin-center"
        style={{ backgroundColor: "var(--accent)" }}
      />

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
          {/* Brand */}
          <motion.a
            href="#home"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
            style={{ "--tw-ring-color": "var(--accent)" }}
            aria-label="Back to home"
          >
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl border text-base font-black transition-colors duration-300"
              style={{
                borderColor: "var(--accent-border)",
                backgroundColor: "var(--accent-soft)",
                color: "var(--accent)",
              }}
            >
              Y.
            </span>

            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: "var(--text-primary)" }}
            >
              Yash Raghuwanshi
              <span
                className="mt-1 block text-xs font-normal"
                style={{ color: "var(--text-muted)" }}
              >
                Aspiring Software Engineer
              </span>
            </span>
          </motion.a>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                className="flex h-11 min-w-11 items-center justify-center rounded-xl border px-3 text-sm font-bold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2"
                style={{
                  borderColor: "var(--border-color)",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-secondary)",
                  "--tw-ring-color": "var(--accent)",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor =
                    "var(--accent-border)";
                  event.currentTarget.style.backgroundColor =
                    "var(--accent-soft)";
                  event.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor =
                    "var(--border-color)";
                  event.currentTarget.style.backgroundColor =
                    "var(--bg-card)";
                  event.currentTarget.style.color =
                    "var(--text-secondary)";
                }}
              >
                {social.shortLabel}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 h-px"
          style={{ backgroundColor: "var(--border-color)" }}
        />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p
            className="text-xs leading-6 sm:text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            © {currentYear}{" "}
            <span
              className="font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Yash Raghuwanshi
            </span>
            . All rights reserved.
          </p>

          <a
            href="#home"
            className="text-xs font-medium transition-colors duration-300 hover:underline sm:text-sm"
            style={{ color: "var(--accent)" }}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;