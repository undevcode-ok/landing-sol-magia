import { data } from "../data/reed.data";

export const ReedImage = () => {
  return (
    <div className="relative flex-shrink-0 overflow-hidden rounded-3xl">
      <img
        src={data.img}
        alt={data.title}
        className="
          w-[320px]
          h-[460px]
          object-cover
          rounded-3xl
          block
          brightness-90
          contrast-110
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      <div
        className="
          absolute
          inset-0
          rounded-3xl
          border
          border-white/10
          pointer-events-none
        "
      />
    </div>
  );
};