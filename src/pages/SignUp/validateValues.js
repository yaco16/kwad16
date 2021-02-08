export default (values) => {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email invalid';
  }

  if (!values.password) {
    values.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must contains 6 characters minimum';
  }

  if (!values.password2) {
    errors.password2 = 'Password must be confirmed';
  } else if (values.password2 !== values.password) {
    // eslint-disable-next-line quotes
    errors.password2 = `Passwords don't match`;
  }

  return errors;
};
