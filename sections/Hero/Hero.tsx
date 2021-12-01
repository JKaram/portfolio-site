import React from "react";
import formatDistance from "date-fns/formatDistance";
import Span from "./Span";
import { badgeColours } from "../../components/constants";
export default function Hero(props: any) {
  const { github } = props;
  const formatedDate = formatDistance(new Date(github), new Date(), {
    addSuffix: true,
  });
  return (
    <div className="p-4">
      <h1 className="font-nunito font-bold text-4xl my-8">Hi, I&apos;m Jamie 👋</h1>
      <p className="text-2xl md:leading-10 md:text-3xl">
        I&apos;m currently a JavaScript Developer at SHOEBOX Ltd. Located in Ottawa, Canada 🇨🇦. Thank you for checking
        out my site, It&apos;s still a work in progress (
        <span className="underline cursor-pointer hover:text-indigo-900">
          <a href="https://github.com/JKaram/portfolio-site" rel="noreferrer" target="_blank">
            last updated {formatedDate}
          </a>
        </span>
        ).
      </p>
      <p className="text-2xl md:text-3xl md:leading-10 mt-4">
        I focus on front-end development. I love <Span color={badgeColours["JavaScript"]}>JavaScript</Span>,
        <Span color={badgeColours["TypeScript"]}>TypeScript</Span>, and <Span color="#61DAFB">React</Span>. I am also
        interested in Data Visualization and Data Science. In my past life, I worked in Television as a Camera Operator.
        In my spare time, I work on side projects, exercise and photography 📷.
      </p>
      <p className="text-2xl md:text-3xl md:leading-10 mt-4">
        Please reach out me on{" "}
        <a
          className="underline cursor-pointer hover:text-indigo-900"
          href="https://www.linkedin.com/in/jamiekaram/"
          target="_black"
        >
          LinkedIn
        </a>
        , or{" "}
        <a className="underline cursor-pointer hover:text-indigo-900" href="mailto:hello@jamiekaram.dev">
          hello@jamiekaram.dev
        </a>
        .
      </p>
    </div>
  );
}
