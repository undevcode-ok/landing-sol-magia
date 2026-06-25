import { footerData } from "../data/footer.data";

export const FooterBrand = () => {
  const { brand } = footerData;
  return (
    <div>
      <p className="text-white text-[18px] font-extrabold tracking-[2px] uppercase mb-1">
        {brand.title}
      </p>
      <p className="text-[#f06060] text-[12px] tracking-wide mb-4">{brand.subtitle}</p>
      <p className="text-white/40 text-[12px] leading-[1.7]">{brand.description}</p>
    </div>
  );
};