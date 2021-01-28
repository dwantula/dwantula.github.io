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
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }),
  ]),
};

Input.defaultProps = {
  className: '',
  placeholder: '',
  onChange: '',
  onBlur: () => {},
  inputRef: () => {},
};

export default Input;
