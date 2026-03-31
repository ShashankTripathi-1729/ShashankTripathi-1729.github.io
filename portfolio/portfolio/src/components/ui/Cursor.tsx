"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dot.current)  { dot.current.style.left  = e.clientX + "px"; dot.current.style.top  = e.clientY + "px"; }
      if (ring.current) { ring.current.style.left = e.clientX + "px"; ring.current.style.top = e.clientY + "px"; }
    };
    const over  = () => ring.current?.classList.add("hover");
    const out   = () => ring.current?.classList.remove("hover");

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,.rc,.tool,.sc-card,.tl-item,.stat-card").forEach(el => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
