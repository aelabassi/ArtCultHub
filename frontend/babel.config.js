module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-proposal-private-methods', // Add this plugin
    "@babel/plugin-proposal-private-property-in-object"
  ],
};
