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
        <a
          href="https://www.dropbox.com/s/vkkblcxjhkn7x5g/Jamie_Karam_Resume.pdf?dl=0"
          target="_blank"
          rel="noreferrer"
          className="text-2xl underline cursor-pointer hover:text-indigo-900 dark:hover:text-red-100"
        >
          Resume
        </a>

        <a
          href="https://github.com/JKaram"
          target="_blank"
          rel="noreferrer"
          className="text-2xl underline cursor-pointer hover:text-indigo-900 dark:hover:text-red-100"
        >
          GitHub
        </a>
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </div>
  );
}
