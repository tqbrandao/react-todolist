import React from "react";
import Button from "./Button";
import classes from "./TodoItem.module.css";

function TodoItem() {
  return (
    <li className={classes.todo}>
      <label>
        <input type="checkbox"></input>
        Torino de rivia
        <Button btnType="delete">Remover</Button>
      </label>
    </li>
  );
}

export default TodoItem;
