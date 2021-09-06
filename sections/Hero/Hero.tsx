import React from "react";
import formatDistance from "date-fns/formatDistance";
import Link from "next/link";
export default function Hero(props: any) {
  const { github } = props;
  const formatedDate = formatDistance(new Date(github), new Date(), {
    addSuffix: true,
  });
  return (
    <div className="p-4">
      <h1 className="font-nunito font-bold text-4xl my-8">Hi, Im Jamie 👋</h1>
      <p className=" text-2xl leading-relaxed">
        Im currently a full stack developer at Safetrack.ai. Thank you for checking out my site, still a work in
        progress (
        <span className="underline  cursor-pointer">
          <a href="https://github.com/JKaram/portfolio-site" rel="noreferrer" target="_blank">
            updated {formatedDate}
          </a>
        </span>
        ). See some of my past work projects.
      </p>
      <p className="text-2xl mt-4 leading-relaxed">
        I mainly work on front end development. I love JavaScript, TypeScript, and React. I am also intrested in Data
        Visulization, and Data Science. BTW, I am formally worked in Television as a Camera Operator. In my spare time I
        work on side projects, exersice and photography 📷.
      </p>
    </div>
  );
}
