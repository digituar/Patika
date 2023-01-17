import './App.css';
import { NavLink, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Users from './routes/Users';
import Error404 from './routes/Error404';

function App() {
  return (
    <Router>
      <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" exact activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink to="/users" exact activeClassName="active">Users</NavLink>
              </li>
            </ul>
          </nav>
      </div>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Users' component={Users} />
        <Route path='*' component={Error404} />
      </Switch>
    </Router>
  );  
}
export default App;
