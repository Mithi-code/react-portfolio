import React from "react";
import "./home.css";
import img from "./WhatsApp Image 2023-07-10 at 12.54.25 PM.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="yellow"></div>
        <div className="bg"></div>
        <div className="details">
          <img src={img} alt="" />
          <h1 className="title">
            I'M Mithlesh Kumar. <br /> <span>WEB DEVELOPER</span>
          </h1>
          <p className="title_p">
            I'm a India based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me
          </p>
          <button className="about-me-btn button">
           <span> More About Me</span>
           <span className="icon-arrow">
           <FontAwesomeIcon icon={faArrowRight}  className="icon"/>
           </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
