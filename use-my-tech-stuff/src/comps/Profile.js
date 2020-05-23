import React from 'react';
import MyStuff from './MyStuff';

const Profile = () => {
    const a = "logout";
    return (
        <div className="profile-container">
            <h1>My Profile</h1>
                <a href="./App"> { a }</a>
            <div> Username: </div>
            <div>Email: </div>
            <div>Password </div>
             
             
            <MyStuff />
        </div>
    )
}


export default Profile;