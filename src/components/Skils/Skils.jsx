import { Component } from "react";

import { Container } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

import "./__skils.scss";
import skils from "./skils.png";

export default class Skills extends Component {
  componentDidMount() {
    Aos.init({ duration: 1000 }); // Инициализация AOS с настройками
  }
  render() {
    return (
      <section className="skils">
        <Container className="skils__container">
          <div className="skils__text" data-aos="fade-up">
            <h1>
              I'm currently looking to join a <span> cross-functional </span>
              team
            </h1>
            <p>
              that values improving people's lives through accessible design
            </p>
          </div>

          <div className="skils__image" data-aos="fade-up">
            <img src={skils} alt="" />
          </div>
        </Container>
      </section>
    );
  }
}
