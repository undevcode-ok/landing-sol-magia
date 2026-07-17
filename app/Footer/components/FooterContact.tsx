import { Phone } from "lucide-react";
import { footerData } from "../data/footer.data";
import { SocialIcon } from "./SocialIcon";

export const FooterContact = () => {
  return (
    <div>
      <p className="text-white text-base font-bold tracking-[2px] uppercase mb-4">
        Contacto
      </p>
      <div className="flex gap-3 mb-4">
        {footerData.socialLinks.map((link) => (
          <SocialIcon key={link.id} link={link} />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {footerData.phoneNumbers.map((phone) => (
          <p
            key={phone}
            className="flex items-center gap-2 text-white/45 text-sm"
          >
            <Phone size={14} className="text-violet-300 shrink-0" />
            {phone}
          </p>
        ))}
      </div>
    </div>
  );
};