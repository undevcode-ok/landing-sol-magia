import { data } from "./data/reed.data";
import { ReedHeader } from "./components/ReedHeader";
import { ReedImage } from "./components/ReedImage";
import { ReedRules } from "./components/ReedRules";

export const Reed = () => {
  // Unimos ambas listas de reglas en una sola
  const rules = [...data.rulesLeft, ...data.rulesRight];

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
        background: "linear-gradient(180deg, #3d0a0a 0%, #2b0707 100%)",
      }}
    >
      <ReedHeader />

      <div
        className="
          flex
          flex-col
          lg:flex-row
          items-start
          gap-10
          w-full
          max-w-7xl
        "
      >
        <div className="shrink-0">
          <ReedImage />
        </div>

        <div className="flex-1">
          <ReedRules rules={rules} />
        </div>
      </div>
    </section>
  );
};