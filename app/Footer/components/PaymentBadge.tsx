import { PaymentMethod } from "../types/footer.types";

interface Props {
  method: PaymentMethod;
}

export const PaymentBadge = ({ method }: Props) => {
  return (
    <div className="flex items-center gap-2.5 w-44 h-14 bg-white/5 border border-white/10 rounded-xl pl-1.5 pr-4 hover:border-violet-300/40 hover:bg-white/8 transition-colors">
      <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden">
        {method.iconPath ? (
          <svg
            viewBox="0 0 24 24"
            width={20}
            height={20}
            fill={method.iconColor}
            aria-hidden="true"
          >
            <path d={method.iconPath} />
          </svg>
        ) : (
          <img
            src={method.logo}
            alt=""
            aria-hidden="true"
            className="w-5 h-5 object-contain"
          />
        )}
      </div>
      <span className="text-white/70 text-base whitespace-nowrap">{method.name}</span>
    </div>
  );
};