import React from 'react';
import './style.scss';
import useForm from './useForm';
import validate from './validateValues';

const SignUp = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);
  return (
    <div className="form_content_right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Please register</h1>
        <div className="form_inputs">
          <label htmlFor="username" className="form_label">
            Username
            <input
              id="form__username"
              type="text"
              name="username"
              className="form_input"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p className="form__error">{errors.username}</p>}
          </label>
        </div>
        <div className="form_inputs">
          <label htmlFor="email" className="form_label">
            email
            <input
              id="form__email"
              type="email"
              name="email"
              className="form_input"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="form__error">{errors.email}</p>}
          </label>
        </div>
        <div className="form_inputs">
          <label htmlFor="password" className="form_label">
            Password
            <input
              id="form__password"
              type="password"
              name="password"
              className="form_input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="form__error">{errors.password}</p>}
          </label>
        </div>
        <div className="form_inputs">
          <label htmlFor="password2" className="form_label">
            Confirm password
            <input
              id="form__password2"
              type="password"
              name="password2"
              className="form_input"
              placeholder="Confirm your password"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p className="form__error">{errors.password2}</p>}
          </label>
        </div>
        <button className="form__input__button" type="submit">
          Sign Up
        </button>
        <div>
          Already have an account ? Please <a href="/login">login</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
