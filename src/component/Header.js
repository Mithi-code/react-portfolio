import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="icon-menu">
        <li className="icon-box">
          <Link to="/">
            <h2>Home</h2>
            <FontAwesomeIcon icon={faHouse} className="icon" />
          </Link>
        </li>
        <li className="icon-box">
          <Link to="/about">
            <h2>About</h2>
            <FontAwesomeIcon icon={faUser} className="icon" />
          </Link>
        </li>
        <li className="icon-box">
          <Link to="/portfolio">
            <h2>Portfolio</h2>
            <FontAwesomeIcon icon={faBriefcase} className="icon" />
          </Link>
        </li>
        <li className="icon-box">
          <Link to="/contact">
            {" "}
            <h2>Contact</h2>
            <FontAwesomeIcon icon={faEnvelopeOpen} className="icon" />
          </Link>
        </li>
        <li className="icon-box">
          <Link to="blog">
            <h2>Blogs</h2>
            <FontAwesomeIcon icon={faEnvelopeOpen} className="icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
