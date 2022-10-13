import { badgeColours } from "../constants";
import { useTranslation, Trans } from "next-i18next";
import React from "react";
import Span from "./Span";
import Contact from "./Contact";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="p-4">
      <div className="flex justify-between text-4xl">
        <h1 className="my-8 font-bold font-nunito">{t("hero.hi")}</h1>
      </div>
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
              key="4"
              className="underline cursor-pointer hover:text-indigo-900 dark:hover:text-red-100"
              href="mailto:hello@jamiekaram.dev"
              rel="noreferrer"
              target="_blank"
            />,
          ]}
        >
          Please checkout my <a>Resume</a> and <a>GitHub</a>. You can reach out on <a>LinkedIn</a> or{" "}
          <a>hello@jamiekaram.dev</a>.
        </Trans>
        <Contact className="flex justify-center mt-12 space-x-12 text-6xl md:text-7xl" />
      </p>
    </section>
  );
}
