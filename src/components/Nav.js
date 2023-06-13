import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faUser,
  faBriefcase,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="hamburger-menu">
      <div className="menu-container">
        <FontAwesomeIcon icon={faBars} className="menu" />
        <FontAwesomeIcon
          icon={faXmark}
          className="menu"
          style={{ display: "none" }}
        />
      </div>
      <div className="menu-list">
        <div className="menu-list-icons">
          <FontAwesomeIcon icon={faHouse} />
          <span>
            <Link to="/">Home</Link>
          </span>
        </div>

        <div className="menu-list-icons">
          <FontAwesomeIcon icon={faUser} />
          <span>
            <Link to="/about">About</Link>
          </span>
        </div>
        <div className="menu-list-icons">
          <FontAwesomeIcon icon={faBriefcase} />
          <span>
            <Link to="/work">Work</Link>
          </span>
        </div>

        <div className="menu-list-icons">
          <FontAwesomeIcon icon={faAddressBook} />
          <span>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
