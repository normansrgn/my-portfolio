import React from "react";

function ProjectCard(props) {
  return (
    <div className="projects__card">
      <div className="projects__about_prod">
        <span>Projects</span>
        <h1 className="projects__title">{props.title}</h1>
        <p className="projects__disc">{props.disc}</p>
      </div>
      <div className="projects__prewe">
        <a href={props.url} target="_blank" rel="noreferrer">
          <img
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
