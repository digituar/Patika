import { useEffect, useState } from 'react';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import User from './User';

function Users() {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState([]);
    
    const {url, path} = useRouteMatch();

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUser(res.data))
            .catch((ex) => console.log(ex))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {isLoading && <div>Loading ...</div>}
            <ul>
                {user.map((user) => 
                    <li key={user.id}>
                        <NavLink activeClassName="active" to={`${url}/${user.id}`}>
                            {user.name}
                        </NavLink>
                    </li>
                )}
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`} component={User} />
            </Switch>
        </div>
    );
}
export default Users;