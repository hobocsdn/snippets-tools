### 开发命令行工具ts
- 依赖commander
- 必须在`ts.js` 上指定运行环境 `#!/usr/bin/env node`
- npm link

### npm run scripts
- 常见错误
```
scripts:{
    "watch": "./scripts/watch.js --watch",
}
```
`'.' is not recognized as an internal or external command`

window 环境下必须为脚本指定执行环境如,
```
scripts:{
    "watch": "node ./scripts/watch.js --watch",
}
```


### 使用es6


### 单元测试
karma+jasmine
```
karma init // 直接创建基础的配置文件
karma run
karma start
```


### 常用开发模块

- gulp
- browser-sync
- body-parser
- webpack

// 处理ES6模块的导出
- babel-core 
- babel-loader
- babel-preset-es2015

// 单元测试
- karma
  - karma-webpack  // 插件
  - karma-sourcemap-loader
  - karma-jasmine
  - karma-chrome-launcher
- jasmine-core

// 打包

webpack
