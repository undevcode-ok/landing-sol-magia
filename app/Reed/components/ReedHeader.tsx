import { data } from "../data/reed.data";

export const ReedHeader = () => {
  return (
    <div className="text-center">
      <h2
        className="
          text-white
          text-4xl
          lg:text-8xl
          font-bold
          tracking-tight
          leading-none
          mb-4
        "
      >
        {data.title}
      </h2>

      <p
        className="
          max-w-2xl
          mx-auto
          text-2xl
          lg:text-4xl
          text-white/70
          leading-relaxed
        "
      >
        {data.description}
      </p>

      <div
        className="
          w-25
          h-[3px]
          bg-violet-300
          rounded-full
          mx-auto
          mt-5
        "
      />
    </div>
  );
};