"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/provider/themeProvider";
import { useLanguage } from "@/provider/LanguageProvider";
import { useAnimateTitle } from "@/hook/AnimateTitle";
import Image from "next/image";
import picture from "@/assets/Picture.webp";
import { PhraseText } from "@/const";
import Navigation from "./Navigation";
import "flag-icons/css/flag-icons.min.css";

const phrasesArray = Object.values(PhraseText);

export default function Sidebar() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { theme, toggleTheme, isHydrated: themeHydrated } = useTheme();
  const { language, toggleLanguage, isHydrated: langHydrated } = useLanguage();

  const { container, letter, key, currentPhrase } = useAnimateTitle(
    phrasesArray,
    true,
    4000
  );

  const isClient = themeHydrated && langHydrated;

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    setIsPlaying(!isPlaying);

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  return (
    <aside className="glass-panel w-72 flex flex-col overflow-hidden flex-shrink-0 self-stretch">
      {/* Profile */}
      <div className="flex flex-col items-center gap-4 text-center px-6 pt-6 pb-5">
        <Image
          src={picture}
          alt="My Picture"
          width={120}
          height={120}
          className="rounded-full object-cover shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
        />
        <div className="flex items-center justify-between gap-4 w-full">
          <h2 className="text-base font-semibold tracking-wide text-[var(--color-text)]">Jose Martinez</h2>
          <button
            onClick={togglePlayPause}
            className="rounded-full bg-white/10 p-2 transition-all duration-300 hover:scale-110 hover:bg-white/20"
          >
            <audio
              ref={audioRef}
              src="/audio/my-name-pronuciation.mp3"
              onEnded={() => setIsPlaying(false)}
            />
            {isPlaying ? (
              <span className="material-symbols-outlined text-[18px]">volume_up</span>
            ) : (
              <span className="material-symbols-outlined text-[18px]">volume_off</span>
            )}
          </button>
        </div>
        <motion.h1
          key={key}
          className="text-sm font-bold flex flex-wrap justify-center text-[var(--color-primary)]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {currentPhrase.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className={char === " " ? "mr-1" : ""}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <div className="mx-4 h-px bg-white/10" />

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <Navigation />
      </div>

      <div className="mx-4 h-px bg-white/10" />

      {/* Controls */}
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={toggleTheme}
          className="glass-chip px-3 py-2 transition-all duration-300 hover:-translate-y-0.5"
        >
          {theme === "dark" ? (
            <span className="material-symbols-outlined text-[18px]">dark_mode</span>
          ) : (
            <span className="material-symbols-outlined text-[18px]">light_mode</span>
          )}
        </button>

        {isClient && (
          <button
            className="glass-chip px-3 py-2 transition-all duration-300 hover:-translate-y-0.5"
            onClick={toggleLanguage}
            title={language === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            {language === "es" ? (
              <span className="fi fi-us"></span>
            ) : (
              <span className="fi fi-es"></span>
            )}
          </button>
        )}
      </div>
    </aside>
  );
}
