"use client";

import Link from "next/link";
import { FOOTER_DATA } from "./data/footer.data";
import { SocialIcon } from "./components/SocialIcon";

export const Footer = () => {
  const { brand, tagline, contact, cta, columns, socials, copyright, developer } = FOOTER_DATA;

  return (
    <footer className="text-white" style={{ background: "#000000" }}>

      {/* ── TOP BAND: Big CTA ── */}
      <div className="border-b px-6 py-20" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="text-xl font-medium tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(184,134,11,0.6)" }}>
              ¿Necesitás ayuda?
            </p>
            <h2
              className="font-bold leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(2.5rem,7vw,5.5rem)" }}
            >
              Hablemos<span style={{ color: "#c0392b" }}>.</span>
            </h2>
          </div>
          <Link
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-white/20 hover:border-[#c0392b] text-white hover:text-[#c0392b] px-8 py-4 rounded-full transition-all duration-300 text-sm font-medium tracking-wide no-underline"
          >
            {cta.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* ── WATERMARK ── */}
      <div className="px-6 overflow-hidden leading-none select-none pointer-events-none" aria-hidden="true">
        <span
          className="block font-bold tracking-[-0.06em] whitespace-nowrap"
          style={{ fontSize: "clamp(5rem,18vw,14rem)", color: "rgba(255,255,255,0.03)" }}
        >
          {brand}
        </span>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="px-6 pt-4 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Brand column — md:col-span-2 como Undertown */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div>
              <p className="text-4xl font-bold tracking-tight text-white">{brand}</p>
              <p className="text-2xl mt-2" style={{ color: "#555" }}>{tagline}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-lg uppercase tracking-widest mb-2" style={{ color: "#444" }}>
                Contacto
              </p>
              <a
                href={contact.wp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg flex items-center gap-2 transition-colors duration-200 no-underline"
                style={{ color: "#666" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#c0392b" }} />
                {contact.wpLabel}
              </a>
              <p className="text-lg pl-3.5" style={{ color: "#444" }}>{contact.location}</p>
            </div>

            {/* Socials — círculos igual que Undertown */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <p className="text-lg font-semibold uppercase tracking-widest" style={{ color: "#555" }}>
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base transition-colors duration-200 no-underline"
                      style={{ color: "#555" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t px-6 py-5" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-lg" style={{ color: "#444" }}>{copyright}</p>
          <p className="text-lg" style={{ color: "#444" }}>Buenos Aires, Argentina</p>
        </div>
      </div>

      {/* ── SUBFOOTER ── */}
      <div className="border-t px-6 py-4" style={{ background: "rgba(0,0,0,0.4)", borderColor: "rgba(255,255,255,0.04)" }}>
        <p className="text-center text-lg tracking-wide" style={{ color: "#444" }}>
          {developer.text}{" "}
          <span style={{ color: "#c0392b" }}>♥</span>{" "}
          por el equipo de{" "}
          <a
            href={developer.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors duration-300 no-underline"
            style={{ color: "#555" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c0392b")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            {developer.name}
          </a>
        </p>
      </div>

    </footer>
  );
};