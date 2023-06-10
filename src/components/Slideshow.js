import React, { useState } from "react";
import arrowRight from "../assets/img/arowRight.png";
import arrowLeft from "../assets/img/arrowLeft.png";
import { logement } from "../datas/logements";

const Slideshow = (image) => {
  const [counter, setCounter] = useState(0);
  const picture = logement.map(({ pictures }) => [{ picture: { pictures } }]);
  const slideLength = picture.length;
  console.log(picture);

  return <div></div>;
};

export default Slideshow;
