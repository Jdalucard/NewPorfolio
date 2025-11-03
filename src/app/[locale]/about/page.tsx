"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";

const AboutMe = () => {
  const { t } = useLanguage();
  return (
    <section className="p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">{t("about.title")}</h1>
        <p className="text-lg text-[var(--color-secondary)]">{t("about.subtitle")}</p>
      </header>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
            {t("about.profile")}
          </h2>
          <p className="text-base leading-relaxed">{t("about.profileDescription")}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
            {t("about.skills")}
          </h2>
          <div className="space-y-4">
            <div className="bg-[var(--theme-section-background)] p-4 rounded-lg">
              <h3 className="font-bold mb-2">{t("about.frontend")}</h3>
              <p className="text-sm">{t("about.frontendSkills")}</p>
            </div>
            <div className="bg-[var(--theme-section-background)] p-4 rounded-lg">
              <h3 className="font-bold mb-2">{t("about.backend")}</h3>
              <p className="text-sm">{t("about.backendSkills")}</p>
            </div>
            <div className="bg-[var(--theme-section-background)] p-4 rounded-lg">
              <h3 className="font-bold mb-2">{t("about.tools")}</h3>
              <p className="text-sm">{t("about.toolsSkills")}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
            {t("about.education")}
          </h2>
          <div className="space-y-4">
            <div className="bg-[var(--theme-section-background)] p-4 rounded-lg">
              <h3 className="font-bold mb-1">{t("about.education1")}</h3>
              <p className="text-sm text-[var(--color-secondary)]">
                {t("about.education1Date")} • {t("about.education1Location")}
              </p>
            </div>
            <div className="bg-[var(--theme-section-background)] p-4 rounded-lg">
              <h3 className="font-bold mb-1">{t("about.education2")}</h3>
              <p className="text-sm mb-1">{t("about.education2Degree")}</p>
              <p className="text-sm text-[var(--color-secondary)]">
                {t("about.education2Date")} • {t("about.education2Location")}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
            {t("about.certifications")}
          </h2>
          <div className="bg-[var(--theme-section-background)] p-4 rounded-lg">
            <p className="mb-2">{t("about.certifications")}: Desarrollo Web</p>
            <a
              href="#"
              className="text-[var(--color-primary)] hover:underline text-sm"
            >
              {t("about.certificationsLink")}
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
            {t("about.interests")}
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[var(--theme-section-background)] px-4 py-2 rounded-lg text-sm">
              {t("about.interest1")}
            </span>
            <span className="bg-[var(--theme-section-background)] px-4 py-2 rounded-lg text-sm">
              {t("about.interest2")}
            </span>
            <span className="bg-[var(--theme-section-background)] px-4 py-2 rounded-lg text-sm">
              {t("about.interest3")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
