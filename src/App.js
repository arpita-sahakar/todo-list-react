import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    console.log("hey");
    filteredHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filteredHandler = () => {
    if (status === "completed") {
      const comp = todos.filter((todo) => {
        return todo.completed === true;
      });
      setFilteredTodos(comp);
    } else if (status === "uncompleted") {
      const incomp = todos.filter((todo) => {
        return todo.completed === false;
      });
      setFilteredTodos(incomp);
    } else {
      setFilteredTodos(todos);
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos-key", JSON.stringify(todos));
  };

  const getLocalStorage = () => {
    // if "todos-key" is present in local storage then set the content into "todos" useState.
    if (localStorage.getItem("todos-key") != null) {
      setTodos(JSON.parse(localStorage.getItem("todos-key")));
    }
  };

  return (
    <div className="App">
      <h1>Arpita's Todo-List</h1>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
