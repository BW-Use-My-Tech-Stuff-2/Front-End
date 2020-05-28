import React from 'react';
import styled from 'styled-components';




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


const Home = () => {
    return (
        <Container>
      <div>
        <h2>Home</h2>
      </div>
      </Container>
    );
  }


  export default Home;