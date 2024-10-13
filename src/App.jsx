import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Me from "./components/Me/Me.jsx";
import WorkCards from "./components/WorkCards/WorkCards.jsx";
import Skills from "./components/Skils/Skils.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <Me />
      <WorkCards />
      <Skills />
      <Projects />

      <Footer />
    </>
  );
}

export default App;
