"use client";

import Link from "next/link";
import { motion } from "framer-motion"; 
import { useTheme } from "@/provider/themeProvider";
import { useLanguage } from "@/provider/LanguageProvider";
import { useAnimateTitle } from "@/hook/AnimateTitle";
import "flag-icons/css/flag-icons.min.css";

export default function Sidebar() {
  const { theme, toggleTheme, isHydrated: themeHydrated } = useTheme();
  const { language, toggleLanguage, t, isHydrated: langHydrated } = useLanguage();
  const { container, letter, key } = useAnimateTitle(true, 3000);

  const isClient = themeHydrated && langHydrated;

  const styles = {
    aside: {
      color: "var(--color-text)",
    },
    link: {
      color: "var(--color-text)",
    },
  };

  return (
    <aside
      className="h-[96%] p-4 w-72 flex flex-col justify-between border border-gray-300 dark:border-gray-700 rounded-lg "
      style={styles.aside}
    >
      <div className="mb-8">

        <motion.h1
          key={key} 
          className="text-2xl font-bold flex flex-wrap"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {"Mi Portafolio".split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <nav className="flex flex-col gap-4 mt-4">
          <Link
            href="/"
            style={styles.link}
            className="hover:text-[var(--theme-links-hover)] transition-colors"
          >
            {t("navigation.home")}
          </Link>
          <Link
            href="/about"
            style={styles.link}
            className="hover:text-[var(--theme-links-hover)] transition-colors"
          >
            {t("navigation.about")}
          </Link>
        </nav>
      </div>

      {isClient && (
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
        </div>
      )}
    </aside>
  );
}
