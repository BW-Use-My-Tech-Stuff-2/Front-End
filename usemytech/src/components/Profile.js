import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Users from './Users';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 800px;
  width: 400px;
  margin: auto;

  p {
    text-align: center;
  }
`;

axios
  .get('http://localhost:5000/api/items')
  .then((res) => {
    console.log(res);
  })
  .catch(function (error) {
    console.log('cannot get data');
  });

function Profile(props) {
  return (
    <Container>
      <div className='profile-container'>
        <h1>My Profile</h1>
        <div> Username: </div>
        <div>Email: </div>
        <div>Password </div>
        {<Users />}
      </div>
    </Container>
  );
}

export default Profile;
