"use client";

import { useRef, useEffect, useState } from "react";
import { Rule } from "../types/reed.types";

interface Props {
  rule: Rule;
  index: number;
}

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const NoIcon = () => (
  <div className="rule-icon-wrap" style={{ position: "relative", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, color: "rgba(192,57,43,0.75)" }}>
    <svg style={{ position: "absolute", top: 0, left: 0, width: 36, height: 36 }} viewBox="0 0 36 36" fill="none">
      <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" stroke="rgba(192,57,43,0.25)" strokeWidth="0.8" fill="rgba(192,57,43,0.04)" />
    </svg>
    <svg style={{ position: "relative", zIndex: 1 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  </div>
);

const YesIcon = () => (
  <div style={{ position: "relative", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, color: "rgba(34,197,94,0.85)" }}>
    <svg style={{ position: "absolute", top: 0, left: 0, width: 36, height: 36 }} viewBox="0 0 36 36" fill="none">
      <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" stroke="rgba(34,197,94,0.3)" strokeWidth="0.8" fill="rgba(34,197,94,0.05)" />
    </svg>
    <svg style={{ position: "relative", zIndex: 1 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="5 12 10 17 19 7" />
    </svg>
  </div>
);

export const RuleItem = ({ rule, index }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isNo = rule.type === "no";

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        gap: 20,
        padding: "22px 28px",
        marginBottom: 12,
        background: "rgba(10,2,2,0.6)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${index * 100}ms, transform 0.7s ease ${index * 100}ms`,
      }}
    >
      {/* Corner brackets */}
      <span style={{ position: "absolute", top: 0, left: 0, width: 14, height: 14, borderTop: "1px solid rgba(184,134,11,0.35)", borderLeft: "1px solid rgba(184,134,11,0.35)" }} />
      <span style={{ position: "absolute", top: 0, right: 0, width: 14, height: 14, borderTop: "1px solid rgba(184,134,11,0.35)", borderRight: "1px solid rgba(184,134,11,0.35)" }} />
      <span style={{ position: "absolute", bottom: 0, right: 0, width: 14, height: 14, borderBottom: "1px solid rgba(184,134,11,0.35)", borderRight: "1px solid rgba(184,134,11,0.35)" }} />
      <span style={{ position: "absolute", bottom: 0, left: 0, width: 14, height: 14, borderBottom: "1px solid rgba(184,134,11,0.35)", borderLeft: "1px solid rgba(184,134,11,0.35)" }} />

      {/* Top & bottom fading lines */}
      <span style={{ position: "absolute", top: 0, left: 14, right: 14, height: "0.5px", background: "linear-gradient(90deg, transparent, rgba(184,134,11,0.15) 30%, rgba(184,134,11,0.15) 70%, transparent)" }} />
      <span style={{ position: "absolute", bottom: 0, left: 14, right: 14, height: "0.5px", background: "linear-gradient(90deg, transparent, rgba(122,26,26,0.2) 30%, rgba(122,26,26,0.2) 70%, transparent)" }} />

      {/* Icon */}
      {isNo ? <NoIcon /> : <YesIcon />}

      {/* Text */}
      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, fontWeight: 400, color: "rgba(255,255,255,0.88)", lineHeight: 1.2, margin: "0 0 5px" }}>
          {rule.text}
        </p>
        {rule.description && (
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.28)", lineHeight: 1.65, margin: 0 }}>
            {rule.description}
          </p>
        )}
      </div>

      {/* Roman numeral */}
      <span style={{ position: "absolute", bottom: 10, right: 16, fontSize: 10, letterSpacing: "0.25em", color: "rgba(184,134,11,0.18)", fontFamily: "var(--font-cormorant), serif" }}>
        {ROMAN[index]}
      </span>
    </div>
  );
};