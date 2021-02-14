/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';
import pin from './img/pin.svg';
import call from './img/call.svg';
import enveloppe from './img/enveloppe.svg';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    return values;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('je suis dans submit');

    const { name, email, message } = values;

    axios
      .post('http://localhost:1234/submitMail', {
        name,
        email,
        message,
      })
      .then((res) => console.log(res));
  };
  return (
    <div>
      <section className="contact">
        <div className="content">
          <h2 className="contact__title">Contact me</h2>
          <p>
            If you need further information, don't hesitate to send me a message
          </p>
        </div>
        <div className="container">
          <div className="container__left">
            <div className="box">
              <img className="icon" src={pin} alt="pin" />
              <div className="text">
                <h3 className="contact__category">Adress</h3>
                <p className="contact__category__text">Nice, France</p>
              </div>
            </div>
            <div className="box">
              <img className="icon" src={call} alt="call" />
              <div className="text">
                <h3 className="contact__category">Phone</h3>
                <p className="contact__category__text">06 xx xx xx xx</p>
              </div>
            </div>
            <div className="box">
              <img className="icon" src={enveloppe} alt="mail" />
              <div className="text">
                <h3 className="contact__category">Email</h3>
                <p className="contact__category__text">kwad16@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="container__right">
            <form onSubmit={handleSubmit}>
              <div className="contact__form__inputBox">
                <input
                  className="contact__form__input"
                  type="text"
                  name="name"
                  required="required"
                  value={values.name}
                  onChange={handleChange}
                />
                <span className="contact__form__input__text">Full name</span>
              </div>
              <div className="contact__form__inputBox">
                <input
                  className="contact__form__input"
                  type="email"
                  name="email"
                  required="required"
                  value={values.email}
                  onChange={handleChange}
                />
                <span className="contact__form__input__text">Email</span>
              </div>
              <div className="contact__form__inputBox">
                <textarea
                  className="contact__form__textarea"
                  type="text"
                  required="required"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                />
                <span className="contact__form__input__text">
                  Write your message
                </span>
              </div>
              <div className="contact__form__inputBox">
                <input className="contact__form__submit" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
