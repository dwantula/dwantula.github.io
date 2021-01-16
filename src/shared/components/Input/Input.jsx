import React from 'react';
import PropTypes from 'prop-types';

function Input({ name, className, placeholder, onChange, type }) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={onChange}
    />
  );
}
Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
