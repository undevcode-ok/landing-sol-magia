import { HeroBackground } from "./components/HeroBackground";
import { HeroTagline } from "./components/HeroTagline";
import { HeroTitle } from "./components/HeroTitle";
import { HeroDescription } from "./components/HeroDescription";
import { HeroScrollButton } from "./components/HeroScrollButton";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-[2] text-center px-6 pt-28 pb-16 max-w-[860px] mx-auto">
        <HeroTagline />
        <HeroTitle />
        <HeroDescription />
        <HeroScrollButton />
      </div>
    </section>
  );
};