import { footerData } from "../data/footer.data";
import { PaymentBadge } from "./PaymentBadge";

export const FooterPayment = () => {
  return (
    <div>
      <p className="text-white font-bold text-base tracking-[2px] uppercase mb-4">
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