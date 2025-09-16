"use client";
import React from 'react'
import { useLanguage } from "@/provider/LanguageProvider";
const Porfolio = () => {
  const { t } = useLanguage();
  return (
    <div>{t("portfolio.title")}</div>
  )
}

export default Porfolio