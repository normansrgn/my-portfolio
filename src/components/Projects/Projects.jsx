import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./__projects.scss";
import { projects } from "./data";
import Aos from "aos";
import "aos/dist/aos.css";

import ProjectCard from "./Project";

export default class Projects extends Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });

    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleScroll);
    this.handleScroll();

    const cards = document.querySelectorAll(".projects__card");
    cards.forEach((card, index) => {
      if ((index + 1) % 2 === 0) {
        card.classList.add("second_card");
        card.classList.add("second-card");
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
  }

  handleScroll = () => {
    const items = document.querySelectorAll(".projects__about_prod p");
    const windowHeight = window.innerHeight;

    items.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const itemBottom = item.getBoundingClientRect().bottom;

      if (itemTop < windowHeight && itemBottom > 0) {
        item.classList.add("hovered");
      } else {
        item.classList.remove("hovered");
      }
    });
  };

  render() {
    return (
      <section className="projects">
        <Container className="projects__container">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Container>
      </section>
    );
  }
}
