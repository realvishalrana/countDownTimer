import React from "react";
import Button from "./Button";

const InputTimer = ({ handleInput, handleStart }) => {
  return (
    <>
      <div className="input-box-container">
        <div className="input-box">
          <input placeholder="HH" id="hours" onChange={handleInput} />
          <input placeholder="MM" id="minutes" onChange={handleInput} />
          <input placeholder="SS" id="seconds" onChange={handleInput} />
        </div>
      </div>
      <Button title="Start" onClick={handleStart} />
    </>
  );
};

export default InputTimer;
