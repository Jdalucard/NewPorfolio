"use client";
import React from 'react'
import { useLanguage } from "@/provider/LanguageProvider";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <div><h1>{t("contact.title")}</h1></div>
  )
}

export default Contact