import React, {useState } from 'react';
import * as Yup from "yup";
import axios from 'axios';
import styled from 'styled-components';
 

const FormContainer = styled.div`
  display: flex;
  ${'' /* flex-direction: column;
  justify-content: center; */}
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
  ${'' /* justify-content: center;
  align-content: center; */}
  input {
    width: 380px;
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
// YUP FORM VALIDATION SCHEMA
    const formSchema = Yup.object().shape({
        username: Yup
            .string()
            .required("Username required"),
        password: Yup
            .string()
            .min(6, "Passwords must be at least 6 characters long.")
            .required("A Password is required."),
    })

   const Login = () => {
        // CREATE STATE FOR THE FORM VALUES 
   const [formState, setFormState]=useState({
       username: "",
       password: "",
   });
   
//STATE FOR THE ERROR MESSAGES
  const [errors, setErrors] = useState({
    username: "",
    password: "",
   
  });

//   /* Each time the form value state is updated, check to see if it is valid per our schema. 
//   This will allow us to enable/disable the submit button.*/
//   useEffect(() => {
    
//     /* We pass the entire state into the entire schema, no need to use reach here. 
//     We want to make sure it is all valid before we allow a user to submit
//     isValid comes from Yup directly */
//     formSchema.isValid(formState).then(valid => {
//       setButtonDisabled(!valid);
//     });
//   }, [formState]);
   
  const inputChange = e => {
    /* e.persist allows us to use the synthetic event in an async manner.
    We need to be able to use it after the form validation */
    e.persist();

      // yup.reach will allow us to "reach" into the schema and test only one part.
    // We give reach the schema as the first argument, and the key we want to test as the second.
   
    Yup.reach(formSchema, e.target.name)
      //we can then run validate using the value
      .validate(e.target.value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });

    // Wether or not our validation was successful, we will still set the state to the new value as the user is typing
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

// BASIC SUBMIT EVENTHANDLER/CONSOLE LOG TO CONFIRM FORM SUBMIITTED
const formSubmit = (e) => {
  e.preventDefault();
  axios
    .post('https://my-tech-stuff.herokuapp.com/api/auth/login ', formState)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      console.log('logged in', res);
    });
};


//DEFINE FORM ELEMENTS: EMAIL PASSWORD AND TOS 

        return (
          <FormContainer>
            
            <Form onSubmit={formSubmit}>
                <label htmlFor="username">
                    Username  
                    <input 
                        id="username" 
                        type="username" 
                        name="username" 
                        placeholder="username"
                        onChange={inputChange}
                        /> {errors.username.length > 0 ? (<p className="error">{errors.username}</p>) : null}
                </label>
               
                <label htmlFor="password ">
                   Password
                    <input 
                        id="password" 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        onChange={inputChange} 
                        />{errors.password.length > 6 ? (<p className="error">{errors.password}</p>) : null}
                </label>
             <button>Login</button>
             
            </Form> 
            </FormContainer>
        ) 
       }

        export default Login;