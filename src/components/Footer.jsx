import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Share2, Heart, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function Footer() {
  return (
    <footer style={{
      background: "var(--espresso)",
      borderTop: "1px solid rgba(201,168,76,0.2)",
      padding: "5rem 3rem 2rem",
    }}>
      {/* Gold top line animation */}
      <motion.div
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", marginBottom: "4rem", transformOrigin: "left" }}
      />

      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "3rem",
        marginBottom: "4rem",
      }}>
        {/* Brand */}
        <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--gold)", lineHeight: 1, marginBottom: "0.3rem" }}>Nairobi</div>
          {/* FIXED: Confession clearly visible */}
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            letterSpacing: "0.32em",
            color: "#D4B06A",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            fontWeight: 600,
          }}>Confession</div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: "260px" }}>
            Where African elegance meets world-class luxury. Every stay is a story worth telling.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
            {[Share2, Heart, MessageCircle].map((Icon, i) => (
              <motion.a
                key={i} href="#"
                whileHover={{ scale: 1.15, borderColor: "var(--gold)", color: "var(--gold)" }}
                transition={{ duration: 0.2 }}
                style={{ width: "36px", height: "36px", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h4 style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>Explore</h4>
          {[{ to: "/", label: "Home" }, { to: "/rooms", label: "Rooms & Suites" }, { to: "/restaurant", label: "Restaurant & Bar" }, { to: "/contact", label: "Contact Us" }].map(({ to, label }, i) => (
            <motion.div key={to} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.07 }} style={{ marginBottom: "0.8rem" }}>
              <Link to={to} style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--text-muted)", transition: "color 0.3s", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
              >{label}</Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h4 style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>Services</h4>
          {["Fine Dining", "Rooftop Bar", "Spa & Wellness", "Conference Rooms", "Airport Transfer", "Concierge"].map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} style={{ marginBottom: "0.8rem" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--text-muted)" }}>{s}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h4 style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>Find Us</h4>
          {[
            { Icon: MapPin, text: "14 Confession Avenue, Nairobi, Kenya" },
            { Icon: Phone, text: "+254 700 123 456" },
            { Icon: Mail, text: "reservations@nairobiconfession.com" },
          ].map(({ Icon, text }, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08 }}
              style={{ display: "flex", gap: "0.8rem", marginBottom: "1rem", alignItems: "flex-start" }}>
              <Icon size={15} color="var(--gold)" style={{ marginTop: "2px", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        style={{ borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}
      >
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--text-muted)" }}>© 2025 Nairobi Confession. All rights reserved.</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "var(--text-muted)" }}>Privacy Policy · Terms of Service</p>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 4rem 1.5rem 2rem; }
        }
      `}</style>
    </footer>
  );
}
