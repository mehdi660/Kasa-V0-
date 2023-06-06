import React, { useState } from "react";
import arrowClp from "../assets/img/arrow-clp.png";

const Collaps = ({ state, defaultState = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultState);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="collaps">
      <div className="collaps-title" onClick={setIsCollapsed}>
        <h3 onClick={setIsCollapsed}>{state.title}</h3>
        <img className="arrowClp" src={arrowClp} alt="arrow" />
      </div>
      <div className="collaps-desc">
        <p>{state.description}</p>
      </div>
    </div>
  );
};

export default Collaps;
