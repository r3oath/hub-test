// @flow

import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

export default styled.button`
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;
  padding: 0.8rem 1rem;
  border-radius: 100rem;
  font-weight: bold;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(180, 180, 180);
  transform: translate3d(0, 0, 0);
  transition: transform 80ms, border-color 80ms, box-shadow 80ms, background-color 80ms;

  &:hover {
    transform: translate3d(0, -1px, 0);
    border: 1px solid rgb(150, 150, 150);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  ${props =>
    props.modifiers &&
    props.modifiers.primary &&
    css`
      background-color: #ffc107;
      border-color: ${darken(0.2, '#ffc107')};

      &:hover {
        background-color: ${lighten(0.05, '#ffc107')};
        border-color: ${darken(0.25, '#ffc107')};
      }
    `};
`;
