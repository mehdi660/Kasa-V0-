import React from "react";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logement } from "../datas/logements";
import { useEffect } from "react";

const Accomodation = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const data = logement.find((item) => item.id === id);

  useEffect(() => {
    if (!data) {
      navigation("/error");
    }
  }, [data, navigation]);

  return (
    <div>
      <Header />
      <Slideshow image={data.pictures} />
    </div>
  );
};

export default Accomodation;
