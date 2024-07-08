import { Component } from "react";

import { Container } from "react-bootstrap";
import logo from "./logo.png";
import "./header.scss";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
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
        </Container>
      </header>
    );
  }
}
