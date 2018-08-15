// requires modules
const webpack = require('webpack');

// require shared config
const { entry, output, rules } = require('./shared.webpack.config');

// webpack settings
module.exports = {
  // entry and output pulled from shared
  entry: entry,
  output: output,

  // set our project to prod mode, auto enables several plugins
  // docs: https://webpack.js.org/concepts/mode/
  mode: 'production',

  module: {
    // rules, injected from shared
    rules: rules,
  },
};
