// Production打包环境配置
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})] // css代码压缩
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[name].chunk.css'
    })
  ],
  output: {
    filename: 'js/[name].[contenthash].js', // 通过hash值缓存
    chunkFilename: 'js/[name].[contenthash].js'
  }
};

module.exports = prodConfig;
