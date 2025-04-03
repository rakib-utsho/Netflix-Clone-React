import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  const navRef = useRef();

  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      if (window.scrollY >= 80){
        navRef.current.classList.add("nav-dark")
      }else{
        navRef.current.classList.remove("nav-dark")
      }
    })
  }, [])

  return (
    <div ref={navRef} className="navbar">
      {/* logo and menu */}
      <div className="navbar-left">
        <img src={logo} alt="main logo" />
        <ul>
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      {/* search & navbar profile */}
      <div className="navbar-right">
        <img src={search} alt="search-icon" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="bell-icon" className="icons" />

        {/* navbar profile */}
        <div className="navbar-profile">
          <img src={profile_icon} alt="profile-image" className="profile" />
          <img src={caret_icon} alt="" />
          <div className="drop-down">
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
