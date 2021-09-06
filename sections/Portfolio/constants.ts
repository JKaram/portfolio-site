import howoldwerethey from "../../public/Portfolio/howoldwerethey.png";
import beveragegenetics from "../../public/Portfolio/beveragegenetics.png";
import site from "../../public/Portfolio/site.png";

export const portfolioProjects = [
  {
    title: "My New Site",
    color: "#303030",
    img: site,
    description:
      "Version 2 of my personal website. This was a great oppertunity to further develop my UI and Figma expierince. I will eventually add a blog section (when I have time to actually write some)",
    technologies: ["React", "Next.js", "tailwindcss"],
    date: new Date(),
  },
  {
    title: "Beverage Genetics Flavour Profile",
    img: beveragegenetics,
    color: "#f59e0b",
    description:
      "Beverage Genetics reccomends coffee flavor's based on a customers flavour profile. I designed and developed an easy to use survey that can be modified easily by the owner.",
    technologies: ["React", "tailwindcss", "Redux", "Next.js", "TypeScript"],
    date: new Date(2021, 6),
  },
  {
    title: "How Old Were They?",
    img: howoldwerethey,
    color: "#383a59",
    description:
      "Find out the age of an actor during the making of a movie they are in. This was my first project outside of Bootcamp. I am definetly going to revisit and add more features.",
    technologies: ["React", "styled components", "The Movie DB"],
    date: new Date(2020, 4),
  },
];
