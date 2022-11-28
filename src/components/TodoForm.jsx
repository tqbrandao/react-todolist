import React from "react";
import { useState } from "react";
import Button from "./Button";
import classes from "./TodoForm.module.css";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: 200 + Math.floor(Math.random() * 100),
      title: input,
      completed: false,
    });

    setInput("");
  };

  return (
    <form className={classes["form-container"]} onSubmit={onSubmitHandler}>
      <input
        type="text"
        onChange={onChangeHandler}
        value={input}
        placeholder="Qual a próxima tarefa?"
        autoFocus
        className={classes["form-input"]}
      ></input>
      <Button btnType={"add"}>Adicionar</Button>
    </form>
  );
}

export default TodoForm;
