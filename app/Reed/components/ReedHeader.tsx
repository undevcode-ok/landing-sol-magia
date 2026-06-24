import { data } from "../data/reed.data";

export const ReedHeader = () => {
  return (
    <div className="text-center">
      <h2 className="text-white text-7xl font-extrabold tracking-tight leading-none mb-3">
        {data.title}
      </h2>
      <p className="text-white/45 text-2xl leading-relaxed">
        {data.description}
      </p>
      <div className="w-10 h-[2px] bg-[#f06060] rounded-full mx-auto mt-3" />
    </div>
  );
};