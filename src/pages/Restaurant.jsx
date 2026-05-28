import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MapPin, Phone } from "lucide-react";
import { images } from "../images";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" } }),
};
const imgFit = { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" };

const menuItems = {
  Starters: [
    { name: "Nyama Choma Crostini", desc: "Slow-roasted beef, chimichurri, pickled red onion", price: "$18" },
    { name: "Swahili Bisque", desc: "Coconut-spiced lobster soup, coriander oil", price: "$22" },
    { name: "Ugali & Truffle Tartlet", desc: "White corn polenta, black truffle, aged parmesan", price: "$26" },
    { name: "Avocado & Prawn", desc: "Tiger prawns, East African avocado, citrus dressing", price: "$24" },
  ],
  Mains: [
    { name: "Grilled Tilapia Victoria", desc: "Lake Victoria tilapia, saffron butter, seasonal greens", price: "$45" },
    { name: "Confession Wagyu", desc: "200g A5 wagyu, bone marrow jus, truffled potato", price: "$95" },
    { name: "Safari Lamb Rack", desc: "Herb-crusted Kenyan lamb, preserved lemon, couscous", price: "$68" },
    { name: "Vegetarian Tasting", desc: "Seven-course celebration of East African produce", price: "$55" },
  ],
  Desserts: [
    { name: "African Chocolate Fondant", desc: "Single-origin Kenyan cacao, salted caramel, vanilla ice cream", price: "$18" },
    { name: "Passion Fruit Pavlova", desc: "Meringue, tropical cream, edible flowers", price: "$16" },
    { name: "Mango & Cardamom Panna Cotta", desc: "Alphonso mango, green cardamom, pistachio crumble", price: "$15" },
  ],
};

export default function Restaurant() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div style={{ paddingTop: "100px", background: "var(--dark)", position: "relative" }}>

      {/* Hero */}
      <section ref={heroRef} style={{ position: "relative", height: "70vh", minHeight: "500px", overflow: "hidden" }}>
        <motion.img src={images.restaurant[0]} alt="Restaurant" style={{ ...imgFit, position: "absolute", inset: 0, scale: 1.1, y }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,7,4,0.95) 0%, rgba(13,7,4,0.3) 60%, transparent 100%)" }} />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
          style={{ position: "absolute", bottom: 0, left: 0, zIndex: 2, padding: "5rem 3rem", maxWidth: "700px" }}>
          <motion.p className="section-label"
            initial={{ opacity: 0, letterSpacing: "0.6em" }} animate={{ opacity: 1, letterSpacing: "0.3em" }} transition={{ duration: 1.2 }}
            style={{ marginBottom: "1rem" }}>Culinary Arts</motion.p>
          <div className="reveal-wrap">
            <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }} className="reveal-text"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 0.95 }}>
              The <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Table</em><br />& The <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Bar</em>
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* About dining */}
      <section className="section-padding">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="grid-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="section-label" style={{ marginBottom: "1.2rem" }}>Fine Dining</p>
            <div className="reveal-wrap">
              <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="reveal-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3.5rem)", color: "var(--cream)", fontWeight: 300, lineHeight: 1.1, marginBottom: "2rem" }}>
                East African flavors, <em style={{ color: "var(--gold)" }}>elevated</em>
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Our Head Chef brings together 20 years of culinary mastery, weaving the bold, aromatic traditions of East African cuisine with refined French technique.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              Every ingredient is sourced from trusted local farms and artisans, honoring the land that feeds us.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
              {[["Breakfast", "7am – 11am"], ["Lunch", "12pm – 3pm"], ["Dinner", "6pm – 11pm"]].map(([meal, time], i) => (
                <motion.div key={meal} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}>
                  <div style={{ fontFamily: "var(--font-heading)", color: "var(--gold)", fontSize: "0.95rem", marginBottom: "0.3rem" }}>{meal}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>{time}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: "6px" }}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} style={{ gridRow: "1 / 3", height: "420px", overflow: "hidden" }}>
                <img src={images.restaurant[1]} alt="" style={{ ...imgFit, transition: "transform 0.5s" }} onMouseEnter={e => e.target.style.transform = "scale(1.06)"} onMouseLeave={e => e.target.style.transform = "scale(1)"} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} style={{ height: "207px", overflow: "hidden" }}>
                <img src={images.food[0]} alt="" style={{ ...imgFit, transition: "transform 0.5s" }} onMouseEnter={e => e.target.style.transform = "scale(1.06)"} onMouseLeave={e => e.target.style.transform = "scale(1)"} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} style={{ height: "207px", overflow: "hidden" }}>
                <img src={images.food[1]} alt="" style={{ ...imgFit, transition: "transform 0.5s" }} onMouseEnter={e => e.target.style.transform = "scale(1.06)"} onMouseLeave={e => e.target.style.transform = "scale(1)"} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Food gallery */}
      <section className="section-padding" style={{ background: "var(--brown)", padding: "5rem 3rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>From the Kitchen</p>
            <div className="reveal-wrap">
              <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="reveal-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "var(--cream)", fontWeight: 400 }}>A Feast for the Eyes</motion.h2>
            </div>
            <div className="gold-line" style={{ marginTop: "1.5rem" }} />
          </motion.div>
          <div className="grid-5">
            {images.food.slice(0, 10).map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }}
                style={{ height: i === 0 || i === 5 ? "260px" : "180px", overflow: "hidden" }}>
                <img src={src} alt="" style={{ ...imgFit, transition: "transform 0.4s ease" }} onMouseEnter={e => e.target.style.transform = "scale(1.08)"} onMouseLeave={e => e.target.style.transform = "scale(1)"} />
              </motion.div>
            ))}
          </div>
          <div className="grid-5" style={{ marginTop: "6px" }}>
            {images.food.slice(10, 15).map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                style={{ height: "160px", overflow: "hidden" }}>
                <img src={src} alt="" style={{ ...imgFit, transition: "transform 0.4s ease" }} onMouseEnter={e => e.target.style.transform = "scale(1.08)"} onMouseLeave={e => e.target.style.transform = "scale(1)"} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="section-padding" style={{ background: "var(--dark)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>Tasting Menu</p>
            <div className="reveal-wrap">
              <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="reveal-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "var(--cream)", fontWeight: 400 }}>Menu Selections</motion.h2>
            </div>
            <div className="gold-line" style={{ marginTop: "1.5rem" }} />
          </motion.div>
          {Object.entries(menuItems).map(([category, items], ci) => (
            <motion.div key={category} variants={fadeUp} custom={ci} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ marginBottom: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>{category}</span>
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
                  style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.2)", transformOrigin: "left" }} />
              </div>
              {items.map(({ name, desc, price }, ii) => (
                <motion.div key={name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + ii * 0.07 }}
                  whileHover={{ x: 4 }}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "1.2rem 0", borderBottom: "1px solid rgba(201,168,76,0.07)", gap: "2rem", cursor: "none" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", color: "var(--cream)", fontWeight: 400, marginBottom: "0.3rem" }}>{name}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontStyle: "italic" }}>{desc}</div>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--gold)", flexShrink: 0 }}>{price}</div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bar */}
      <section className="section-padding" style={{ background: "var(--espresso)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>The Confession Bar</p>
            <div className="reveal-wrap">
              <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="reveal-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "var(--cream)", fontWeight: 400 }}>Cocktails & Spirits</motion.h2>
            </div>
            <div className="gold-line" style={{ marginTop: "1.5rem" }} />
          </motion.div>
          <div className="grid-4" style={{ marginBottom: "6rem" }}>
            {images.bar.slice(0, 8).map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                style={{ height: i < 4 ? "280px" : "200px", overflow: "hidden" }}>
                <img src={src} alt="" style={{ ...imgFit, transition: "transform 0.4s" }} onMouseEnter={e => e.target.style.transform = "scale(1.06)"} onMouseLeave={e => e.target.style.transform = "scale(1)"} />
              </motion.div>
            ))}
          </div>
          <div className="grid-2">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--cream)", fontWeight: 300, marginBottom: "2rem" }}>Signature <em style={{ color: "var(--gold)" }}>Cocktails</em></h3>
              {[
                { name: "The Nairobi Confession", desc: "Kenyan whisky, passion fruit, ginger, bitters", price: "$24" },
                { name: "Savanna Sunset", desc: "Hibiscus gin, elderflower, tonic, dehydrated citrus", price: "$20" },
                { name: "Kilimanjaro Mule", desc: "Vodka, ginger beer, lime, green cardamom", price: "$18" },
                { name: "Black Ivory Negroni", desc: "Black ivory coffee gin, sweet vermouth, campari", price: "$26" },
              ].map(({ name, desc, price }, i) => (
                <motion.div key={name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "1rem 0", borderBottom: "1px solid rgba(201,168,76,0.1)", gap: "1rem", cursor: "none" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-heading)", color: "var(--cream)", fontSize: "0.95rem", fontWeight: 400, marginBottom: "0.3rem" }}>{name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontStyle: "italic" }}>{desc}</div>
                  </div>
                  <span style={{ fontFamily: "var(--font-display)", color: "var(--gold)", fontSize: "1.1rem", flexShrink: 0 }}>{price}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
              whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }}
              style={{ height: "460px", overflow: "hidden" }}>
              <img src={images.bar[9]} alt="Bar" style={{ ...imgFit, transition: "transform 0.6s" }} onMouseEnter={e => e.target.style.transform = "scale(1.04)"} onMouseLeave={e => e.target.style.transform = "scale(1)"} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="section-padding" style={{ background: "var(--brown)", textAlign: "center" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>Reserve a Table</p>
          <div className="reveal-wrap">
            <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="reveal-text"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--cream)", fontWeight: 300, marginBottom: "1.5rem" }}>
              Make a Dining <em style={{ color: "var(--gold)" }}>Reservation</em>
            </motion.h2>
          </div>
          <p style={{ fontSize: "0.87rem", color: "var(--text-muted)", maxWidth: "480px", margin: "0 auto 3rem", lineHeight: 1.9 }}>
            Join us for an unforgettable evening. For reservations, please call us or visit our contact page.
          </p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {[{ Icon: Phone, text: "+254 700 123 456" }, { Icon: Clock, text: "Open Daily: 7am – 11pm" }, { Icon: MapPin, text: "Level 1 & Rooftop" }].map(({ Icon, text }, i) => (
              <motion.div key={text} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1 }}
                style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <Icon size={16} color="var(--gold)" />
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{text}</span>
              </motion.div>
            ))}
          </motion.div>
          <Link to="/contact" className="btn-gold-fill">Reserve a Table</Link>
        </motion.div>
      </section>
    </div>
  );
}
