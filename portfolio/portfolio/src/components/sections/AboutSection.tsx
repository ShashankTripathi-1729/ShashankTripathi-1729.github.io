"use client";
import { motion } from "framer-motion";

const facts = [
  { color: "#00ff87",  text: "B.Tech Electronics Engineering — RGIPT, Amethi (2024–Present)" },
  { color: "#00d4ff",  text: "BS Data Science & Applications — IIT Madras Online (2023–Present)" },
  { color: "#ffb700",  text: "2 manuscripts in prep — IEEE Transactions / Elsevier" },
  { color: "#c084fc",  text: "Based in Raebareli, UP, India" },
];

const timeline = [
  { year: "2023 — PRESENT", title: "BS Data Science", sub: "IIT Madras · Online Programme", color: "#00d4ff", delay: 0 },
  { year: "2024 — PRESENT", title: "B.Tech Electronics Engineering", sub: "RGIPT, Amethi, Uttar Pradesh", color: "#00ff87", delay: .1 },
  { year: "2024 — ONGOING", title: "Research Publications", sub: "IEEE Transactions · Elsevier · 2 manuscripts in prep", color: "#ffb700", delay: .2 },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-20 py-32 px-20" style={{ background: "#04060e" }}>
      <div className="max-w-[1060px] mx-auto">

        {/* HEADER */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 text-[8px] tracking-[5px] uppercase mb-3" style={{ color: "#2e4455" }}>
            <div className="w-7 h-px" style={{ background: "linear-gradient(to right, transparent, #2e4455)" }}/>
            01 &nbsp; About
          </div>
          <h2 className="font-syne font-black" style={{ fontSize: "clamp(34px,5vw,58px)", lineHeight: 1.05 }}>
            <span style={{ color: "#f0f8ff" }}>Who I </span>
            <span className="grad-g-c">am</span>
          </h2>
        </div>

        <div className="grid gap-20" style={{ gridTemplateColumns: "1.3fr 1fr" }}>
          {/* LEFT */}
          <div>
            {[
              "I'm an undergraduate researcher working at the intersection of <strong>power electronics</strong> and <strong>intelligent control systems</strong> — running two degrees simultaneously because one wasn't enough.",
              "My work is about making power converters smarter. I research ways to remove the need for precise mathematical plant models and replace them with <strong>real-time, adaptive control</strong> that works even when the system changes.",
              "Two review manuscripts are in preparation for IEEE Transactions and Elsevier.",
            ].map((p, i) => (
              <p key={i} className={`reveal-left text-[12.5px] leading-[2.15] mb-5`}
                data-delay={String(i + 1)}
                style={{ color: "#8aa8ba" }}
                dangerouslySetInnerHTML={{ __html: p.replace(/<strong>/g, '<strong style="color:#f0f8ff;font-weight:700">') }}
              />
            ))}
            <div className="reveal pt-7 border-t flex flex-col gap-3.5 mt-8" style={{ borderColor: "rgba(255,255,255,.06)" }} data-delay="3">
              {facts.map((f, i) => (
                <div key={i} className="flex items-start gap-3.5 text-[11px] leading-[1.7]" style={{ color: "#2e4455" }}>
                  <div className="w-[5px] h-[5px] rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: f.color, boxShadow: `0 0 6px ${f.color}` }} />
                  {f.text}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — TIMELINE */}
          <div className="reveal-right relative" data-delay="1">
            <div className="absolute left-[18px] top-6 bottom-6 w-px opacity-30"
              style={{ background: "linear-gradient(to bottom, #00ff87, #00d4ff, #c084fc)" }} />
            <div className="flex flex-col gap-0">
              {timeline.map((t, i) => (
                <motion.div key={i} className="flex gap-6 pb-10 last:pb-0"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: t.delay + .2, duration: .8, ease: [.16,1,.3,1] }}
                >
                  {/* dot */}
                  <div className="w-9 flex-shrink-0 flex flex-col items-center pt-1">
                    <div className="w-3 h-3 rounded-full border-2 flex-shrink-0"
                      style={{ borderColor: t.color, background: "#04060e", boxShadow: `0 0 12px ${t.color}` }} />
                  </div>
                  {/* body */}
                  <div>
                    <div className="text-[9px] font-orbitron tracking-[2px] mb-1.5" style={{ color: t.color }}>{t.year}</div>
                    <div className="font-syne font-bold text-[13px] text-w mb-1" style={{ color: "#f0f8ff" }}>{t.title}</div>
                    <div className="text-[10px] leading-[1.6]" style={{ color: "#2e4455" }}>{t.sub}</div>
                    <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 text-[7.5px] tracking-[1.5px] uppercase border"
                      style={{ color: t.color, borderColor: `${t.color}40`, background: `${t.color}08` }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: t.color }} />
                      {i < 2 ? "Active" : "In Review"}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
