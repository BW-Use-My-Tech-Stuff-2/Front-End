import React from 'react';
import axios  from 'axios';
import styled  from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* justify-content: center;
  align-content: center; */}
  height: 800px;
  width: 400px;
  margin: auto;
  
  p {
    text-align: center;
  }
`



axios.get("https://my-tech-stuff.herokuapp.com/api/users/")
  .then (res  => {
    
    console.log(res)
    
  })
  .catch(function (error) {
  
    console.log("cannot get data");
  });

function Profile () {
    const a = "logout";
    return (
      <Container >
        <div className="profile-container">
            <h1>My Profile</h1>
                <a href="./App"> { a }</a>
            <div> Username:  </div>
            <div>Email: </div>
            <div>Password </div>
       
        </div>
        </Container>
    )
}

export default Profile;