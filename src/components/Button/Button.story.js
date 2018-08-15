import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

// Types
const buttonTypesInfo = `
  The following types are support \`default\`, \`info\`, \`primary\`, \`danger\`.
`;

const buttonTypes = () => (
  <div>
    <ul style={{ listStyle: 'none' }}>
      <li style={{ marginBottom: '20px' }}>
        {/* Default */}
        <Button onClick={action('Default Clicked')} buttonType="default">
          Default
        </Button>
      </li>
      <li style={{ marginBottom: '20px' }}>
        {/* Info */}
        <Button onClick={action('Info Clicked')} buttonType="info">
          Info
        </Button>
      </li>
      <li style={{ marginBottom: '20px' }}>
        {/* Primary */}
        <Button onClick={action('Primary Clicked')} buttonType="primary">
          Primary
        </Button>
      </li>
      <li style={{ marginBottom: '20px' }}>
        {/* Danger */}
        <Button onClick={action('Danger Clicked')} buttonType="danger">
          Danger
        </Button>
      </li>

      <li style={{ marginBottom: '20px' }}>
        {/* Danger Disabled */}
        <Button onClick={action('Danger Clicked')} buttonType="danger" disabled>
          Danger Disabled
        </Button>
      </li>
    </ul>
  </div>
);

storiesOf('Button', module).add(
  'Types',
  withInfo(buttonTypesInfo)(buttonTypes)
);
