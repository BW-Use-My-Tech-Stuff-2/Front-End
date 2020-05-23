import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const AddStuff = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="danger" onClick={toggle}>Add Item</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Item</ModalHeader>
        <ModalBody>
        <div className="form-container">
        <form>
                <label>Item Name<input name="itemName" /></label>
                <label>Description<textarea name="itemDescription"></textarea></label>
                <label>Image<input type="file" name="itemPhoto" /></label>
                <Button color="primary" onClick={toggle}>Add Item</Button>
            </form>
            
        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
</div>
  )
}

export default AddStuff