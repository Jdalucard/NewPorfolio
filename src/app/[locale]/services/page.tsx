"use client";
import React from 'react'
import { useLanguage } from "@/provider/LanguageProvider";
const Services = () => {
  const { t } = useLanguage();
  return (
    <>
    <div>{t("services.title")}</div>
    </>
    
  )
}

export default Services