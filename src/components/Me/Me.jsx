import { Component } from "react";

import { Container } from "react-bootstrap";
import "./__me.scss";

import logo from "./logo.png";
export default class Me extends Component {
  render() {
    return (
      <me className="me">
        <Container className="me__container">
          <div className="me__logoBlock">
            <img src={logo} alt="logo" />
            <div className="me__logoText">
              <div className="me__minitext">A Developer who</div>
              <h1>
                Judges a book by its <span> cover</span>...
              </h1>

              <div className="me__minitext">
                Because if the cover does not impress you what else can?
              </div>
            </div>
          </div>

          <div className="me_text_block">
            <h2>I'm a Frontend Developer. </h2>
            <p>
              A self-taught UI/UX designer, functioning in the industry for 3+
              years now. I make meaningful and delightful digital products that
              create an equilibrium between user needs and business goals.
            </p>
          </div>
        </Container>
      </me>
    );
  }
}
