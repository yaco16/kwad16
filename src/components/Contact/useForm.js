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
    const [name, value] = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    console.log('je suis dans submit');

    event.preventDefault();

    const { name, mail, message } = values;
    console.log('values:', values);

    axios
      .post('/submitMail', {
        name,
        mail,
        message,
      })
      .then((res) => console.log(res));
  };
};

export default useForm;

// const resData = await response.json();
// if (resData.status === 'success') {
//   console.log('Message Sent.');
//   this.resetForm();
// } else if (resData.status === 'fail') {
//   console.log('Message failed to send.');
// }
