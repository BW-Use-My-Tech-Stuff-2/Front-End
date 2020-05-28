import React  from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import MyItems from './components/MyItems';
import AddItems from './components/AddItems';
import Home from './components/Home';
import MyMessages from './components/MyMessages';
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
          <Link to="/Profile"> My Profile</Link>
        </li>
        <li>
          <Link to="/MyItems"> My Items</Link>
        </li>
        <li>
          <Link to="/AddItems">Add Items</Link>
        </li>
        <li>
          <Link to="/MyMessages">My Messages</Link>
        </li>
        <li>
           
        </li>
      </ul>

      </div>

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/Login" component={Login}>
          <Login />
        </Route>
        <Route path="/Register" component={Register}>
          <Register />
        </Route>
        <Route path="/Profile" component={Profile}>
          <Profile />
        </Route>
        <Route path="/MyItems" component={MyItems}>
          <MyItems/>
        </Route>
        <Route path="/AddItems" component={AddItems}>
          <AddItems />
        </Route>
        <Route path="/MyMessages" component={MyMessages}>
          <MyMessages />
        </Route>
      </Switch>
   
  </Router>
);
}


export default App;