"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";

const Services = () => {
  const { t, getValue } = useLanguage();

  const serviceTypes = [
    { key: "frontend",    icon: "🖥" },
    { key: "mobile",      icon: "📱" },
    { key: "backend",     icon: "⚙️" },
    { key: "fullstack",   icon: "🧩" },
    { key: "databases",   icon: "🗄" },
    { key: "performance", icon: "🚀" },
    { key: "consulting",  icon: "🧠" },
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
                    <span className="mt-0.5 text-[var(--color-primary)] text-xs">✓</span>
                    <p className="text-sm flex-1 text-[var(--color-secondary)]">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* What can I do for your project */}
        <div className="frosted-card border-t-4 border-[var(--color-primary)]/60">
          <h2 className="text-xl font-bold mb-4 text-[var(--color-primary)]">
            🛠 {t("services.whatCanIDoTitle")}
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
