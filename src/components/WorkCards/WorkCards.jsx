import { Component } from "react";

import { Container, Row } from "react-bootstrap";

import { ways } from "./data";
import "./__workcards.scss";

import WorkCard from "./WorkCard";

export default class WorkCakrds extends Component {
  render() {
    return (
      <section className="workcards">
        <Container className="workcards__container">
          <Row>
            <h1 className="workcards__title" data-aos="fade-up">
              Work Experience
            </h1>
            {ways.map((way, index) => (
              <WorkCard key={index} {...way} />
            ))}
          </Row>
        </Container>
      </section>
    );
  }
}
