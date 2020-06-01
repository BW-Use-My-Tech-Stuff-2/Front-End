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
const MyItems = () => {

    return (
        <Container>
            <h1>Use My Tech Stuff</h1>
            <h3>My Messages</h3>
       </Container>
    )
}

export default MyItems;