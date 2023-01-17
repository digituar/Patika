import {useState, useEffect} from 'react';

import "./styles.css"

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Ozan",
      phone_number: "1008"
    },
    {
      fullname: "Suat",
      phone_number: "0303"
    },
    {
      fullname: "Tuncay",
      phone_number: "0105"
    },
  ]);

  useEffect(() => {

  }, [contacts])

  return (
    <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContact = {setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts