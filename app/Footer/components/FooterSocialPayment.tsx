import { Phone } from "lucide-react";
import { footerData } from "../data/footer.data";
import { SocialIcon } from "./SocialIcon";
import { PaymentBadge } from "./PaymentBadge";

export const FooterSocialAndPayment = () => {
  return (
    <div>
      <p className="text-white text-base font-bold tracking-[2px] uppercase mb-5">
        Contacto
      </p>
      <div className="flex gap-3 mb-5">
        {footerData.socialLinks.map((link) => (
          <SocialIcon key={link.id} link={link} />
        ))}
      </div>

      <div className="flex flex-col gap-2 mb-6">
        {footerData.phoneNumbers.map((phone) => (
          <p
            key={phone}
            className="flex items-center gap-2 text-white/45 text-lg"
          >
            <Phone size={16} className="text-violet-300 shrink-0" />
            {phone}
          </p>
        ))}
      </div>

      <p className="text-white font-bold text-base tracking-[2px] uppercase mb-3">
        Medios de Pago
      </p>
      <div className="flex flex-wrap gap-2">
        {footerData.paymentMethods.map((method) => (
          <PaymentBadge key={method.id} method={method} />
        ))}
      </div>
    </div>
  );
};