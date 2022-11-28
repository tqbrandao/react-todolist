import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoItemsList from "./components/TodoItemsList";

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setApiData(data.slice(0, 30)));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <TodoForm />
      {apiData && <TodoItemsList apiData={apiData}></TodoItemsList>}
    </div>
  );
}

export default App;
