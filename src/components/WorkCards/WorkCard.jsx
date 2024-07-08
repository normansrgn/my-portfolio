import React from "react";

function WorkCard(props) {
  return (
    <div className="col-xxl-6">
      <div className="workcards__card">
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
