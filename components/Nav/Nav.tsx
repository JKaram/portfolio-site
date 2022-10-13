import React from "react";
import { useTranslation } from "next-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

export default function Nav() {
  const { t } = useTranslation();

  return (
    <div className="p-4 md:flex md:justify-between md:items-center">
      <h1 className="text-3xl font-bold text-center font-nunito">{t("nav.name")}</h1>
      <div className="flex justify-center mt-3 space-x-3 l">
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </div>
  );
}
