/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, SectionDecorator} from '../../../utils/storybook';

import FormField from '..';
import README from '../README.md';
import {ColorPreview} from '@workday/canvas-kit-react-color-picker';

storiesOf('Form Field/Color Picker/Color Preview/Top Label', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(SectionDecorator('Color Preview'))
  .addDecorator(withReadme(README))
  .add('Plain', () => (
    <FormField label="Label" inputId="input-plain">
      <ColorPreview value="#00FFCC" />
    </FormField>
  ));

storiesOf('Form Field/Color Picker/Color Preview/Left Label', module)
  .addDecorator(SectionDecorator('Color Preview'))
  .addDecorator(withReadme(README))
  .add('Plain', () => (
    <FormField labelPosition={FormField.LabelPosition.Left} label="Label" inputId="input-plain">
      <ColorPreview value="#00FFCC" />
    </FormField>
  ));
