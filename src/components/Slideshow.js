import React, { useState } from "react";
import arrowRight from "../assets/img/arowRight.png";
import arrowLeft from "../assets/img/arrowLeft.png";

const Slideshow = (image) => {
  const [counter, setCounter] = useState(0);
  const pictures = image.image;
  const slideLength = pictures.length;

  let actualImage = pictures[counter];

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
