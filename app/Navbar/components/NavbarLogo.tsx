import { logoData } from "../data/navbar.data";

export const NavbarLogo = () => {
  return (
    <div className="flex flex-col leading-tight">
      <span className="text-white text-[17px] font-bold uppercase tracking-widest">
        {logoData.title}
      </span>
      <span className="text-white text-[15px] font-normal tracking-wide">
        {logoData.subtitle}
      </span>
    </div>
  );
};