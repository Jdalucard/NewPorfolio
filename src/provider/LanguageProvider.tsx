"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import esTranslations from "../app/services/langs/es.json";
import enTranslations from "../app/services/langs/en.json";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
  getValue: (key: string) => unknown;
  toggleLanguage: () => void;
  isHydrated: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  es: esTranslations,
  en: enTranslations,
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguage] = useState<Language>("es");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;
    
    // Extract locale from pathname
    const pathLocale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/es") ? "es" : null;
    
    // Prioritize URL locale, then localStorage, then default
    let initialLanguage: Language = "es";
    
    if (pathLocale && (pathLocale === "es" || pathLocale === "en")) {
      initialLanguage = pathLocale;
    } else {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
        initialLanguage = savedLanguage;
      }
    }
    
    setLanguage(initialLanguage);
    setIsHydrated(true);
  }, [pathname]);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("language", language);
    }
  }, [language, isHydrated]);

  const getValue = (key: string): unknown => {
    const keys = key.split(".");
    let value: unknown = translations[language];

    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }

    return value;
  };

  const t = (key: string): string | string[] => {
    const value = getValue(key);
    
    if (typeof value === "string") {
      return value;
    }
    
    if (Array.isArray(value)) {
      return value;
    }
    
    return key;
  };

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    
    // Navigate to the same page but with new locale first
    if (isHydrated) {
      const currentPath = pathname.replace(/^\/(en|es)/, "");
      router.push(`/${newLanguage}${currentPath || "/"}`);
    }
    
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, getValue, toggleLanguage, isHydrated }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageProvider;
