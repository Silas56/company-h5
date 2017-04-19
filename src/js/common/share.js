/*分享到第三方平台*/
var GlobalKuNiao = require('../common/global.js');

var KN_Share = function() {};

//初始化微信js-sdk
KN_Share.prototype.initWeixin = function(url) {
    $.ajax({
        url: GlobalKuNiao.config.serverBase + 'jsApi/ticket',
        type: 'GET',
        data: {
            url: url
        },
        success: function(data) {
            if (data && data.code === '100') {
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: data.jsApiTicketBean.appId, // 必填，公众号的唯一标识
                    timestamp: data.jsApiTicketBean.timestamp, // 必填，生成签名的时间戳
                    nonceStr: data.jsApiTicketBean.nonceStr, // 必填，生成签名的随机串
                    signature: data.jsApiTicketBean.signature, // 必填，签名，见附录1
                    jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage"]
                        // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
              
            } else {

            }
        }
    });
};

//分享给微信好友
KN_Share.prototype.onMenuShareAppMessage = function(title, link, imgUrl, desc) {
    wx.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function() {
            // 用户确认分享后执行的回调函数
        },
        cancel: function() {
            // 用户取消分享后执行的回调函数
        }
    });
};

//分享给朋友圈
KN_Share.prototype.onMenuShareTimeline = function(title, link, imgUrl) {
    wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: function() {
            // 用户确认分享后执行的回调函数
        },
        cancel: function() {
            // 用户取消分享后执行的回调函数
        }
    });
};

//分享给微信好友（旧）
KN_Share.prototype.wechat_sendAppMsg = function(imgUrl, link, desc, title) {
    WeixinJSBridge.invoke('sendAppMessage', {
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": encodeURIComponent(link),
        "desc": encodeURIComponent(desc),
        "title": encodeURIComponent(title)
    }, function(res) {
        if (res.err_msg == "send_app_msg:confirm") {
            $.toast("分享成功");
        } else {
            $.toast("分享失败");
        }
    });
};

//分享到朋友圈（旧）
KN_Share.prototype.wechat_timeLine = function(imgUrl, link, desc, title) {
    WeixinJSBridge.invoke('shareTimeline', {
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": encodeURIComponent(link),
        "desc": encodeURIComponent(desc),
        "title": encodeURIComponent(title)
    }, function(res) {
        if (res.err_msg == "share_timeline:ok") {
            $.toast("分享成功");
        } else {
            $.toast("分享失败");
        }
    });
};

//分享给QQ好友
KN_Share.prototype.qq_friends = function(site, title, imageUrl, appid, targetUrl, pageUrl) {
    if (typeof appid !== 'undefind' || appid === '') {
        appid = '1105220679';
    }
    var qqUrl = "http://openmobile.qq.com/api/check?page=shareindex.html&style=9&status_os=0&sdkp=0&action=shareToQQ";
    qqUrl += "&site=" + encodeURIComponent(site);
    qqUrl += "&title=" + encodeURIComponent(title);
    qqUrl += "&imageUrl=" + imageUrl;
    qqUrl += "&appid=" + appid;
    qqUrl += "&targetUrl=" + encodeURIComponent(targetUrl);
    qqUrl += "&page_url=" + encodeURIComponent(pageUrl);

    return qqUrl;
};

//分享到QQ空间
KN_Share.prototype.qzone = function(url, title, desc, summary, site, pics) {
    var zoneUrl = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(url);
    zoneUrl += "&title=" + title;
    zoneUrl += "&desc=" + desc;
    zoneUrl += "&summary=" + summary;
    zoneUrl += "&site=" + site;
    zoneUrl += "&pics=" + encodeURIComponent(pics);

    return zoneUrl;
};

//分享到新浪微博
KN_Share.prototype.weibo = function(appkey, ralateUid, title, url, pic) {
    var weiboUrl = "http://v.t.sina.com.cn/share/share.php?";
    weiboUrl += "appkey=" + appkey;
    weiboUrl += "&ralateUid=" + ralateUid;
    weiboUrl += "&title=" + encodeURIComponent(title);
    weiboUrl += "&url=" + encodeURIComponent(url);
    weiboUrl += "&pic=" + pic;

    return weiboUrl;
}

if (typeof module === "object" && typeof module.exports === "object") {

    module.exports = new KN_Share();
} else {
    window.KN_Share = KN_Share;
}
