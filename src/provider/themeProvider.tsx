"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  isHydrated: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    
    const savedTheme = localStorage.getItem("theme") as Theme;
    
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
    
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
    
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme !== theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }
    }
  }, [theme, isHydrated]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isHydrated }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
