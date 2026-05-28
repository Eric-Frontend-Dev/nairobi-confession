import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Restaurant from "./pages/Restaurant";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/* ── Page transition wrapper ── */
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Animated page-change progress bar ── */
function RouteProgressBar() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 700);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={location.pathname}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            position: "fixed", top: 0, left: 0, right: 0, height: "2px",
            background: "linear-gradient(90deg, var(--gold-dark), var(--gold), var(--gold-light))",
            transformOrigin: "left", zIndex: 9998, pointerEvents: "none",
          }}
        />
      )}
    </AnimatePresence>
  );
}

/* ── Custom gold cursor — hidden on touch devices ── */
function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 22, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => { cursorX.set(e.clientX); cursorY.set(e.clientY); };
    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{
          position: "fixed", left: cursorXSpring, top: cursorYSpring,
          width: hovered ? 44 : 32, height: hovered ? 44 : 32,
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.6)",
          pointerEvents: "none", zIndex: 9998,
          x: hovered ? -22 : -16, y: hovered ? -22 : -16,
          transition: "width 0.2s, height 0.2s",
        }}
      />
      {/* Inner dot */}
      <motion.div
        style={{
          position: "fixed", left: cursorX, top: cursorY,
          width: 6, height: 6, borderRadius: "50%",
          background: "var(--gold)",
          pointerEvents: "none", zIndex: 9999,
          x: -3, y: -3,
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}

function AppInner() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <RouteProgressBar />
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/rooms" element={<PageTransition><Rooms /></PageTransition>} />
          <Route path="/restaurant" element={<PageTransition><Restaurant /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div style={{ position: "relative" }}>
      <Router>
        <AppInner />
      </Router>
    </div>
  );
}
