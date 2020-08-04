module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("ts-loader"),
          },
          {
            loader: require.resolve("react-docgen-typescript-loader"),
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      }
    );
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
