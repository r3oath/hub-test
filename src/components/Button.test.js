import * as React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from './Button';

test('button renders as vanilla', () => {
  const component = renderer.create(<Button />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('button renders with primary modifier', () => {
  const component = renderer.create(<Button modifiers={{ primary: true }} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
