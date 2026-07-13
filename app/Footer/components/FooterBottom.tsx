import { footerData } from "../data/footer.data";

export const FooterBottom = () => {
  const year = new Date().getFullYear();
  return (
    <div className="max-w-8xl mx-auto px-10 py-5 flex items-center justify-between">
      <p className="text-white/25 text-sm">
        Copyright © {year}{" "}
        <span className="text-violet-300">{footerData.copyright}</span>. Todos los derechos reservados.
      </p>
      <p className="text-white/20 text-sm">{footerData.madeWith}</p>
    </div>
  );
};