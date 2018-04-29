import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';

storiesOf('Button', module)
  .add('vanilla', () => <Button>Hello World!</Button>)
  .add('primary', () => <Button modifiers={{ primary: true }}>Hello World!</Button>);
