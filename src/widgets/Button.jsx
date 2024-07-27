import React from "react";

const Button = ({ title, className = "timer-button", onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
