// Development打包环境配置
const webpack = require('webpack');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: '/dist',
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 开启模块热替换
  ],
  output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	}
};

module.exports = devConfig;