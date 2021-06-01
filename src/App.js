import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  // const [filteredTodos, setFilteredTodos] = useState([]);

  // const filteredHandler = () =>{
  //   if(status === "completed"){
  //     const comp = todos.filter(todo =>{
  //       return todo.completed
  //     })
  //     setFilteredTodos(comp)
  //   }else if (status === "uncompleted"){
  //     const incomp = todos.filter(todo =>{
  //       return todo.completed
  //     })
  //     setFilteredTodos(incomp)
  //   } else if (status === "all"){
  //     setFilteredTodos(todos)
  //   }
  // }

  return (
    <div className="App">
      <h1>Arpita's Todo-List</h1>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus = {setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
