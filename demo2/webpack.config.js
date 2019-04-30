const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 删除之前webpack打包后的dist目录

module.exports = {
  mode: 'development',
  // development devtool: 使用cheap-module-eval-source-map
  // production devtool: 使用cheap-module-source-map
  devtool: 'cheap-module-eval-source-map',
  entry: { // 配置多个入口文件
    pagea: './src/index.js',
    pageb: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    // publicPath: 'http://cdn.com', // 配置cdn
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: '/node_modules',
        use: ['babel-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'font' // 文件输出目录
          }
        }
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]', // 文件名称
            outputPath: 'images',
            limit: '10240'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // 如果需要配置多个入口文件，就需要生成对应数量的html文件
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
};
