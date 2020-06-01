import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import data from './data';
import ItemCard from './ItemCard';
import axios from 'axios';

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
`;

const MyItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/items')
      .then((res) => {
        console.log(res.data);
        res.data = setItems;
      })
      .catch(function (error) {
        console.log('cannot get data');
      });
  });
  {
    items.map((item) => (
      <ItemCard title={setItems.title} description={setItems.description} />
    ));
  }

  return (
    <>
      <div>
        <h1>Use My Tech Stuff</h1>
        <h3>{setItems.title}</h3>
        <h4>{setItems.description}</h4>
      </div>
    </>
  );
};

export default MyItems;
