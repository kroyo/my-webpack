
## CommonJS
采用 CommonJS 导入及导出时的代码如下：
```javascript
// 导入
const moduleA = require('./moduleA');

// 导出
module.exports = moduleA.someFunc;
```

## AMD
采用 AMD 导入及导出时的代码如下：
```bash
// 定义一个模块
define('module', ['dep'], function(dep) {
  return exports;
});

// 导入和使用
require(['module'], function(module) {
});
```


## 安装 Webpack 到本项目
```bash
# npm i -D 是 npm install --save-dev 的简写，是指安装模块并保存到 package.json 的 devDependencies
# 安装最新稳定版
npm i -D webpack

# 安装指定版本
npm i -D webpack@<version>

# 安装最新体验版本
npm i -D webpack@beta
```

## Loader
```javascript
module: {
  rules: [
    {
      // 用正则去匹配要用该 loader 转换的 CSS 文件
      test: /\.css$/,
      use: ['style-loader', 'css-loader?minimize'],
    }
  ]
}
```
 如上配置告诉 Webpack 在遇到以 .css 结尾的文件时先使用 css-loader 读取 CSS 文件，再交给 style-loader 把 CSS 内容注入到 JavaScript 里。
在配置 Loader 时需要*注意*的是：
- use 属性的值需要是一个由 Loader 名称组成的数组，Loader 的执行顺序是由后到前的；
- 每一个 Loader 都可以通过 URL querystring 的方式传入参数，例如 css-loader?minimize 中的 minimize 告诉 css-loader 要开启 CSS 压缩。