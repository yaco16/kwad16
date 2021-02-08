import React, { ReactDOM } from 'react';
import PropTypes from 'prop-types';
// import './style.scss';
import Typed from 'typed.js';

class TypedJob extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 50,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => {
              this.el = el;
            }}
          />
        </div>
      </div>
    );
  }
}

TypedJob.propTypes = {
  strings: PropTypes.array.isRequired,
};

export default TypedJob;
