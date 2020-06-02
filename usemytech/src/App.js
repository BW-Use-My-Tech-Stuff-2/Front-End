import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Login'>Login</Link>
          </li>
          <li>
            <Link to='/Register'>Register</Link>
          </li>
          <li>
            <Link to='/Profile'> My Profile</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path='/Home' component={Home}></Route>
        <Route path='/Login' component={Login}></Route>
        <Route path='/Register' component={Register}></Route>
        <PrivateRoute path='/Profile' component={Profile}></PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
