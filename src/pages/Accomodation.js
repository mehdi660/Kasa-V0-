import React from "react";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logement } from "../datas/logements";
import { useEffect } from "react";
import Stars from "../components/Stars";
import Collaps from "../components/Collaps";

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
      <div className="info-loc">
        <h2>{data.title}</h2>
        <p>{data.location}</p>
      </div>
      <div className="info-host">
        <p>{data.host.name}</p>
        <img
          src={data.host.picture}
          alt={"Photo de profil de " + data.host.name}
        />
      </div>
      <div className="tags&ratings">
        <ul className="tags">
          {data.tags.map((tag, index) => (
            <li className="tag" key={index}>
              {tag}
            </li>
          ))}
        </ul>
        <Stars />
      </div>

      <div className="collaps-container">
        <div className="collaps-desc">
          {data && (
            <Collaps
              state={{
                title: "Description",
                description: data.description,
              }}
            />
          )}
        </div>
        <div className="collaps-equipments">
          {data && (
            <Collaps
              state={{
                title: "Equipments",
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
