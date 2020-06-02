import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import data from './data';
import ItemCard from './ItemCard';
import axios from 'axios';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   ${'' /* justify-content: center;
//   align-content: center; */}
//   height: 800px;
//   width: 400px;
//   margin: auto;

//   p {
//     text-align: center;
//   }
// `;

const MyItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/items')
      .then((res) => setItems(res.data))
      .catch(function (error) {
        console.log('cannot get data');
      });
  }, []);

  return (
    <>
      <div>
        {items.map((item) => (
          <ItemCard
            key={item.users_id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default MyItems;
