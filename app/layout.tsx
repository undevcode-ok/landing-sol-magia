import type { Metadata } from "next";
import { Nanum_Gothic, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { StickyButtons } from "./Globals/components";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});
const nanumGothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-nanum",
});

export const metadata: Metadata = {
  title: "Videncia Sol Kees",
  description: "Videncia Sol Kees - Más de 20 años de experiencia en videncia natural, limpiezas energéticas, mediumnidad, liberaciones y psicología holística.",
  icons: {
    icon: "/img/logo/marca.webp",
    shortcut: "/img/logo/marca.webp",
    apple: "/img/logo/marca.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${nanumGothic.variable} font-serif h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <StickyButtons />
      </body>
    </html>
  );
}
