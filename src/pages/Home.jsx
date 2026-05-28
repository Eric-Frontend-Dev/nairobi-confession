import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Wifi, Car, UtensilsCrossed, Waves } from "lucide-react";
import { images } from "../images";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

const imgFit = { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" };

const handleTilt = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rotateX = ((y - rect.height / 2) / rect.height) * -6;
  const rotateY = ((x - rect.width / 2) / rect.width) * 6;
  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
};
const resetTilt = (e) => {
  e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div style={{ position: "relative" }}>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ position: "relative", height: "100vh", minHeight: "700px", overflow: "hidden" }}>
        <motion.img
          src={images.lobby[0]}
          alt="Nairobi Confession Hotel"
          style={{ ...imgFit, position: "absolute", inset: 0, scale: heroScale, y }}
        />

        {/* Overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(13,7,4,0.5) 0%, rgba(13,7,4,0.25) 40%, rgba(13,7,4,0.88) 100%)" }} />

        {/* Animated side lines — hidden on mobile */}
        <motion.div
          className="hero-side-line"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top", position: "absolute", top: "22%", left: "5%", width: "1px", height: "100px", background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }}
        />
        <motion.div
          className="hero-side-line"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top", position: "absolute", top: "22%", right: "5%", width: "1px", height: "100px", background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }}
        />

        {/* Hero content */}
        <motion.div style={{ opacity: heroOpacity }} className="hero-content-center">
          <div style={{ textAlign: "center", padding: "0 1.5rem" }}>

            {/* "Welcome to" — FIXED: white with strong shadow for full accessibility */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.8em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ duration: 1.4 }}
              className="section-label"
              style={{
                marginBottom: "1.5rem",
                color: "#FFFFFF",
                textShadow: "0 2px 20px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,0.9)",
                fontWeight: 600,
              }}
            >
              Welcome to
            </motion.p>

            <div className="reveal-wrap">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="reveal-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 300, lineHeight: 0.95, color: "var(--cream)", marginBottom: "0.3rem" }}
              >
                Nairobi
              </motion.h1>
            </div>
            <div className="reveal-wrap">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="reveal-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 600, fontStyle: "italic", lineHeight: 0.95, color: "var(--gold)", marginBottom: "2rem" }}
              >
                Confession
              </motion.h1>
            </div>

            {/* Tagline — FIXED: white + layered shadow for full accessibility */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                letterSpacing: "0.06em",
                color: "#FFFFFF",
                maxWidth: "520px",
                margin: "0 auto 3rem",
                lineHeight: 1.9,
                textShadow: "0 2px 20px rgba(0,0,0,1), 0 0 50px rgba(0,0,0,0.95), 0 4px 30px rgba(0,0,0,0.9)",
                fontWeight: 400,
              }}
            >
              Where every story begins. A sanctuary of African elegance at the heart of Nairobi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
            >
              <Link to="/rooms" className="btn-gold-fill">Reserve a Room</Link>
              <Link to="/restaurant" className="btn-gold">View Restaurant</Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", zIndex: 2 }}
        >
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.3em", color: "rgba(255,255,255,0.7)", textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--gold), transparent)" }}
          />
        </motion.div>
      </section>

      {/* ── STATS STRIP ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ background: "var(--gold)", padding: "2rem 3rem" }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1.5rem", textAlign: "center" }}>
          {[["15+", "Years of Excellence"], ["48", "Luxury Suites"], ["4.9★", "Guest Rating"], ["3", "Award-winning Venues"]].map(([num, label], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "var(--dark)", lineHeight: 1 }}>{num}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(13,7,4,0.7)", marginTop: "4px" }}>{label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── INTRO ── */}
      <section className="section-padding" style={{ background: "var(--dark)", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="grid-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="section-label" style={{ marginBottom: "1.2rem" }}>Our Story</p>
            <div className="reveal-wrap">
              <motion.h2
                initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="reveal-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 400, lineHeight: 1.1, color: "var(--cream)", marginBottom: "2rem" }}
              >
                A confession of luxury, <em style={{ color: "var(--gold)", fontStyle: "italic" }}>whispered in gold</em>
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Nestled in the vibrant heart of Nairobi, our hotel is more than a destination — it's an intimate experience. We blend the warmth of African hospitality with the refinement of world-class luxury.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              From our award-winning restaurant to our meticulously designed suites, every detail has been crafted to tell a story — yours.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Link to="/contact" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Discover More <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div style={{ position: "relative" }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                style={{ width: "100%", height: "500px", overflow: "hidden" }}
              >
                <img src={images.lobby[1]} alt="Hotel interior" style={{ ...imgFit, transition: "transform 0.7s ease" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.06)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"}
                />
              </motion.div>
              {/* Decorative border — FIXED: stays inside container on mobile */}
              <div className="deco-border-box" />
              {/* 15+ badge — FIXED: positioned safely inside image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="years-badge"
              >
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, color: "var(--dark)", lineHeight: 1 }}>15+</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--dark)", textTransform: "uppercase" }}>Years of Excellence</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="section-padding" style={{ background: "var(--brown)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>World Class</p>
            <div className="reveal-wrap">
              <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="reveal-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "var(--cream)", fontWeight: 400 }}>
                Amenities & Services
              </motion.h2>
            </div>
            <div className="gold-line" style={{ marginTop: "1.5rem" }} />
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
            {[
              { Icon: Waves, label: "Infinity Pool", desc: "Heated rooftop pool with panoramic city views" },
              { Icon: UtensilsCrossed, label: "Fine Dining", desc: "Award-winning cuisine with African & international flavors" },
              { Icon: Wifi, label: "Premium Wifi", desc: "High-speed connectivity throughout the property" },
              { Icon: Car, label: "Valet Parking", desc: "Complimentary valet service for all guests" },
              { Icon: Star, label: "Spa & Wellness", desc: "Full-service spa with traditional African treatments" },
            ].map(({ Icon, label, desc }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="tilt-card amenity-card"
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                whileHover={{ borderColor: "rgba(201,168,76,0.5)" }}
                style={{ padding: "2.5rem 2rem", border: "1px solid rgba(201,168,76,0.1)", background: "rgba(13,7,4,0.4)", cursor: "none", transition: "border-color 0.3s" }}
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                >
                  <Icon size={28} color="var(--gold)" style={{ marginBottom: "1.2rem" }} />
                </motion.div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: "var(--cream)", marginBottom: "0.8rem", fontWeight: 400 }}>{label}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{desc}</p>
                {/* Gold hover line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ marginTop: "1.5rem", height: "1px", background: "var(--gold)", transformOrigin: "left", opacity: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROOMS PREVIEW ── */}
      <section className="section-padding" style={{ background: "var(--dark)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>Stay With Us</p>
            <div className="reveal-wrap">
              <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="reveal-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "var(--cream)", fontWeight: 400 }}>
                Rooms & Suites
              </motion.h2>
            </div>
            <div className="gold-line" style={{ marginTop: "1.5rem" }} />
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              { name: "Deluxe Room", desc: "Sophisticated comfort with city views", price: "From $280 / night", img: images.bedroom[0] },
              { name: "Executive Suite", desc: "Spacious living area with premium amenities", price: "From $480 / night", img: images.bedroom[5] },
              { name: "Presidential Suite", desc: "The ultimate Nairobi experience", price: "From $950 / night", img: images.bedroom[10] },
            ].map(({ name, desc, price, img }, i) => (
              <motion.div
                key={name}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="tilt-card room-card"
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                <div style={{ position: "relative", overflow: "hidden", height: "280px", marginBottom: "1.5rem" }}>
                  <motion.img
                    src={img}
                    alt={name}
                    style={{ ...imgFit }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,7,4,0.6) 0%, transparent 60%)" }} />
                  {/* Price tag on image */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(13,7,4,0.85)", border: "1px solid rgba(201,168,76,0.3)", padding: "0.4rem 0.8rem", backdropFilter: "blur(6px)" }}
                  >
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "var(--gold)" }}>{price.replace("From ", "")}</span>
                  </motion.div>
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", color: "var(--cream)", fontWeight: 400, marginBottom: "0.5rem" }}>{name}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1.2rem" }}>{desc}</p>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Link to="/rooms" style={{ fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    View <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link to="/rooms" className="btn-gold">View All Rooms</Link>
          </motion.div>
        </div>
      </section>

      {/* ── RESTAURANT BANNER ── */}
      <section className="restaurant-banner" style={{ position: "relative", overflow: "hidden" }}>
        <motion.img
          src={images.restaurant[0]}
          alt="Restaurant"
          style={{ ...imgFit, position: "absolute", inset: 0 }}
          whileInView={{ scale: [1.06, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        {/* FIXED: gradient goes to bottom on mobile, right on desktop */}
        <div className="banner-overlay" />
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }} className="banner-padding">
          <div style={{ maxWidth: "580px" }}>
            <motion.p className="section-label" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ marginBottom: "1rem" }}>Dining Experience</motion.p>
            <div className="reveal-wrap">
              <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="reveal-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 4vw, 4rem)", color: "var(--cream)", fontWeight: 300, lineHeight: 1.1, marginBottom: "1.5rem" }}>
                A culinary <em style={{ color: "var(--gold)" }}>confession</em>
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}
              style={{ fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              Our chefs weave together the bold flavors of East Africa with contemporary techniques, creating dishes that are at once familiar and revelatory.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Link to="/restaurant" className="btn-gold">Explore Menu</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section-padding" style={{ background: "var(--espresso)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>Gallery</p>
            <div className="reveal-wrap">
              <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="reveal-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "var(--cream)", fontWeight: 400 }}>
                Moments at Nairobi Confession
              </motion.h2>
            </div>
            <div className="gold-line" style={{ marginTop: "1.5rem" }} />
          </motion.div>
          <div className="gallery-grid">
            {[
              { img: images.pool[0], style: { gridColumn: "1 / 3", gridRow: "1 / 2" } },
              { img: images.bar[0], style: { gridColumn: "3 / 4", gridRow: "1 / 2" } },
              { img: images.food[0], style: { gridColumn: "4 / 5", gridRow: "1 / 2" } },
              { img: images.lobby[3], style: { gridColumn: "1 / 2", gridRow: "2 / 3" } },
              { img: images.bedroom[3], style: { gridColumn: "2 / 4", gridRow: "2 / 3" } },
              { img: images.restaurant[2], style: { gridColumn: "4 / 5", gridRow: "2 / 3" } },
            ].map(({ img, style }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                style={{ ...style, overflow: "hidden", position: "relative" }}
                className="gallery-item"
              >
                <motion.img
                  src={img}
                  alt=""
                  style={{ ...imgFit }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ position: "absolute", inset: 0, background: "rgba(201,168,76,0.12)", pointerEvents: "none" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding" style={{ background: "var(--dark)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>Guest Reviews</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "var(--cream)", fontWeight: 400, marginBottom: "4rem" }}>
            Words from Our Guests
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              { name: "Amara Osei", origin: "Accra, Ghana", text: "Nairobi Confession redefined what luxury means to me. The service, the food, the atmosphere — all absolutely exceptional." },
              { name: "James Whitfield", origin: "London, UK", text: "I've stayed at many five-star hotels worldwide. This is the one I keep returning to. There's a warmth here that's impossible to replicate." },
              { name: "Yasmin Al-Rashid", origin: "Dubai, UAE", text: "The presidential suite took my breath away. Every detail was perfect, from the linen to the view. Truly unforgettable." },
            ].map(({ name, origin, text }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
                style={{ padding: "2.5rem", border: "1px solid rgba(201,168,76,0.15)", background: "var(--brown)", textAlign: "left", transition: "border-color 0.3s", cursor: "none" }}
              >
                <div style={{ display: "flex", gap: "4px", marginBottom: "1.2rem" }}>
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 + j * 0.05, type: "spring" }}
                    >
                      <Star size={14} fill="var(--gold)" color="var(--gold)" />
                    </motion.div>
                  ))}
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.8, fontStyle: "italic", marginBottom: "1.5rem" }}>"{text}"</p>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", color: "var(--cream)", fontSize: "0.95rem" }}>{name}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--gold)", letterSpacing: "0.1em" }}>{origin}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ position: "relative", padding: "8rem 3rem", background: "var(--brown)", textAlign: "center", overflow: "hidden" }}>
        {/* Decorative rings — overflow hidden on parent prevents scroll bleed */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", border: "1px solid rgba(201,168,76,0.07)", borderRadius: "50%", pointerEvents: "none" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "380px", height: "380px", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "50%", pointerEvents: "none" }}
        />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ position: "relative", zIndex: 2 }}>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>Begin Your Story</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "var(--cream)", fontWeight: 300, lineHeight: 1.1, marginBottom: "2rem" }}>
            Your <em style={{ color: "var(--gold)", fontStyle: "italic" }}>confession</em> awaits
          </h2>
          <p style={{ fontSize: "0.87rem", color: "var(--text-muted)", maxWidth: "480px", margin: "0 auto 3rem", lineHeight: 1.9 }}>
            Reserve your stay at Nairobi Confession and allow us to craft an experience worthy of a thousand stories.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link to="/rooms" className="btn-gold-fill">Book Your Stay</Link>
            <Link to="/contact" className="btn-gold">Contact Us</Link>
          </motion.div>
        </motion.div>
      </section>

      <style>{`
        .hero-content-center {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center; z-index: 2;
        }
        /* FIXED: badge inside image bounds */
        .years-badge {
          position: absolute; top: 1rem; right: 1rem;
          background: var(--gold); padding: 1.2rem 1.4rem; text-align: center;
        }
        /* FIXED: decorative box repositioned for mobile */
        .deco-border-box {
          position: absolute; bottom: -1.5rem; left: -1.5rem;
          width: 160px; height: 160px;
          border: 1px solid rgba(201,168,76,0.25); z-index: -1;
          pointer-events: none;
        }
        /* FIXED: restaurant banner height responsive */
        .restaurant-banner {
          height: 600px;
        }
        /* FIXED: gradient adapts per axis */
        .banner-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(13,7,4,0.92) 35%, rgba(13,7,4,0.2) 100%);
        }
        @media (max-width: 768px) {
          .hero-side-line { display: none; }
          .deco-border-box { display: none; }
          .years-badge { top: 0.7rem; right: 0.7rem; padding: 0.9rem 1rem; }
          .restaurant-banner { height: auto; min-height: 480px; padding: 5rem 0; }
          .banner-overlay {
            background: linear-gradient(to bottom, rgba(13,7,4,0.3) 0%, rgba(13,7,4,0.92) 70%);
          }
        }
      `}</style>
    </div>
  );
}
