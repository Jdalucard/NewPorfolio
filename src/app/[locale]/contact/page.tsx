"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      label: t("contact.email"),
      value: t("contact.emailValue"),
      href: `mailto:${t("contact.emailValue")}`,
      icon: "✉️",
    },
    {
      label: t("contact.phone"),
      value: t("contact.phoneValue"),
      href: `tel:${t("contact.phoneValue")}`,
      icon: "📱",
    },
    {
      label: t("contact.location"),
      value: t("contact.locationValue"),
      href: "#",
      icon: "📍",
    },
    {
      label: t("contact.nationality"),
      value: t("contact.nationalityValue"),
      href: "#",
      icon: "🌎",
    },
  ];

  return (
    <section className="p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">{t("contact.title")}</h1>
        <p className="text-lg text-[var(--color-secondary)] mb-4">
          {t("contact.subtitle")}
        </p>
        <p className="text-base">{t("contact.description")}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.href}
            className="bg-[var(--theme-section-background)] p-6 rounded-lg border-l-4 border-[var(--color-primary)] hover:shadow-theme-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{info.icon}</span>
              <div className="flex-1">
                <p className="text-sm text-[var(--color-secondary)] mb-2">
                  {info.label}
                </p>
                <p className="text-base font-semibold">{info.value}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 bg-[var(--theme-section-background)] p-6 rounded-lg text-center">
        <h2 className="text-xl font-bold mb-4">{t("contact.getInTouch")}</h2>
        <a
          href={`mailto:${t("contact.emailValue")}?subject=${encodeURIComponent(t("contact.emailSubject") as string)}`}
          className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--theme-links-hover)] transition-colors duration-300"
        >
          {t("contact.sendMessage")}
        </a>
      </div>
    </section>
  );
};

export default Contact;
