
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