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

  const { t, isHydrated: langHydrated } = useLanguage();

  if (!langHydrated) {
    return null;
  }

  return (
    <>
      <section>
        <div className="mb-8">
          <nav className="flex flex-col gap-4 mt-4">
            <Link
              href={Routes.HOME}
              className={`
              p-2 rounded-lg transition-all duration-300 ease-in-out
              hover:bg-[var(--theme-section-background)]
              ${
                isActiveLink(pathname, Routes.HOME)
                  ? "bg-[var(--theme-section-background)] font-bold text-[var(--color-primary)] border-l-2 border-[var(--color-primary)] pl-4"
                  : ""
              }
            `}
            >
              {t("navigation.home")}
            </Link>
            <Link
              href={Routes.ABOUT}
              className={`
              p-2 rounded-lg transition-all duration-300 ease-in-out
              hover:bg-[var(--theme-section-background)]
              ${
                isActiveLink(pathname, Routes.ABOUT)
                  ? "bg-[var(--theme-section-background)] font-bold text-[var(--color-primary)] border-l-2 border-[var(--color-primary)] pl-4"
                  : ""
              }
            `}
            >
              {t("navigation.about")}
            </Link>
            <Link
              href={Routes.EXPERIENCE}
              className={`
              p-2 rounded-lg transition-all duration-300 ease-in-out
              hover:bg-[var(--theme-section-background)]
              ${
                isActiveLink(pathname, Routes.EXPERIENCE)
                  ? "bg-[var(--theme-section-background)] font-bold text-[var(--color-primary)] border-l-2 border-[var(--color-primary)] pl-4"
                  : ""
              }
            `}
            >
              {t("navigation.experience")}
            </Link>
            <Link
              href={Routes.SERVICES}
              className={`
              p-2 rounded-lg transition-all duration-300 ease-in-out
              hover:bg-[var(--theme-section-background)]
              ${
                isActiveLink(pathname, Routes.SERVICES)
                  ? "bg-[var(--theme-section-background)] font-bold text-[var(--color-primary)] border-l-2 border-[var(--color-primary)] pl-4"
                  : ""
              }
            `}
            >
              {t("navigation.services")}
            </Link>
            <Link
              href={Routes.PORTFOLIO}
              className={`
              p-2 rounded-lg transition-all duration-300 ease-in-out
              hover:bg-[var(--theme-section-background)]
              ${
                isActiveLink(pathname, Routes.PORTFOLIO)
                  ? "bg-[var(--theme-section-background)] font-bold text-[var(--color-primary)] border-l-2 border-[var(--color-primary)] pl-4"
                  : ""
              }
            `}
            >
              {t("navigation.portfolio")}
            </Link>
            <Link
              href={Routes.CONTACT}
              className={`
              p-2 rounded-lg transition-all duration-300 ease-in-out
              hover:bg-[var(--theme-section-background)]
              ${
                isActiveLink(pathname, Routes.CONTACT)
                  ? "bg-[var(--theme-section-background)] font-bold text-[var(--color-primary)] border-l-2 border-[var(--color-primary)] pl-4"
                  : ""
              }
            `}
            >
              {t("navigation.contact")}
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navigation;
