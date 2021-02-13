import React from 'react';
import './style.scss';
import pin from './img/pin.svg';
import call from './img/call.svg';
import mail from './img/mail.svg';

const Contact = () => (
  <div>
    <section className="contact">
      <div className="content">
        <h2 className="title">Contact me</h2>
        <p>
          If you need further information, don't hesitate to send me a message
        </p>
      </div>
      <div className="container">
        <div className="container__left">
          <div className="box">
            <img className="icon" src={pin} alt="pin" />
            <div className="text">
              <h3>Adress</h3>
              <p>Nice</p>
            </div>
          </div>
          <div className="box">
            <img className="icon" src={call} alt="call" />
            <div className="text">
              <h3>Phone</h3>
              <p>06 xx xx xx xx</p>
            </div>
          </div>
          <div className="box">
            <img className="icon" src={mail} alt="mail" />
            <div className="text">
              <h3>Email</h3>
              <p>kwad16@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="container__right">
          <form>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Full name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required" />
              <span>Write your message</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
