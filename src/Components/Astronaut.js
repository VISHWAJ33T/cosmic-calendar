import React from "react";
import "../Styles/Astronaut.css";
const Astronaut = () => {
  return (
    <div className="right-section">
      <img
        className="astronaut"
        src="assets/images/astronaut.png"
        alt="astronaut"
      />
      {/* <img className="earth" src="assets/images/earth-1.gif" alt="earth" /> */}
    </div>
  );
};

export default Astronaut;
