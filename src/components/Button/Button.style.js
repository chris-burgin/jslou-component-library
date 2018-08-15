import styled, { css } from 'styled-components';
import variables from '../../Theme/Theme.variables';

const buttonStyles = {
  default: css`
    background-color: ${variables.gray};
    border-bottom: 6px solid ${variables.gray};
  `,
  primary: css`
    background-color: ${variables.primary};
    border-bottom: 6px solid ${variables.primary};
  `,
  info: css`
    background-color: ${variables.green};
    border-bottom: 6px solid ${variables.green};
  `,
  danger: css`
    background-color: ${variables.red};
    border-bottom: 6px solid ${variables.red};
  `,
};

const StyledButton = styled.button`
  padding: 20px 60px;
  border: none;
  font-family: 'Roboto';
  font-size: 18px;
  color: white;
  cursor: pointer;
  transition: 70ms;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props => buttonStyles[props.buttonType]};

  ${props =>
    !props.disabled &&
    css`
      &:hover {
        color: black;
        background-color: white;
        box-shadow: ${variables.shadow};
      }
    `};
`;

export default StyledButton;
