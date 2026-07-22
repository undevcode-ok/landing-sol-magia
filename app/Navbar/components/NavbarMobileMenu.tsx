"use client";

import { Menu, X } from "lucide-react";
import { useMobileMenu } from "../hooks/useMobileMenu";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarCTA } from "./NavbarCTA";

export const NavbarMobileMenu = () => {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <div className="md:hidden">
      <button
        onClick={toggle}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        className="relative z-[80] flex items-center justify-center w-10 h-10 text-white"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`fixed inset-0 z-[70] bg-[#111]/98 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10 px-6">
          <NavbarLinks
            className="flex flex-col items-center gap-8"
            onLinkClick={close}
          />
          <NavbarCTA />
        </div>
      </div>
    </div>
  );
};