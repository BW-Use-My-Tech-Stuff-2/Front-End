import React from 'react';
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
