import React from "react";
import Todo from "./Todo.jsx";

function TodoList({todos, setTodos, filteredTodos}) {
  
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => {
            return (
              <Todo
                setTodos={setTodos}
                todos={todos}
                todo = {todo}
                key={todo.id}
                text={todo.text}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
