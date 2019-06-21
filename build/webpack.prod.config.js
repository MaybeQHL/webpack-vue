/**
 * webpack config prod
 */

// const path = require('path'); // node.js 中的基本包，用于处理路径
// const HTMLWebpackPlugin = require('html-webpack-plugin'); // 在webpack.config.js下引入html-webpack-plugin
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const cleanWebpackPlugin = require('clean-webpack-plugin'); // 用于清除目录内容
var CompressionPlugin = require("compression-webpack-plugin"); // gzip压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const utils = require('./utils')

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'production', // 设置成发布模式
  // entry: utils.join('../src/main.js'), // path.jion()将两个参数代表的路径相加组合起来，__dirname代表当前文件所在目录
  // output: {
  //   filename: 'js/[name].[hash].js', //输出文件的文件名
  //   chunkFilename: 'js/[name].[hash].chunk.js',
  //   path: utils.join('../dist'), // 输出文件所在目录
  //   publicPath: '/webpack/' // 服务器静态资源目录
  // },
  plugins: [
    // 打包之前使用这个插件尝试清除dist目录下的文件
    new cleanWebpackPlugin(),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
})