import * as React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from './Button';

describe('Button', () => {
  it('should render in a vanilla state', () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with the primary modifier', () => {
    const component = renderer.create(<Button modifiers={{ primary: true }} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
