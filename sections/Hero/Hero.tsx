import { badgeColours } from "../../components/constants";
import { useTranslation, Trans } from "next-i18next";
import React from "react";
import Span from "./Span";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="p-4">
      <h1 className="my-8 text-4xl font-bold font-nunito">{t("hero.hi")}</h1>
      <p className="text-2xl md:leading-10 md:text-3xl">
        <Trans i18nKey="hero.description.0">
          I&apos;m currently looking for new opportunities. Located in Ottawa, Canada. Thank you for checking out my
          site. This is where I post side projects.
        </Trans>
      </p>
      <p className="mt-4 text-2xl md:text-3xl md:leading-10">
        <Trans
          i18nKey="hero.description.1"
          components={[
            <Span key="1" color={badgeColours["JavaScript"]} />,
            <Span key="2" color={badgeColours["TypeScript"]} />,
            <Span key="3" color="#61DAFB" />,
          ]}
        >
          I focus on front-end development. I love <Span>JavaScript</Span>,&nbsp;
          <Span>TypeScript</Span>, and <Span>React</Span>. I am also interested in Data Visualization and Data Science.
          In my past life, I worked in television as a camera operator. In my spare time I work on projects, run, swim
          and photography.
        </Trans>
      </p>

      <p className="mt-4 text-2xl md:text-3xl md:leading-10">
        <Trans
          i18nKey="hero.description.2"
          components={[
            <a
              key="1"
              className="underline cursor-pointer hover:text-indigo-900 dark:hover:text-red-100"
              href="https://www.linkedin.com/in/jamiekaram/"
              rel="noreferrer"
              target="_blank"
            />,
            <a
              key="2"
              className="underline cursor-pointer hover:text-indigo-900 dark:hover:text-red-100"
              href="mailto:hello@jamiekaram.dev"
              rel="noreferrer"
              target="_blank"
            />,
          ]}
        >
          Please reach out me on <a>LinkedIn</a>, or <a>hello@jamiekaram.dev</a>.
        </Trans>
      </p>
    </section>
  );
}
