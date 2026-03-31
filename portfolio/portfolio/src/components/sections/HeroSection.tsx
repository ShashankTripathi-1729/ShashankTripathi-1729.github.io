"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("@/components/three/ParticleField"), { ssr: false });

const chips = [
  { label: "Power Electronics", cls: "border-g/20 bg-g/8 text-g" },
  { label: "Data Science",      cls: "border-cyan/20 bg-cyan/8 text-cyan" },
  { label: "Model-Free MPC",    cls: "border-amber/20 bg-amber/8 text-amber" },
  { label: "SiC / GaN",         cls: "border-purple/20 bg-purple/8 text-purple" },
];

const barItems = [
  { icon: "🎓", num: "2",  label: "Degrees in Progress", color: "#00ff87" },
  { icon: "🔬", num: "3",  label: "Research Projects",   color: "#00d4ff" },
  { icon: "📄", num: "2",  label: "Manuscripts in Prep", color: "#ffb700" },
  { icon: "⚡", num: "∞",  label: "LTspice Sims",        color: "#c084fc" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 110]); // SHASHANK parallax
  const y2 = useTransform(scrollY, [0, 600], [0, 70]);  // TRIPATHI parallax

  return (
    <section ref={ref} id="hero" className="relative h-screen overflow-hidden flex items-center grain">
      {/* SPLINE ROBOT */}
      <div className="absolute inset-0 z-[1]">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-1hH1KhbzLIPjxayQ0SSUuGw7/"
          frameBorder="0"
          allowFullScreen
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{ background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(4,6,14,.78) 100%)" }} />
      <div className="scanlines absolute inset-0 z-[3] pointer-events-none opacity-[.018]" />
      <div className="absolute inset-0 z-[4] pointer-events-none" style={{ background: "linear-gradient(95deg, rgba(4,6,14,.97) 0%, rgba(4,6,14,.88) 28%, rgba(4,6,14,.4) 52%, rgba(4,6,14,0) 68%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[5] pointer-events-none" style={{ background: "linear-gradient(to top, rgba(4,6,14,.95) 0%, transparent 100%)" }} />
      <div className="absolute top-0 left-0 right-0 h-24 z-[5] pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(4,6,14,.7) 0%, transparent 100%)" }} />
      <ParticleField />
      <div className="tech-grid absolute inset-0 z-[7] pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-[10] px-20 max-w-[680px] pointer-events-none">
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, duration: .7, ease: [.16,1,.3,1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 text-[8px] tracking-[3px] border rounded-none"
          style={{ color: "#00cc6a", background: "rgba(0,255,135,.07)", borderColor: "rgba(0,255,135,.2)", backdropFilter: "blur(10px)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-g animate-pulse-dot inline-block" />
          Available for Research Collaboration
        </motion.div>

        {/* NAME */}
        <div className="mb-7" style={{ fontSize: "clamp(62px,9.5vw,118px)", lineHeight: ".88" }}>
          <motion.span className="hero-name-1" style={{ y: y1, display: "block" }}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .35, duration: .9, ease: [.16,1,.3,1] }}>
            SHASHANK
          </motion.span>
          <motion.span className="hero-name-2" style={{ y: y2, display: "block" }}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .48, duration: .9, ease: [.16,1,.3,1] }}>
            TRIPATHI
          </motion.span>
        </div>

        {/* role */}
        <motion.p
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .6, duration: .8, ease: [.16,1,.3,1] }}
          className="text-[11px] tracking-[1.5px] leading-[2.2] mb-9"
          style={{ color: "rgba(255,255,255,.38)" }}
        >
          Power Electronics &nbsp;<span style={{ color: "rgba(0,212,255,.7)" }}>·</span>&nbsp; Data Science<br/>
          Real-Time Control &nbsp;<span style={{ color: "rgba(0,212,255,.7)" }}>·</span>&nbsp; RGIPT + IIT Madras
        </motion.p>

        {/* chips */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .72, duration: .8, ease: [.16,1,.3,1] }}
          className="flex flex-wrap gap-2 mb-11"
        >
          {chips.map(c => (
            <span key={c.label}
              className={`px-3 py-1.5 text-[8px] tracking-[1.5px] border font-mono ${c.cls}`}
              style={{ backdropFilter: "blur(8px)", borderRadius: "2px" }}>
              {c.label}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .85, duration: .8, ease: [.16,1,.3,1] }}
          whileHover={{ y: -3, boxShadow: "0 14px 40px rgba(0,255,135,.35)" }}
          whileTap={{ scale: .97 }}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-3 px-8 py-3.5 text-[9px] font-bold tracking-[2.5px] font-mono pointer-events-auto cursor-none"
          style={{ background: "linear-gradient(90deg,#00ff87,#00d4ff)", color: "#020810" }}
        >
          View My Work <span>↓</span>
        </motion.button>
      </div>

      {/* BOTTOM BAR */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: .9, ease: [.16,1,.3,1] }}
        className="absolute bottom-14 left-20 right-14 z-[10] flex pointer-events-none"
      >
        {barItems.map((item, i) => (
          <div key={i} className="flex-1 flex items-center gap-3 px-5 py-4"
            style={{ background: "rgba(4,6,14,.65)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.07)", borderRight: i < barItems.length - 1 ? "none" : "1px solid rgba(255,255,255,.07)" }}>
            <span className="text-lg opacity-70">{item.icon}</span>
            <div>
              <div className="font-orbitron font-black text-lg leading-none"
                style={{ color: item.color, textShadow: `0 0 14px ${item.color}` }}>
                {item.num}
              </div>
              <div className="text-[7.5px] tracking-[1.5px] uppercase mt-1" style={{ color: "rgba(255,255,255,.3)" }}>
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* SCROLL INDICATOR */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-[10] flex flex-col items-center gap-1.5 text-[7px] tracking-[3px] pointer-events-none"
        style={{ color: "rgba(255,255,255,.2)", writingMode: "vertical-rl" }}>
        SCROLL
        <div className="w-px h-12 animate-scan-line" style={{ background: "linear-gradient(to bottom, rgba(0,255,135,.5), transparent)" }} />
      </div>
    </section>
  );
}
