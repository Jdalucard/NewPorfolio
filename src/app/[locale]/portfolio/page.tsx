"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <section className="p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">{t("portfolio.title")}</h1>
        <p className="text-lg text-[var(--color-secondary)]">
          {t("portfolio.subtitle")}
        </p>
      </header>

      <div className="bg-[var(--theme-section-background)] p-8 rounded-lg text-center border-2 border-dashed border-[var(--color-primary)]">
        <div className="max-w-md mx-auto space-y-4">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold mb-2">{t("portfolio.comingSoon")}</h2>
          <p className="text-base text-[var(--color-secondary)]">
            {t("portfolio.description")}
          </p>
        </div>
      </div>

      {/* Estructura preparada para proyectos futuros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 opacity-50 pointer-events-none">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-[var(--theme-section-background)] p-6 rounded-lg border border-[var(--theme-standard-borders)]"
          >
            <div className="aspect-video bg-[var(--color-secondary)] rounded-lg mb-4 opacity-20"></div>
            <h3 className="font-bold mb-2">Proyecto {item}</h3>
            <p className="text-sm text-[var(--color-secondary)] mb-4">
              Descripción del proyecto...
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-[var(--color-primary)] text-white rounded text-sm opacity-50">
                {t("portfolio.viewProject")}
              </button>
              <button className="px-4 py-2 border border-[var(--color-primary)] rounded text-sm opacity-50">
                {t("portfolio.viewCode")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
