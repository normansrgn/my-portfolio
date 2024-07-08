import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function WorkCard(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Инициализация AOS с настройками
  }, []);

  return (
    <div className="col-xxl-6">
      <div className="workcards__card" data-aos="fade-up">
        <img src={props.img} alt={props.title} />
        <div className="workcards__cardinf">
          <h1>{props.title}</h1>
          <p>{props.disc}</p>
          <button className="workcards__btn">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
