module.exports = {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules\/(?!ethers)/, // Make sure ethers is transpiled
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-private-methods'],
            },
          },
          resolve: {
            fallback: {
              process: require.resolve('process/browser'),
            },
          },
        },
      ],
    },
  };
  