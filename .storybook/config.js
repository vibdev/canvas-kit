import {configure, addDecorator, addParameters} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs/react';
import {injectGlobal} from 'emotion';
import fonts from '../modules/canvas-kit-react-fonts';
import {create} from '@storybook/theming';
import {commonColors, typeColors, fontFamily} from '../modules/canvas-kit-react-core';

const req = require.context('../modules', true, /stories.*\.tsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withKnobs);

addParameters({
  options: {
    name: 'Canvas Kit',
    theme: create({
      mainTextColor: typeColors.body,
      mainTextFace: fontFamily,
      mainBackground: commonColors.backgroundAlt,
    }),
  },
});

configure(loadStories, module);
injectGlobal(...fonts);
