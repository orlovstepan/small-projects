import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);

  const handleHeight = (event) => {
    setHeight(event.target.value);
  };
  const handleWeight = (event) => {
    setWeight(event.target.value);
  };
  const [bmi, setBmi] = useState("");

  const badge = () => {
    if (bmi > 25 && bmi < 30) {
      return (
        <p className="badge" style={{ backgroundColor: "orange" }}>
          Overweight
        </p>
      );
    } else if (bmi > 30) {
      return (
        <p className="badge" style={{ backgroundColor: "red" }}>
          Obese
        </p>
      );
    } else if (bmi < 18.5) {
      return (
        <p className="badge" style={{ backgroundColor: "yellow" }}>
          Underweight
        </p>
      );
    } else {
      return (
        <p className="badge" style={{ backgroundColor: "green" }}>
          Normal weight
        </p>
      );
    }
  };

  useEffect(() => {
    setBmi(((weight / (height * height)) * 10000).toFixed(1));
  }, [weight, height]);

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <h4> Height, cm </h4>
      <div className="indicator">
        <input
          type="range"
          min="140"
          max="200"
          value={height}
          onChange={handleHeight}
        />
        <p>{height}</p>
      </div>
      <h4> Weight, kg </h4>
      <div className="indicator">
        <input
          type="range"
          min="30"
          max="180"
          value={weight}
          onChange={handleWeight}
        />
        <p>{weight}</p>
      </div>
      <hr />
      <div className="bmi">
        <h4>BMI: {bmi}</h4>
        <div>{badge()}</div>
      </div>
    </div>
  );
}
