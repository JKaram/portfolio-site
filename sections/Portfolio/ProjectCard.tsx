import React from "react";
import Badge from "./Badge";
import format from "date-fns/format";

export default function ProjectCard(props: any) {
  const { title, desc, img, badges, color, date, link } = props;
  const formatedDate = format(date, "MMMM y");
  return (
    <div
      style={{ background: color }}
      className="flex flex-col my-5 overflow-hidden text-white rounded md:flex-row md:h-64 "
    >
      <div className="relative h-40 overflow-hidden md:w-full md:h-full ">
        <a href={link} target="_blank" rel="noreferrer">
          <div
            style={{
              backgroundImage: `url(${img.src})`,
              filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))",
            }}
            className="h-full transition transform bg-cover cursor-pointer md:hover:scale-105 md:w-3/4 md:m-auto md:rounded-t md:h-3/4 md:bottom-0 md:left-12 md:absolute"
          />
        </a>
      </div>
      <div className="flex flex-col justify-between w-full p-4">
        <div>
          <h1 className="mb-2 text-xl font-bold font-nunito">{title}</h1>
          <time className="text-xs">{formatedDate}</time>
          <p className="text-md">{desc}</p>
        </div>
        <div className="hidden mt-4 space-x-4 text-sm md:block">
          {badges.map((elem: any, i: any) => (
            <Badge key={elem + i}>{elem}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
