import { footerData } from "../data/footer.data";

export const FooterBrand = () => {
  const { brand } = footerData;
  return (
    <div>
      <p className="text-white text-4xl font-extrabold tracking-[2px] uppercase mb-1">
        {brand.title}
      </p>
      <p className="text-violet-300 text-2xl tracking-wide mb-4">{brand.subtitle}</p>
      <p className="text-white/40 text-base leading-[1.7]">{brand.description}</p>
    </div>
  );
};