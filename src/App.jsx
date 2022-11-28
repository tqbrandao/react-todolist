import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoItemsList from "./components/TodoItemsList";

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setApiData(data.slice(0, 200)));
  }, []);

  const addTodoHandler = (todo) => {
    const newTodos = [todo, ...apiData];
    setApiData(newTodos);
    console.log(newTodos);
  };

  const removeHandler = (id) => {
    const filteredData = [...apiData].filter((todo) => todo.id !== id);

    setApiData(filteredData);
  };

  return (
    <div className="App">
      <Header></Header>
      <TodoForm onSubmit={addTodoHandler} />
      {apiData && (
        <TodoItemsList
          apiData={apiData}
          onRemove={removeHandler}
        ></TodoItemsList>
      )}
    </div>
  );
}

export default App;
