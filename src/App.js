import "./App.css";
import axios from "axios";
import Background from "./Components/Background";
import Intro from "./Components/Intro";
import Astronaut from "./Components/Astronaut";
import Meteor from "./Components/Meteor";
import Weather from "./Components/Weather";
import Input from "./Components/Input.js";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
function App() {
  const [Response, setResponse] = useState([]);
  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleWeatherSearch = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=30.7333&lon=76.7794&appid=17976acad2bb0e49b8093bd1fc3fd0cd`;
      const data = await fetchData(url);
      setResponse(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    handleWeatherSearch();
    console.log(Response);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Background />
      <section className="page1">
        <div className="intro-text">
          <Intro />
        </div>
        <div className="svgs">
          <Astronaut />
        </div>
      </section>

      <section className="page2">
        <Input />
      </section>

      <section id="meteor" className="page3">
        <Meteor />
      </section>

      <section id="weather" className="page3">
        {Response.weather && (
          <Weather
            icon={Response.weather[0].icon}
            description={Response.weather[0].description}
            main={Response.main}
          />
        )}
      </section>
    </div>
  );
}

export default App;
