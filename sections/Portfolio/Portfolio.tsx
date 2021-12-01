import React from "react";
import ProjectCard, { ThreeJSProjectCard } from "./ProjectCard";
import { portfolioProjects } from "./constants";

export default function Portfolio() {
  return (
    <div className="px-4 lg:p-0">
      <h2 className="font-nunito text-center font-bold text-3xl my-8">Projects</h2>
      {/* <ThreeJSProjectCard
        title={"three.js"}
        desc={"Learning ThreeJS, and how to model (poorly) using blender."}
        badges={["three.js", "React Three Fiber"]}
        img={portfolioProjects[0].img}
        color={"#2C6A6D"}
        date={new Date(2021, 9)}
        link={portfolioProjects[0].link}
      /> */}
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
