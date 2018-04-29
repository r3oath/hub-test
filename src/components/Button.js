import styled, { css } from 'styled-components';

export default styled.button`
  border: 1px solid black;

  ${props =>
    props.modifiers &&
    props.modifiers.primary &&
    css`
      border: 1px solid red;
    `};
`;
