import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../assets/img/bg-home.png";
import "../styles/Banner.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
