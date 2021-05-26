function Form(props) {
  const inputTextHandler = (e) =>{
    console.log(e);
    setInputText(e.target.value);
  }
  const onSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input onChange = {inputTextHandler} type="text" className="todo-input" />
        <button onClick = {onSubmit} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
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