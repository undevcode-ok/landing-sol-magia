import { heroData } from "../data/hero.data";

export const HeroTitle = () => {
  return (
    <h1
      className="text-white font-extrabold uppercase leading-[1.1] tracking-wide mb-5"
      style={{ animation: "heroFadeUp 0.8s ease 0.5s forwards", opacity: 0 }}
    >
      {heroData.title.map((line, i) => (
        <span key={i} className="block text-5xl sm:text-6xl md:text-7xl">
          {line}
        </span>
      ))}

      {heroData.titleItalic && (
        <span className="block text-4xl sm:text-5xl md:text-6xl font-light italic mt-2 relative w-fit mx-auto">
          {heroData.titleItalic}
          {/* Decorative SVG underline — estilo Éclet */}
          <svg
            viewBox="0 0 260 30"
            className="absolute -bottom-3 left-0 w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 22 C50 6, 110 2, 130 14 C150 24, 210 6, 256 12"
              stroke="#c0392b"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
    </h1>
  );
};