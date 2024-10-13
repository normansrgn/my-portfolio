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
      <header className="header" data-aos="fade-down">
        <Container className="header__container">
          <div className="header__logo">
            <a href="">
              <img src={logo} alt="" />
            </a>
          </div>

          <nav className="header__nav">
            <ol>
              <li>
                <a href="https://t.me/psibladeabuze"> Contact me</a>
              </li>
            </ol>
          </nav>

          <BurgerMenu />
        </Container>
      </header>
    );
  }
}
