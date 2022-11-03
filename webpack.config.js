
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: 'development',//production
  entry: './src/index.js', // 项目的入口文件，路径相对于项目的根路径
  // 配置输出信息
  output: {
    path: path.join(__dirname, './build'), // 输出的路径，路径是当前目录
    filename: 'bundle.js', // 打包输出文件名，后期可改成按规则动态生成
    // libraryTarget: 'umd', // 重要！
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
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
    new CleanWebpackPlugin({
      path: path.join(__dirname, 'build'), // 输出的路径，路径是当前目录
    })
  ],
  resolve: {// 扩展名
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3001
  }
}
