const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const defaultConfiguration = {
  publicRuntimeConfig: {
    // apiUrl: process.env.API_URL,
  }
};

const config = withPlugins([
   withImages
], defaultConfiguration);

module.exports = config;