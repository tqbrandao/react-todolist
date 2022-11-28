import React from "react";
import Button from "./Button";
import classes from "./TodoItem.module.css";

function TodoItem(props) {
  return (
    <li className={classes.todo}>
      <label>
        <input type="checkbox"></input>
        {props.title}
        <Button btnType="delete">Remover</Button>
      </label>
    </li>
  );
}

export default TodoItem;
