import React from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoItemsList.module.css";

function TodoItemsList() {
  return (
    <div className={classes["items-container"]}>
      <ul className={classes["todo-items"]}>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </ul>
    </div>
  );
}

export default TodoItemsList;
