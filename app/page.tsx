import Image from "next/image";
import { NavbarLogo } from "../app/Navbar/components/NavbarLogo";
import { NavbarLinks } from "../app/Navbar/components/NavbarLinks";
import { NavbarCTA } from "../app/Navbar/components/NavbarCTA";

export default function Home() {
  return (
    <header className="navbar">
          <div className="navbar-inner">
            <NavbarLogo />
            <NavbarLinks />
            <NavbarCTA />
          </div>
        </header>
  );
}
