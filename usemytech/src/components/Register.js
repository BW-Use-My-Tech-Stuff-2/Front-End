import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
 
import * as yup from "yup";
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
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

const formSchema = yup.object().shape({
    username: yup
            .string()
            .required("username is required"),
    email: yup
         .string()
         .email("Must be a valid email address"),
    password: yup
         .string()
         .required("Must be between 6 to 8 characters"),
    terms: yup
         .boolean()
         .oneOf([true], "please agree to terms of use"),
})
 

const Register= () => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        // terms: '',
    });

    const [errors, setErrors] = useState ({
        username: '',
        email: '',
        password: '',
        // terms: ''
    });

     // new state to set our post request too. So we can console.log and see it.
  const [post, setPost] = useState([]);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [formState]);

      const validateChange = e => {
        // Reach will allow us to "reach" into the schema and test only one part.
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
            setErrors({
              ...errors,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors,
              [e.target.name]: err.errors[0]
            });
          });
      };

      const formSubmit = e => {
        e.preventDefault();
        axios
          .post("https://my-tech-stuff.herokuapp.com/api/auth/register ", formState)
          .then(res => {
            setPost(); // get just the form data from the REST api
            console.log("success", post);
            // reset form if successful
            setFormState({
              username: "",
              email: "",
              password: "",
              // terms: "" 
            })
        })}
        //   .catch(err => console.log(err.response));
        const inputChange = e => {
            e.persist();
            const newFormData = {
              ...formState,
              [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
            };
        
            validateChange(e);
            setFormState(newFormData);
          };
 

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <FormContainer>
       <Button color="primary" onClick={toggle} >REGISTER</Button>
        <Modal className="regform" isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>MEMBER REGISTRATION</ModalHeader>
        <ModalBody>
        
          
        <Form  onSubmit={formSubmit} className="regForm">
            <label htmlFor="username">UserName:<input type="text" name="username" value={formState.username} onChange={inputChange} /></label>
            <label htmlFor="email">Email Address:<input type="email" name="email" value={formState.email} onChange={inputChange} /></label>
            <label htmlFor="password">Password:<input type="password" name="password" value={formState.passoword} onChange={inputChange} /></label>
            {/* <label htmlFor='terms' className='terms'> */}
        {/* <input type='checkbox' name='terms' checked={formState.terms} onChange={inputChange} */}
        {/* />Terms & Conditions </label> */}
            <Button type="submit" color="primary" onClick={toggle} disabled={buttonDisabled}>REGISTER</Button>
            </Form>
             
         </ModalBody>
        <ModalFooter>
         
          <Button color="primary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </FormContainer>
 );
}
export default Register 
