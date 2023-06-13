import React, { useState } from "react";
import arrowUp from "../assets/img/arrowUp.png";
import arrowDown from "../assets/img/arrowDown.png";

const Collaps = ({ state, defaultState = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultState);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="collaps">
      <div className="collaps-title" onClick={toggleCollapse}>
        <h3>{state.title}</h3>
        <img
          className="arrowUp arrowDown"
          src={isCollapsed ? arrowUp : arrowDown}
          alt="arrow"
        />
      </div>
      <div className={isCollapsed ? "collaps-desc" : "desc-hide"}>
        {state.equipments === undefined ? (
          <p>{state.description}</p>
        ) : (
          <ul>
            {state.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Collaps;
