import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';

storiesOf('Button', module)
  .add('vanilla', () => <Button>View terms</Button>)
  .add('primary', () => <Button modifiers={{ primary: true }}>Create new item</Button>);
