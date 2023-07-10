import React from "react";
import logement from "../datas/logements";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card-main">
      <div className="card-container">
        {logement.map(({ title, cover, id }) => (
          <div className="card" key={id}>
            <Link key={id} to={`/accomodation/${id}`}>
              <img src={cover} alt={title} />
              <h3>{title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
