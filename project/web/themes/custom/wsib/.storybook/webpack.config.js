import { resolve } from 'path';
import webpack from 'webpack';
import boxen from 'boxen';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
const CopyWebpackPlugin = require('copy-webpack-plugin');

const THEME_PATH = process.cwd();
const SB_COMPONENTS_PATH = resolve(THEME_PATH, '.storybook/components');
const sourcePath = resolve(THEME_PATH, 'src');

module.exports = async ({ config }) => {
  const { mode } = config;
  const isDevMode = mode  === 'development';
  config.resolve.alias['@components'] = SB_COMPONENTS_PATH;
  config.resolve.alias['@root'] = THEME_PATH;
  // // SCSS
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          url: false,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [require('autoprefixer')],
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          additionalData: (fileContents) => `${isDevMode ? '' : overrideSassVariables} ${fileContents}`,
          sassOptions: {
            silenceDeprecations: ['legacy-js-api', 'import'],
            quietDeps: true,
            includePaths: [
              'node_modules',
              `${sourcePath}/sass`,
            ],
          },
        },
      },
    ],
  });

  config.plugins.push(new webpack.ProvidePlugin({
    React: 'react',
  }),);

  return config;
};
