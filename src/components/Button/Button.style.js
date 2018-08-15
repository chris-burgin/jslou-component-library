import styled, { css } from 'styled-components';
import variables from '../../Theme/Theme.variables';

const buttonStyles = {
  default: css`
    background-color: ${variables.gray};
    border-bottom: 3px solid ${variables.gray};
  `,
  info: css`
    background-color: ${variables.green};
    border-bottom: 3px solid ${variables.green};
  `,
  primary: css`
    background-color: ${variables.primary};
    border-bottom: 3px solid ${variables.primary};
  `,
  danger: css`
    background-color: ${variables.red};
    border-bottom: 3px solid ${variables.red};
  `,
};

// Button Components
const StyledButton = styled.button`
  color: white;
  border: none;
  padding: 20px 60px;
  transition: 150ms;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;

  ${props => buttonStyles[props.buttonType]};

  &:hover {
    background-color: white;
    color: ${variables.black};
    box-shadow: ${variables.shadow};
  }
`;

export default StyledButton;
