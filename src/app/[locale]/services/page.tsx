"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";

const Services = () => {
  const { t, getValue } = useLanguage();

  const serviceTypes = [
    { key: "frontend",    icon: <i className="fa-solid fa-desktop text-2xl"></i> },
    { key: "mobile",      icon: <i className="fa-solid fa-mobile-screen text-2xl"></i> },
    { key: "backend",     icon: <i className="fa-solid fa-gears text-2xl"></i> },
    { key: "fullstack",   icon: <i className="fa-solid fa-layer-group text-2xl"></i> },
    { key: "databases",   icon: <i className="fa-solid fa-database text-2xl"></i> },
    { key: "performance", icon: <i className="fa-solid fa-rocket text-2xl"></i> },
    { key: "consulting",  icon: <i className="fa-solid fa-lightbulb text-2xl"></i> },
  ];

  return (
    <section className="p-6">
      <div className="glass-panel space-y-10">
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
              className="frosted-card border-l-4 border-[var(--color-primary)]/70 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="text-3xl drop-shadow">{service.icon}</span>
                <div className="flex-1">
                  <h2 className="text-lg font-bold mb-1">
                    {t(`services.${service.key}.title`)}
                  </h2>
                  <p className="text-xs italic text-[var(--color-primary)]/80 mb-3">
                    {t(`services.${service.key}.summary`)}
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {((getValue(`services.${service.key}.features`) as string[]) || []).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 text-[var(--color-primary)] text-xs"><i className="fa-solid fa-check"></i></span>
                    <p className="text-sm flex-1 text-[var(--color-secondary)]">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* What can I do for your project */}
        <div className="frosted-card border-t-4 border-[var(--color-primary)]/60">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-[var(--color-primary)]">
            <i className="fa-solid fa-toolbox"></i> {t("services.whatCanIDoTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {((getValue("services.whatCanIDo") as string[]) || []).map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                <p className="text-sm text-[var(--color-text)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
