"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";

const Services = () => {
  const { t, getValue } = useLanguage();

  const serviceTypes = [
    {
      key: "frontend",
      icon: "🎨",
    },
    {
      key: "backend",
      icon: "⚙️",
    },
    {
      key: "fullstack",
      icon: "🚀",
    },
    {
      key: "consulting",
      icon: "💡",
    },
  ];

  return (
    <section className="p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">{t("services.title")}</h1>
        <p className="text-lg text-[var(--color-secondary)]">
          {t("services.subtitle")}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceTypes.map((service) => (
          <div
            key={service.key}
            className="bg-[var(--theme-section-background)] p-6 rounded-lg border-l-4 border-[var(--color-primary)] hover:shadow-theme-lg transition-shadow duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">{service.icon}</span>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">
                  {t(`services.${service.key}.title`)}
                </h2>
                <p className="text-sm text-[var(--color-secondary)] mb-4">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>
            </div>
            <ul className="space-y-2">
              {((getValue(`services.${service.key}.features`) as string[]) || []).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">✓</span>
                  <p className="text-sm flex-1">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
