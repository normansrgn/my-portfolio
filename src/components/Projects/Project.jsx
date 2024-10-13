import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ProjectCard(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="projects__card" data-aos="fade-up">
      <div className="projects__about_prod">
        <span>Projects</span>
        <h1 className="projects__title">{props.title}</h1>
        <p className="projects__disc">{props.disc}</p>
      </div>
      <div className="projects__prewe" data-aos="fade-up">
        <a href={props.url} target="_blank" rel="noreferrer">
          <img
            data-aos="fade-up"
            src={props.img}
            alt={props.title}
            className="projects__frontimg"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
