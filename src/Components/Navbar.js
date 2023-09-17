import React from "react";
import img from "../Images/Logo.svg";
import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <header>
      <a href="#">
        <img src={img} alt="logo" className="logo" />
      </a>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      </label>

      <nav className="navbar">
        <a href="#meteor" className="nav-item" style={{ "--i": "0" }}>
          METEOR
        </a>
        <a href="#" className="nav-item" style={{ "--i": "1" }}>
          SOLAR ECLIPSE
        </a>
        <a href="#weather" className="nav-item" style={{ "--i": "2" }}>
          WEATHER
        </a>
      </nav>
    </header>
  );
}
