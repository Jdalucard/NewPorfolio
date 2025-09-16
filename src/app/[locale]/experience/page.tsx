'use client'
import React from 'react'
import { useLanguage } from "@/provider/LanguageProvider";
const Expirence = () => {
  const { t } = useLanguage();
  return (
    <div><h1>{t("experience.title")}</h1></div>
  )
}

export default Expirence