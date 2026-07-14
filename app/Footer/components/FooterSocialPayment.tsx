import { footerData } from "../data/footer.data";
import { SocialIcon } from "./SocialIcon";

export const FooterSocialAndPayment = () => {
  return (
    <div>
      <p className="text-white text-base font-bold tracking-[2px] uppercase mb-5">
        Redes Sociales
      </p>
      <div className="flex gap-3 mb-6">
        {footerData.socialLinks.map((link) => (
          <SocialIcon key={link.id} link={link} />
        ))}
      </div>

      <p className="text-white font-bold text-base tracking-[2px] uppercase mb-3">
        Medios de Pago
      </p>
      <div className="flex flex-wrap gap-2">
        {footerData.paymentMethods.map((method) => (
          <div
            key={method.id}
            className="bg-white rounded-[6px] px-2 flex items-center justify-center h-10 w-18"
          >
            <img
              src={method.logo}
              alt={method.name}
              className="h-full w-full block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};