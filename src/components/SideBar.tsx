"use client";
import Link from "next/link";
import { useTheme } from "@/provider/themeProvider";

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    aside: {
      color: "var(--color-text)",
       borderRight: '2px solid var(--color-secondary)'
    },
    link: {
      color: "var(--color-text)",
    },
    linkHover: {
      color: "var(--color-secondary)",
    },

  };

  return (
    <aside
         className="w-64 h-screen p-4 flex flex-col justify-between  "
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
            Home
          </Link>
          <Link
            href="/about"
            style={styles.link}
            className="hover:text-[var(--color-secondary)] transition-colors"
          >
            About
          </Link>
        </nav>
      </div>

      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <span className="material-symbols-outlined">moon_stars</span>
        ) : (
          <span className="material-symbols-outlined">brightness_7</span>
        )}
      </button>
    </aside>
  );
}
