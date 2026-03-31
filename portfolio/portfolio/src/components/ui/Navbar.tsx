"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const links = ["about", "research", "skills", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = "";
      links.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 240) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .8, ease: [.16,1,.3,1] }}
      className="fixed top-0 left-0 right-0 z-[200] h-16 px-12 flex items-center justify-between"
      style={{
        background: scrolled ? "rgba(4,6,14,.85)" : "rgba(4,6,14,.5)",
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,.05)",
        transition: "background .3s",
      }}
    >
      {/* BRAND */}
      <a href="#" className="flex items-center gap-3 cursor-none" style={{ textDecoration: "none" }}>
        <Logo size={42} />
        <div>
          <div className="grad-g-c font-orbitron font-black tracking-[4px] text-[11px]">SHASHANK</div>
          <div className="text-w3 text-[6.5px] tracking-[3px] uppercase mt-[2px]">Tripathi · EE + Data Science</div>
        </div>
      </a>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex gap-8">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            className="relative text-[9px] tracking-[2px] uppercase cursor-none transition-colors duration-200"
            style={{ color: active === l ? "rgba(255,255,255,.9)" : "rgba(255,255,255,.3)", background: "none", border: "none" }}
          >
            {l}
            <motion.div
              className="absolute bottom-[-2px] left-0 right-0 h-px"
              style={{ background: "var(--g)" }}
              animate={{ scaleX: active === l ? 1 : 0 }}
              transition={{ duration: .3 }}
              initial={{ scaleX: 0 }}
            />
          </button>
        ))}
      </div>

      {/* MOBILE HAMBURGER */}
      <button className="md:hidden flex flex-col gap-[5px] cursor-none" onClick={() => setMobileOpen(!mobileOpen)}>
        {[0,1,2].map(i => (
          <motion.div key={i} className="h-[1px] bg-w2"
            animate={{ width: i === 1 ? (mobileOpen ? "60%" : "100%") : "100%" }}
            style={{ width: "24px" }}
          />
        ))}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 flex flex-col gap-1 p-6 glass"
          >
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)}
                className="text-left py-3 px-4 text-[10px] tracking-[2px] uppercase text-w2 hover:text-g border-b border-white/5 cursor-none"
                style={{ background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,.05)" }}
              >
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
