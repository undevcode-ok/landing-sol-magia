import { data } from "./data/reed.data";
import { ReedHeader } from "./components/ReedHeader";
import { ReedRules } from "./components/ReedRules";

export const Reed = () => {
  const rules = [...data.rulesLeft, ...data.rulesRight];

  return (
    <section
      id="leer-bien"
      className="relative px-6 md:px-10 py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2b0707 0%, #1a0404 60%, #0f0202 100%)" }}
    >
      {/* Glow central — sin textura de grilla */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(120,20,20,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <ReedHeader />
        <ReedRules rules={rules} />
      </div>
    </section>
  );
};