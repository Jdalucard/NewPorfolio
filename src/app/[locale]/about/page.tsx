"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";

const AboutMe = () => {
  const { t } = useLanguage();

  const skillCards = [
    { title: t("about.frontend"), description: t("about.frontendSkills") },
    { title: t("about.mobile"), description: t("about.mobileSkills") },
    { title: t("about.backend"), description: t("about.backendSkills") },
    { title: t("about.databases"), description: t("about.databasesSkills") },
    { title: t("about.ai"), description: t("about.aiSkills") },
    { title: t("about.devops"), description: t("about.devopsSkills") },
  ];

  const educationItems = [
    {
      title: t("about.education1"),
      degree: t("about.education1Degree"),
      date: t("about.education1Date"),
      location: t("about.education1Location"),
    },
    {
      title: t("about.education2"),
      degree: t("about.education2Degree"),
      date: t("about.education2Date"),
      location: t("about.education2Location"),
    },
  ];

  const interests = [
    "about.interest1",
    "about.interest2",
    "about.interest3",
  ];

  return (
    <section className="p-6">
      <div className="glass-panel space-y-10">
        <header className="space-y-2 fade-up">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-secondary)]/70">
            {t("about.subtitle")}
          </p>
          <h1 className="text-3xl font-bold">
            {t("about.profile")}
          </h1>
        </header>

        <div className="space-y-10">
          <article
            className="relative overflow-hidden frosted-card fade-up"
            style={{ animationDelay: "80ms" }}
          >
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/15 via-transparent to-transparent opacity-70" />
          <div className="relative z-10 space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">
              {t("about.profile")}
            </h2>
            <p className="text-base leading-relaxed text-[var(--color-secondary)]">
              {t("about.profileDescription")}
            </p>
          </div>
        </article>

        <section className="space-y-4 fade-up" style={{ animationDelay: "140ms" }}>
          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("about.skills")}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {skillCards.map((card, idx) => (
              <div
                key={card.title as string}
                  className="group relative overflow-hidden frosted-card p-5 transition-all duration-500 ease-out hover:-translate-y-1 fade-up"
                style={{ animationDelay: `${180 + idx * 70}ms` }}
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 space-y-2">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-secondary)]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 fade-up" style={{ animationDelay: "220ms" }}>
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">
              {t("about.education")}
            </h2>
            {educationItems.map((item, idx) => (
              <div
                key={item.title as string}
                  className="frosted-card transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${240 + idx * 80}ms` }}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)]/70">
                  {item.date} • {item.location}
                </p>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                {item.degree && (
                  <p className="text-sm text-[var(--color-secondary)]">
                    {item.degree}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-4 fade-up" style={{ animationDelay: "260ms" }}>
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">
              {t("about.certificationsTitle")}
            </h2>
              <div className="frosted-card">
              <p className="text-lg font-semibold">{t("about.certificationName")}</p>
              <p className="mb-4 text-sm text-[var(--color-secondary)]">
                {t("about.certificationDescription")}
              </p>
            </div>
          </div>
        </section>

        <section className="fade-up" style={{ animationDelay: "320ms" }}>
          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {t("about.interests")}
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {interests.map((chip) => (
              <span
                key={chip}
                className="glass-chip px-4 py-2 text-sm text-[var(--color-secondary)] transition-all duration-300 hover:-translate-y-0.5"
              >
                {t(chip)}
              </span>
            ))}
          </div>
        </section>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
