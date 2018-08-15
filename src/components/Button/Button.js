import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => 'I will become a button';

// Prop Types
Button.propTypes = {};
Button.defaultProps = {};

Button.displayName = 'Button';

export default Button;
