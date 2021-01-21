import React from 'react';
import PropTypes from 'prop-types';

function Input({
  value,
  className,
  inputRef,
  placeholder,
  onChange,
  type,
  onBlur,
}) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
      ref={inputRef}
      onBlur={onBlur}
    />
  );
}
Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  inputRef: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

Input.defaultProps = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  inputRef: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default Input;
