import "./App.css";
import Background from "./Components/Background";
import Intro from "./Components/Intro";
import Astronaut from "./Components/Astronaut";
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
    </div>
  );
}

export default App;
