import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shashank Tripathi — Power Electronics & Data Science",
  description: "Undergraduate researcher at RGIPT + IIT Madras. Power electronics, model-free MPC, SiC/GaN devices, data-driven control.",
  keywords: ["power electronics", "data science", "RGIPT", "IIT Madras", "model-free MPC", "SiC", "GaN"],
  openGraph: {
    title: "Shashank Tripathi",
    description: "Undergraduate researcher — Power Electronics + Data Science",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
