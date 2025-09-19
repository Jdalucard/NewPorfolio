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
    <aside className="h-[96%] shadow-theme-md p-3 w-72 flex flex-col justify-between border-gray-300 dark:border-gray-700 rounded-lg">
      <div className="shadow-theme-md p-2 rounded-lg border-b-2 border-gray-300 dark:border-gray-700 pb-4 flex flex-col items-center">
        <Image
          src={picture}
          alt="My Picture"
          width={150}
          height={150}
          className="rounded-full object-cover mt-2"
        />
        <div className="flex justify-between gap-4 mt-4 items-center">
          <h2>Jose Martinez</h2>
          <button
            onClick={togglePlayPause}
            className="rounded-lg transition-all duration-300 hover:scale-150 hover:-rotate-6 hover:text-[var(--color-primary)]"
          >
            <audio
              ref={audioRef}
              src="/audio/my-name-pronuciation.mp3"
              onEnded={() => setIsPlaying(false)}
            />
            {isPlaying ? (
              <span className="material-symbols-outlined">volume_up</span>
            ) : (
              <span className="material-symbols-outlined">volume_off</span>
            )}
          </button>
        </div>
        <div>
          <motion.h1
            key={key}
            className="text-lg font-bold flex flex-wrap font-zr"
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
      </div>

      <Navigation/>

      <div className="flex justify-between">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-12 hover:text-[var(--color-primary)]"
        >
          {theme === "dark" ? (
            <span className="material-symbols-outlined">moon_stars</span>
          ) : (
            <span className="material-symbols-outlined">brightness_7</span>
          )}
        </button>

        {isClient && (
          <button
            className="p-2 rounded-lg transition-transform duration-300 hover:scale-125"
            onClick={toggleLanguage}
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
