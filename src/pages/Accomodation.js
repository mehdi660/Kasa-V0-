import React, { useEffect } from "react";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import logement from "../datas/logements";
import Stars from "../components/Stars";
import Collaps from "../components/Collaps";
import "../styles/Accomodation.css";

const Accomodation = () => {
  const { id } = useParams(); // Récupération du paramètre ID de l'URL
  const navigation = useNavigate(); // Utilisation du hook useNavigate pour la navigation
  const data = logement.find((item) => item.id === id); // Recherche des données du logement correspondant à l'ID

  useEffect(() => {
    // Effet de côté pour gérer les cas où l'ID n'est pas valide
    if (!data) {
      navigation("/error"); // Redirection vers la page d'erreur si l'ID n'est pas trouvé
    }
  }, [data, navigation]);

  if (!data) {
    // Si l'ID n'est pas valide, on affiche la page d'erreur
    return <Outlet />; // L'élément Outlet permet d'afficher le contenu des routes enfants
  }

  return (
    <div>
      <Header />
      <div className="slider">
        <Slideshow image={data.pictures} />{" "}
        {/* Rendu du composant Slideshow avec les images des logement */}
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
            />{" "}
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
          <Collaps
            state={{
              title: "Description",
              description: data.description,
            }}
          />{" "}
          {/* Rendu du collaps avec la description du logement */}
        </div>
        <div className="acco-equipments">
          <Collaps
            state={{
              title: "Équipements",
              equipments: data.equipments,
            }}
          />{" "}
          {/* Rendu du collaps avec les équipements du logement */}
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
