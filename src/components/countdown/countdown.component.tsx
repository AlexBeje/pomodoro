import React, { ReactElement } from "react";

type CountdownProps = {
  seconds: number;
  minutes: number;
  addTime: () => void;
  subsctractTime: () => void;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
};

function countdown({
  seconds,
  minutes,
  addTime,
  subsctractTime,
  startTimer,
  stopTimer,
  resetTimer,
}: CountdownProps): ReactElement {
  return (
    <div className="flex flex-col h-screen w-full md:m-auto md-h-600 md-w-600">
      <div className="flex bg-gray-800 text-gray-200 md:hidden h-25-per">
        <p className="text-center m-auto">POMODORO</p>
      </div>
      <div className="flex bg-gray-800 text-gray-200 h-15-per md-h-20-per">
        <button
          className="text-center m-auto w-1/3 h-full"
          onClick={subsctractTime}
        >
          -
        </button>
        <div className="border-solid border-l-2 border-r-2 border-gray-200 m-auto w-1/3 h-full flex">
          <div className="text-center m-auto">
            {minutes} : {seconds}
          </div>
        </div>
        <button className="text-center m-auto w-1/3 h-full" onClick={addTime}>
          +
        </button>
      </div>
      <button
        className="flex bg-blue-500 text-gray-800 h-full h-45-per md-h-60-per"
        onClick={startTimer}
      >
        <p className="m-auto">Start</p>
      </button>
      <div className="flex bg-gray-800 text-gray-200 h-15-per md-h-20-per">
        <button
          className="text-center w-1/2 md:w-1/3 h-full border-solid border-r-2 border-gray-200"
          onClick={stopTimer}
        >
          Stop
        </button>

        <p className="text-center m-auto hidden md:block md:w-1/3">POMODORO</p>

        <button
          className="text-center w-1/2 md:w-1/3 h-full md:border-solid md:border-l-2 md:border-gray-200"
          onClick={resetTimer}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default countdown;
