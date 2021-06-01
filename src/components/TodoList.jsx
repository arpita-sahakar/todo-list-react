import React from "react";
import Todo from "./Todo.jsx";

function TodoList(props) {
  console.log(props);
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {props.todos.map((todo) => {
            return (
              <Todo
                setTodos={props.setTodos}
                todos={props.todos}
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
