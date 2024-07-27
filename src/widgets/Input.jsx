// Input.jsx
import React, { useState } from "react";


const Input = ({
  type = "number",
  placeholder = "",
  id,
  onChange,
  minValue = 0,
  maxValue,
}) => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    const inputValue = e.target.value;

    if (/^[0-9]*$/.test(inputValue)) {
      setValue(inputValue);
      if (onChange) onChange(e);
    } else {
      e.target.value = value;
    }
  };

  return (
    <div className="flex-cen">
      <input
        type={type}
        min={minValue}
        max={maxValue}
        placeholder={placeholder}
        id={id}
        onChange={(e) => setValue(e.target.value)}
        onInput={handleInput}
      />
    </div>
  );
};

export default Input;
