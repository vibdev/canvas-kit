import {configure} from '@storybook/react';
import {injectGlobal} from 'emotion';
import fonts from '../modules/canvas-kit-react-fonts';

const req = require.context('../modules', true, /stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
injectGlobal(...fonts);
