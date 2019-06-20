/**
 * webpack 自定义工具函数
 */
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
  },
  resolveResource (name) {
    return path.resolve(__dirname, '../src/assets/common/' + name);
  },
  /**
 * 获取局域网ip
 *  @returns String 当前局域网IP
 * */

  getLocalIP () {
    let os = require('os'),
      iptable = {},
      ifaces = os.networkInterfaces();
    for (let dev in ifaces) {
      ifaces[dev].forEach(function (details, alias) {
        if (details.family == 'IPv4') {
          iptable[dev + (alias ? ':' + alias : '')] = details.address;
        }
      });
    }
    return iptable[Object.keys(iptable)[0]];
  }
}