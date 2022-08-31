import "./styles.css";
import { useState, useRef } from "react";

export default function App() {
  // const [count, setCount] = useState(0);
  // const ref = useRef(null);
  // const handleClick = (event) => {
  //   alert(ref.current.value);
  // };

  const [tweet, setTweet] = useState("");

  const handleClick = () => {
    alert(tweet);
  };
  const symbolsLeft = 140 - tweet.length;

  return (
    <div className="App">
      <h1>Tweet</h1>
      <textarea
        // ref={ref}
        maxLength="140"
        // onChange={(e) => setCount(e.target.value.length)}
        onChange={(e) => setTweet(e.target.value)}
      ></textarea>
      <div className="under-text">
        {/* <button onClick={handleClick}>Tweet</button> */}
        <button onClick={handleClick}>Tweet</button>
        <p>{symbolsLeft}</p>
      </div>
    </div>
  );
}
