import "./App.css";
import Background from "./Components/Background";
import Intro from "./Components/Intro";
import Astronaut from "./Components/Astronaut";
import Meteor from "./Components/Meteor";
function App() {
  return (
    <div className="App">
      <Background />
      <section className="page1">
        <div className="Intro-text">
          <Intro />
        </div>
        <div className="svgs">
          <Astronaut />
        </div>
      </section>
      <section className="page3">
        <Meteor />
      </section>
    </div>
  );
}

export default App;
