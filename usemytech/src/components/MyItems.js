import React from 'react';
import styled from 'styled-components';
// import data from './data';
import Item from './Item';


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

    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     const getItems = () => {
    //         data.map(item => {
    //             // <MyItems  />
    //         })
    //     }
    //  })

    return (
        <Container>
            <h1>Use My Tech Stuff</h1>
            <h3>My Items</h3>
            <Item />
       </Container>
    )
}

export default MyItems;