import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes["header-container"]}>
      <h1>Todo List - ReactJS</h1>
    </div>
  );
}

export default Header;
