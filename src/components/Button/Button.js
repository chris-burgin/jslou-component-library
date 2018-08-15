import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.style';

const Button = ({ children, ...props }) => (
  <StyledButton {...props}> {children} </StyledButton>
);

// Prop Types
Button.propTypes = {
  onClick: PropTypes.func,
  buttonType: PropTypes.string,
};
Button.defaultProps = {
  onClick: () => {},
  buttonType: 'default',
};

Button.displayName = 'Button';

export default Button;
