"use client";

import Link from "next/link";
import { useNavbarActive } from "../hooks/useNavbarActive";
import { navLinks } from "../data/navbar.data";


interface Props {
  className?: string;
  onLinkClick?: () => void;
}


export const NavbarLinks = ({
  className = "flex items-center gap-9",
  onLinkClick,
}: Props) => {
  const { activeLink } = useNavbarActive();

  return (
    <nav aria-label="Navegación principal">
      <ul className={`${className} list-none m-0 p-0`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onLinkClick}
              className={`font-secondary text-base lg:text-lg xl:text-xl font-normal transition-colors duration-200 no-underline ${activeLink === link.href
                  ? "text-white"
                  : "text-[#e0d8d8] hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};