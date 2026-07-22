import Image from "next/image";
import { footerData } from "../data/footer.data";

export const FooterBrand = () => {
  const { brand } = footerData;
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={brand.logoImage}
          alt={brand.alt}
          width={100}
          height={100}
          className="h-25 w-25  object-contain"
        />
        <div>
          <p className="text-white text-4xl  font-bold tracking-wide uppercase leading-tight">
            {brand.alt}
          </p>
          <p className="text-violet-300 text-2xl tracking-wide">{brand.subtitle}</p>
        </div>
      </div>
      <p className="text-white/40 text-base leading-[1.7]">{brand.description}</p>
    </div>
  );
};