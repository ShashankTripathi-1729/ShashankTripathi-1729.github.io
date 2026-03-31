"use client";
import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative z-20 py-8 px-20 flex justify-between items-center border-t"
      style={{ borderColor: "rgba(255,255,255,.05)", background: "#04060e" }}>
      <div className="flex items-center gap-3">
        <Logo size={28} />
        <span className="font-orbitron font-black text-[11px] tracking-[4px] grad-g-c">ST</span>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[8px] tracking-[2px]"
        style={{ color: "#2e4455" }}
      >
        © 2025 Shashank Tripathi · RGIPT + IIT Madras · Raebareli, India
      </motion.p>
      <div className="text-[8px] tracking-[2px]" style={{ color: "#2e4455" }}>
        Built with Next.js + Framer Motion
      </div>
    </footer>
  );
}
