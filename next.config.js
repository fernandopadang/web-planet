const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const defaultConfiguration = {
  publicRuntimeConfig: {}
};

const config = withPlugins([
  withImages
], defaultConfiguration);

module.exports = config;