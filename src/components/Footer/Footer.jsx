import React from "react";
import "./footer.css";
import facebook from "../../assets/facebook_icon.png";
import instagram from "../../assets/instagram_icon.png";
import twitter from "../../assets/twitter_icon.png";
import youtube from "../../assets/youtube_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook} alt="facebook-icon" className="social-media" />
        <img src={instagram} alt="instagram-icon" className="social-media" />
        <img src={twitter} alt="twitter-icon" className="social-media" />
        <img src={youtube} alt="youtube-icon" className="social-media" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">@ 1997-2025 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
