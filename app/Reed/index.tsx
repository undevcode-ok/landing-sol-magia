import { data } from "./data/reed.data";
import { ReedHeader } from "./components/ReedHeader";
import { ReedImage } from "./components/ReedImage";
import { ReedRules } from "./components/ReedRules";


export const Reed = () => {
  return (
    <section
  className="
    min-h-[560px]
    flex
    flex-col
    items-center
    justify-center
    px-6
    md:px-12
    py-20
    gap-14
  "
  style={{
    background:
      "linear-gradient(180deg, #3d0a0a 0%, #2b0707 100%)",
  }}
>
  <ReedHeader />

  <div
    className="
      flex
      flex-col
      lg:flex-row
      items-stretch
      gap-8
      w-full
      max-w-[1100px]
    "
  >
    <div className="w-full lg:w-[320px] shrink-0">
      <ReedImage />
    </div>

    <div className="flex flex-1 gap-5">
      <div className="flex flex-col justify-center gap-4 flex-1">
        <ReedRules rules={data.rulesLeft} align="left" />
      </div>

      <div className="flex flex-col justify-center gap-4 flex-1">
        <ReedRules rules={data.rulesRight} align="left" />
      </div>
    </div>
  </div>
</section>
  );
};