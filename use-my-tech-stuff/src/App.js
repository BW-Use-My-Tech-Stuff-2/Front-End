import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./comps/Profile";
import RegisterForm from './comps/Register';
import 'bootstrap/dist/css/bootstrap.min.css';






// IF STATEMENT FOR ONLINE OFFLINE

  
  const App = () => {

return (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" /></div>
        <div>
      <h1>RENT MY TOOL</h1>
      <Profile />
     <RegisterForm />
</div> 
</div>
)
}
export default App;

