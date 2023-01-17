import { useEffect, useState } from 'react'
import axios from 'axios';

function Users() {

    const [users, setUsers]  = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch((ex) => console.log(ex))
        .finally(() => setIsLoading(false));
    }, [])
  return (
    <div>
    <h1>Users</h1>

    {isLoading && <div>Loading ...</div>}

    {users.map((user) => (
        <div key={user.key}>{user.name}</div>
    ))}
    </div>
  );
}

export default Users