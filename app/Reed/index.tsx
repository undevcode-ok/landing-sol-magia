import { data } from "./data/reed.data";
import { ReedHeader } from "./components/ReedHeader";
import { ReedImage } from "./components/ReedImage";
import { ReedRules } from "./components/ReedRules";

export const Reed = () => {
  // Unimos ambas listas de reglas en una sola
  const rules = [...data.rulesLeft, ...data.rulesRight];

  return (
    <section
    id="reed"
      className="
        relative
        -mt-px
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
        background: "#2e1065",
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
        <div className="w-full lg:w-auto lg:shrink-0">
          <ReedImage />
        </div>

        <div className="w-full lg:flex-1">
          <ReedRules rules={rules} />
        </div>
      </div>
    </section>
  );
};