"use client";

import { X } from "lucide-react";
import { navLinks, ctaData } from "../data/navbar.data";

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function NavbarMobileMenu({ isOpen, onClose }: NavbarMobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-96 bg-[#1a0505] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-6 pt-8 pr-8">
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Cerrar menú"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Logo inside drawer */}
        <div className="px-12 pb-8">
          <p className="text-white text-[17px] font-bold uppercase tracking-widest">
            Flama Ancestral
          </p>
          <p className="text-white/60 text-[13px] tracking-wide">Rituales & Hechizos</p>
        </div>

        {/* Primary nav links */}
        <nav className="flex-1 px-12 pt-2">
          <ul className="space-y-1 list-none m-0 p-0">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative block text-2xl font-serif text-white/90 leading-tight py-1 w-fit group/link no-underline"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(12px)",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                    transitionDelay: `${index * 60 + 100}ms`,
                  }}
                  onClick={onClose}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#c0392b] transition-all duration-300 group-hover/link:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="px-12 pb-10">
          <hr className="border-white/10 mb-6" />

          {/* CTA */}
          <a
            href={ctaData.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#c0392b] hover:bg-[#96281b] text-white text-sm font-semibold py-3 rounded-full transition-colors duration-200 no-underline mb-6"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: "opacity 0.5s ease",
              transitionDelay: "380ms",
            }}
            onClick={onClose}
          >
            {ctaData.label}
          </a>

          {/* Social */}
          <div
            className="flex gap-5"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: "opacity 0.5s ease",
              transitionDelay: "440ms",
            }}
          >
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="TikTok" className="text-white/60 hover:text-white transition-colors">
              <TikTokIcon />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="X" className="text-white/60 hover:text-white transition-colors">
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}