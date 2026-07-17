import { PaymentMethod } from "../types/footer.types";

interface Props {
  method: PaymentMethod;
}

export const PaymentBadge = ({ method }: Props) => {
  return (
    <div className="bg-white rounded-[6px] px-2 flex items-center justify-center h-10 w-18">
      {method.iconPath ? (
        <svg
          viewBox="0 0 24 24"
          width={28}
          height={28}
          fill={method.iconColor}
          aria-label={method.name}
        >
          <path d={method.iconPath} />
        </svg>
      ) : (
        <img
          src={method.logo}
          alt={method.name}
          className="h-full w-full object-contain block"
        />
      )}
    </div>
  );
};