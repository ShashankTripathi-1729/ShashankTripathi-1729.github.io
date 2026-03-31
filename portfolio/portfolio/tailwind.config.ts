import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        g:      "#00ff87",
        g2:     "#00cc6a",
        cyan:   "#00d4ff",
        amber:  "#ffb700",
        purple: "#c084fc",
        bg:     "#04060e",
        bg2:    "#070a14",
        w:      "#f0f8ff",
        w2:     "#8aa8ba",
        w3:     "#2e4455",
      },
      fontFamily: {
        mono:     ["Space Mono", "monospace"],
        syne:     ["Syne", "sans-serif"],
        orbitron: ["Orbitron", "monospace"],
      },
      animation: {
        "pulse-dot":  "pulseDot 2s infinite",
        "scan-line":  "scanLine 2.5s infinite",
        "float":      "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        pulseDot:  { "0%,100%": { boxShadow: "0 0 0 0 rgba(0,255,135,.6)" }, "70%": { boxShadow: "0 0 0 8px rgba(0,255,135,0)" } },
        scanLine:  { "0%,100%": { opacity: ".1" }, "55%": { opacity: ".9" } },
        float:     { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } },
        glowPulse: { "0%,100%": { filter: "brightness(1)" }, "50%": { filter: "brightness(1.4)" } },
      },
      backgroundImage: {
        "grad-g-c":  "linear-gradient(90deg,#00ff87,#00d4ff)",
        "grad-name": "linear-gradient(160deg,#ffffff 0%,#e8e8e8 30%,#b0b8c0 65%,#7a8a95 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
