import React from 'react';
import './style.scss';
import useForm from './useForm';
import pin from './img/pin.svg';
import call from './img/call.svg';
import mail from './img/mail.svg';

const Contact = () => {
  const {handleSubmit, handleChange, values} = useForm;
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
                <p className="contact__category__text">Nice</p>
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
              <img className="icon" src={mail} alt="mail" />
              <div className="text">
                <h3 className="contact__category">Email</h3>
                <p className="contact__category__text">kwad16@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="container__right">
            <form onClick={handleSubmit}>
              <div className="contact__form__inputBox">
                <input
                  className="contact__form__input"
                  type="text"
                  name=""
                  required="required"
                  value={values}
                  onChange={handleChange}
                />
                <span className="contact__form__input__text">Full name</span>
              </div>
              <div className="contact__form__inputBox">
                <input
                  className="contact__form__input"
                  type="text"
                  name=""
                  required="required"
                  value={values}
                  onChange={handleChange}
                />
                <span className="contact__form__input__text">Email</span>
              </div>
              <div className="contact__form__inputBox">
                <textarea
                  className="contact__form__textarea"
                  required="required"
                  value={values}
                  onChange={handleChange}
                />
                <span className="contact__form__input__text">
                  Write your message
                </span>
              </div>
              <div className="contact__form__inputBox">
                <input className="contact__form__submit" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
