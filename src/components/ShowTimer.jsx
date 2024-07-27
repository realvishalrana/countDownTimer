import React, { useEffect } from "react";
import Button from "./Button";

const ShowTimer = (props) => {
  const { timeData, isPause, handleReset, handlePause, handleResume } = props;

  const { hours, minutes, seconds } = timeData;

  useEffect(() => {
    document.title = `Hour:${hours}: Minute:${minutes} Second:${seconds}`;
  }, [hours, minutes, seconds, timeData]);

  return (
    <div>
      <div className="show-container">
        <div className="timer-box">
          <div>{hours < 10 ? `0${hours}` : hours}</div>
          <span>:</span>
          <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
          <span>:</span>
          <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
        </div>
        <div className="action-button">
          {hours !== 0 && minutes !== 0 && seconds !== 0 && (
            <>
              {isPause ? (
                <Button title="Resume" onClick={handleResume} />
              ) : (
                <Button title="Pause" onClick={handlePause} />
              )}
            </>
          )}
          <Button title="Reset" onClick={handleReset} />
        </div>
      </div>
    </div>
  );
};

export default ShowTimer;
