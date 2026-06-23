import { logoData } from "../data/navbar.data";

export const NavbarLogo = () => {
  return (
    <div className="navbar-logo">
      <span className="navbar-logo__title">{logoData.title}</span>
      <span className="navbar-logo__subtitle">{logoData.subtitle}</span>
    </div>
  );
};