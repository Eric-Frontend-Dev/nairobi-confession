import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/rooms", label: "Rooms & Suites" },
    { to: "/restaurant", label: "Restaurant" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        className={`main-nav ${scrolled ? "nav-scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.6rem",
              fontWeight: 600,
              color: "var(--gold)",
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}>Nairobi</div>
            {/* FIXED: Confession — visible, high contrast, strong shadow */}
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.63rem",
              letterSpacing: "0.3em",
              color: "#E8D5A3",
              textTransform: "uppercase",
              marginTop: "4px",
              fontWeight: 600,
              textShadow: "0 1px 8px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.8)",
            }}>Confession</div>
          </motion.div>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "2.5rem", alignItems: "center", listStyle: "none" }} className="desktop-nav">
          {links.map(({ to, label }, i) => (
            <motion.li
              key={to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            >
              <Link to={to} style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: location.pathname === to ? "var(--gold)" : "var(--text-light)",
                transition: "color 0.3s",
                position: "relative",
                paddingBottom: "4px",
              }}>
                {label}
                {location.pathname === to && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "var(--gold)" }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Link to="/rooms" className="btn-gold" style={{ padding: "0.6rem 1.4rem", fontSize: "0.65rem" }}>
              Book Now
            </Link>
          </motion.li>
        </ul>

        {/* Mobile hamburger — CSS only, no inline display */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {menuOpen
              ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={24} /></motion.div>
              : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={24} /></motion.div>
            }
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "fixed", inset: 0, zIndex: 999,
              background: "rgba(13,7,4,0.98)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {links.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Link to={to} style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  color: location.pathname === to ? "var(--gold)" : "var(--text-light)",
                  fontWeight: 400,
                  display: "block",
                }}>
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              <Link to="/rooms" className="btn-gold-fill" style={{ marginTop: "0.5rem" }}>Book Now</Link>
            </motion.div>
            {/* Decorative gold line */}
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
              style={{ width: "60px", height: "1px", background: "var(--gold)", opacity: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .main-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 1.8rem 3rem;
          background: transparent;
          display: flex; align-items: center; justify-content: space-between;
          transition: padding 0.4s ease, background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease;
        }
        .nav-scrolled {
          padding: 1rem 3rem;
          background: rgba(13,7,4,0.97);
          border-bottom: 1px solid rgba(201,168,76,0.15);
          backdrop-filter: blur(12px);
        }
        .mobile-menu-btn {
          display: none;
          background: none; border: none;
          color: var(--gold); cursor: pointer; padding: 4px;
        }
        @media (max-width: 768px) {
          .main-nav  { padding: 1.1rem 1.4rem; }
          .nav-scrolled { padding: 0.85rem 1.4rem; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block; }
        }
        @media (hover: none) {
          body, a, button { cursor: auto !important; }
        }
      `}</style>
    </>
  );
}
