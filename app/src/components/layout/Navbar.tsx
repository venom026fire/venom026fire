import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, profile } from "../../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-white/[0.08] bg-ink-900/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500 font-display text-sm font-bold text-ink-950">
            {profile.initials}
          </span>
          <span className="font-display text-base font-semibold text-mist-100 sm:text-lg">{profile.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-gold-500" : "text-mist-300 hover:text-mist-100"
                  }`
                }
              >
                <span className="font-mono text-[10px] text-mist-500">{link.code}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="btn-primary hidden !px-5 !py-2.5 text-xs md:inline-flex">
          Let's talk
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-mist-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/[0.08] bg-ink-900/95 backdrop-blur-md md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
                        isActive ? "bg-white/5 text-gold-500" : "text-mist-300"
                      }`
                    }
                  >
                    <span className="font-mono text-[10px] text-mist-500">{link.code}</span>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
