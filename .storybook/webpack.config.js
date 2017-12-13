const path = require('path')

const modulesPath = path.resolve(__dirname, '../modules')

module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js?x|ts?x)$/,
        exclude: /node_modules/,
        include: modulesPath,
        loader: 'eslint-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: modulesPath,
        loader: 'ts-loader',
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
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ],
  },
}
