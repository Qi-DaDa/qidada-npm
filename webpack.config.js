
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: 'development',//production
  entry: './src/index.js', // 项目的入口文件，路径相对于项目的根路径
  // 配置输出信息
  output: {
    //编译后的入口文件(别人用你的包的时候,引用的文件的名字,一般都是index.js
    filename: 'index.js',
    //编译后的文件将被输出到哪个文件夹下 这里是当前项目目录下的build里面
    path: path.join(__dirname, 'build'),
    //意思是把我们的输出作为react组件
    // libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|build)/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
      filename: "./index.html"
    }),
    // new CleanWebpackPlugin({
    //   path: path.join(__dirname, 'build'), // 输出的路径，路径是当前目录
    // })
  ],
  resolve: {// 扩展名
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3001,
    open: true,
    hot: true
  }
}
