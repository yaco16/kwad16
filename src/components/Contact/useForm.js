/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

import axios from 'axios';
import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    console.log('je suis dans handleChange');
    const [name, value] = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('je suis dans submit');

    const { name, mail, message } = values;

    axios
      .post('/submitMail', {
        name,
        mail,
        message,
      })
      .then((res) => console.log(res));
  };
  return { handleChange, handleSubmit, values };
};

export default useForm;

// const resData = await response.json();
// if (resData.status === 'success') {
//   console.log('Message Sent.');
//   this.resetForm();
// } else if (resData.status === 'fail') {
//   console.log('Message failed to send.');
// }
