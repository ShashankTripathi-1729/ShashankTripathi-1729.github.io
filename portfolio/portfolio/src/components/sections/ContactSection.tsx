"use client";
import { motion } from "framer-motion";

const links = [
  { label: "Email",    val: "shashanktripathi1729@gmail.com",       href: "mailto:shashanktripathi1729@gmail.com" },
  { label: "LinkedIn", val: "shashank-tripathi-s1729",              href: "https://linkedin.com/in/shashank-tripathi-s1729" },
  { label: "GitHub",   val: "ShashankTripathi-1729",                href: "https://github.com/ShashankTripathi-1729" },
  { label: "Phone",    val: "+91 7007193459",                       href: undefined },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-20 py-32 px-20" style={{ background: "#070a14" }}>
      <div className="max-w-[1060px] mx-auto">
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 text-[8px] tracking-[5px] uppercase mb-3" style={{ color: "#2e4455" }}>
            <div className="w-7 h-px" style={{ background: "linear-gradient(to right, transparent, #2e4455)" }}/>
            04 &nbsp; Contact
          </div>
          <h2 className="font-syne font-black" style={{ fontSize: "clamp(34px,5vw,58px)", lineHeight: 1.05 }}>
            <span style={{ color: "#f0f8ff" }}>Let's </span>
            <span className="grad-g-c">talk</span>
          </h2>
        </div>

        <div className="grid gap-20" style={{ gridTemplateColumns: "1fr 1.1fr" }}>
          <div className="reveal-left" data-delay="1">
            <p className="text-[12.5px] leading-[2.15] mb-5" style={{ color: "#8aa8ba" }}>
              Open to research collaborations, internships, IEEE paper reviews, and power electronics projects.
              If you're working on something interesting in power systems, control, or intelligent hardware — I want to hear about it.
            </p>
            <p className="text-[12.5px] leading-[2.15] mb-10" style={{ color: "#8aa8ba" }}>
              Based in Raebareli, UP. Usually reply within a few hours.
            </p>
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 text-[9px] tracking-[2.5px]"
              style={{ background: "rgba(0,255,135,.06)", border: "1px solid rgba(0,255,135,.2)", color: "#00cc6a", backdropFilter: "blur(8px)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-g animate-pulse-dot" />
              Available for Collaboration
            </div>
          </div>

          <div className="flex flex-col gap-0.5 reveal-right" data-delay="2">
            {links.map((l, i) => (
              <motion.div key={i}
                className="relative overflow-hidden border"
                style={{ borderColor: "rgba(255,255,255,.06)", background: "rgba(255,255,255,.02)", backdropFilter: "blur(6px)" }}
                whileHover={{ x: 8, borderColor: "rgba(255,255,255,.12)", background: "rgba(255,255,255,.04)" }}
                transition={{ duration: .25 }}
              >
                {/* left accent */}
                <motion.div className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ background: "linear-gradient(to bottom, transparent, #00ff87, transparent)", scaleY: 0, transformOrigin: "center" }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: .4 }}
                />
                {l.href ? (
                  <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined}
                    className="flex items-center justify-between px-5 py-4 cursor-none no-underline">
                    <div className="flex flex-col gap-1">
                      <span className="text-[7.5px] tracking-[3px] uppercase" style={{ color: "#2e4455" }}>{l.label}</span>
                      <motion.span className="text-[11px]" style={{ color: "#f0f8ff" }}
                        whileHover={{ color: "#00ff87" }} transition={{ duration: .2 }}>
                        {l.val}
                      </motion.span>
                    </div>
                    <motion.span className="text-lg" style={{ color: "#2e4455" }}
                      whileHover={{ color: "#00ff87", x: 6 }} transition={{ duration: .2 }}>→</motion.span>
                  </a>
                ) : (
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[7.5px] tracking-[3px] uppercase" style={{ color: "#2e4455" }}>{l.label}</span>
                      <span className="text-[11px]" style={{ color: "#f0f8ff" }}>{l.val}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
