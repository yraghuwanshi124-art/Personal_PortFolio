
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#project" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contacts" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#090d0b]/85 px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Animated Logo */}
        <motion.a
          href="#home"
          onClick={closeMenu}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-3"
          aria-label="Yash Raghuwanshi - Home"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-green-400/30 bg-green-400/10">
            <span className="text-lg font-black text-green-400">Y.</span>
            <motion.span
              className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#090d0b] bg-green-400"
              animate={{ scale: [1, 1.35, 1], opacity: [1, 0.65, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          <div className="leading-tight">
            <p className="text-lg font-bold tracking-tight text-white sm:text-xl">
              Yash{" "}
              <span className="text-green-400">Raghuwanshi</span>
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gray-400">
              Software Developer
            </p>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.08 }}
              className="group relative py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-green-400"
            >
              {link.name}

              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full bg-green-400 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}

          <motion.a
            href="#contacts"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 rounded-xl border border-green-400/40 bg-green-400/10 px-4 py-2.5 text-sm font-semibold text-green-300 transition-all duration-300 hover:border-green-400 hover:bg-green-400 hover:text-black hover:shadow-[0_0_25px_rgba(74,222,128,0.2)]"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-green-400/50 hover:text-green-400 lg:hidden"
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
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Animated Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-auto mt-4 max-w-7xl border-t border-white/10 pt-3 pb-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-green-400/10 hover:text-green-400"
                >
                  {link.name}
                  <ArrowUpRight
                    size={15}
                    className="text-gray-500 transition-colors group-hover:text-green-400"
                  />
                </motion.a>
              ))}

              <div className="mt-3 rounded-xl border border-green-400/20 bg-green-400/5 px-4 py-3">
                <p className="text-xs text-gray-400">
                  Have a project in mind?
                </p>
                <a
                  href="#contacts"
                  onClick={closeMenu}
                  className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-green-400"
                >
                  Let's connect <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
