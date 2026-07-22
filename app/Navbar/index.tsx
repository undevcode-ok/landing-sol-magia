import { NavbarLogo } from "./components/NavbarLogo";
import { NavbarLinks } from "./components/NavbarLinks";
import { NavbarCTA } from "./components/NavbarCTA";
import { NavbarMobileMenu } from "./components/NavbarMobileMenu";

export const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between px-6 md:px-10 py-[18px] max-w-8xl mx-auto">
        <NavbarLogo />

        <div className="hidden md:flex items-center gap-8">
          <NavbarLinks />
          <NavbarCTA />
        </div>
        <NavbarMobileMenu />
      </div>
    </header>
  );
};