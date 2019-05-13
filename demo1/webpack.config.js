const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 将css单独打包，而不是内嵌到 bundle.js里面

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    // 出口文件
    path: path.resolve(__dirname, 'dist'), // 生成路径
    filename: 'bundle.js' // 生成文件名称
  },
  module: { // 如何处理项目中的不同类型的模块。
    rules: [
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'src')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    // 代码模块路径解析的配置
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
    // 自动解析确定的扩展，例如 import index from './index',后缀可以省略
  },
  plugins: [
    // 插件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('index.css')
  ]
};
