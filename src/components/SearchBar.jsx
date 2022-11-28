import React from "react";
import Button from "./Button";
import classes from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={classes["searchbar-container"]}>
      <input
        type="text"
        placeholder="Qual a próxima tarefa?"
        autoFocus
        className={classes["search-input"]}
      ></input>
      <Button btnType={"add"}>Adicionar</Button>
    </div>
  );
}

export default SearchBar;
