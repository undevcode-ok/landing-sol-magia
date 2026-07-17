import Link from "next/link";
import { footerData } from "../data/footer.data";

export const FooterNav = () => {
  return (
    <div>
      <p className="text-white text-base font-bold tracking-[2px] uppercase mb-4">
        Navegación
      </p>
      <div className="flex flex-col gap-2">
        {footerData.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white/45 text-base no-underline hover:text-violet-300 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};