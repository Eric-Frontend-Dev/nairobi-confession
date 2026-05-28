import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Wifi, Coffee, Bath, Wind } from "lucide-react";
import { images } from "../images";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" } }),
};
const imgFit = { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" };

const rooms = [
  { name: "Deluxe Room", tagline: "City views, refined comfort", price: 280, size: "42 sqm", img: images.bedroom[0], thumbs: [images.bedroom[1], images.bedroom[2]], amenities: ["King-size bed", "City view", "Rain shower", "Minibar", "Smart TV", "Free WiFi"] },
  { name: "Superior Suite", tagline: "Space, elegance, and style", price: 420, size: "68 sqm", img: images.bedroom[5], thumbs: [images.bedroom[6], images.bedroom[7]], amenities: ["King-size bed", "Separate lounge", "Soaking tub", "Nespresso machine", "Panoramic view", "Butler service"], featured: true },
  { name: "Executive Suite", tagline: "Designed for discerning travelers", price: 580, size: "95 sqm", img: images.bedroom[10], thumbs: [images.bedroom[11], images.bedroom[12]], amenities: ["Master bedroom", "Private dining", "Jacuzzi", "Walk-in wardrobe", "Office space", "Complimentary minibar"] },
  { name: "Presidential Suite", tagline: "The pinnacle of Nairobi luxury", price: 950, size: "180 sqm", img: images.bedroom[15], thumbs: [images.bedroom[16], images.bedroom[17]], amenities: ["Two bedrooms", "Private rooftop terrace", "Private pool", "Personal chef", "Rolls Royce transfer", "24hr butler"] },
];

export default function Rooms() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div style={{ paddingTop: "100px", background: "var(--dark)", position: "relative" }}>

      {/* Hero */}
      <section ref={heroRef} style={{ position: "relative", height: "60vh", minHeight: "420px", overflow: "hidden" }}>
        <motion.img src={images.bedroom[4]} alt="Rooms" style={{ ...imgFit, position: "absolute", inset: 0, scale: 1.1, y }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(13,7,4,0.55), rgba(13,7,4,0.72))" }} />
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
          >Accommodation</motion.p>
          <div className="reveal-wrap">
            <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }} className="reveal-text"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, color: "var(--cream)" }}>
              Rooms & <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Suites</em>
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Perks strip */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        style={{ background: "var(--brown)", padding: "2.5rem 3rem", display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        className="perks-strip"
      >
        {[{ Icon: Wifi, label: "Complimentary WiFi" }, { Icon: Coffee, label: "Daily Breakfast" }, { Icon: Bath, label: "Luxury Toiletries" }, { Icon: Wind, label: "Climate Control" }].map(({ Icon, label }, i) => (
          <motion.div key={label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <Icon size={18} color="var(--gold)" />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase" }}>{label}</span>
          </motion.div>
        ))}
      </motion.section>

      {/* Rooms list */}
      <section className="section-padding" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {rooms.map(({ name, tagline, price, size, img, thumbs, amenities, featured }, i) => (
          <motion.div key={name} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="room-grid" style={{ marginBottom: "7rem", position: "relative" }}>
            {featured && (
              <motion.div
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                style={{ position: "absolute", top: "-1rem", right: 0, background: "var(--gold)", padding: "0.4rem 1.2rem", fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--dark)", fontWeight: 600, zIndex: 10 }}>
                Most Popular
              </motion.div>
            )}
            <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }} style={{ height: "400px", overflow: "hidden", marginBottom: "6px" }}>
                <motion.img src={img} alt={name} style={{ ...imgFit }} whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }} />
              </motion.div>
              <div className="grid-3" style={{ gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                {thumbs.map((src, j) => (
                  <motion.div key={j} whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }} style={{ height: "130px", overflow: "hidden" }}>
                    <img src={src} alt="" style={{ ...imgFit, transition: "transform 0.4s" }}
                      onMouseEnter={e => e.target.style.transform = "scale(1.08)"}
                      onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                  </motion.div>
                ))}
              </div>
            </div>
            <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
              <p className="section-label" style={{ marginBottom: "0.8rem" }}>{size}</p>
              <div className="reveal-wrap">
                <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="reveal-text"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "var(--cream)", fontWeight: 400, marginBottom: "0.5rem" }}>
                  {name}
                </motion.h2>
              </div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontStyle: "italic", color: "var(--gold)", marginBottom: "1.5rem" }}>{tagline}</p>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "1.5rem", transformOrigin: "left" }} />
              <ul style={{ marginBottom: "2rem" }}>
                {amenities.map((a, ai) => (
                  <motion.li key={a}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + ai * 0.06 }}
                    style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.6rem" }}
                  >
                    <Check size={14} color="var(--gold)" />
                    <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{a}</span>
                  </motion.li>
                ))}
              </ul>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--gold)" }}>${price}</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginLeft: "0.4rem" }}>/ night</span>
                </div>
                <Link to="/contact" className="btn-gold" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  Book Now <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Pool hero — FIXED: responsive height + white visible text */}
      <section style={{ position: "relative", overflow: "hidden" }} className="pool-banner">
        <motion.img
          src={images.pool[0]} alt="Pool"
          style={{ ...imgFit, position: "absolute", inset: 0 }}
          whileInView={{ scale: [1.06, 1] }} viewport={{ once: true }} transition={{ duration: 1.4 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,7,4,0.58)" }} />
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 2rem" }}>
          <motion.p className="section-label" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ marginBottom: "1rem" }}>Exclusive Amenity</motion.p>
          <div className="reveal-wrap">
            <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="reveal-text"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--cream)", fontWeight: 300, marginBottom: "1.5rem" }}>
              Rooftop <em style={{ color: "var(--gold)" }}>Infinity Pool</em>
            </motion.h2>
          </div>
          {/* FIXED: white + strong shadow for accessibility */}
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{
              fontSize: "0.95rem",
              color: "#FFFFFF",
              maxWidth: "500px",
              lineHeight: 1.9,
              textShadow: "0 2px 20px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,0.95)",
              fontWeight: 400,
            }}
          >
            Swim above the city skyline in our heated infinity pool. Open daily from 7am to 10pm.
          </motion.p>
        </div>
      </section>

      <section style={{ background: "var(--espresso)", padding: "4px" }}>
        <div className="grid-5">
          {images.pool.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              style={{ height: "220px", overflow: "hidden" }}>
              <img src={src} alt="" style={{ ...imgFit, transition: "transform 0.4s" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.07)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"} />
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        .pool-banner { height: 500px; }
        @media (max-width: 768px) {
          .pool-banner { height: auto; min-height: 420px; padding: 5rem 0; display: flex; flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
