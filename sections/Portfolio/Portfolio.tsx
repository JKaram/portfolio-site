import React from "react";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <div className="p-4">
      <h2 className="font-nunito text-center font-bold text-2xl mb-8">Projects</h2>
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}
