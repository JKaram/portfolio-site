import howoldwerethey from "../../public/Portfolio/howoldwerethey.png";
import beveragegenetics from "../../public/Portfolio/beveragegenetics.png";

export const portfolioProjects = [
  {
    title: "My New Site",
    color: "#fff",
    img: beveragegenetics,
    description: "Customers are given questions to answer and find out their flavour profile",
    technologies: ["React", "NextJS", "TailwindCSS"],
    date: new Date(),
  },
  {
    title: "Beverage Genetics Flavour Profile",
    img: beveragegenetics,
    color: "#f59e0b",
    description: "Customers are given questions to answer and find out their flavour profile",
    technologies: ["React", "TailwindCSS", "Redux", "NextJS"],
    date: new Date(),
  },
  {
    title: "How Old Were They",
    img: howoldwerethey,
    color: "#383a59",
    description: "An app to tell you how lod a guy was when filming a movie",
    technologies: ["React", "Styled-Components", "The Movie DB"],
    date: new Date(),
  },
];
