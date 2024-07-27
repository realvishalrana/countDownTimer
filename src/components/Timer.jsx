import React from "react";
import useTimer from "../hooks/useTimer";
import InputTimer from "./InputTimer";
import ShowTimer from "./ShowTimer";

const Timer = ({ id, removeTimer }) => {
  const props = useTimer();

  const { isStart, isDone } = props;

  return (
    <div className="timer">
      <h2>Timer {id}</h2>
      {isDone && <div className="message">Timer is done!</div>}
      {isStart ? (
        <ShowTimer {...props} />
      ) : (
        <InputTimer id={id} removeTimer={removeTimer} {...props} />
      )}
    </div>
  );
};

export default Timer;
