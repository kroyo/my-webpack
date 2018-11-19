const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  target: 'web',
  entry: path.join(__dirname,'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-aaa.[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

if(isDev) {
  config.devSever = {
    port: 8080,
    host: '0.0.0.0',
    overlay: {
      errors: true,
    }
  }
}

module.exports = config