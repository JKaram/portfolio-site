import React from "react";
import Badge from "./Badge";
export default function ProjectCard(props: any) {
  const { title, desc, img, badges, color } = props;
  return (
    <div
      style={{ background: color }}
      className="flex drop-shadow-lg bg-red flex-col md:rounded-l my-5 md:flex-row md:h-64"
    >
      <div className="h-40 md:w-full md:h-full relative   ">
        <div
          style={{ backgroundImage: `url(${img.src})` }}
          className="h-full bg-cover  md:w-3/4 md:m-auto md:rounded-t md:h-3/4 md:bottom-0 md:left-12 md:absolute"
        ></div>
      </div>
      <div className="p-4  w-full flex flex-col justify-between">
        <div>
          <h1 className="font-bold font-nunito mb-2 text-xl">{title}</h1>
          <p className="text-md">{desc}</p>
        </div>
        <div className="mt-4 text-sm">
          {badges.map((elem: any, i: any) => (
            <Badge key={elem + i}> {elem}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
