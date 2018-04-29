import * as React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('works without crashing', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
