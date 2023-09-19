import React from "react";
import "../Styles/Weather.css";
const Weather = ({ icon, description, main }) => {
  return (
    <div className="weather">
      <h2 className="weather-heading">Weather Forcast</h2>
      <div className="single-meteor">
        <div className="cardContainer">
          <div className="card">
            <p className="city">Chandigarh</p>
            <p className="weather">{description.toUpperCase()}</p>
            <img
              style={{ width: "75px", marginBottom: "-16px" }}
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="weather icon"
            />
            <p className="temp">{(main.temp - 273.5).toFixed(1)}°</p>
            <div className="minmaxContainer">
              <div className="min">
                <p className="minHeading">Min</p>
                <p className="minTemp">{Math.floor(main.temp_min - 273.5)}°</p>
                {/* <p className="minTemp">{(main.temp_min - 273.5).toFixed(1)}°</p> */}
              </div>
              <div className="max">
                <p className="maxHeading">Max</p>
                <p className="maxTemp">{Math.ceil(main.temp_max - 273.5)}°</p>
                {/* <p className="maxTemp">{(main.temp_max - 273.5).toFixed(1)}°</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
