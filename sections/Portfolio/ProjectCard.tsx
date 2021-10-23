import React, { Suspense, useRef, useEffect } from "react";
import MeCanvas from "../../components/MeModal";
import Badge from "./Badge";
import format from "date-fns/format";

export default function ProjectCard(props: any) {
  const { title, desc, img, badges, color, date, link } = props;
  const formatedDate = format(date, "MMMM y");
  return (
    <div
      style={{ background: color }}
      className="flex  text-white flex-col rounded my-5 md:flex-row md:h-64 overflow-hidden "
    >
      <div className="h-40 md:w-full md:h-full relative overflow-hidden  ">
        <a href={link} target="_blank" rel="noreferrer">
          <div
            style={{
              backgroundImage: `url(${img.src})`,
              filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))",
            }}
            className="h-full transform transition cursor-pointer md:hover:scale-105 bg-cover md:w-3/4 md:m-auto md:rounded-t md:h-3/4 md:bottom-0 md:left-12 md:absolute"
          />
        </a>
      </div>
      <div className="p-4  w-full flex flex-col justify-between">
        <div>
          <h1 className="font-bold font-nunito mb-2 text-xl">{title}</h1>
          <time className="text-xs">{formatedDate}</time>
          <p className="text-md">{desc}</p>
        </div>
        <div className="mt-4 text-sm space-x-4 hidden md:block">
          {badges.map((elem: any, i: any) => (
            <Badge key={elem + i}>{elem}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ThreeJSProjectCard(props) {
  const { title, desc, img, badges, color, date, link } = props;
  const formatedDate = format(date, "MMMM y");
  return (
    <div
      style={{ background: color }}
      className="flex relative  text-white flex-col rounded my-5 md:flex-row md:h-64  "
    >
      <div className="hidden xl:block absolute text-3xl z-10 -left-40 -top-10 text-black transform -rotate-12 font-amatic ">
        <span className="">
          <strong>Control the camera</strong>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute right-8 transform rotate-45"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
      <div className="h-40 md:w-full md:h-full relative overflow-hidden  ">
        <MeCanvas />
      </div>
      <div className="p-4  w-full flex flex-col justify-between">
        <div>
          <h1 className="font-bold font-nunito mb-2 text-xl">{title}</h1>
          <time className="text-xs">{formatedDate}</time>
          <p className="text-md">{desc}</p>
        </div>
        <div className="mt-4 text-sm space-x-4 hidden md:block">
          {badges.map((elem: any, i: any) => (
            <Badge key={elem + i}>{elem}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
