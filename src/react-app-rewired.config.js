const webpack = require('webpack');
module.exports = {
  webpack: (config, { isServer }) => {
    // Add fallback for 'buffer' module
    if (!isServer) {
      config.resolve.fallback = {
        assert: require.resolve('assert'),
        buffer: require.resolve('buffer'),
        util: require.resolve('util'),
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify')
      };
    }

    return config;
  },
};
