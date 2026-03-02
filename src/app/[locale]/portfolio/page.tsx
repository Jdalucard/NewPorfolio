"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";

const projects = [
  {
    key: "desapego",
    url: "https://desapego.ccorbit.com/",
    github: null,
    accent: "#7C3AED",
    tags: ["Next.js", "React", "Node.js", "E-commerce"],
  },
  {
    key: "raiz",
    url: "https://raiz.ccorbit.com/",
    github: null,
    accent: "#059669",
    tags: ["Next.js", "React Native", "Node.js", "MariaDB"],
  },
  {
    key: "ruleta",
    url: "https://ruleta.ccorbit.com/",
    github: null,
    accent: "#DC2626",
    tags: ["Next.js", "React", "Node.js", "Real-time"],
  },
  {
    key: "iptracker",
    url: "https://dazzling-gelato-c15af6.netlify.app/",
    github: "https://github.com/Jdalucard/IP-Address-Traker/tree/master",
    accent: "#0EA5E9",
    tags: ["React", "Vite", "Leaflet", "REST API"],
  },
  {
    key: "coingecko",
    url: "https://coingekoapi.netlify.app/",
    github: "https://github.com/Jdalucard/coingeko",
    accent: "#F59E0B",
    tags: ["React", "JavaScript", "CoinGecko API", "CSS"],
  },
  {
    key: "xveritas",
    url: "https://xveritas.co/",
    github: null,
    accent: "#1D4ED8",
    tags: ["WordPress", "CSS", "Responsive", "Legaltech"],
  },
  {
    key: "pitchdb",
    url: "https://pitchdb.com/",
    github: null,
    accent: "#A855F7",
    tags: ["Next.js", "Node.js", "React", "JWT"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as Easing, delay: i * 0.08 },
  }),
};

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <section className="p-6 space-y-8">
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold mb-2">{t("portfolio.title")}</h1>
        <p className="text-lg text-[var(--color-secondary)]">
          {t("portfolio.subtitle")}
        </p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.key}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ "--accent": project.accent } as React.CSSProperties}
            className="group relative flex flex-col rounded-2xl overflow-hidden
              border border-[var(--glass-border)]
              bg-[var(--glass-bg)] backdrop-blur-md
              shadow-[0_8px_32px_rgba(0,0,0,0.15)]
              hover:border-[var(--accent)]/60
              hover:shadow-[0_0_28px_var(--accent),0_8px_32px_rgba(0,0,0,0.25)]
              transition-[border-color,box-shadow] duration-500"
          >
            {/* Glow top bar */}
            <div
              className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
              style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
            />

            {/* Spotlight overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(400px circle at 50% 0%, ${project.accent}18, transparent 70%)`,
              }}
            />

            {/* Index badge */}
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300 text-5xl font-black leading-none select-none"
              style={{ color: project.accent }}>
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="relative z-10 p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-text)] transition-colors duration-300">
                {t(`portfolio.projects.${project.key}.title`)}
              </h3>
              <p className="text-sm text-[var(--color-secondary)] mb-5 flex-1 leading-relaxed">
                {t(`portfolio.projects.${project.key}.description`)}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full
                      border border-[var(--glass-border)] bg-[var(--glass-bg)]
                      text-[var(--color-secondary)]
                      group-hover:border-[var(--accent)]/50
                      group-hover:text-[var(--color-text)]
                      transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-auto">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5
                    rounded-xl text-sm font-semibold text-white
                    transition-all duration-300
                    hover:brightness-110 hover:scale-[1.03] active:scale-95"
                  style={{ background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent})` }}
                >
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  {t("portfolio.viewProject")}
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5
                      rounded-xl text-sm font-semibold
                      border border-[var(--glass-border)] bg-transparent
                      hover:border-[var(--accent)]/60 hover:bg-[var(--accent)]/10
                      transition-all duration-300 hover:scale-[1.03] active:scale-95"
                    style={{ color: project.accent }}
                  >
                    <span className="material-symbols-outlined text-[16px]">code</span>
                    {t("portfolio.viewCode")}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

