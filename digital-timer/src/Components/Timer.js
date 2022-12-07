import { useState, useEffect } from "react";
import "./timer.css";

function Timer() {
  const [running, setRunning] = useState(false);
  const [timerTime, setTimerTime] = useState(10000);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTimerTime((timerTime) => Math.max(timerTime - 100, 0));
      }, 100);
    }
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (!timerTime) {
      setRunning(false);
    }
  }, [timerTime]);

  const startTimer = () => {
    return setRunning(!running);
  };

  const onStop = () => {
    return [setRunning(false), setTimerTime(10000)];
  };

  const runningToString = running.toString();

  return (
    <div>
      <div className="indicators">
        <h3 className="left">Seconds left: {(timerTime / 1000).toFixed(1)} </h3>
        <h3>Running: {runningToString} </h3>
      </div>
      <hr />
      <div className="buttons">
        <button
          onClick={() => {
            startTimer();
          }}
        >
          {running ? "⏸️" : "▶️"}
        </button>
        <button onClick={() => onStop()}>⏹️</button>
      </div>
    </div>
  );
}

export default Timer;
