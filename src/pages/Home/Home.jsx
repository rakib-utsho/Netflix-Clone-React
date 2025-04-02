import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero from "../../assets/hero_banner.jpg";
import hero2 from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from "../../components/TitleCards/TitleCards.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero"> 
        {/* main banner */}
          <img src={hero} alt="hero-banner" className="banner-img"/>
          {/* sub hero menu */}
          <div className="hero-caption">
            <img src={hero2} alt="hero-title" className="caption-img"/>
            <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
            <div className="hero-btns">
              <button className="btn"><img src={play_icon} alt="play-icon" />Play</button>
              <button className="btn dark-btn"><img src={info_icon} alt="" />More Info</button>
            </div>
            {/* movie title cards */}
            <TitleCards/>
          </div>
      </div>
    </div>
  );
};

export default Home;
