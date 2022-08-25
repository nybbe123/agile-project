import React from "react";
import "./Label.css";

const Label = (props) => {
  const classes = "label " + props.className;

  return (
    <label htmlFor={props.htmlFor} className={classes}>
      {props.children}
    </label>
  );
};

export default Label;
