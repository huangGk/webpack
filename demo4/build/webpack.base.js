// webpack 基础配置项
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev');
const merge = require('webpack-merge');

const baseConfig = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, '../src')],
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
		usedExports: true, // tree shaking
    splitChunks: { // 代码分割
      chunks: 'all'
    }
  },
  output: path.resolve(__dirname, '../dist') // webpack默认的根路径，是以webpack配置文件的路径为根路径
}

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    return merge(baseConfig, prodConfig);
  } else {
    return merge(baseConfig, devConfig);
  }
}
