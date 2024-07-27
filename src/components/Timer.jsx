import React from "react";
import useTimer from "../hooks/useTimer";
import InputTimer from "./InputTimer";
import ShowTimer from "./ShowTimer";

const Timer = () => {
  const props = useTimer();

  const { isStart, handleStart, handleInput } = props;

  return (
    <>
      <h1>Countdown Timer</h1>
      {isStart ? (
        <ShowTimer {...props} />
      ) : (
        <InputTimer handleInput={handleInput} handleStart={handleStart} />
      )}
    </>
  );
};

export default Timer;
