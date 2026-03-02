"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";

const Experience = () => {
  const { t } = useLanguage();

  const jobs = [
    {
      title: "experience.job1.title",
      company: "experience.job1.company",
      location: "experience.job1.location",
      period: "experience.job1.period",
      achievements: [
        "experience.job1.achievement1",
        "experience.job1.achievement2",
        "experience.job1.achievement3",
        "experience.job1.achievement4",
      ],
    },
    {
      title: "experience.job2.title",
      company: "experience.job2.company",
      location: "experience.job2.location",
      period: "experience.job2.period",
      achievements: [
        "experience.job2.achievement1",
        "experience.job2.achievement2",
        "experience.job2.achievement3",
        "experience.job2.achievement4",
      ],
    },
    {
      title: "experience.job3.title",
      company: "experience.job3.company",
      location: "experience.job3.location",
      period: "experience.job3.period",
      achievements: [
        "experience.job3.achievement1",
        "experience.job3.achievement2",
        "experience.job3.achievement3",
        "experience.job3.achievement4",
      ],
    },
    {
      title: "experience.job4.title",
      company: "experience.job4.company",
      location: "experience.job4.location",
      period: "experience.job4.period",
      achievements: [
        "experience.job4.achievement1",
        "experience.job4.achievement2",
        "experience.job4.achievement3",
        "experience.job4.achievement4",
      ],
    },
  ];

  const accentGradients = [
    "from-[#7c3aed]/35 via-transparent to-transparent",
    "from-[#0ea5e9]/35 via-transparent to-transparent",
    "from-[#f97316]/30 via-transparent to-transparent",
    "from-[#10b981]/30 via-transparent to-transparent",
  ];

  return (
    <section className="p-6">
      <div className="glass-panel space-y-10">
        <header className="space-y-2 text-center md:text-left fade-up">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)]/70">
            {t("home.subtitle")}
          </p>
          <h1 className="text-3xl font-bold">{t("experience.title")}</h1>
          <p className="text-base text-[var(--color-secondary)]">
            {t("home.description")}
          </p>
        </header>

        <div className="space-y-10">
          {jobs.map((job, index) => {
            const accent = accentGradients[index % accentGradients.length];
            return (
              <div key={job.title} className="flex items-stretch gap-4">
              <div className="flex flex-col items-center">
                <span className="mt-2 h-3 w-3 rounded-full bg-[var(--color-primary)] shadow-[0_0_18px_rgba(0,0,0,0.35)] ring-4 ring-[var(--color-primary)]/20" />
                {index !== jobs.length - 1 && (
                  <span className="my-1 w-px flex-1 bg-[var(--color-primary)]/25" />
                )}
              </div>
              <article
                className="group relative flex-1 overflow-hidden frosted-card p-6 transition-all duration-500 ease-out hover:-translate-y-1 fade-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative z-10 space-y-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-xl font-bold">{t(job.title)}</h2>
                      <p className="text-lg font-semibold text-[var(--color-primary)]">
                        {t(job.company)}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-secondary)]/80">
                      <span className="rounded-full bg-white/5 px-3 py-1 text-[var(--color-secondary)]">
                        {t(job.location)}
                      </span>
                      <span className="rounded-full bg-[var(--color-primary)]/15 px-3 py-1 text-[var(--color-primary)]">
                        {t(job.period)}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-[var(--color-secondary)]">
                    {job.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2 w-2 rotate-45 bg-[var(--color-primary)]" />
                        <p className="flex-1 leading-relaxed">{t(achievement)}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
