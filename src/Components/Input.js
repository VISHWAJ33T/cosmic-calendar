import React from "react";
import "../Styles/Input.css";
const Input = () => {
  return (
    <div>
      <h2 className="input-heading">Location</h2>
      <div className="input-container">
        <div className="left">
          <img src="assets\images\earth-1.gif" alt="" />
        </div>
        <div className="right">
          <div className="location-box">
            <form>
              <div className="user-box">
                <input type="text" required />
                <label>Latitude</label>
              </div>
              <div className="user-box">
                <input type="text" required />
                <label>Longitude</label>
              </div>
              <center>
                <a href="#">
                  Search
                  <span></span>
                </a>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
