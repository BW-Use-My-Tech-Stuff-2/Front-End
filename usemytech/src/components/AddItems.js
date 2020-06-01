import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* justify-content: center; */}
  ${'' /* align-content: center; */}
  height: 800px;
  width: 400px;
  margin: auto;
  
  p {
    text-align: center;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  input {
    width: 400px;
    height: 50px;
    margin: 10px 0;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 18px;
    outline: none;
    background-color: rgb(232, 240, 254)
  }
  textarea {
    width: 400px;
    height: 50px;
    margin: 10px 0;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 18px;
    outline: none;
    background-color: rgb(232, 240, 254)
  }

  button {
    height: 50px;
    width: 380px;
    margin: 10px 0 10px 10px;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    color: white;
    background-color: blueviolet;
    cursor: pointer;
  }
`


const AddItems = () => {

    return (
        <Container>
            <h1>Use My Tech Stuff</h1>
            <h3>Add Item</h3>
            <Form>
                <label htmlFor="title">Item Name 
                <input 
                    type="text"
                    name="title"
                    id="title"
                />
                </label>
                <label htmlFor="description">
                  Item Details 
                  <textarea
                    type="textarea"
                    col= "5"
                    row= "10"
                    name="description"
                    ></textarea>
                </label>
                <label htmlFor="title">Upload Image
                <input 
                    type="file"
                    name="image_url"
                    id="image_url"
                />
                </label>
                <label htmlFor="title">Search Tags
                <input 
                    type="text"
                    name="search_tags"
                    id="search_tags"
                />
                </label>
                <button>Add Item</button>
                
            </Form>

       </Container>
    )
}

export default AddItems;