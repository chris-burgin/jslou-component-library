// requires modules
const webpack = require('webpack');

// require shared config
const { entry, output, rules } = require('./shared.webpack.config');

// webpack settings
module.exports = {
  // entry and output pulled from shared
  entry: entry,
  output: output,

  // inline the source maps
  devtool: 'inline-source-map',

  // set our project to dev mode, auto enables several plugins
  // docs: https://webpack.js.org/concepts/mode/
  mode: 'development',

  module: {
    // rules, injected from shared
    rules: rules,
  },
};
