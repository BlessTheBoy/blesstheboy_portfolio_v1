import React from "react";

export const Button = ({ children, onSwitch }) => {
  return <button onClick={onSwitch}>{children}</button>;
};
