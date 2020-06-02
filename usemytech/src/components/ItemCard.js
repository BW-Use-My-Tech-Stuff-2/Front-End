import React from 'react';

export default function ItemCard(props) {
  const styleObj = {
    display: 'inline-block',
    align: 'center',
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    padding: '5px',
    margin: '10px',
    border: '2px solid grey',
    width: '350px',
    height: 'px',
    boxShadow: '3px 3px 5px 6px #ccc',
  };

  return (
    <div style={styleObj} id={props.key}>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
  );
}
