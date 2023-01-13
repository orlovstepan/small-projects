import Info from "./Components/Info";
import "./App.css";
import Bio from "./Components/Bio";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Info />
        <Bio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
