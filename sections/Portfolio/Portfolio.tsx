import React from "react";
import ProjectCard from "./ProjectCard";
import { portfolioProjects } from "./constants";

export default function Portfolio() {
  return (
    <div className="p-4">
      <h2 className="font-nunito text-center font-bold text-2xl mb-8">Projects</h2>
      {portfolioProjects.map((elem) => (
        <ProjectCard
          key={elem.title}
          title={elem.title}
          desc={elem.description}
          badges={elem.technologies}
          img={elem.img}
          color={elem.color}
          date={elem.date}
        />
      ))}
    </div>
  );
}
