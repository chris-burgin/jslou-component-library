const path = require('path');

// config
module.exports = {
  entry: {
    index: path.resolve(__dirname, '..', 'src', 'components', 'index'),
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    library: '',
    libraryTarget: 'commonjs',
  },
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
  ],
};
