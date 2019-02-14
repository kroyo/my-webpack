const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    // app: './src/index.js',
    // print: './src/print.js'
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        // css样式
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        // 图片
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        // 字体
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        // 导入csv
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        // 导入xml
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  plugins: [
    // 自动清理文件
    new CleanWebpackPlugin(['dist']),
    // HtmlWebpackPlugin 默认生成 index.html 文件
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}