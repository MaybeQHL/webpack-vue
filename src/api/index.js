/**
  * api接口的统一出口
  */
// 文章模块接口
import article from '@/api/list/article';
// 其他模块的接口……
import wxApi from '@/api/wx-sdk';

// 导出接口
export default {
  article,
  wxApi
  // ……
}