const path = require('path');

const modulesPath = path.resolve(__dirname, '../modules');

const customRules = [
  {
    enforce: 'pre',
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: modulesPath,
    loader: 'tslint-loader',
  },
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: modulesPath,
    loader: 'ts-loader',
    options: {
      configFile: '../../.storybook/tsconfig.json',
    },
  },
  {
    test: /\.scss$/,
    include: modulesPath,
    use: [
      {
        loader: 'style-loader', // creates style nodes from JS strings
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: require.resolve('./postcss.config.js'),
          },
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader', // compiles Sass to CSS
        options: {
          includePaths: [modulesPath],
          sourceMap: true,
        },
      },
    ],
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.(jpe?g|png|gif|svg|ttf)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
];

module.exports = (baseConfig, env) => {
  // Exclude node_modules from js/babel loader
  baseConfig.module.rules[0].exclude = /node_modules/;

  // Custom rules
  baseConfig.module.rules = baseConfig.module.rules.concat(customRules);

  // Add `.ts` and `.tsx` as a resolvable extension.
  baseConfig.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];

  return baseConfig;
};
