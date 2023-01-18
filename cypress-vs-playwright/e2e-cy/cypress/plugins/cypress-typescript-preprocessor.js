/**
 * Typescript configuration for Cypress with Webpack
 * @source https://github.com/cypress-io/add-cypress-custom-command-in-typescript/blob/master/cypress/plugins/cy-ts-preprocessor.js
 */

const wp = require('@cypress/webpack-preprocessor');

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
};

const options = {
  webpackOptions,
};

module.exports = wp(options);
