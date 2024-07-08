import { Component } from "react";
import { Container } from "react-bootstrap";

import Aos from "aos";
import "aos/dist/aos.css";

import "./__footer.scss";

import inst from "./icons/ig.png";
import github from "./icons/git.png";

export default class Footer extends Component {
  componentDidMount() {
    Aos.init();
  }
  render() {
    return (
      <footer className="footer">
        <Container className="footer__container" data-aos="fade-up">
          <h1 className="footer__title">Contact </h1>
          <p className="footer__text">
            I'm currently looking to join a cross-functional team that values
            improving people's lives through accessible design. or have a
            project in mind? Let's connect.
          </p>

          <div className="footer__email">ibrhaimmemon930@gmail.com</div>

          <div className="footer__socials">
            <a href="https://www.instagram.com/normansrgn/">
              {" "}
              <img src={inst} alt="" />{" "}
            </a>
            <a href="https://github.com/normansrgn">
              {" "}
              <img src={github} alt="" />{" "}
            </a>
          </div>
        </Container>
      </footer>
    );
  }
}
