import React from "react";
import Badge from "./Badge";
export default function ProjectCard() {
  return (
    <div className="flex bg-red flex-col md:rounded-l my-5 md:flex-row md:h-52">
      <div className="h-40  md:w-full md:h-full relative ">
        <div className="h-full bg-example bg-cover md:w-3/4 md:m-auto md:rounded-t md:h-2/3 md:bottom-0 md:left-12 md:absolute"></div>
      </div>
      <div className="p-4  w-full">
        <h1 className="font-bold font-nunito mb-2 text-xl">Title</h1>
        <p className="text-md">dekj kllkajsd kljkasjlkasjd kjlasdljlkas</p>
        <div className="mt-4 text-sm">
          <Badge />
        </div>
      </div>
    </div>
  );
}
