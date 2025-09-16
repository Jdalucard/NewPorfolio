"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";
const AboutMe = () => {
  const { t } = useLanguage();
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">{t("about.title")}</h1>
      <div className="space-y-4 bg">
        <p>Tu descripción personal aquí</p>
      </div>
    </section>
  );
};

export default AboutMe;
