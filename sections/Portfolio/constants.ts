import howoldwerethey from "../../public/Portfolio/howoldwerethey.png";
import beveragegenetics from "../../public/Portfolio/beveragegenetics.png";
import instagram from "../../public/Portfolio/instagram.jpg";
import solaroid from "../../public/Portfolio/solaroid.png";
import site from "../../public/Portfolio/site.jpg";

export const portfolioProjects = [
  {
    title: "Solaroid",
    color: "#2C113A",
    link: "https://solaroid.jamiekaram.dev/",
    img: solaroid,
    description:
      '"Instagramish" photo sharing site using the NASA API. Implemented an infinite scrolling feature. A user can like, and share photos.',
    technologies: ["React", "tailwindcss", "React Query", "NASA API"],
    date: new Date(2021, 8),
  },
  {
    title: "jamiekaram.dev",
    color: "#303030",
    link: "https://github.com/JKaram/portfolio-site",
    img: site,
    description:
      "Version 2 of my personal website. This was a great oppertunity to further develop my UI and Figma expierince. I will eventually add a blog section (when I have time to actually write some)",
    technologies: ["React", "Next.js", "tailwindcss"],
    date: new Date(2021, 8),
  },
  {
    title: "Beverage Genetics Flavour Profile",
    img: beveragegenetics,
    link: "https://coffee-survey.netlify.app/",
    color: "#f59e0b",
    description:
      "Beverage Genetics reccomends coffee flavor's based on a customers flavour profile. I designed and developed an easy to use survey that can be modified easily by the owner.",
    technologies: ["React", "tailwindcss", "Redux", "Next.js", "TypeScript"],
    date: new Date(2021, 6),
  },
  {
    title: "Instagram Scraper",
    img: instagram,
    color: "#5851db",
    link: "https://github.com/JKaram/instagram-data",
    description:
      'Scrape "likes" and other pertinent information. Create a model with the data and calculate the optimal time to post on Instagram and maximize likes.',
    technologies: ["Python", "Selenium", "Beautiful Soup"],
    date: new Date(2020, 11),
  },
  {
    title: "How Old Were They?",
    img: howoldwerethey,
    link: "https://howoldwerethey.jamiekaram.dev/",
    color: "#383a59",
    description:
      "Find out the age of an actor during the making of a movie they are in. This was my first project outside of Bootcamp. I am definetly going to revisit and add more features.",
    technologies: ["React", "styled components", "The Movie DB"],
    date: new Date(2020, 4),
  },
];
