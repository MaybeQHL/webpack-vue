const path = require('path'); // node.js 中的基本包，用于处理路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin'); // 在webpack.config.js下引入html-webpack-plugin
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const cleanWebpackPlugin = require('clean-webpack-plugin'); // 用于清除目录内容
var CompressionPlugin = require("compression-webpack-plugin"); // gzip压缩
module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'production',
  entry: path.join(__dirname, '../src/main.js'), // path.jion()将两个参数代表的路径相加组合起来，__dirname代表当前文件所在目录
  output: {
    filename: 'js/[name].[hash].js', //输出文件的文件名
    chunkFilename: 'js/[name].[hash].chunk.js',
    path: path.join(__dirname, '../dist'), // 输出文件所在目录
    publicPath: '/webpack/'
  },
  plugins: [
    // 打包之前使用这个插件尝试清除dist目录下的文件
    new cleanWebpackPlugin(),
    // 在webpack.config.js下引入html-webpack-plugin
    // new HTMLWebpackPlugin({ // 创建 .html 并自动引入打包后的文件
    //   template: './public/index.html', // 参照最初创建的 .html 来生成 .html
    //   inject: true,
    //   favicon: path.resolve(__dirname, '../public/favicon.ico'),
    //   title: 'webpack-vue'
    // })
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
  })
  ]
})