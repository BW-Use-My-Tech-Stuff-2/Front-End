import React from 'react';
import axios  from 'axios';
 


axios.get("https://my-tech-stuff.herokuapp.com/api/users/:id")
  .then (res => {
    const data = Profile(res.data)
    
  })
  .catch(function (error) {
    console.log('failed');
    console.log(error);
  });

function Profile () {
    const a = "logout";
    return (
        <div className="profile-container">
            <h1>My Profile</h1>
                <a href="./App"> { a }</a>
            <div> Username: {res.username} </div>
            <div>Email: </div>
            <div>Password </div>
       
        </div>
    )
}

export default Profile;