import React from "react";
import ProjectCard from "./ProjectCard";
import { portfolioProjects } from "./constants";

export default function Portfolio() {
  return (
    <div className="px-4 lg:p-0">
      <h2 className="my-8 text-3xl font-bold text-center font-nunito">Projects</h2>
      {portfolioProjects.map((elem) => (
        <ProjectCard
          key={elem.title}
          title={elem.title}
          desc={elem.description}
          badges={elem.technologies}
          img={elem.img}
          color={elem.color}
          date={elem.date}
          link={elem.link}
        />
      ))}
    </div>
  );
}
