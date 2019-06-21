import { setTimeout } from 'core-js';

/**
 * 常用工具
 * @author maybe
 */

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};
/**
 * 获取localStorage
 */
export const getStore = (name) => {
  if (!name) return;
  return window.localStorage.getItem(name);
};
/**
 * 删除localStorage
 */
export const removeStore = (name) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};
/**
 * 延迟加载方法
 * @param {*} fn
 * @param {*} time
 */
export const submitTimeOut = (fn, time = 1000) => {
  setTimeout(function () {
    fn();
  }, time);
};
/**
   * 创建script
   * @param url
   * @returns {Promise}
   */
export const createScript = (url, hasCallback) => {
  let scriptElement = document.createElement('script')
  document.body.appendChild(scriptElement)
  let promise = new Promise((resolve, reject) => {
    scriptElement.addEventListener('load', e => {
      removeScript(scriptElement)
      if (!hasCallback) {
        resolve(e)
      }
    }, false)

    scriptElement.addEventListener('error', e => {
      removeScript(scriptElement)
      reject(e)
    }, false)

    if (hasCallback) {
      window.____callback____ = function () {
        resolve()
        window.____callback____ = null
      }
    }
  })

  if (hasCallback) {
    url += '&callback=____callback____'
  }
  console.log(url)
  scriptElement.src = url

  return promise
}

/**
 * 移除script标签
 * @param scriptElement script dom
 */
export const removeScript = (scriptElement) => {
  document.body.removeChild(scriptElement)
}

/**
 * 深拷贝
 * @param {*} obj 
 */
export const deepClone = (obj) => {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        result[key] = deepClone(obj[key]);   //递归复制
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}