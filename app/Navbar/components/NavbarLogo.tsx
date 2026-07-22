import Image from "next/image";
import { logoData } from "../data/navbar.data";

export const NavbarLogo = () => {
  return (
    <Image
      src={logoData.logoImage}
      alt={logoData.alt}
      width={500}
      height={500}
      className="h-30 w-30 object-contain"
      priority
    />
  );
};