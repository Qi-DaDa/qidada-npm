# npm学习笔记

### 第一步
* 去npm的官方网站注册账号[注册账号](https://www.npmjs.com)
### 第二步
* 创建一个新的文件夹；
* 使用`npm init`初始化一个package.json文件；

**注意事项**
1. name表示你这个包的名字只能小写；
### 第三步
* 本地连接npm `npm login 或 npm adduser`

**注意事项：**
1. 密码不显示
### 第四步
* 上传 `npm publish`

**注意事项：**
1. 使用`npm config get registry`检测下是否使用了淘宝镜像；
2. 在[npm官方网站](https://www.npmjs.com/)搜索检测你的name是否冲突;
3. 每次提交版本记得修改；
4. `package.json`中`private`为`true`无法使用`npm publish`
5. 详细文档请参考[官方文档](https://docs.npmjs.com/about-semantic-versioning)

# pakeage.json配置
``` json
{
  "name": "qidada-npm", // 重要! npm install <?> 包名，全局唯一
  "version": "1.0.0", // 版本号，每次发布累加一
  "description": "react-npm发包流程", // seo 三剑客
  "main": "./index.js",// 重要！import Demo from "qidada-npm" 就是引入main指定的文件～
  "keywords": [
    "npm发布",
    "react组件",
    "react component",
    "react-component",
    "npm publish",
    "qidada-npm",
    "npm-study"
  ],// seo 三剑客
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server",
    "build": "webpack"
  },
  "author": "qidada",
  "license": "ISC",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.11.1",

    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.2",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^4.0.0",
    "html-webpack-plugin": "^5.5.0",
    "css-loader": "^6.7.1",
    "style-loader": "^3.3.1"
  },
    "repository": {
    "type": "git",
    "url": "git+https://github.com/douyacun/npm-publish-react-component.git"
  },
  "bugs": {
    "url": "https://github.com/Qi-DaDa/qidada-npm/issues"
  },
    "homepage": "https://github.com/Qi-DaDa/qidada-npm#readme"
}
```
---


# 搭建react开发环境

### 安装 react和react-dom
`npm i react react-dom --save-dev`

### 安装 webpack webpack-cli

`npm i webpack webpack-cli -D`

### 启动服务
`npm i webpack-dev-server -D`

### 安装babel核心包
`npm i babel-cli babel-core babel-preset-env -D`

### 安装对react编译
`npm i babel-loader -D`

### babel嵌套在webpack中 
`npm i babel-preset-react -D`

### 配置实时打包 
` npm i html-webpack-plugin clean-webpack-plugin -D`

---

* 若`package.json`中的`main`引入的是未编译的`jsx`,需要在在`webpack.config.js`中`exclude: /node_modules/` 去除，否则引入的组件无法编译；
* 所以 `package.json`中的`main` 引入的是编译后的`js`文件，可以直接使用

--- 
注：通常我们比较少使用webpack打包npm，原因是webpack比较重，npm打包后的dist目录可能会包含webpack自身的处理逻辑，引起不必要的体积增大（但实际增大的也不会太多），轻巧的rollup等工具比较适合用来打包npm


