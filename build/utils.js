const path = require('path')

module.exports = {
  join (dir) {
    return path.join(__dirname, dir)
  },
  resolve (dir) {
    return path.resolve(dir)
  },
  assetsPath (_path) {
    const assetsSubDirectory = 'static'
    return path.posix.join(assetsSubDirectory, _path)
  }
}