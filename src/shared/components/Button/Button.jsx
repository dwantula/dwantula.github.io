import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, className, text }) {
  return (
    <button onClick={onClick} type="button" className={className}>
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

Button.defaultProps = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
