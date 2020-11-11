import React, { useState } from "react";

import Countdown from "./components/countdown/countdown.component";

let seconds = 0;
let minutes = 0;
let myInterval: number;

function App() {
  const [dynamicSeconds, setDynamicSeconds] = useState(0);
  const [dynamicMinutes, setDynamicMinutes] = useState(0);

  const addTimeHandler = () => {
    minutes = minutes + 5;
    setDynamicMinutes(minutes);
  };

  const subsctractTimeHandler = () => {
    if (minutes !== 0) {
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
        setTimeout(() => {
          if (minutes !== 0) {
            minutes = minutes - 1;
          }
          setDynamicMinutes(minutes);
        }, 1000);
      }
    }, 1000);
  };

  const startTimerHandler = () => {
    if (minutes !== 0 || seconds !== 0) {
      if (minutes !== 0 && seconds === 0) {
        seconds = 60;
        intervalHandler();
        setTimeout(() => {
          minutes = minutes - 1;
          setDynamicMinutes(minutes);
        }, 1000);
      } else {
        intervalHandler();
      }
    }
  };

  if (seconds === 0 && minutes === 0) {
    clearInterval(myInterval);
  }

  const stopTimerHandler = () => {
    clearInterval(myInterval);
  };

  const resetTimerHandler = () => {
    clearInterval(myInterval);
    seconds = 0;
    minutes = 0;
    setDynamicSeconds(seconds);
    setDynamicMinutes(minutes);
  };

  return (
    <div className="flex h-screen">
      <Countdown
        seconds={dynamicSeconds}
        minutes={dynamicMinutes}
        addTime={addTimeHandler}
        subsctractTime={subsctractTimeHandler}
        startTimer={startTimerHandler}
        stopTimer={stopTimerHandler}
        resetTimer={resetTimerHandler}
      />
    </div>
  );
}

export default App;
