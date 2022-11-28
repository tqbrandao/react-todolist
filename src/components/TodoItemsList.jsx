import React from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoItemsList.module.css";

function TodoItemsList(props) {
  console.log(props.apiData);
  const todoList = props.apiData.map((todo) => (
    <TodoItem title={todo.title} key={todo.id} completed={todo.completed} />
  ));

  return (
    <div className={classes["items-container"]}>
      <ul className={classes["todo-items"]}>{todoList}</ul>
    </div>
  );
}

export default TodoItemsList;
