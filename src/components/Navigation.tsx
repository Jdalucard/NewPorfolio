import React from "react";
import Link from "next/link";
import { Routes } from "@/const";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/provider/LanguageProvider";

const Navigation = () => {
  const pathname = usePathname();

  const isActiveLink = (pathname: string, route: string): boolean => {
    const cleanedPathname =
      pathname.startsWith("/en") || pathname.startsWith("/es")
        ? pathname.substring(3)
        : pathname;

    if (route === Routes.HOME) {
      return cleanedPathname === "/" || cleanedPathname === "";
    }

    return cleanedPathname.startsWith(route);
  };

  const { t, language, isHydrated: langHydrated } = useLanguage();

  if (!langHydrated) {
    return null;
  }

  const getLocalizedPath = (route: string) => {
    return `/${language}${route}`;
  };

  const baseLink =
    "group relative flex items-center gap-2 rounded-xl px-3 py-3 text-base font-medium transition-all duration-200 hover:bg-[var(--color-primary)]/10";
  const activeLink =
    "bg-gradient-to-r from-[var(--color-primary)]/20 to-transparent !text-[var(--color-primary)] font-semibold";
  const inactiveLink = "text-[var(--color-text)]";

  return (
    <nav className="w-full">
      <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-secondary)] mb-3 px-1 opacity-70">
        Menu
      </p>
      <div className="flex flex-col gap-1">
        {[Routes.HOME, Routes.ABOUT, Routes.EXPERIENCE, Routes.SERVICES, Routes.PORTFOLIO, Routes.CONTACT].map(
          (route) => (
            <Link
              key={route}
              href={getLocalizedPath(route)}
              className={`${baseLink} ${
                isActiveLink(pathname, route)
                  ? `${activeLink} border-l-2 border-[var(--color-primary)]`
                  : `${inactiveLink} hover:bg-[var(--color-primary)]/10`
              }`}
            >
              <span className="absolute inset-y-0 left-0 w-0.5 rounded-full bg-[var(--color-primary)]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10">
                {t(`navigation.${route.replace("/", "") || "home"}`)}
              </span>
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navigation;
