import React from "react";

const Button = ({ text, action }) => {
  return <button onClick={action}>{text}</button>;
};

export default Button;
