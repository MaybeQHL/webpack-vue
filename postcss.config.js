module.exports = {
  plugins: {
    'autoprefixer': { browsers: 'last 5 version' },
    'postcss-px-to-viewport': {
      unitToConvert: 'px',  // 需要转换的单位，默认为"px"
      viewportWidth: 320,   // 设计稿的视口宽度
      unitPrecision: 5,     // 单位转换后保留的精度
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568
    }
  }
}