import React from "react";
import { useState } from "react";
import Button from "./Button";
import classes from "./TodoItem.module.css";

function TodoItem(props) {
  const [checked, setChecked] = useState(props.completed);

  const onCheckHandler = () => {
    setChecked(!checked);
  };

  return (
    <li className={classes.todo}>
      <label className={checked ? classes.checked : ""}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onCheckHandler}
        ></input>
        {props.title}
        <Button btnType="delete">Remover</Button>
      </label>
    </li>
  );
}

export default TodoItem;
