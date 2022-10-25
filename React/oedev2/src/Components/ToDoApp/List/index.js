import { useState } from 'react'

function List({ todoList, setToDoList, todoFilter }) {

  const [todo, setTodo] = useState("");

  const checkTodo = (e) => {
    let newArrr = [...todoList];

    e.target.parentElement.parentElement.className === "" ? e.target.parentElement.parentElement.className = "completed" : e.target.parentElement.parentElement.className = ""
      
    newArrr[e.target.parentElement.parentElement.id].isDone === true ? newArrr[e.target.parentElement.parentElement.id].isDone = false : newArrr[e.target.parentElement.parentElement.id].isDone = true;
    setToDoList(newArrr);
  }

  const deleteTodo = (e) => {
    setToDoList(todoList.filter(item => item.input !== e.target.closest(".view").innerText))
  }

  const changeTheName = (e) => setTodo(e.target.value);

  const submitEditedToDo = (e) => {
    let newArr = [...todoList]
    newArr[e.target.parentElement.id].input = todo;
    setToDoList(newArr.filter((e) => e.input !== ""))

    newArr[e.target.parentElement.id].isDone === true ? e.target.parentElement.className = "completed" : e.target.parentElement.className = ""
  };

  const submitToDo = (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      let newArr = [...todoList]
      newArr[e.target.parentElement.id].input = todo;
      setToDoList(newArr.filter((e) => e.input !== ""))

      newArr[e.target.parentElement.id].isDone === true ? e.target.parentElement.className = "completed" : e.target.parentElement.className = ""
    }
  };

  const edit = (e) => {
    setTodo(e.target.closest(".view").innerText);
    e.target.parentElement.parentElement.className = "editing";
    e.target.parentElement.parentElement.lastChild.focus();
  }

  return (
    <ul className='todo-list'>
      {
        (todoFilter === 0 ? todoList : (todoFilter === 1 ? (todoList.filter(element => element.isDone === false)) : (todoList.filter(element => element.isDone === true))
          )).map((item, index) => (
            <div className="main" key={index}>
              <li key={index} id={index} className={item.isDone === true ? "completed" : ""}>
                <div className="view">
                  <input type="checkbox" className="toggle" id={todoList.id} checked={item.isDone} onChange={checkTodo} />
                  <label onClick={edit}>{item.input}</label>
                  <button className='destroy' id={todoList.id} onClick={deleteTodo} ></button>
                </div>
                <input name="edit" className="edit" autoComplete="off" value={todo} onBlur={submitEditedToDo} onChange={changeTheName} onKeyDown={submitToDo} />
              </li>
            </div>
          ))
      }
    </ul>
  )
}

export default List