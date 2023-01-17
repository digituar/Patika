import { useState, useEffect } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState(0);

    useEffect(() => {
        console.log("Component mount edildi");

        const interval = setInterval(() => {
            setNumber((n) => n +1)
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log("number state gücellendi!");
    }, [number]);

    useEffect(() => {
        console.log("name state gücellendi!");
    }, [name]);

    return (
        <div>
        <h1>{number}</h1>    
        <button onClick={() => setNumber(number + 1)}>Click</button>
  
        <hr />
  
        <h1>{name}</h1>    
        <button onClick={() => setName("Deniz")}>Click</button>
      </div>
    )
}

export default Counter