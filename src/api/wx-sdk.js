import axios from '@/libs/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
import wx from 'weixin-js-sdk';


const result = {
  getConfig () {
    // let url = location.href.split('#')[0] //获取锚点之前的链接
    // axios.get('/index.php', {
    //   params: {
    //     url: url
    //   }
    // }).then(response => {
    //   let res = response.data;
    //   this.wxInit(res);
    // })
    let res = {
      appId: 'wxf8b4f85f3a794e77',
      timestamp: 1553057526,
      nonceStr: '7m4XH5ijxnzob9gq',
      signature: '008df3029ba9fdbc88928bb325a2398078e89769',
    };
    this.wxInit(res);
  },
  wxInit (res) {
    wx.config({
      debug: false,
      appId: res.appId,
      timestamp: res.timestamp,
      nonceStr: res.nonceStr,
      signature: res.signature,
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
    });
  }
}
export default result;