import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import brand from './brand';
// automatically import all files ending in *.stories.js
const componentStories = require.context('../src', true, /.story.js$/);
const otherStories = require.context('./', true, /.story.js$/);
function loadStories() {
  otherStories.keys().forEach(filename => otherStories(filename));
  componentStories.keys().forEach(filename => componentStories(filename));
}

setOptions({
  name: brand,
  url: `http://${brand}.com`,
});
configure(loadStories, module);
