import React, { useEffect, useState } from "react";
import "./App.scss";

let seconds = 0;
let myInterval: number;

function App() {
  const [dynamicSeconds, setTimer] = useState(0);

  const addTime = () => {
    seconds = seconds + 5;
    setTimer(seconds);
  };

  const subsctractTime = () => {
    if (dynamicSeconds !== 0) {
      seconds = seconds - 5;
      setTimer(seconds);
    }
  };

  const startTimer = () => {
    if (dynamicSeconds !== 0) {
      myInterval = window.setInterval(() => {
        seconds = seconds - 1;
        setTimer(seconds);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(myInterval);
  };

  const resetTimer = () => {
    clearInterval(myInterval);
    seconds = 0;
    setTimer(seconds);
  };

  return (
    <div className="app">
      <div className="flex flex-col">
        <div className="text-center flex items-center">
          <button className="btn btn-blue ml-auto" onClick={subsctractTime}>
            -
          </button>
          <p className="m-5">Timer: 0 : {dynamicSeconds}</p>
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
