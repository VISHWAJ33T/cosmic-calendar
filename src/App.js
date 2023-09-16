import "./App.css";
import axios from "axios";
import Background from "./Components/Background";
import Intro from "./Components/Intro";
import Astronaut from "./Components/Astronaut";
import Meteor from "./Components/Meteor";
import Input from "./Components/Input.js";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
function App() {
  const [Response, setResponse] = useState([]);

  // const apiKey = process.env.REACT_APP_KEY;
  // const apiId = process.env.REACT_APP_ID;

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleSearch = async () => {
    try {
      // setLoading(true);
      const url = `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=PeIdBpQtdj0Sa9LKoYJbERniyBm1SJL2`;
      const data = await fetchData(url);
      setResponse(data.queryresult);
      console.log(Response);
    } catch (error) {
      console.log("error");
    }
    //  finally {
    //   // setLoading(false);
    // }
  };

  useEffect(() => {
    handleSearch();
    console.log(Response);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Background />
      <section className="page1">
        <div className="Intro-text">
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
    </div>
  );
}

export default App;
