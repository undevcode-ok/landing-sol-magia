"use client";

import { NavbarLogo } from "./components/NavbarLogo";
import { NavbarLinks } from "./components/NavbarLinks";
import { NavbarCTA } from "./components/NavbarCTA";
import { NavbarMobileMenu } from "./components/NavbarMobileMenu";
import { useNavbarActive } from "./hooks/useNavbarActive";

export const Navbar = () => {
  const {
    isMobileMenuOpen,
    activeDropdown,
    isScrolled,
    isNavVisible,
    isNavHovered,
    openNav,
    scheduleClose,
    cancelClose,
    toggleMobileMenu,
    closeMobileMenu,
  } = useNavbarActive();

  const isExpanded = !!activeDropdown;
  const isLight = isExpanded || isNavHovered || (isScrolled && isNavVisible);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
          !isNavVisible ? "-translate-y-full" : "",
          isLight
            ? "bg-[#f5eded] shadow-sm"
            : isScrolled
            ? "bg-[#1a0505]/90 backdrop-blur-sm shadow-sm"
            : "bg-transparent",
        ].join(" ")}
        onMouseLeave={scheduleClose}
      >
        {/* Main row */}
        <div className="flex items-center justify-between px-6 md:px-10 h-16 md:h-20 max-w-8xl mx-auto">
          <NavbarLogo isLight={isLight} />

          {/* Center nav */}
          <NavbarLinks
            isLight={isLight}
            activeDropdown={activeDropdown}
            openNav={openNav}
            scheduleClose={scheduleClose}
          />

          {/* Right side */}
          <div className="flex items-center gap-4 md:gap-6">
            <NavbarCTA />

            {/* Hamburger */}
            <button
              onClick={toggleMobileMenu}
              aria-label="Abrir menú"
              className="flex flex-col gap-[5px]"
            >
              <span
                className={`block w-6 h-[1.5px] transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
                style={{ backgroundColor: isLight ? "#1a0a0a" : "#ffffff" }}
              />
              <span
                className={`block w-6 h-[1.5px] transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
                style={{ backgroundColor: isLight ? "#1a0a0a" : "#ffffff" }}
              />
            </button>
          </div>
        </div>

        {/* Sub-bar for dropdowns (if any link has children in the future) */}
        <div
          className={`hidden lg:flex justify-center gap-8 transition-all duration-300 overflow-hidden ${
            isExpanded
              ? "py-3 max-h-14 opacity-100"
              : "py-0 max-h-0 opacity-0 pointer-events-none"
          }`}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />
      </header>

      <NavbarMobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};