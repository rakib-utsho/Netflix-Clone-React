import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero from "../../assets/hero_banner.jpg";
import hero2 from "../../assets/hero_title.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero"> 
        {/* main banner */}
          <img src={hero} alt="hero-banner" className="banner-img"/>
          {/* sub hero menu */}
          <div className="hero-caption">
            <img src={hero2} alt="hero-title" />
          </div>
      </div>
    </div>
  );
};

export default Home;
