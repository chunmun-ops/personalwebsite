import React from "react";
import "./about.css";
import ME from "../../assets/CM.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>Penultimate Year CS Student</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Network</h5>
              <small>500+ on Linkedin</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Hey there! I'm Chun Mun, a penultimate year Computer Science
            enthusiast that have dived into an exciting exchange program split
            between the United States and China. I'm thrilled about the prospect
            of connecting with new faces and broadening my horizons. My passion
            for Computer Science fuels my journey, and I'm eager to explore the
            intersections of tech, culture, and innovation across borders.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
