import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx"

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <h1>Arpita's Todo-List</h1>
      <Form setInputText = {setInputText}/>
      <TodoList/>
    </div>
  );
}

export default App;
