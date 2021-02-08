import React, { useState } from 'react';
import './style.scss';
import picture from 'src/assets/images/img-2.svg';
import FormSignup from './form';
import FormSuccess from './formSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        {/* <span className="close-btn">×</span> */}
        <div className="form-content-left">
          <img className="form-img" src={picture} alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
