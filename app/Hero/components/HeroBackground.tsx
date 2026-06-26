"use client";

import { useRef, useEffect } from "react";
import { heroData } from "../data/hero.data";

export const HeroBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {heroData.videoSrc ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={heroData.backgroundImage}
        >
          <source src={heroData.videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div
          className="w-full h-full bg-cover bg-top"
          style={{ backgroundImage: `url('${heroData.backgroundImage}')` }}
        />
      )}

      {/* Overlay oscuro cinemático */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/65" />

      {/* Viñeta */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Fade inferior — fusión con sección siguiente */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[1] bg-gradient-to-t from-[#111] to-transparent" />
    </div>
  );
};