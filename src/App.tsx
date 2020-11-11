import React, { useState } from "react";
import "./App.scss";

let seconds = 0;
let minutes = 0;
let myInterval: number;

function App() {
  const [dynamicSeconds, setDynamicSeconds] = useState(0);
  const [dynamicMinutes, setDynamicMinutes] = useState(0);

  const addTime = () => {
    minutes = minutes + 5;
    setDynamicMinutes(minutes);
  };

  const subsctractTime = () => {
    if (dynamicSeconds !== 0) {
      minutes = minutes - 5;
      setDynamicMinutes(minutes);
    }
  };

  const intervalHandler = () => {
    myInterval = window.setInterval(() => {
      seconds = seconds - 1;
      setDynamicSeconds(seconds);
      if (seconds === 0 && minutes !== 0) {
        seconds = 60;
        if (minutes !== 0) {
          minutes = minutes - 1;
        }
        setDynamicMinutes(minutes);
      }
    }, 200);
  };

  const startTimer = () => {
    if (minutes !== 0 || seconds !== 0) {
      if (minutes !== 0 && seconds === 0) {
        seconds = 60;
        setTimeout(() => {
          minutes = minutes - 1;
          setDynamicMinutes(minutes);
        }, 200);
        intervalHandler();
      } else {
        intervalHandler();
      }
    }
  };

  if (seconds === 0 && minutes === 0) {
    clearInterval(myInterval);
  }

  const stopTimer = () => {
    clearInterval(myInterval);
  };

  const resetTimer = () => {
    clearInterval(myInterval);
    seconds = 0;
    minutes = 0;
    setDynamicSeconds(seconds);
    setDynamicMinutes(minutes);
  };

  return (
    <div className="app">
      <div className="flex flex-col">
        <div className="text-center flex items-center">
          <button className="btn btn-blue ml-auto" onClick={subsctractTime}>
            -
          </button>
          <p className="m-5">
            Timer: {dynamicMinutes} : {dynamicSeconds}
          </p>
          <button className="btn btn-blue mr-auto" onClick={addTime}>
            +
          </button>
        </div>
        <br />
        <button className="btn btn-blue m-auto mb-2" onClick={startTimer}>
          Start
        </button>
        <button className="btn btn-blue m-auto mb-2" onClick={stopTimer}>
          Stop
        </button>
        <button className="btn btn-blue m-auto" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
