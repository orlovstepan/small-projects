import "./styles.css";
import { useState, useRef } from "react";
import { generatePassword } from "./generatePassword";

export default function App() {
  const [length, setLength] = useState(10);
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [special, setSpecial] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("copy");
  const ref = useRef();

  const doGeneratePassword = () => {
    setPassword(generatePassword({ length, lowercase, uppercase, special }));
    setButtonText("copy");
  };

  const copyPass = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setButtonText("copied!");
    } catch (e) {
      console.log("error in copy", e);
    }
  };

  return (
    <div className="App">
      <h1>generate a secure password</h1>
      <div className="password">
        <input id="password" defaultValue={password} ref={ref} readOnly></input>
        <button onClick={copyPass}>{buttonText}</button>
      </div>
      <div className="settings">
        <p>length</p>
        <input
          type="range"
          min="6"
          value={length}
          max="12"
          onChange={(e) => setLength(e.target.value)}
        ></input>
        <p id="length-num">{length}</p>
      </div>
      <div className="align-settings">
        <div className="settings">
          <input type="checkbox" checked readOnly></input>
          <p>numbers (always enabled)</p>
        </div>
        <div className="settings">
          <input
            type="checkbox"
            onChange={(e) => {
              setLowercase(!lowercase);
            }}
          ></input>
          <p> lowercase </p>
        </div>
        <div className="settings">
          <input
            type="checkbox"
            onChange={(e) => {
              setUppercase(!uppercase);
            }}
          ></input>
          <p> uppercase </p>
        </div>
        <div className="settings">
          <input
            type="checkbox"
            onChange={(e) => {
              setSpecial(!special);
            }}
          ></input>
          <p> special characters </p>
        </div>
      </div>
      <button onClick={doGeneratePassword}> generate </button>
    </div>
  );
}
