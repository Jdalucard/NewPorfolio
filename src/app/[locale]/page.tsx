"use client";
import Cta from "@/components/Cta"
import { useLanguage } from "@/provider/LanguageProvider";
export default function Home() {
  const { t } = useLanguage();

  return (
    <>
    <header>
      <div >
      <h1>{t("home.title")}</h1>

        <h5 >{t("home.subtitle")}</h5>
       
      <Cta/>
    
      </div>
    </header>
    </>
  );
}
