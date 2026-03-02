"use client";
import { useRef, useState, useEffect } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { theme, toggleTheme, isHydrated: themeHydrated } = useTheme();
  const { language, toggleLanguage, isHydrated: langHydrated } = useLanguage();

  const { container, letter, key, currentPhrase } = useAnimateTitle(
    phrasesArray,
    true,
    4000
  );

  const isClient = themeHydrated && langHydrated;

  // Cierra el menú móvil si la pantalla crece
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <>
      {/* MOBILE TOP BAR */}
      <header className="lg:hidden glass-panel flex flex-shrink-0 items-center justify-between px-4 py-3 z-50">
         <div className="flex items-center gap-3">
            <Image src={picture} alt="Jose Martinez" width={40} height={40} className="w-10 h-10 rounded-full shadow-md object-cover" />
            <h2 className="text-sm font-semibold tracking-wide text-[var(--color-text)]">Jose Martinez</h2>
         </div>

         <div className="flex items-center gap-2">
            {isClient && (
              <button onClick={toggleLanguage} className="glass-chip w-8 h-8 flex items-center justify-center transition-all hover:scale-105 active:scale-95">
                <span className={`fi fi-${language === "es" ? "us" : "es"} text-[10px] rounded-[1px]`} />
              </button>
            )}
            {isClient && (
              <button onClick={toggleTheme} className="glass-chip w-8 h-8 flex items-center justify-center transition-all hover:scale-105 active:scale-95">
                {theme === "dark" ? (
                  <i className="fa-solid fa-moon text-[12px] text-[var(--color-text)]"></i>
                ) : (
                  <i className="fa-solid fa-sun text-[12px] text-[var(--color-text)]"></i>
                )}
              </button>
            )}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="glass-chip w-8 h-8 flex items-center justify-center transition-all hover:scale-105 active:scale-95 ml-1">
              <i className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"} text-[14px] text-[var(--color-primary)]`}></i>
            </button>
         </div>
      </header>

      {/* Overlay para móvil */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* SIDEBAR (DESKTOP) & MOBILE BOTTOM SHEET */}
      <aside 
        className={`glass-panel flex-col overflow-hidden flex-shrink-0 transition-transform duration-500 z-50
          lg:w-72 lg:self-stretch lg:static lg:translate-y-0 lg:h-auto lg:max-h-none lg:m-0 lg:rounded-3xl lg:flex
          fixed bottom-0 left-2 right-2 mb-2 rounded-t-3xl rounded-b-3xl max-h-[85vh] flex
          ${isMobileMenuOpen ? "translate-y-0" : "translate-y-[150%] lg:translate-y-0"}
        `}
      >
        {/* Profile (Oculto en mobile drawer, visible en desktop) */}
        <div className="hidden lg:flex flex-col items-center gap-4 text-center px-6 pt-6 pb-5">
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

      <div className="hidden lg:block mx-4 h-px bg-white/10" />

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-4" onClick={() => setIsMobileMenuOpen(false)}>
        <Navigation />
      </div>

      <div className="hidden lg:block mx-4 h-px bg-white/10" />

      {/* Controls (Hidden on mobile dropdown because they are in the header, shown on desktop) */}
      <div className="hidden lg:flex items-center justify-between px-6 py-4">
        <button
          onClick={toggleTheme}
          className="glass-chip px-3 py-2 transition-all duration-300 hover:-translate-y-0.5"
        >
          {theme === "dark" ? (
            <span className="material-symbols-outlined text-[18px] text-[var(--color-text)]">dark_mode</span>
          ) : (
            <span className="material-symbols-outlined text-[18px] text-[var(--color-text)]">light_mode</span>
          )}
        </button>

        {isClient && (
          <button
            className="glass-chip px-3 py-2 transition-all duration-300 hover:-translate-y-0.5"
            onClick={toggleLanguage}
            title={language === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            {language === "es" ? (
              <span className="fi fi-us rounded-sm"></span>
            ) : (
              <span className="fi fi-es rounded-sm"></span>
            )}
          </button>
        )}
      </div>
    </aside>
    </>
  );
}
