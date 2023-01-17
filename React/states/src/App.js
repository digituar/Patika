import { useState } from "react";

function App() {
    const [name, setName] = useState('Ozan');
    const [age, setAge] = useState(44);
    const  [friends, setFriends] = useState(['Suat', 'Engin']);
    const  [adress, setAdress] = useState({title: "Urmitz", zip: 56220});
  return (
    <div className="App">
        <h1>Merhaba {name}!</h1>
        <h2>{ age }</h2>
        <button onClick={() => setName("Coskun")}>Change name</button>
        <button onClick={() => setAge(39)}>Change age</button>

        <hr />
        <br />

        <h2>Friends</h2>
        {
            friends.map((friend, index) => (
                <div key={index}> { friend } </div>
            ))
        }

        <button onClick={() => setFriends([...friends, "Evren"])}>Add new friend</button>


        <hr />
        <br />

        <h2>Adress</h2>
        <div>{adress.title} {adress.zip}</div>

        <br />

        <button onClick={() => setAdress({ ...adress, title: "Neuwied", zip: 56566 })}>Change the adress</button>
    </div>
  );
}

export default App;
