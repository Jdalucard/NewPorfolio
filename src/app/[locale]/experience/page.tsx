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
      ],
    },
  ];

  return (
    <section className="p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">{t("experience.title")}</h1>
      </header>

      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-[var(--theme-section-background)] p-6 rounded-lg border-l-4 border-[var(--color-primary)]"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h2 className="text-xl font-bold mb-1">{t(job.title)}</h2>
                <p className="text-lg text-[var(--color-primary)] mb-1">
                  {t(job.company)}
                </p>
                <p className="text-sm text-[var(--color-secondary)]">
                  {t(job.location)}
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-sm font-semibold text-[var(--color-secondary)]">
                  {t(job.period)}
                </p>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              {job.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[var(--color-primary)] mt-1">▹</span>
                  <p className="text-sm flex-1">{t(achievement)}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
