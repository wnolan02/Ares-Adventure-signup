import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Account Created!</h1>
      <p className='message'>You will receive a confirmation email shortly<br></br> with instructions on the next steps.</p>
      <img className='form-img-2' src='img/pic1.jpg' alt='success' />
    </div>
  );
};

export default FormSuccess;
