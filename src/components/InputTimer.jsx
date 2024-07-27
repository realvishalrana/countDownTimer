import React from "react";
import Button from "../widgets/Button";
import Input from "../widgets/Input";

const InputTimer = ({
  handleInput,
  handleStart,
  removeTimer,
  id,
}) => {
  return (
    <>
      <div className="input-box-container">
        <div className="input-box">
          <Input placeholder="HH" id="hours" onChange={handleInput} />
          <Input placeholder="MM" id="minutes" onChange={handleInput} />
          <Input placeholder="SS" id="seconds" onChange={handleInput} />
        </div>
      </div>
      <div className="action-button">
        <Button title="Start" onClick={handleStart} />
        <Button
          className="timer-button"
          title="Remove Timer"
          onClick={() => removeTimer(id)}
        />
      </div>
    </>
  );
};

export default InputTimer;
