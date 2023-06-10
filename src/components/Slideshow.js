import React, { useState } from "react";
import arrowRight from "../assets/img/arowRight.png";
import arrowLeft from "../assets/img/arrowLeft.png";
import { logement } from "../datas/logements";

const Slideshow = (images) => {
  const [counter, setCounter] = useState(0);
  const picture = logement.map(({ pictures }) => [{ picture: { pictures } }]);
  const slideLength = picture.length;

  let actualImage;
  actualImage = picture[counter];

  const slideLeft = () => {
    setCounter((counter - 1 + slideLength) % slideLength);
  };

  const slideRight = () => {
    setCounter((counter + 1) % slideLength);
  };

  return (
    <div className="slider-cntr">
      <div className="slider">
        <img
          onClick={slideLeft}
          className="arrowLeft"
          src={arrowLeft}
          alt="fleche de gauche"
        />
        <img
          onClick={slideRight}
          className="arrowRight"
          src={arrowRight}
          alt="fleche de droite"
        />
        <img
          className="picture-appart"
          src={actualImage}
          alt="Visualisation de la chambre d'hote"
        />
      </div>
    </div>
  );
};

export default Slideshow;
