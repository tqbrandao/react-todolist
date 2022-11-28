import React from "react";
import Button from "./Button";
import classes from "./TodoForm.module.css";

function TodoForm() {
  return (
    <div className={classes["form-container"]}>
      <input
        type="text"
        placeholder="Qual a próxima tarefa?"
        autoFocus
        className={classes["form-input"]}
      ></input>
      <Button btnType={"add"}>Adicionar</Button>
    </div>
  );
}

export default TodoForm;
