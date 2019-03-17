const path = require('path'); // node.js 中的基本包，用于处理路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin'); // 在webpack.config.js下引入html-webpack-plugin

module.exports = {
  entry: path.join(__dirname, '../src/main.js'), // path.jion()将两个参数代表的路径相加组合起来，__dirname代表当前文件所在目录
  output: {
    filename: 'js/bundle.js', //输出文件的文件名
    path: path.join(__dirname, '../dist') // 输出文件所在目录
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /.css$/,
        use: [
          'style-loader', // 为 css 创建 style 标签并置入其中插入页面
          'css-loader', // 处理 css
          'postcss-loader', // 浏览器兼容问题
        ]
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader' // loader 由下往上依次开始处理
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|jpeg|woff|svg|eot|ttf)$/,  // 各种字体、图片格式
        use: [
          {
            loader: 'url-loader',
            options: { // 配置参数
              limit: 50000, // 比较标准，小于标准的图片转换为 base64 代码, 1000=1kb
              outputPath: 'images'

            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: __dirname + 'src',
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   presets: ['env'],
            //   plugins: ["@babel/plugin-syntax-dynamic-import"]
            // }
          }
        ]
      }
    ]
  },
  plugins: [
    // Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的
    new VueLoaderPlugin(),
    // 在webpack.config.js下引入html-webpack-plugin
    new HTMLWebpackPlugin({ // 创建 .html 并自动引入打包后的文件
      template: './public/index.html', // 参照最初创建的 .html 来生成 .html
      inject: true,
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
      title: 'webpack-vue'
    })
  ]
}