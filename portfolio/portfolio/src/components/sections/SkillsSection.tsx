"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const cats = [
  { icon: "⚡", title: "Simulation & Design", sub: "Circuit & system modelling", color: "#ffb700",
    skills: [["LTspice",88],["MATLAB",85],["Simulink",83],["AutoCAD",65]] },
  { icon: "💻", title: "Programming",          sub: "Languages & data stack",    color: "#00ff87",
    skills: [["Python",92],["C / Embedded",70],["SQL",68],["Java",60]] },
  { icon: "🎛️", title: "Control Theory",      sub: "Methods & frameworks",      color: "#00d4ff",
    skills: [["Model Predictive Control",82],["Model-Free Control",80],["Adaptive Control",75],["Closed-Loop Analysis",78]] },
  { icon: "🔌", title: "Hardware & Systems",   sub: "Devices & platforms",       color: "#c084fc",
    skills: [["Power Electronics",80],["Gate Driver Design",78],["FPGA Development",62],["HIL Validation",68]] },
];

const tools = [
  { name:"LTspice",          cat:"Circuit Sim",       pct:88, color:"#ffb700" },
  { name:"MATLAB",           cat:"Control & Analysis", pct:85, color:"#ffb700" },
  { name:"Simulink",         cat:"System Modelling",  pct:83, color:"#ffb700" },
  { name:"Python",           cat:"Data & Scripts",    pct:92, color:"#00ff87" },
  { name:"NumPy / SciPy",    cat:"Scientific Comp",   pct:90, color:"#00ff87" },
  { name:"Pandas/Matplotlib",cat:"Data Analysis",     pct:85, color:"#00ff87" },
  { name:"C Embedded",       cat:"MCU Programming",   pct:70, color:"#00ff87" },
  { name:"PostgreSQL",       cat:"Database",          pct:68, color:"#00ff87" },
  { name:"FPGA Boards",      cat:"Real-Time HW",      pct:62, color:"#00d4ff" },
  { name:"HIL Validation",   cat:"Hardware-in-Loop",  pct:65, color:"#00d4ff" },
  { name:"Microcontrollers", cat:"Embedded Systems",  pct:70, color:"#00d4ff" },
  { name:"LaTeX",            cat:"Technical Writing", pct:85, color:"#c084fc" },
  { name:"Git / GitHub",     cat:"Version Control",   pct:82, color:"#c084fc" },
  { name:"Jupyter",          cat:"Notebooks",         pct:88, color:"#c084fc" },
  { name:"AutoCAD",          cat:"Technical Drawing", pct:65, color:"#ffb700" },
  { name:"Java",             cat:"OOP & Algorithms",  pct:60, color:"#c084fc" },
];

function SkillBar({ pct, color }: { pct: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} className="h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,.06)" }}>
      <motion.div className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}cc)`, width: 0 }}
        animate={inView ? { width: `${pct}%` } : {}}
        transition={{ duration: 1.3, ease: [.16,1,.3,1], delay: .3 }}
      />
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-20 py-32 px-20" style={{ background: "#04060e" }}>
      <div className="max-w-[1060px] mx-auto">
        <div className="reveal mb-6">
          <div className="flex items-center gap-3 text-[8px] tracking-[5px] uppercase mb-3" style={{ color: "#2e4455" }}>
            <div className="w-7 h-px" style={{ background: "linear-gradient(to right, transparent, #2e4455)" }}/>
            03 &nbsp; Skills
          </div>
          <h2 className="font-syne font-black" style={{ fontSize: "clamp(34px,5vw,58px)", lineHeight: 1.05 }}>
            <span style={{ color: "#f0f8ff" }}>What I </span>
            <span className="grad-g-c">work with</span>
          </h2>
        </div>
        <p className="reveal text-[12.5px] leading-[2.1] mb-16 max-w-[600px]" style={{ color: "#8aa8ba" }}>
          My technical stack spans simulation, programming, control theory, and hardware — colour-coded by domain.
        </p>

        {/* 4 CATEGORY CARDS */}
        <div className="grid grid-cols-4 gap-3.5 mb-14">
          {cats.map((c, i) => (
            <motion.div key={i}
              className="reveal-scale relative overflow-hidden border p-7"
              data-delay={String(i + 1)}
              style={{ borderColor: "rgba(255,255,255,.06)", background: "rgba(255,255,255,.025)", backdropFilter: "blur(8px)" }}
              whileHover={{ y: -6, borderColor: "rgba(255,255,255,.12)", boxShadow: `0 24px 64px rgba(0,0,0,.5), 0 0 0 1px rgba(255,255,255,.08)` }}
              transition={{ duration: .3 }}
            >
              {/* top gradient line */}
              <div className="absolute top-0 left-[20%] right-[20%] h-px opacity-50"
                style={{ background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }} />
              {/* radial bg */}
              <motion.div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(circle at top center, ${c.color} 0%, transparent 65%)`, opacity: .08 }}
                whileHover={{ opacity: .15 }} transition={{ duration: .3 }}
              />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4 border"
                  style={{ background: "rgba(255,255,255,.05)", borderColor: "rgba(255,255,255,.06)" }}>
                  {c.icon}
                </div>
                <div className="font-syne font-bold text-[12.5px] mb-1" style={{ color: "#f0f8ff" }}>{c.title}</div>
                <div className="text-[8.5px] tracking-px mb-5" style={{ color: "#2e4455" }}>{c.sub}</div>
                <div className="flex flex-col gap-2.5">
                  {c.skills.map(([name, pct]) => (
                    <div key={name}>
                      <div className="flex justify-between text-[9.5px] mb-1">
                        <span style={{ color: "#8aa8ba" }}>{name}</span>
                        <span className="font-orbitron text-[9px]" style={{ color: "#2e4455" }}>{pct}</span>
                      </div>
                      <SkillBar pct={pct as number} color={c.color} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TOOLS GRID */}
        <div className="reveal" data-delay="2">
          <div className="flex items-center justify-between mb-5">
            <div className="text-[8px] tracking-[4px] uppercase" style={{ color: "#2e4455" }}>Full Stack of Tools</div>
            <div className="flex gap-4">
              {[["#ffb700","Simulation"],["#00ff87","Code"],["#00d4ff","Hardware"],["#c084fc","Dev Tools"]].map(([c,l]) => (
                <div key={l} className="flex items-center gap-1.5 text-[8px]" style={{ color: "#2e4455" }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
                  {l}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-2.5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px,1fr))" }}>
            {tools.map((t, i) => (
              <motion.div key={i}
                className="reveal-scale flex items-center gap-3 p-3.5 border relative overflow-hidden"
                data-delay={String((i % 4) + 1)}
                style={{ borderColor: "rgba(255,255,255,.06)", background: "rgba(255,255,255,.02)", backdropFilter: "blur(6px)" }}
                whileHover={{ y: -3, borderColor: "rgba(255,255,255,.14)", background: "rgba(255,255,255,.05)" }}
                transition={{ duration: .25 }}
              >
                <motion.div className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(circle at left center, ${t.color} 0%, transparent 70%)`, opacity: 0 }}
                  whileHover={{ opacity: .07 }} transition={{ duration: .3 }}
                />
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: t.color, boxShadow: `0 0 8px ${t.color}` }} />
                <div className="flex-1 relative">
                  <div className="text-[10px] transition-colors" style={{ color: "#8aa8ba" }}>{t.name}</div>
                  <div className="text-[7.5px] tracking-px" style={{ color: "#2e4455" }}>{t.cat}</div>
                  <div className="h-[1.5px] rounded-sm overflow-hidden mt-1.5" style={{ background: "rgba(255,255,255,.05)" }}>
                    <div className="h-full rounded-sm" style={{ width: `${t.pct}%`, background: t.color }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
