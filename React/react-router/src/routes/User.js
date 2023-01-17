import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function User() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setIsLoading(false));
  }, [id]);


  return (
    <div>
      <h1>User details</h1>
      {isLoading && <div>Loading ...</div>}
      {!isLoading && <div>{JSON.stringify(user)}</div>}

      <br />
      <br />

      <Link to={`/users/${parseInt(id) + 1}`}>
        Next User ({parseInt(id) + 1})
      </Link>

    </div>
  );
}
