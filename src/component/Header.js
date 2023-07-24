import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHouse, faUser, faBriefcase, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header">
      <ul className="icon-menu">
        <li className="icon-box">
            <h2>Home</h2>
          <FontAwesomeIcon icon={faHouse} className="icon" />
        </li>
        <li className="icon-box">
        <h2>Home</h2>
          <FontAwesomeIcon icon={faUser} className="icon" />
        </li>
        <li className="icon-box">
        <h2>Home</h2>
          <FontAwesomeIcon icon={faBriefcase} className="icon" />
        </li>
        <li className="icon-box">
        <h2>Home</h2>
          <FontAwesomeIcon icon={faEnvelopeOpen} className="icon" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
