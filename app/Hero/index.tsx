import { HeroBackground } from "./components/HeroBackground";
import { HeroTagline } from "./components/HeroTagline";
import { HeroTitle } from "./components/HeroTitle";
import { HeroDescription } from "./components/HeroDescription";
import { HeroCTA } from "./components/HeroCTA";
import { HeroScrollButton } from "./components/HeroScrollButton";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-end pb-16 sm:pb-24 overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl mx-auto">
        <HeroTagline />
        <HeroTitle />
        <HeroDescription />
        <HeroCTA />
        <div className="mt-10">
          <HeroScrollButton />
        </div>
      </div>
    </section>
  );
};