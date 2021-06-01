import React from "react";

function Todo({ text, todo, todos, setTodos }) {
  // console.log(props);

  const deleteHandler = () => {
    console.log(todo);
    let newListAfterDelete = todos.filter((el) => {
      return el.id !== todo.id;
    });
    setTodos(newListAfterDelete);
  };

  const completeHandler = () => {
    console.log("hello");
   
      let swap = todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        } else {
          return el;
        }
      })
      setTodos(swap);
    
  };

  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}> {text} </li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
