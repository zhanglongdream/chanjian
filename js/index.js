$.ajax({
  url:
    "http://magictower.ly724300.com/api.php?ctl=share&act=getSignPackage&url=" +
    encodeURIComponent(window.location.href),
  type: "GET",
  success: function(data, textStatus, jqXHR) {
    share(data.data.data);
  }
});

function share(params) {
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: params.appId, // 必填，公众号的唯一标识
    timestamp: params.timestamp, // 必填，生成签名的时间戳
    nonceStr: params.nonceStr, // 必填，生成签名的随机串
    signature: params.signature, // 必填，签名，见附录1
    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  });
  wx.ready(function() {
    wx.onMenuShareTimeline({
      desc: "我正在参加儿童设计比赛请投我一票", // 分享描述
      title: "儿童设计比赛", // 分享标题
      link: params.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: "http://magictower.ly724300.com/artCompetition/img/logo.png", // 分享图标
      success: function() {
        // 用户确认分享后执行的回调函数
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    });
    wx.onMenuShareAppMessage({
      title: "儿童设计比赛", // 分享标题
      desc: "我正在参加儿童设计比赛请投我一票", // 分享描述
      link: params.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: "http://magictower.ly724300.com/artCompetition/img/logo.png", // 分享图标
      type: "", // 分享类型,music、video或link，不填默认为link
      dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
      success: function() {
        // 用户确认分享后执行的回调函数
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    });
  });
}
