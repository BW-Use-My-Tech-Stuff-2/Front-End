import React  from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/Profile">My Profile</Link>
        </li>
      </ul>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Login" component={Login}>
          <Login />
        </Route>
        <Route path="/Register" component={Register}>
          <Register />
        </Route>
        <Route path="/Profile" component={Profile}>
          <Profile/>
        </Route>
      </Switch>
    </div>
  </Router>
);
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;