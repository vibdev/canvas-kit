import {configure, addDecorator} from '@storybook/react';
import {withOptions} from '@storybook/addon-options';
import {injectGlobal} from 'emotion';
import fonts from '../modules/canvas-kit-react-fonts';

const req = require.context('../modules', true, /stories.*\.tsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(
  withOptions({
    name: 'Canvas Kit React',
  })
);

configure(loadStories, module);
injectGlobal(...fonts);
