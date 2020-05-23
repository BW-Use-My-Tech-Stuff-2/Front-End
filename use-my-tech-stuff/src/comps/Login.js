import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Login = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>LOGIN</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>MEMBER LOGIN</ModalHeader>
        <ModalBody>
        <div className="login-form-container">


            <form>
            <label>UserName:<input type="text" name="username" /></label>
            <label>Password:<input type="password" name="password" /></label>
        <Button color="primary" onClick={toggle}>LOGIN</Button>
           </form>

        </div>        </ModalBody>
        <ModalFooter>
         
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Login;
// import React from 'react';
// import { Button } from 'reactstrap';

// const Login = () => {
//     return (
//         <div className="login-form-container">
//             <h1>Member Login</h1>

//             <form>
//             <label>UserName:<input type="text" name="username" /></label>
//             <label>Password:<input type="password" name="password" /></label>
//             <Button color="secondary" size="sm">Login</Button>  
//             </form>

//         </div>
//     )
// }

// export default Login;