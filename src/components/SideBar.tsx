"use client";
import Link from "next/link";
import { useTheme } from "@/provider/themeProvider";
import { useLanguage } from "@/provider/LanguageProvider";
import "flag-icons/css/flag-icons.min.css";

export default function Sidebar() {
  const { theme, toggleTheme, isHydrated: themeHydrated } = useTheme();
  const {
    language,
    toggleLanguage,
    t,
    isHydrated: langHydrated,
  } = useLanguage();

  const isClient = themeHydrated && langHydrated;

  const styles = {
    aside: {
      color: "var(--color-text)",
      borderRight: "2px solid var(--color-secondary)",
    },
    link: {
      color: "var(--color-text)",
    },
  };

  return (
    <aside
      className="w-64 h-screen p-4 flex flex-col justify-between"
      style={styles.aside}
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-8">Mi Portafolio</h1>
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            style={styles.link}
            className="hover:text-[var(--color-secondary)] transition-colors"
          >
            {t("navigation.home")}
          </Link>
          <Link
            href="/about"
            style={styles.link}
            className="hover:text-[var(--color-secondary)] transition-colors"
          >
            {t("navigation.about")}
          </Link>
        </nav>
      </div>
      
    
      {isClient && (
        <div className="flex justify-between">
          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <span className="material-symbols-outlined">moon_stars</span>
            ) : (
              <span className="material-symbols-outlined">brightness_7</span>
            )}
          </button>
          <button onClick={toggleLanguage}>
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