import { Component } from "react";

import { Container } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

import "./__me.scss";

import logo from "./logo.png";
export default class Me extends Component {
  componentDidMount() {
    Aos.init({ duration: 1000 }); // Инициализация AOS с настройками
  }

  render() {
    return (
      <me className="me">
        <Container className="me__container">
          <div className="me__logoBlock">
            <img data-aos="fade-up" src={logo} alt="logo" />
            <div data-aos="fade-up" className="me__logoText">
              <div className="me__minitext">A Developer who</div>
              <h1>
                Judges a book by its <span> cover</span>...
              </h1>

              <div className="me__minitext">
                Because if the cover does not impress you what else can?
              </div>
            </div>
          </div>

          <div className="me_text_block" data-aos="fade-up">
            <h2>I'm a Frontend Developer. </h2>
            <p>
              A self-taught frontend developer with over 3 years of industry
              experience. I build dynamic and responsive web applications that
              balance user needs and business goals, ensuring both functionality
              and a seamless user experience.
            </p>
          </div>
        </Container>
      </me>
    );
  }
}
