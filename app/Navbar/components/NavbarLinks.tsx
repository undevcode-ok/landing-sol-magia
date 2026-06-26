"use client";

import { ChevronDown } from "lucide-react";
import { navLinks } from "../data/navbar.data";

interface NavbarLinksProps {
  isLight: boolean;
  activeDropdown: string | null;
  openNav: (label?: string) => void;
  scheduleClose: () => void;
}

export const NavbarLinks = ({
  isLight,
  activeDropdown,
  openNav,
  scheduleClose,
}: NavbarLinksProps) => {
  return (
    <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-9">
      <ul className="flex items-center gap-9 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href} className="relative">
            <div
              className="relative py-6 group/link"
              onMouseEnter={() => openNav(link.hasDropdown ? link.label : undefined)}
              onMouseLeave={scheduleClose}
            >
              {/* Animated top line */}
              <span
                className="absolute top-0 left-0 h-[2px] transition-all duration-700 ease-in-out"
                style={{
                  width: activeDropdown === link.label ? "100%" : undefined,
                  backgroundColor: "#c0392b",
                }}
              />
              <span className="absolute top-0 left-0 h-[2px] w-0 bg-white/60 transition-all duration-700 ease-in-out group-hover/link:w-full" />

              {link.hasDropdown ? (
                <span
                  className={`flex items-center gap-1 text-base font-normal tracking-widest transition-colors duration-300 cursor-default select-none uppercase ${
                    isLight
                      ? "text-[#1a0a0a]/70 hover:text-[#1a0a0a]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${
                      activeDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                </span>
              ) : (
                <a
                  href={link.href}
                  className={`text-base font-normal transition-colors duration-200 no-underline tracking-wide ${
                    isLight
                      ? "text-[#1a0a0a]/70 hover:text-[#1a0a0a]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};