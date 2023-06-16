import React from "react";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logement } from "../datas/logements";
import { useEffect } from "react";
import Stars from "../components/Stars";
import Collaps from "../components/Collaps";
import "../styles/Accomodation.css";

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
      <div className="slider">
        <Slideshow image={data.pictures} />
      </div>
      <div className="all-info">
        <div className="general-info">
          <div className="info-loc">
            <h1>{data.title}</h1>
            <p>{data.location}</p>
          </div>
          <div className="info-host">
            <p>{data.host.name}</p>
            <img
              src={data.host.picture}
              alt={"Photo de profil de " + data.host.name}
            />
          </div>
        </div>
        <div className="tags-ratings">
          <ul className="tags">
            {data.tags.map((tag, index) => (
              <button className="tag" key={index}>
                {tag}
              </button>
            ))}
          </ul>
          <Stars />
        </div>
      </div>

      <div className="collaps-container">
        <div className="acco-desc">
          {data && (
            <Collaps
              state={{
                title: "Description",
                description: data.description,
              }}
            />
          )}
        </div>
        <div className="acco-equipments">
          {data && (
            <Collaps
              state={{
                title: "Équipements",
                equipments: data.equipments,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
