import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TodoItemsList from "./components/TodoItemsList";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);

  console.log(apiData);

  return (
    <div className="App">
      <Header></Header>
      <SearchBar></SearchBar>
      <TodoItemsList></TodoItemsList>
    </div>
  );
}

export default App;
