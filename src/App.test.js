import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

describe('Application', () => {
  it('should not crash', () => {
    const el = document.createElement('div');

    ReactDOM.render(<App />, el);
    ReactDOM.unmountComponentAtNode(el);
  });
});
