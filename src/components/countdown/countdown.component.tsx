import React, { ReactElement } from "react";

// Icons
import { AiFillGithub, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";

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
      <p className="text-center text-megrim text-unselectable m-auto hidden md:block md:text-5xl md:mb-4 ">
        POMODORO APP
      </p>
      <div className="flex bg-secondary text-primary md:hidden h-15-per land-h-30-per border-solid border-b-2">
        <p className="text-center text-megrim text-4xl text-unselectable m-auto">
          POMODORO
        </p>
      </div>
      <div className="flex bg-secondary text-primary h-15-per land-h-30-per md-h-20-per">
        <button
          className="bg-secondary-hover text-center text-audiowide text-3xl md:text-5xl m-auto w-1/3 h-full"
          onClick={subsctractTime}
        >
          -
        </button>
        <div className="border-solid border-l-2 border-r-2 m-auto w-1/3 h-full flex">
          <div className="text-center text-audiowide text-sm text-unselectable md:text-3xl pt-1 m-auto">
            {minutes < 10 ? "0" + minutes : minutes} :{" "}
            {seconds < 10 ? "0" + seconds : seconds}
          </div>
        </div>
        <button
          className="bg-secondary-hover text-audiowide text-3xl md:text-5xl text-center m-auto w-1/3 h-full"
          onClick={addTime}
        >
          +
        </button>
      </div>
      <button
        className="flex bg-adjcent bg-adjcent-hover text-secondary h-55-per md-h-60-per"
        onClick={startTimer}
      >
        <p className="m-auto text-5xl md:text-6xl text-audiowide">START</p>
      </button>
      <div className="flex bg-secondary text-primary h-15-per land-h-30-per md-h-20-per">
        <button
          className="bg-secondary-hover text-center text-audiowide text-xl md:text-2xl w-1/2 md:w-1/2 h-full border-solid border-r-2"
          onClick={stopTimer}
        >
          STOP
        </button>
        <button
          className="bg-secondary-hover text-center text-audiowide text-xl md:text-2xl w-1/2 md:w-1/2 h-full md:border-solid"
          onClick={resetTimer}
        >
          RESTART
        </button>
      </div>
      <div className="justify-between mt-2 items-center hidden md:flex">
        <div className="flex items-center">
          <a href="https://alexbeje.github.io/pomodoro/">
            <AiFillGithub className="mr-5 text-adjcent-hover" />
          </a>
          <a href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FiBZQyAA5v9EZBGiQk7zhRI%2Fpomodoro%3Fnode-id%3D0%253A1">
            <FiFigma className="text-adjcent-hover" />
          </a>
        </div>
        <a href="https://www.alexbejenaru.dev">
          <div className="flex items-center text-adjcent-hover">
            <AiOutlineCopyrightCircle />
            Alexandru Bejenaru
          </div>
        </a>
      </div>
    </div>
  );
}

export default countdown;
