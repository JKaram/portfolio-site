import React from "react";
import Span from "./Span";
import { badgeColours } from "../../components/constants";

export default function Hero() {
  return (
    <div className="p-4">
      <h1 className="my-8 text-4xl font-bold font-nunito">Hi, I&apos;m Jamie 👋</h1>
      <p className="text-2xl md:leading-10 md:text-3xl">
        I&apos;m currently looking for new opportunities. Located in Ottawa, Canada. Thank you for checking out my site.
        This is where I post side projects.
      </p>
      <p className="mt-4 text-2xl md:text-3xl md:leading-10">
        I focus on front-end development. I love <Span color={badgeColours["JavaScript"]}>JavaScript</Span>,&nbsp;
        <Span color={badgeColours["TypeScript"]}>TypeScript</Span>, and <Span color="#61DAFB">React</Span>. I am also
        interested in Data Visualization and Data Science. In my past life, I worked in television as a camera operator.
        In my spare time I work on projects, run, swim and photography.
      </p>
      <p className="mt-4 text-2xl md:text-3xl md:leading-10">
        Please reach out me on{" "}
        <a
          className="underline cursor-pointer hover:text-indigo-900 dark:hover:text-red-100"
          href="https://www.linkedin.com/in/jamiekaram/"
          target="_black"
        >
          LinkedIn
        </a>
        , or{" "}
        <a
          className="underline cursor-pointer hover:text-indigo-900 dark:hover:text-red-100"
          href="mailto:hello@jamiekaram.dev"
        >
          hello@jamiekaram.dev
        </a>
        .
      </p>
    </div>
  );
}
