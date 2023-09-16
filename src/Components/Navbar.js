import React from "react";
import "../Styles/Navbar.css";
import img from "../Images/Logo.svg";

export default function Navbar() {
  return (
    <header>
      <a href="#">
        <img src={img} alt="logo" class="logo" />
      </a>

      <input type="checkbox" id="check" />
      <label for="check" class="icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
        {/* <svg
          id="close-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"
          />
        </svg> */}
      </label>

      <nav class="navbar">
        <a href="#meteor" class="nav-item" style={{ "--i": "0" }}>
          METEOR
        </a>
        <a href="#" class="nav-item" style={{ "--i": "1" }}>
          SOLAR ECLIPSE
        </a>
        <a href="#" class="nav-item" style={{ "--i": "2" }}>
          WEATHER
        </a>
      </nav>
    </header>
  );
}
