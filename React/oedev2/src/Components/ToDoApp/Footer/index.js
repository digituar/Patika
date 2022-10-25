function Footer({ setToDoList, todoList, todoFilter, setTodoFilter }) {

    const deleteAll = () => {
        setToDoList(todoList.filter(item => item.isDone === false))
    }

    let clearButton = null;
    if (todoList.filter(item => item.isDone === true).length > 0) {
        clearButton = (
            <button
                className="clear-completed"
                onClick={deleteAll}>
                remove completed
            </button>
        )
    }
    
    let things = ""
    if (todoList.filter(item => item.isDone === false).length === 1) {
        things = ("item left")
    } else things = ("items left")

    return (
        <footer className="footer">
            <span className='todo-count'>{todoList.filter(item => item.isDone === false).length} {things}</span>
            <ul className="filters">
                <li>
                    <a href="#/" id="all" onClick={() => { setTodoFilter(0) }} className={todoFilter === 0 ? "selected" : null}>all</a>
                </li>
                <li>
                    <a href="#/active" id="active" onClick={() => { setTodoFilter(1) }} className={todoFilter === 1 ? "selected" : null}>active</a>
                </li>
                <li>
                    <a href="#/completed" id="completed" onClick={() => { setTodoFilter(2) }} className={todoFilter === 2 ? "selected" : null}>completed</a>
                </li>
            </ul>
            {clearButton}
        </footer>
    )
}

export default Footer;