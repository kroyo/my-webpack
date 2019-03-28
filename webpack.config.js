const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, 'app'),
  // JavaScript 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件   Chunk 的名称来区分输出的文件名 [name].js
    filename: '[name][hash:8].js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/, 
        // 1.Loader 的执行顺序是由后到前每一个  
        // 2.Loader 都可以通过 URL querystring 的方式传入参数   
        // minimize  css-loader 1.00 以上 已remove
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ], 
      }
    ]
  },
  // plugins 属性来配置需要使用的插件列表的。
  plugins: [
    new MiniCssExtractPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: `[name]_[contenthash:8].css`
    })
  ]
}