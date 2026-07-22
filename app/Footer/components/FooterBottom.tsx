import { footerData } from "../data/footer.data";

export const FooterBottom = () => {
  const year = new Date().getFullYear();
  return (
    <div className="max-w-8xl mx-auto px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-left">
      <p className="text-white/25 text-base">
        Copyright © {year}{" "}
        <span className="text-violet-300">{footerData.copyright}</span>. Todos los derechos reservados.
      </p>
      <div

        className="text-white/20 text-base no-underline"
      >
        Hecho con{" "}
        <span className="hover:text-violet-300 transition-colors cursor-pointer">♥</span>{" "}
        por el equipo de{" "}
        <span className="hover:text-violet-300 transition-colors">
          <a
          href={footerData.madeWithLink}
        target="_blank"
        rel="noopener noreferrer">
            Undevcode
          </a>
        </span>
      </div>
    </div>
  );
};