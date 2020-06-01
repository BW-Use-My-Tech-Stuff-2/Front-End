import React, { useState } from 'react';
import { Button } from 'reactstrap';

const AddItem = () => {
  return (
    <div className='form-container'>
      <form>
        <label>
          Item Name
          <input name='title' />
        </label>
        <label>
          Description<textarea name='description'></textarea>
        </label>
        <label>
          Image
          <input type='text' name='image_url' />
        </label>
        <Button color='primary'>Add Item</Button>
      </form>
    </div>
  );
};

export default AddItem;
