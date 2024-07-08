import { Component } from "react";

import { Container } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

import logo from "./logo.png";
import "./header.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default class Header extends Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }
  render() {
    return (
      <header className="header"  data-aos="fade-down">
        <Container className="header__container">
          <a href="">
            <img src={logo} alt="" />
          </a>

          <nav className="header__nav">
            <ol>
              <li>Home</li>
              <li>About</li>
              <li>Lab</li>
            </ol>
          </nav>

          <BurgerMenu />
        </Container>
      </header>
    );
  }
}
