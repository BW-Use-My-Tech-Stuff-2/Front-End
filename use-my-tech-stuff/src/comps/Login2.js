import React, {useState } from 'react';
import * as Yup from "yup";

// YUP FORM VALIDATION SCHEMA
    const formSchema = Yup.object().shape({
        email: Yup
            .string()
            .email("Must be a valid email address.")
            .required("Must include email address."),
        password: Yup
            .string()
            .min(6, "Passwords must be at least 6 characters long.")
            .required("A Password is required."),
        terms: Yup
            .boolean()
            .oneOf([true], "You must accept our TOS")
    })

   const Login2 = () => {
        // CREATE STATE FOR THE FORM VALUES 
   const [formState, setFormState]=useState({
       email: "",
       password: "",
       terms: ""
   });
   
//STATE FOR THE ERROR MESSAGES
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    terms: true
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
    const formSubmit = e => {
        e.preventDefault();
        console.log("Submitted!")
    };

 

//DEFINE FORM ELEMENTS: EMAIL PASSWORD AND TOS 




        return (
            <form onSubmit={formSubmit}>
                <label htmlFor="email">
                    Email: 
                    <input 
                        id="email" 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                        onChange={inputChange}
                        /> {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}
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
                <label htmlFor="termsInput">
                    Agree to our TOS?
                    <input 
                        id="termsInput" 
                        type="checkbox" 
                        name="terms" 
                        />
                </label>
                <button>Submit!</button>
            </form>
        )
        }

        export default Login2;