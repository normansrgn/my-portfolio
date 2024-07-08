import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header.jsx";
import Me from "./components/Me/Me.jsx";
import WorkCards from "./components/WorkCards/WorkCards.jsx";
import Skills from "./components/Skils/Skils.jsx";
import Projects from "./components/Projects/Projects.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />

    <Me />
    <WorkCards />
    <Skills />
    <Projects />
  </React.StrictMode>
);
