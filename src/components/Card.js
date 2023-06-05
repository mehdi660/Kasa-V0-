import React from "react";
import { logement } from "../datas/logements";

const Card = () => {
  return (
    <div className="card-main">
      <div className="card-container">
        {logement.map(({ title, cover }) => (
          <div className="card" key={logement.key}>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
