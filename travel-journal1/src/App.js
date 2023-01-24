import Location from "./Components/Location";
import data from "./data";
import "./App.css";

function App() {
  const location = data.map((item) => {
    return <Location item={item} />;
  });
  return (
    <div className="App">
      <header>
        {" "}
        <img className="earth-icon" src="earth.png" alt="earth-icon" /> my
        travel journal.
      </header>
      <section className="location-component">{location}</section>
    </div>
  );
}

export default App;
