import React from "react";
import useTimerManager from "../hooks/useTimerManager";
import Timer from "./Timer";

const TimerManager = () => {
  const { timers, addTimer, removeTimer } = useTimerManager();

  return (
    <div>
      <h1>Multiple Timers</h1>
      <button className="add-timer-button" onClick={addTimer}>
        Add Timer
      </button>
      <div className="timers-container">
        {timers.map((timer) => (
          <Timer key={timer.id} id={timer.id} removeTimer={removeTimer} />
        ))}
      </div>
    </div>
  );
};

export default TimerManager;
