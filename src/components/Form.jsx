function Form({setInputText, setTodos, todos, inputText, setStatus}) {
  // console.log(props.todos);

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler =(e) =>{
    setStatus(e.target.value);
  }
  
  return (
    <div>
      <form>
        <input
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          value={inputText}
        />
        <button onClick={onSubmit} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange ={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
