import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.style';

const Button = ({ children, ...props }) => (
  <StyledButton {...props}> {children} </StyledButton>
);

// Prop Types
Button.propTypes = {
  buttonType: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  buttonType: 'default',
  disabled: false,
};

Button.displayName = 'Button';

export default Button;
