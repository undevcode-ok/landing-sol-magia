export interface HeroData {
  tagline: string;
  title: string[];
  titleItalic?: string; // palabra decorada con underline SVG
  description: string;
  backgroundImage: string;
  videoSrc: string;
  cta: {
    label: string;
    href: string;
  };
}