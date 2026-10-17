
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
    <footer className="relative isolate overflow-hidden border-t border-white/[0.07] bg-[#080c0a]">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-48 w-96 -translate-x-1/2 rounded-full bg-green-500/[0.06] blur-[100px]"
        aria-hidden="true"
      />

      {/* Animated accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: shouldReduceMotion ? 0.2 : 1,
          ease: "easeOut",
        }}
        className="h-px origin-center bg-gradient-to-r from-transparent via-green-400/60 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
          {/* Brand */}
          <motion.a
            href="#home"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            className="group flex items-center gap-3"
            aria-label="Back to home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/[0.08] text-sm font-bold text-green-300 transition-colors group-hover:bg-green-400/[0.15]">
              Y.
            </span>

            <span className="text-sm font-semibold tracking-wide text-gray-200">
              Yash Raghuwanshi
              <span className="mt-1 block text-xs font-normal text-gray-500">
                Aspiring Software Engineer
              </span>
            </span>
          </motion.a>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 min-w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 text-sm font-bold text-gray-400 transition-all duration-300 hover:border-green-400/30 hover:bg-green-400/[0.08] hover:text-green-300"
              >
                {social.shortLabel}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/[0.09] to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {currentYear}{" "}
            <span className="font-medium text-gray-300">
              Yash Raghuwanshi
            </span>
            . All rights reserved.
          </p>

          <a
            href="#home"
            className="text-xs text-gray-500 transition-colors hover:text-green-400 sm:text-sm"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
