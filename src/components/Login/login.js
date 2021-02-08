import React from 'react';
import './style.scss';
import useForm from './useForm';
import validate from './validateValues';

const Login = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    validate,
  );
  return (
    <div className="form__container">
      <form onSubmit={handleSubmit} className="login__form" noValidate>
        <h1>Login</h1>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
