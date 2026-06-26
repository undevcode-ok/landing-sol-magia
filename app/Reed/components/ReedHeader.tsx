"use client";

import { useRef, useEffect, useState } from "react";
import { data } from "../data/reed.data";

const OrnamentDivider = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
    <div style={{ flex: 1, maxWidth: 120, height: "0.5px", background: "rgba(122,26,26,0.5)" }} />
    <svg width="90" height="20" viewBox="0 0 90 20" fill="none">
      <line x1="0" y1="10" x2="28" y2="10" stroke="#7a1a1a" strokeWidth="0.5" />
      <polygon points="34,10 39,5 44,10 39,15" fill="none" stroke="#b8860b" strokeWidth="0.8" />
      <circle cx="45" cy="10" r="2.5" fill="#b8860b" />
      <polygon points="46,10 51,5 56,10 51,15" fill="none" stroke="#b8860b" strokeWidth="0.8" />
      <line x1="62" y1="10" x2="90" y2="10" stroke="#7a1a1a" strokeWidth="0.5" />
    </svg>
    <div style={{ flex: 1, maxWidth: 120, height: "0.5px", background: "rgba(122,26,26,0.5)" }} />
  </div>
);

export const ReedHeader = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        maxWidth: 640,
        margin: "0 auto 48px",
        textAlign: "center",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      <p style={{ fontSize: 10, letterSpacing: "0.45em", color: "rgba(184,134,11,0.6)", textTransform: "uppercase", marginBottom: 24 }}>
        {data.eyebrow}
      </p>

      <OrnamentDivider />

      <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 56, fontWeight: 300, color: "#fff", letterSpacing: "0.04em", margin: "18px 0 6px", lineHeight: 1, fontVariant: "small-caps" }}>
        {data.title}
      </h2>
      <p style={{ fontSize: 11, letterSpacing: "0.3em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 24 }}>
        {data.description}
      </p>

      <OrnamentDivider />
    </div>
  );
};