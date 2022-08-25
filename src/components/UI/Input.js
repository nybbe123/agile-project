import React from "react";
import "./Input.css";

const Input = (props) => {
  const classes = "input " + props.className;

  return <input type={props.type} className={classes} />;
};

export default Input;
