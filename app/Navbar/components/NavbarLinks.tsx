"use client";

import Link from "next/link";
import { useNavbarActive } from "../hooks/useNavbarActive";
import { navLinks } from "../data/navbar.data";

export const NavbarLinks = () => {
  const { activeLink } = useNavbarActive();

  return (
    <nav aria-label="Navegación principal">
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`navbar-links__item ${activeLink === link.href ? "navbar-links__item--active" : ""}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};