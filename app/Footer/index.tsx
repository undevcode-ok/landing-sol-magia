import { FooterBrand } from "./components/FooterBrand";
import { FooterNav } from "./components/FooterNav";
import { FooterContact } from "./components/FooterContact";
import { FooterPayment } from "./components/FooterPayment";
import { FooterBottom } from "./components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="bg-[#111] border-t-2 border-violet-600/70">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 max-w-7xl mx-auto px-10 py-10">
        <FooterBrand />
        <FooterNav />
        <FooterContact />
        <FooterPayment />
      </div>
      <hr className="border-none border-t border-white/6 mx-10" />
      <FooterBottom />
    </footer>
  );
};