import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/maybank.jpg";
import IMG2 from "../../assets/OSL_Logo.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/MERN.png";
import IMG5 from "../../assets/hungrybee.png";
import IMG6 from "../../assets/HCI.jpg";
import IMG7 from "../../assets/trafficlightshowdown.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Maybank 360 Evaluation Automation",
    github: "",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "OSL Fifth Row App",
    github: "https://github.com/esctmp/osl-fifth-row-app.git",
    demo: "https://drive.google.com/file/d/1sQpJY8KudrkNaZZT0YPnvjGOF1c7M81x/view",
  },
  {
    id: 3,
    image: IMG3,
    title: "REACT Portfolio Website",
    github: "https://github.com/chunmun-ops/personalwebsite.git",
    demo: "https://personalwebsite-khaki-phi.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "MERN AI Generation App",
    github: "",
    demo: "",
  },
  {
    id: 5,
    image: IMG5,
    title: "HungryBees Java Mobile Application",
    github: "https://github.com/thehotdogs/just-hungry-app",
    demo: "https://www.youtube.com/watch?v=KLRkWafdvCo",
  },
  {
    id: 6,
    image: IMG6,
    title: "Project Firefly - HCI",
    github: "",
    demo: "",
  },
  {
    id: 7,
    image: IMG7,
    title: "Traffic Light Showdown Game",
    github: "https://github.com/thehotdogs/traffic-light-showdown",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github || "#"}
                  className={`btn ${!github ? "btn-disabled" : ""}`}
                  target="_blank"
                  onClick={(e) => !github && e.preventDefault()}
                >
                  Github
                </a>
                <a
                  href={demo || "#"}
                  className={`btn btn-primary ${!demo ? "btn-disabled" : ""}`}
                  target="_blank"
                  onClick={(e) => !demo && e.preventDefault()}
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
