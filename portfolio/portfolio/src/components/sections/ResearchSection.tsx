"use client";
import { motion } from "framer-motion";

const papers = [
  {
    title: "Active Gate Driver Technologies — Comprehensive Review & Analysis",
    badge: "IEEE / Elsevier · In Prep",
    desc: "Systematic review of active gate driving for Si MOSFETs, SiC MOSFETs, and GaN HEMTs. Covers dv/dt & di/dt shaping for EMI mitigation and switching loss optimization. Comparative analysis of open-loop, closed-loop, and adaptive AGD architectures. First draft complete.",
    tags: ["SiC MOSFETs","GaN HEMTs","EMI Mitigation","Switching Loss","Adaptive Control","dv/dt Control"],
    color: "#00ff87",
  },
  {
    title: "Model-Free MPC — Methods & Applications in Power Electronics",
    badge: "Preparing Submission",
    desc: "Full taxonomy of MF-MPC frameworks eliminating dependency on explicit plant models. Ultra-local models, data-driven linearization, and learning-based MPC for nonlinear power systems applied to motor drives and DC-DC converters under parameter uncertainty.",
    tags: ["Model-Free Control","Ultra-Local Models","Motor Drives","DC-DC Converters","Data-Driven MPC"],
    color: "#00d4ff",
  },
  {
    title: "DC-DC Converter Optimization — Control-Oriented Modeling & Transient Analysis",
    badge: "Ongoing",
    desc: "Switching transient analysis for buck, boost, and buck-boost topologies in LTspice. State-space modeling with duty-ratio sensitivity in MATLAB/Simulink. Closed-loop stability, ripple analysis, load-adaptive control. Hardware validation planned.",
    tags: ["LTspice","MATLAB/Simulink","Buck/Boost","State-Space","Transient Analysis"],
    color: "#ffb700",
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="relative z-20 py-32 px-20" style={{ background: "#070a14" }}>
      <div className="max-w-[1060px] mx-auto">
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 text-[8px] tracking-[5px] uppercase mb-3" style={{ color: "#2e4455" }}>
            <div className="w-7 h-px" style={{ background: "linear-gradient(to right, transparent, #2e4455)" }}/>
            02 &nbsp; Research
          </div>
          <h2 className="font-syne font-black" style={{ fontSize: "clamp(34px,5vw,58px)", lineHeight: 1.05 }}>
            <span style={{ color: "#f0f8ff" }}>What I'm </span>
            <span className="grad-g-c">building</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {papers.map((p, i) => (
            <motion.div key={i}
              className="reveal-left relative overflow-hidden border"
              data-delay={String(i + 1)}
              style={{ borderColor: "rgba(255,255,255,.06)", background: "rgba(255,255,255,.025)", backdropFilter: "blur(6px)" }}
              whileHover={{ x: 6, borderColor: "rgba(255,255,255,.14)", background: "rgba(255,255,255,.04)" }}
              transition={{ duration: .3 }}
            >
              {/* accent line */}
              <motion.div className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ background: `linear-gradient(to bottom, transparent, ${p.color}, transparent)`, scaleY: 0, transformOrigin: "center" }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: .5, ease: [.16,1,.3,1] }}
              />
              {/* radial bg on hover */}
              <motion.div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${p.color} 0%, transparent 50%)`, opacity: 0 }}
                whileHover={{ opacity: .06 }}
                transition={{ duration: .4 }}
              />

              <div className="relative p-8">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="font-syne font-bold text-[14.5px] leading-[1.35]" style={{ color: "#f0f8ff" }}>{p.title}</h3>
                  <span className="text-[7px] tracking-[1.5px] px-3 py-1.5 border uppercase flex-shrink-0 mt-0.5"
                    style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}08`, backdropFilter: "blur(8px)" }}>
                    {p.badge}
                  </span>
                </div>
                <p className="text-[11.5px] leading-[1.9] mb-4" style={{ color: "#8aa8ba" }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(t => (
                    <span key={t} className="text-[8px] px-2.5 py-1 border"
                      style={{ borderColor: "rgba(255,255,255,.1)", color: "#2e4455", background: "rgba(255,255,255,.03)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
