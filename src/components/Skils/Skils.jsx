import { Component } from "react";

import { Container } from "react-bootstrap";

import "./__skils.scss";
import skils from "./skils.png";

export default class Skills extends Component {
  render() {
    return (
      <section className="skils">
        <Container className="skils__container">
          <div className="skils__text">
            <h1>
              I'm currently looking to join a <span> cross-functional </span>
              team
            </h1>
            <p>
              that values improving people's lives through accessible design
            </p>
          </div>

          <div className="skils__image">
            <img src={skils} alt="" />
          </div>
        </Container>
      </section>
    );
  }
}
