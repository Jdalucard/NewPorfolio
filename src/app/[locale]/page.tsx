"use client";
import Cta from "@/components/Cta";
import { useLanguage } from "@/provider/LanguageProvider";
import Image from "next/image";
import Picture from "@/assets/FullstackPicture.png";
import PictureWrite from "@/assets/FullstackPictureWrite.png";
import { useTheme } from "@/provider/themeProvider";

export default function Home() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section className="p-6">
      <header>
        <h1 className="text-3xl font-bold mb-6">
          {t("home.title")}{" "}
          <span className="text-[var(--color-primary)]">Jose Martinez</span>
        </h1>
        <h5>{t("home.subtitle")}</h5>
      </header>

      <div className="space-y-4 mt-4">
        <p>{t("home.aboutMe")}</p>
      </div>

      <div className="flex justify-between items-center gap-6 mt-6">
      
        <div className="relative w-[150px] h-[150px]">
          <Image
            src={Picture}
            alt="My Picture Light"
            fill
            className={`rounded-md object-cover transition-opacity duration-700 ease-in-out ${
              theme === "dark" ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={PictureWrite}
            alt="My Picture Dark"
            fill
            className={`rounded-md object-cover transition-opacity duration-700 ease-in-out ${
              theme === "dark" ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="space-y-4 flex-1">
          <p>{t("home.description")}</p>
        </div>
      </div>

      <footer className="mt-6">
        <Cta />
      </footer>
    </section>
  );
}
