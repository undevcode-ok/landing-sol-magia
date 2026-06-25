import { FooterBrand } from "./components/FooterBrand";
import { FooterNav } from "./components/FooterNav";
import { FooterSocialAndPayment } from "./components/FooterSocialPayment";
import { FooterBottom } from "./components/FooterBottom";

export const Footer = () => {
  return (
    <footer
      className="border-t border-[rgba(240,96,96,0.15)]"
      style={{ background: "#0a0303" }}
    >
      <div className="grid grid-cols-3 gap-12 max-w-[1000px] mx-auto px-10 py-14">
        <FooterBrand />
        <FooterNav />
        <FooterSocialAndPayment />
      </div>
      <hr className="border-none border-t border-white/6 mx-10" />
      <FooterBottom />
    </footer>
  );
};
