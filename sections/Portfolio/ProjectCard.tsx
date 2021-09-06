import React from "react";
import Badge from "./Badge";
import format from "date-fns/format";
export default function ProjectCard(props: any) {
  const { title, desc, img, badges, color, date } = props;
  const formatedDate = format(date, "MMMM y");
  return (
    <div
      style={{ background: color }}
      className="flex  text-white flex-col rounded my-5 md:flex-row md:h-64 overflow-hidden"
    >
      <div className="h-40 md:w-full md:h-full relative overflow-hidden  ">
        <div
          style={{
            backgroundImage: `url(${img.src})`,
            filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))",
          }}
          className="h-full bg-cover  md:w-3/4 md:m-auto md:rounded-t md:h-3/4 md:bottom-0 md:left-12 md:absolute"
        ></div>
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
