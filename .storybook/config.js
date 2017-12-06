import { configure } from '@storybook/react';

const req = require.context('../modules', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
