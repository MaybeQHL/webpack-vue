// const path = require('path'); // node.js 中的基本包，用于处理路径
// const HTMLWebpackPlugin = require('html-webpack-plugin'); // 在webpack.config.js下引入html-webpack-plugin
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const utils = require('./utils')

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  // entry: utils.join('../src/main.js'), // path.jion()将两个参数代表的路径相加组合起来，__dirname代表当前文件所在目录
  // output: {
  //   filename: 'js/[name].[hash].js', //输出文件的文件名
  //   chunkFilename: 'js/[name].[hash].chunk.js',
  //   path: utils.join('../dist'), // 输出文件所在目录
  //   publicPath: '/'
  // },
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    port: 58773,   // 58773   微信公众号 8000
    // host: '0.0.0.0', // 0.0.0.0 可以让外网进行访问 默认localhost 
    // disableHostCheck: true,
    proxy: {
      '/test/*': {
        target: 'https://xxx.com',
        changeOrigin: true, // 开启跨域
        secure: false, // HTTPS上运行的具有无效证书
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  devtool: 'cheap-module-eval-source-map', // devtool由webpack直接提高，将打包后的文件中的错误映射到最初对应的文件中，便于调试
  plugins: [
  ]
})