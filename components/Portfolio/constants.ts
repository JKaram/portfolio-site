import beveragegenetics from "../../public/Portfolio/beveragegenetics.png";
import howoldwerethey from "../../public/Portfolio/howoldwerethey.png";
import instagram from "../../public/Portfolio/instagram.jpg";
import shatzen from "../../public/Portfolio/shatzen.png";
import site from "../../public/Portfolio/site.jpg";
import solaroid from "../../public/Portfolio/solaroid.png";

export const portfolioProjects = [
  {
    title: "Shatzen",
    color: "#FF5B5B",
    link: "https://shatzen.jamiekaram.dev",
    img: shatzen,
    description:
      "Scrum poker app. Built as an alternative for Hajistsu, which would frequently lose connection. Create a room, enter a name and start estimating!",
    technologies: ["React", "tailwindcss", "Web Sockets"],
    date: new Date(2022, 9),
  },
  {
    title: "Solaroid",
    color: "#2C113A",
    link: "https://solaroid.jamiekaram.dev/",
    img: solaroid,
    description:
      'Solaroid is an "Instagramish" photo sharing site using the NASA API. Built over a weekend for a code competition. Implemented an infinite scrolling feature, which dynamically loads more photos once you scoll to the bottom of the page. A user can like, and share photos.',
    technologies: ["React", "tailwindcss", "React Query", "NASA API"],
    date: new Date(2021, 8),
  },
  {
    title: "jamiekaram.dev",
    color: "#303030",
    link: "https://github.com/JKaram/portfolio-site",
    img: site,
    description:
      "Version 2 of my personal website. This was a great oppertunity to further develop my UI and Figma expierince.",
    technologies: ["React", "Next.js", "tailwindcss"],
    date: new Date(2021, 8),
  },
  {
    title: "Beverage Genetics Flavour Profile",
    img: beveragegenetics,
    link: "https://coffee-survey.netlify.app/",
    color: "#f59e0b",
    description:
      "Beverage Genetics recommends coffee flavor's based on a customers flavour profile. I designed and developed an easy to use survey that can be modified easily by the owner.",
    technologies: ["React", "tailwindcss", "Redux", "Next.js", "TypeScript"],
    date: new Date(2021, 6),
  },
  // {
  //   title: "Instagram Scraper",
  //   img: instagram,
  //   color: "#5851db",
  //   link: "https://github.com/JKaram/instagram-data",
  //   description:
  //     'Scrape "likes" and other pertinent information. Create a model with the data and calculate the optimal time to post on Instagram and maximize likes.',
  //   technologies: ["Python", "Selenium", "Beautiful Soup"],
  //   date: new Date(2020, 11),
  // },
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
