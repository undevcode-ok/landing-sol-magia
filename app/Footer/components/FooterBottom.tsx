import { footerData } from "../data/footer.data";

export const FooterBottom = () => {
  const year = new Date().getFullYear();
  return (
    <div className="max-w-[1000px] mx-auto px-10 py-5 flex items-center justify-between">
      <p className="text-white/25 text-[12px]">
        Copyright © {year}{" "}
        <span className="text-[#f06060]">{footerData.copyright}</span>. Todos los derechos reservados.
      </p>
      <p className="text-white/20 text-[11px]">{footerData.madeWith}</p>
    </div>
  );
};