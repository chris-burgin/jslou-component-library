import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

// Types
const typesInfo = `
  The following types are support \`default\`, \`info\`, \`primary\`, \`danger\`.
`;

const types = () => <div>Button Goes Here</div>;

storiesOf('Button', module).add('Types', withInfo(typesInfo)(types));
