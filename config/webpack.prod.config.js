const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const TerserJSPlugin = require('terser-webpack-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const PurgecssPlugin = require('purgecss-webpack-plugin')
// const glob = require('glob')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'eastereggs.js',
    // chunkFilename: '[name].[chunkhash:8].chunk.js',
    library: 'eastereggs',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]],
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader', // 4. injects style into DOM
          'css-loader', // 3. Turns CSS into CommonJs
          'postcss-loader', // 2. Converts modern CSS into something most browsers can understand & minifies code
          'sass-loader', // 1. Turns SCSS into CSS
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      // {
      //   test: /\.html$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       attrs: ['img:src', ':data-src'],
      //       minimize: true,
      //     },
      //   },
      // },
    ],
  },
  // optimization: {
  //   minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  // },
  // plugins: [
  //   // CleanWebpackPlugin will do some clean up/remove folder before build
  //   // In this case, this plugin will remove 'dist' and 'build' folder before re-build again
  //   // new CleanWebpackPlugin({}),
  //   // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
  //   // new HtmlWebpackPlugin({
  //   //   template: './src/demo/index.html',
  //   //   filename: 'demo.html',
  //   // }),
  //   new PurgecssPlugin({
  //     paths: glob.sync(path.resolve(__dirname, '../src/**/*'), { nodir: true }),
  //   }),
  // ],
}
