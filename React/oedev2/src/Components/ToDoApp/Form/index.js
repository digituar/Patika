import { useState, useEffect } from "react";

const initialFormValues = { input: "" }

function Form({ todoList, setToDoList }) {

    const [form, setForm] = useState(initialFormValues)

    useEffect(() => {
        setForm(initialFormValues)
    }, [todoList])


    const onChangeInput = (e) => {
        setForm({ ...form, input: e.target.value, isDone: false })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (form.input === "") {
            alert("Add a task!")
            return false
        }
        setToDoList([...todoList, form])
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input className="new-todo" autoFocus autoComplete="off" name="input" placeholder="What needs to be done?" value={form.input} onChange={onChangeInput} />
                </div>
            </form>
        </header>
    )
}

export default Form