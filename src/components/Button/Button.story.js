import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

// Types
const typesInfo = `
  The following types are support \`default\`, \`info\`, \`primary\`, \`danger\`.
`;

const types = () => (
  <div>
    {/* Default */}
    <Button onClick={action('Default Clicked')} buttonType="default">
      Default
    </Button>
    <br /> <br />
    {/* Primary */}
    <Button onClick={action('Primary Clicked')} buttonType="primary">
      Primary
    </Button>
    <br /> <br />
    {/* Info */}
    <Button onClick={action('Info Clicked')} buttonType="info">
      Info
    </Button>
    <br /> <br />
    {/* Danger */}
    <Button onClick={action('Danger Clicked')} buttonType="danger">
      Danger
    </Button>
  </div>
);

storiesOf('Button', module).add('Types', withInfo(typesInfo)(types));
