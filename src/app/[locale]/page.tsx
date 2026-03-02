"use client";
import { useLanguage } from "@/provider/LanguageProvider";
import Image from "next/image";
import Picture from "@/assets/FullstackPicture.png";
import PictureWrite from "@/assets/FullstackPictureWrite.png";
import { useTheme } from "@/provider/themeProvider";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiMysql, SiMariadb, SiMongodb, SiJsonwebtokens,
  SiTailwindcss, SiBootstrap,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Home() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section className="p-6 space-y-6">
      <div className="glass-panel space-y-6">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-secondary)]/70">
            {t("home.subtitle")}
          </p>
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              {t("home.title")}{" "}
              <span className="text-[var(--color-primary)]">Jose Martinez</span>
            </h1>
            <p className="text-xl font-semibold text-[var(--color-primary)] mt-1">
              {t("home.subtitle")}
            </p>
          </div>
          <p className="text-base text-[var(--color-secondary)] leading-relaxed max-w-3xl">
            {t("home.aboutMe")}
          </p>
          <p className="text-base text-[var(--color-secondary)] leading-relaxed max-w-3xl">
            {t("home.description")}
          </p>
          <div className="pt-2">
            <a
              href="/assets/Jose_Martinez_FullStack_Mobile_Developer.pdf"
              download="Jose_Martinez_FullStack_Mobile_Developer.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              {t("home.downloadCV")}
            </a>
          </div>
        </header>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          {/* Photo */}
          <div className="frosted-card relative w-full max-w-[220px] flex-shrink-0 self-start">
            <div className="relative w-full h-[220px]">
              <Image
                src={Picture}
                alt="My Picture Light"
                fill
                className={`rounded-2xl object-cover transition-opacity duration-700 ease-in-out ${
                  theme === "dark" ? "opacity-0" : "opacity-100"
                }`}
              />
              <Image
                src={PictureWrite}
                alt="My Picture Dark"
                fill
                className={`rounded-2xl object-cover transition-opacity duration-700 ease-in-out ${
                  theme === "dark" ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>

          {/* Stats + Tech stack */}
          <div className="flex-1 min-w-0 space-y-5">
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {[
                { value: "3+", label: t("home.statYearsLabel") },
                { value: "10+", label: t("home.statProjectsLabel") },
                { value: "8+", label: t("home.statTechLabel") },
              ].map((stat, idx) => (
                <div key={stat.value} className="frosted-card text-center !py-3 !px-1 md:!p-5 flex flex-col justify-center items-center">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-primary)]">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-[var(--color-secondary)] mt-1 md:mt-1.5 leading-[1.1] md:leading-tight w-full max-w-full break-words whitespace-normal text-balance">
                    {Array.isArray(stat.label) ? stat.label.join(", ") : stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary)]/70 mb-3">
                {t("home.techStack")}
              </p>
              <div className="overflow-x-hidden w-full py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="flex gap-3 w-max animate-marquee">
                  {[
                    { name: "React",        icon: SiReact,          color: "#61DAFB" },
                    { name: "Next.js",      icon: SiNextdotjs,      color: "#FFFFFF" },
                    { name: "React Native", icon: SiReact,          color: "#61DAFB" },
                    { name: "TypeScript",   icon: SiTypescript,     color: "#3178C6" },
                    { name: "Node.js",      icon: SiNodedotjs,      color: "#339933" },
                    { name: "SQL",          icon: SiMysql,          color: "#4479A1" },
                    { name: "MariaDB",      icon: SiMariadb,        color: "#C0765A" },
                    { name: "MongoDB",      icon: SiMongodb,        color: "#47A248" },
                    { name: "JWT",          icon: SiJsonwebtokens,  color: "#FB015B" },
                    { name: "REST APIs",    icon: TbApi,            color: "#A78BFA" },
                    { name: "Tailwind CSS", icon: SiTailwindcss,    color: "#06B6D4" },
                    { name: "Bootstrap",    icon: SiBootstrap,      color: "#7952B3" },
                    { name: "React",        icon: SiReact,          color: "#61DAFB" },
                    { name: "Next.js",      icon: SiNextdotjs,      color: "#FFFFFF" },
                    { name: "React Native", icon: SiReact,          color: "#61DAFB" },
                    { name: "TypeScript",   icon: SiTypescript,     color: "#3178C6" },
                    { name: "Node.js",      icon: SiNodedotjs,      color: "#339933" },
                    { name: "SQL",          icon: SiMysql,          color: "#4479A1" },
                    { name: "MariaDB",      icon: SiMariadb,        color: "#C0765A" },
                    { name: "MongoDB",      icon: SiMongodb,        color: "#47A248" },
                    { name: "JWT",          icon: SiJsonwebtokens,  color: "#FB015B" },
                    { name: "REST APIs",    icon: TbApi,            color: "#A78BFA" },
                    { name: "Tailwind CSS", icon: SiTailwindcss,    color: "#06B6D4" },
                    { name: "Bootstrap",    icon: SiBootstrap,      color: "#7952B3" },
                  ].map(({ name, icon: Icon, color }, i) => (
                    <span
                      key={`${name}-${i}`}
                      style={{ "--tech-color": color } as React.CSSProperties}
                      className="
                        group flex items-center gap-2.5 flex-shrink-0
                        glass-chip px-5 py-3 text-base font-medium
                        transition-all duration-300 cursor-default
                        hover:-translate-y-1
                        hover:[box-shadow:0_4px_20px_var(--tech-color),0_0_16px_var(--tech-color)]
                        hover:[border-color:var(--tech-color)]
                      "
                    >
                      <Icon
                        size={20}
                        style={{ color: color }}
                        className="transition-transform duration-300 group-hover:scale-125"
                      />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
