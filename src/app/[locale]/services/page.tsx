"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section className="p-6">
      <header>
        <h1 className="text-3xl font-bold mb-6">
          {t("services.title")}
        </h1>
      </header>

    </section>
  );
};

export default Services;
