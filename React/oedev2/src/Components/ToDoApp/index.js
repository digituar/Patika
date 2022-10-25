import { useState, useEffect } from "react";
import Form from "./Form"
import List from "./List"
import Footer from "./Footer"

function ToDoApp() {

    const [todoFilter, setTodoFilter] = useState(0)
    const [done, setDone] = useState(false)
    const [todoList, setToDoList] = useState(JSON.parse(localStorage.getItem("todoList")) ? JSON.parse(localStorage.getItem("todoList")) : [])

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList))

    }, [todoList])

    let foot = null
    if (todoList.length > 0) {
        foot = ( <Footer todoList = { todoList } setToDoList = { setToDoList } todoFilter = { todoFilter } setTodoFilter = { setTodoFilter } />
        )
    }

    const allDone = () => setDone(done === false ? true : false)

    const selectAll = () => {
        if (done) {
            setToDoList(todoList.map(e => ({...e, isDone: true })))
        } else {
            setToDoList(todoList.map(e => ({...e, isDone: false })))
        }
    }

    let toggleAll = null
    if (todoList.length > 0) {
        toggleAll = ( <div >
                        <input type = "checkbox" id = "toggle-all" className = "toggle-all" checked = { done } onChange = { selectAll } /> 
                        <label htmlFor = "toggle-all" onClick = { allDone } >all done </label>
                      </div>
        )
    }

    return ( <div className = "todoapp" >
                <Form todoList = { todoList } setToDoList = { setToDoList } /> 
                <section > 
                    { toggleAll } 
                    <List todoList = { todoList } setToDoList = { setToDoList } todoFilter = { todoFilter } /> 
                </section> 
                <footer > 
                    { foot } 
                </footer> 
            </div>
    )
}

export default ToDoApp