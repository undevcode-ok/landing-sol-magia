import { data } from "./data/reed.data";
import { ReedHeader } from "./components/ReedHeader";
import { ReedImage } from "./components/ReedImage";
import { ReedRules } from "./components/ReedRules";


export const Reed = () => {
  return (
    <section
      className="min-h-[560px] flex flex-col items-center justify-center px-12 py-16 gap-10"
      style={{
        background: "#3d0a0a",
      }}
    >
      <ReedHeader />
      <div className="flex items-stretch gap-8 w-full max-w-[900px]">
        <ReedImage />
        <div className="flex flex-1 gap-4 items-center">
          <div className="flex flex-col justify-center gap-3 flex-1 self-stretch">
            <ReedRules rules={data.rulesLeft} align="left" />
          </div>
          <div className="flex flex-col justify-center gap-3 flex-1 self-stretch">
            <ReedRules rules={data.rulesRight} align="left" />
          </div>
        </div>
      </div>
    </section>
  );
};