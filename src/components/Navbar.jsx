
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
  Palette,
  Check,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#project" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contacts" },
];

const palettes = [
  { id: "violet", name: "Violet", color: "#8b5cf6" },
  { id: "blue", name: "Electric Blue", color: "#3b82f6" },
  { id: "emerald", name: "Emerald", color: "#10b981" },
  { id: "ruby", name: "Ruby Red", color: "#f43f5e" },
];

const getSavedPreference = (key, fallback) => {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const [mode, setMode] = useState(() =>
    getSavedPreference("portfolio-mode", "dark")
  );

  const [accent, setAccent] = useState(() =>
    getSavedPreference("portfolio-accent", "violet")
  );

  useEffect(() => {
    const validModes = ["dark", "light"];
    const validAccents = palettes.map((palette) => palette.id);

    const safeMode = validModes.includes(mode) ? mode : "dark";
    const safeAccent = validAccents.includes(accent) ? accent : "violet";

    document.documentElement.dataset.mode = safeMode;
    document.documentElement.dataset.accent = safeAccent;

    try {
      localStorage.setItem("portfolio-mode", safeMode);
      localStorage.setItem("portfolio-accent", safeAccent);
    } catch {
      // Theme controls still work if storage is unavailable.
    }
  }, [mode, accent]);

  const isLight = mode === "light";

  const navBackground = isLight
    ? "rgba(247,248,252,0.94)"
    : "rgba(9,9,15,0.90)";

  const borderColor = isLight
    ? "rgba(24,24,39,0.12)"
    : "rgba(255,255,255,0.10)";

  const textColor = isLight ? "#181827" : "#f4f4f8";
  const mutedColor = isLight ? "#525269" : "#a1a1b5";

  const toggleMode = () => {
    setMode((current) => (current === "dark" ? "light" : "dark"));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        backgroundColor: navBackground,
        borderColor,
        color: textColor,
      }}
      className="fixed left-0 top-0 z-50 w-full border-b px-4 py-3 shadow-lg backdrop-blur-2xl transition-colors duration-300 sm:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={closeMenu}
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.97 }}
          className="flex shrink-0 items-center gap-2.5 sm:gap-3"
          aria-label="Yash Raghuwanshi - Home"
        >
          <div
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border"
            style={{
              borderColor: "var(--accent-border)",
              backgroundColor: "var(--accent-soft)",
            }}
          >
            <span
              className="text-lg font-black"
              style={{ color: "var(--accent)" }}
            >
              Y.
            </span>

            <span
              className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2"
              style={{
                backgroundColor: "var(--accent)",
                borderColor: navBackground,
              }}
            />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight sm:text-lg">
              Yash{" "}
              <span style={{ color: "var(--accent)" }}>Raghuwanshi</span>
            </p>
            <p
              className="mt-1 hidden text-[9px] uppercase tracking-[0.2em] sm:block"
              style={{ color: mutedColor }}
            >
              Software Developer
            </p>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + index * 0.05 }}
              className="group relative py-2 text-sm font-medium transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ color: mutedColor }}
            >
              {link.name}
              <span
                className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </motion.a>
          ))}
        </div>

        {/* Theme Controls */}
        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
          {/* Accent Palette */}
          <div className="relative">
            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => setPaletteOpen((open) => !open)}
              className="flex h-10 items-center gap-2 rounded-xl border px-3 transition-colors"
              style={{
                borderColor,
                backgroundColor: "var(--accent-soft)",
                color: "var(--accent)",
              }}
              aria-label="Choose accent color"
              aria-expanded={paletteOpen}
              aria-controls="accent-palette"
            >
              <Palette size={17} />
              <span className="hidden text-xs font-semibold sm:inline">
                Theme
              </span>
            </motion.button>

            <AnimatePresence>
              {paletteOpen && (
                <motion.div
                  id="accent-palette"
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.16 }}
                  className="absolute right-0 top-12 z-50 w-48 rounded-2xl border p-2 shadow-2xl"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <p
                    className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Accent color
                  </p>

                  {palettes.map((palette) => (
                    <button
                      type="button"
                      key={palette.id}
                      onClick={() => {
                        setAccent(palette.id);
                        setPaletteOpen(false);
                      }}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-black/5"
                      style={{ color: "var(--text-primary)" }}
                      aria-pressed={accent === palette.id}
                    >
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-full"
                        style={{ backgroundColor: palette.color }}
                      >
                        {accent === palette.id && (
                          <Check
                            size={12}
                            color="#ffffff"
                            strokeWidth={3}
                          />
                        )}
                      </span>

                      <span className="flex-1 text-left">
                        {palette.name}
                      </span>

                      {accent === palette.id && (
                        <span
                          className="text-xs"
                          style={{ color: "var(--accent)" }}
                        >
                          Active
                        </span>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dark / Light Toggle */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={toggleMode}
            className="flex h-10 w-10 items-center justify-center rounded-xl border transition-colors"
            style={{
              borderColor,
              backgroundColor: "var(--bg-card)",
              color: "var(--accent)",
            }}
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            title={`Switch to ${isLight ? "dark" : "light"} mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mode}
                initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                transition={{ duration: 0.18 }}
                className="flex"
              >
                {isLight ? <Moon size={18} /> : <Sun size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Contact Button */}
          <motion.a
            href="#contacts"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all sm:flex"
            style={{
              backgroundColor: "var(--accent)",
              boxShadow: "0 5px 20px var(--accent-soft)",
            }}
          >
            Let's Talk <ArrowUpRight size={16} />
          </motion.a>

          {/* Mobile Menu Toggle */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border lg:hidden"
            style={{
              borderColor,
              color: textColor,
              backgroundColor: "var(--bg-card)",
            }}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.16 }}
                className="flex"
              >
                {menuOpen ? <X size={21} /> : <Menu size={21} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24 }}
            className="overflow-hidden lg:hidden"
          >
            <div
              className="mx-auto mt-4 max-w-7xl border-t pt-3 pb-2"
              style={{ borderColor }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                  style={{ color: mutedColor }}
                >
                  {link.name}
                  <ArrowUpRight
                    size={15}
                    style={{ color: "var(--accent)" }}
                  />
                </motion.a>
              ))}

              <a
                href="#contacts"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white sm:hidden"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Let's Talk <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
