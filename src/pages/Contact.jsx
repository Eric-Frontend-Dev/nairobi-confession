import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";
import { images } from "../images";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" } }),
};
const imgFit = { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" };

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(201,168,76,0.2)",
  color: "var(--text-light)",
  fontFamily: "var(--font-body)",
  fontSize: "0.85rem",
  padding: "1rem 1.2rem",
  outline: "none",
  transition: "border-color 0.3s, box-shadow 0.3s",
};

function Field({ label, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <label style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: "0.5rem" }}>
        {label}
      </label>
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", checkin: "", checkout: "", guests: "1", type: "room", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <div style={{ paddingTop: "100px", background: "var(--dark)", position: "relative" }}>

      {/* Hero */}
      <section style={{ position: "relative", height: "55vh", minHeight: "400px", overflow: "hidden" }}>
        <motion.img
          src={images.exterior[0]}
          alt="Hotel exterior"
          style={{ ...imgFit, position: "absolute", inset: 0 }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,7,4,0.65)" }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}
        >
          <motion.p
            className="section-label"
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.2 }}
            style={{ marginBottom: "1rem" }}
          >We'd Love to Hear From You</motion.p>
          <div className="reveal-wrap">
            <motion.h1
              initial={{ y: "100%" }} animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="reveal-text"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, color: "var(--cream)" }}
            >
              Get in <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Touch</em>
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Contact + Form */}
      <section className="section-padding" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="grid-contact">

          {/* Info panel */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="reveal-wrap">
              <motion.h2
                initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="reveal-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--cream)", fontWeight: 300, marginBottom: "2.5rem" }}
              >Contact <em style={{ color: "var(--gold)" }}>Information</em></motion.h2>
            </div>

            {[
              { Icon: MapPin, title: "Address", lines: ["14 Confession Avenue", "Westlands, Nairobi, Kenya"] },
              { Icon: Phone, title: "Phone", lines: ["+254 700 123 456", "+254 700 654 321"] },
              { Icon: Mail, title: "Email", lines: ["reservations@nairobiconfession.com", "info@nairobiconfession.com"] },
              { Icon: Clock, title: "Reception", lines: ["Open 24 Hours", "Concierge: 7am – 11pm"] },
            ].map(({ Icon, title, lines }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ x: 4 }}
                style={{ display: "flex", gap: "1.2rem", marginBottom: "2rem", cursor: "none" }}
              >
                <motion.div
                  whileHover={{ borderColor: "var(--gold)", background: "rgba(201,168,76,0.1)" }}
                  transition={{ duration: 0.2 }}
                  style={{ width: "44px", height: "44px", flexShrink: 0, border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                >
                  <Icon size={16} color="var(--gold)" />
                </motion.div>
                <div>
                  <div style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>{title}</div>
                  {lines.map(l => <div key={l} style={{ fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{l}</div>)}
                </div>
              </motion.div>
            ))}

            {/* Animated gold divider */}
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ height: "1px", background: "linear-gradient(90deg, var(--gold), transparent)", marginBottom: "1.5rem", transformOrigin: "left" }}
            />

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              style={{ height: "230px", overflow: "hidden", border: "1px solid rgba(201,168,76,0.2)", position: "relative" }}
            >
              <img src={images.rooftop[0]} alt="Location" style={{ ...imgFit, filter: "brightness(0.45)", transition: "transform 0.6s" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"}
              />
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                  <MapPin size={32} color="var(--gold)" />
                </motion.div>
                <span style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: "var(--cream)", textTransform: "uppercase" }}>Nairobi Confession</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Reservation form */}
          <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="reveal-wrap">
              <motion.h2
                initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
                className="reveal-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--cream)", fontWeight: 300, marginBottom: "0.5rem" }}
              >Make a <em style={{ color: "var(--gold)" }}>Reservation</em></motion.h2>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "2.5rem" }}>Fill in the form and our team will confirm your booking within 24 hours.</p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ border: "1px solid rgba(201,168,76,0.3)", padding: "4rem 2rem", textAlign: "center", background: "rgba(201,168,76,0.05)" }}
                >
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    style={{ width: "60px", height: "60px", border: "1px solid var(--gold)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}
                  >
                    <Check size={28} color="var(--gold)" />
                  </motion.div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--cream)", fontWeight: 400, marginBottom: "1rem" }}>Reservation Received</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                    Thank you, {form.name}. We will be in touch at <span style={{ color: "var(--gold)" }}>{form.email}</span> within 24 hours to confirm your stay.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  {/* Type selector */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ display: "flex", marginBottom: "0.5rem" }}
                  >
                    {["room", "restaurant", "event"].map(t => (
                      <motion.button
                        key={t} type="button"
                        onClick={() => setForm({ ...form, type: t })}
                        whileHover={{ background: form.type === t ? "var(--gold-light)" : "rgba(201,168,76,0.1)" }}
                        style={{
                          flex: 1, padding: "0.8rem",
                          background: form.type === t ? "var(--gold)" : "transparent",
                          border: "1px solid rgba(201,168,76,0.3)",
                          color: form.type === t ? "var(--dark)" : "var(--text-muted)",
                          fontFamily: "var(--font-body)", fontSize: "0.68rem",
                          letterSpacing: "0.15em", textTransform: "uppercase",
                          fontWeight: form.type === t ? 600 : 400,
                          transition: "all 0.3s", marginRight: "-1px",
                        }}
                      >
                        {t === "room" ? "Room" : t === "restaurant" ? "Restaurant" : "Event"}
                      </motion.button>
                    ))}
                  </motion.div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <Field label="Full Name">
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = "var(--gold)"; e.target.style.boxShadow = "0 0 0 1px rgba(201,168,76,0.2)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(201,168,76,0.2)"; e.target.style.boxShadow = "none"; }} />
                    </Field>
                    <Field label="Email">
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = "var(--gold)"; e.target.style.boxShadow = "0 0 0 1px rgba(201,168,76,0.2)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(201,168,76,0.2)"; e.target.style.boxShadow = "none"; }} />
                    </Field>
                  </div>

                  <Field label="Phone Number">
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+254 700 000 000" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = "var(--gold)"; e.target.style.boxShadow = "0 0 0 1px rgba(201,168,76,0.2)"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(201,168,76,0.2)"; e.target.style.boxShadow = "none"; }} />
                  </Field>

                  <AnimatePresence>
                    {form.type === "room" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
                          {[{ name: "checkin", label: "Check-in", type: "date" }, { name: "checkout", label: "Check-out", type: "date" }, { name: "guests", label: "Guests", type: "number" }].map(({ name, label, type }) => (
                            <Field key={name} label={label}>
                              <input name={name} type={type} value={form[name]} onChange={handleChange}
                                min={type === "number" ? 1 : undefined} max={type === "number" ? 10 : undefined}
                                style={{ ...inputStyle, colorScheme: "dark" }}
                                onFocus={e => { e.target.style.borderColor = "var(--gold)"; e.target.style.boxShadow = "0 0 0 1px rgba(201,168,76,0.2)"; }}
                                onBlur={e => { e.target.style.borderColor = "rgba(201,168,76,0.2)"; e.target.style.boxShadow = "none"; }} />
                            </Field>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Field label="Special Requests">
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Any special requests or notes..." rows={4}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={e => { e.target.style.borderColor = "var(--gold)"; e.target.style.boxShadow = "0 0 0 1px rgba(201,168,76,0.2)"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(201,168,76,0.2)"; e.target.style.boxShadow = "none"; }} />
                  </Field>

                  <motion.button
                    type="submit"
                    className="btn-gold-fill"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ marginTop: "0.5rem", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}
                  >
                    <Send size={14} /> Send Enquiry
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Rooftop strip */}
      <section style={{ padding: "0" }}>
        <div className="grid-3-strip">
          {images.rooftop.slice(0, 3).map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ height: "300px", overflow: "hidden" }}>
              <img src={src} alt="" style={{ ...imgFit, transition: "transform 0.5s" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.06)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final banner */}
      <section style={{ position: "relative", height: "420px", overflow: "hidden" }}>
        <motion.img
          src={images.exterior[1]} alt="Hotel"
          style={{ ...imgFit, position: "absolute", inset: 0 }}
          whileInView={{ scale: [1.06, 1] }} viewport={{ once: true }} transition={{ duration: 1.4 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,7,4,0.65)" }} />
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 2rem" }}
        >
          <p className="section-label" style={{ marginBottom: "1rem" }}>The View</p>
          <div className="reveal-wrap">
            <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="reveal-text"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--cream)", fontWeight: 300 }}>
              Nairobi at Your <em style={{ color: "var(--gold)" }}>Feet</em>
            </motion.h2>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
