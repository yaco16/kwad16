import React from 'react';
import './form.scss';
import picture from 'src/assets/images/img-3.svg';

const FormSuccess = () => (
  <div className="form-content-right">
    <h1 className="form-success">We have received your request!</h1>
    <img className="form-img-2" src={picture} alt="success" />
  </div>
);

export default FormSuccess;
