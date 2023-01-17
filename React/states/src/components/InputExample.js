import { useState } from 'react'

function InputExample() {
    const [form, setForm] = useState({name:"", surname: ""});

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    return (
        <div>
            Name: <br />
            {/* <input value={ name } onChange={(e) => setName(e.target.value)} /> */}
            <input name='name' value={ form.name } onChange={onChangeInput} />
            <br/>
            {/* {name} */}

            <br />

            Surname: <br />
            <input name='surname' value={ form.surname } onChange={onChangeInput} />
            <br/>
            <br/>
            <br/>
            {form.name} {form.surname}
        </div>
    )
}

export default InputExample