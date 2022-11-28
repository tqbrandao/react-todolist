import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <button className={classes[`btn-${props.btnType}`]}>
      {props.children}
    </button>
  );
}

export default Button;
