(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(t){function e(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function n(){this.raw=[],this.length=0}function r(){return"___"+C++}function i(t,e){var n=new Function;n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}function o(t){return O[t]}function s(t){return'"'+t.replace(/\x5C/g,"\\\\").replace(/"/g,'\\"').replace(/\x0A/g,"\\n").replace(/\x09/g,"\\t").replace(/\x0D/g,"\\r")+'"'}function a(t){return t.replace(/[\^\[\]\$\(\)\{\}\?\*\.\+]/g,function(t){return"\\"+t})}function p(t){var e=arguments;return t.replace(/\{([0-9]+)\}/g,function(t,n){return e[n-0+1]})}function h(t){return t=t.replace(/^\s*\*/,""),p('gv({0},["{1}"])',s(t),t.replace(/\[['"]?([^'"]+)['"]?\]/g,function(t,e){return"."+e}).split(".").join('","'))}function c(t,e,n,r,i,o){for(var s=n.length,a=t.split(e),p=0,h=[],c=0,l=a.length;l>c;c++){var f=a[c];if(c){var u=1;for(p++;;){var d=f.indexOf(n);if(0>d){h.push(p>1&&u?e:"",f);break}if(p=r?p-1:0,h.push(p>0&&u?e:"",f.slice(0,d),p>0?n:""),f=f.slice(d+s),u=0,0===p)break}0===p&&(i(h.join("")),o(f),h=[])}else f&&o(f)}p>0&&h.length>0&&(o(e),o(h.join("")))}function l(t,e,n){var r,i=[],o=e.options,a="",p="",f="",u="";return n&&(a="ts(",p=")",f=B,u=S,r=o.defaultFilter),c(t,o.variableOpen,o.variableClose,1,function(t){n&&t.indexOf("|")<0&&r&&(t+="|"+r);var o=t.indexOf("|"),s=(o>0?t.slice(0,o):t).replace(/^\s+/,"").replace(/\s+$/,""),c=o>0?t.slice(o+1):"",d=0===s.indexOf("*"),g=[d?"":a,h(s),d?"":p];if(c){c=l(c,e);for(var y=c.split("|"),v=0,m=y.length;m>v;v++){var R=y[v];/^\s*([a-z0-9_-]+)(\((.*)\))?\s*$/i.test(R)&&(g.unshift('fs["'+RegExp.$1+'"]('),RegExp.$3&&g.push(",",RegExp.$3),g.push(")"))}}i.push(f,g.join(""),u)},function(t){i.push(f,n?s(t):t,u)}),i.join("")}function f(t,e){this.value=t,this.engine=e}function u(t,e){this.value=t,this.engine=e,this.children=[],this.cloneProps=[]}function d(t,e){var n=t.stack,r=e?n.find(function(t){return t instanceof e}):n.bottom();if(r){for(var i;(i=n.top())!==r;){if(!i.autoClose)throw new Error(i.type+" must be closed manually: "+i.value);i.autoClose(t)}r.close(t)}return r}function g(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*(\(\s*master\s*=\s*([a-z0-9\/_-]+)\s*\))?\s*/i.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.master=RegExp.$3,this.name=RegExp.$1,u.call(this,t,e),this.blocks={}}function y(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.name=RegExp.$1,u.call(this,t,e),this.cloneProps=["name"]}function v(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.name=RegExp.$1,u.call(this,t,e),this.cloneProps=["name","state","blocks","target"],this.blocks={}}function m(t,e){if(!/^\s*([a-z0-9_]+)\s*=([\s\S]*)$/i.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.name=RegExp.$1,this.expr=RegExp.$2,u.call(this,t,e),this.cloneProps=["name","expr"]}function R(t,e){if(!/^\s*([a-z0-9_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.name=RegExp.$1,this.args=RegExp.$3,u.call(this,t,e),this.cloneProps=["name","args"]}function E(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.name=RegExp.$1,this.args=RegExp.$3,u.call(this,t,e),this.cloneProps=["name","args"]}function x(t,e){var n=new RegExp(p("^\\s*({0}[\\s\\S]+{1})\\s+as\\s+{0}([0-9a-z_]+){1}\\s*(,\\s*{0}([0-9a-z_]+){1})?\\s*$",a(e.options.variableOpen),a(e.options.variableClose)),"i");if(!n.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.list=RegExp.$1,this.item=RegExp.$2,this.index=RegExp.$4,u.call(this,t,e),this.cloneProps=["list","item","index"]}function w(t,e){u.call(this,t,e)}function b(t,e){w.call(this,t,e)}function $(t,e){u.call(this,t,e)}function k(t,e){e.target=t;var n=e.engine,r=t.name;if(n.targets[r])switch(n.options.namingConflict){case"override":n.targets[r]=t,e.targets.push(r);case"ignore":break;default:throw new Error("[ETPL_TARGET_EXISTS]"+r)}else n.targets[r]=t,e.targets.push(r)}function A(t,e){L[t]=e,e.prototype.type=t}function P(t){this.options={commandOpen:"<!--",commandClose:"-->",commandSyntax:/^\s*(\/)?([a-z]*)\s*(?::([\s\S]*))?$/,variableOpen:"${",variableClose:"}",defaultFilter:"html"},this.config(t),this.targets={},this.filters=e({},I)}function _(t,e){function r(){var t;if(l.length>0&&(t=l.join(""))){var n=new f(t,e);n.beforeAdd(h),p.top().addChild(n),l=[],e.options.strip&&h.current instanceof u&&(n.value=t.replace(/^[\x20\t\r]*\n/,"")),h.current=n}}var i,o=e.options.commandOpen,s=e.options.commandClose,a=e.options.commandSyntax,p=new n,h={engine:e,targets:[],stack:p,target:null},l=[];return c(t,o,s,0,function(t){var n,p=a.exec(t);if(p&&(n=p[2]||"target")&&(i=L[n.toLowerCase()])&&"function"==typeof i){r();var c=h.current;e.options.strip&&c instanceof f&&(c.value=c.value.replace(/\r?\n[\x20\t]*$/,"\n")),p[1]?c=d(h,i):(c=new i(p[3],e),"function"==typeof c.beforeOpen&&c.beforeOpen(h),c.open(h)),h.current=c}else/^\s*\/\//.test(t)||l.push(o,t,s);i=null},function(t){l.push(t)}),r(),d(h),h.targets}n.prototype={push:function(t){this.raw[this.length++]=t},pop:function(){if(this.length>0){var t=this.raw[--this.length];return this.raw.length=this.length,t}},top:function(){return this.raw[this.length-1]},bottom:function(){return this.raw[0]},find:function(t){for(var e=this.length;e--;){var n=this.raw[e];if(t(n))return n}}};var C=178245,O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},I={html:function(t){return t.replace(/[&<>"']/g,o)},url:encodeURIComponent,raw:function(t){return t}},D='var r="";',B="r+=",S=";",j="return r;";"undefined"!=typeof navigator&&/msie\s*([0-9]+)/i.test(navigator.userAgent)&&RegExp.$1-0<8&&(D="var r=[],ri=0;",B="r[ri++]=",j='return r.join("");'),f.prototype={getRendererBody:function(){var t=this.value,e=this.engine.options;return!t||e.strip&&/^\s*$/.test(t)?"":l(t,this.engine,1)},clone:function(){return this}},u.prototype={addChild:function(t){this.children.push(t)},open:function(t){var e=t.stack.top();e&&e.addChild(this),t.stack.push(this)},close:function(t){t.stack.top()===this&&t.stack.pop()},getRendererBody:function(){for(var t=[],e=this.children,n=0;n<e.length;n++)t.push(e[n].getRendererBody());return t.join("")},clone:function(){for(var t=this.constructor,e=new t(this.value,this.engine),n=0,r=this.children.length;r>n;n++)e.addChild(this.children[n].clone());for(var n=0,r=this.cloneProps.length;r>n;n++){var i=this.cloneProps[n];e[i]=this[i]}return e}};var z='data=data||{};var v={},fs=engine.filters,hg=typeof data.get=="function",gv=function(n,ps){var p=ps[0],d=v[p];if(d==null){if(hg){return data.get(n);}d=data[p];}for(var i=1,l=ps.length;i<l;i++)if(d!=null)d = d[ps[i]];return d;},ts=function(s){if(typeof s==="string"){return s;}if(s==null){s="";}return ""+s;};';i(g,u),i(y,u),i(v,u),i(m,u),i(R,u),i(E,u),i(x,u),i(w,u),i(b,w),i($,w);var T={READING:1,READED:2,APPLIED:3,READY:4};v.prototype.applyMaster=g.prototype.applyMaster=function(t){function e(t){var r=t.children;if(r instanceof Array)for(var i=0,o=r.length;o>i;i++){var s=r[i];s instanceof y&&n[s.name]&&(s=r[i]=n[s.name]),e(s)}}if(this.state>=T.APPLIED)return 1;var n=this.blocks,r=this.engine.targets[t];if(r){if(r.applyMaster(r.master))return this.children=r.clone().children,e(this),this.state=T.APPLIED,1}else if("error"===this.engine.options.missTarget)throw new Error("[ETPL_MISS_TARGET]"+t+", when extended by "+(this.target?this.target.name:this.name))},g.prototype.isReady=function(){function t(i){for(var o=0,s=i.children.length;s>o;o++){var a=i.children[o];if(a instanceof v){var p=e.targets[a.name];if(!p&&"error"===e.options.missTarget)throw new Error("[ETPL_MISS_TARGET]"+a.name+", when imported by "+n);r=r&&p&&p.isReady(e)}else a instanceof u&&t(a)}}if(this.state>=T.READY)return 1;var e=this.engine,n=this.name,r=1;return this.applyMaster(this.master)?(t(this),r&&(this.state=T.READY),r):void 0},g.prototype.getRenderer=function(){if(this.renderer)return this.renderer;if(this.isReady()){var t=new Function("data","engine",[z,D,this.getRendererBody(),j].join("\n")),e=this.engine;return this.renderer=function(n){return t(n,e)},this.renderer}return null},g.prototype.open=function(t){d(t),u.prototype.open.call(this,t),this.state=T.READING,k(this,t)},m.prototype.open=E.prototype.open=function(t){t.stack.top().addChild(this)},y.prototype.open=function(t){u.prototype.open.call(this,t),t.stack.find(function(t){return t.blocks}).blocks[this.name]=this},b.prototype.open=function(t){var e=new $;e.open(t);var n=d(t,w);n.addChild(this),t.stack.push(this)},$.prototype.open=function(t){var e=d(t,w);e.addChild(this),t.stack.push(this)},v.prototype.open=function(t){this.parent=t.stack.top(),this.target=t.target,u.prototype.open.call(this,t),this.state=T.READING},E.prototype.close=m.prototype.close=function(){},v.prototype.close=function(t){u.prototype.close.call(this,t),this.state=T.READED},g.prototype.close=function(t){u.prototype.close.call(this,t),this.state=this.master?T.READED:T.APPLIED,t.target=null},v.prototype.autoClose=function(t){var e=this.parent.children;e.push.apply(e,this.children),this.children.length=0;for(var n in this.blocks)this.target.blocks[n]=this.blocks[n];this.blocks={},this.close(t)},E.prototype.beforeOpen=v.prototype.beforeOpen=m.prototype.beforeOpen=x.prototype.beforeOpen=R.prototype.beforeOpen=y.prototype.beforeOpen=w.prototype.beforeOpen=f.prototype.beforeAdd=function(t){if(!t.stack.bottom()){var e=new g(r(),t.engine);e.open(t)}},v.prototype.getRendererBody=function(){return this.applyMaster(this.name),u.prototype.getRendererBody.call(this)},E.prototype.getRendererBody=function(){return p("{0}engine.render({2},{{3}}){1}",B,S,s(this.name),l(this.args,this.engine).replace(/(^|,)\s*([a-z0-9_]+)\s*=/gi,function(t,e,n){return(e||"")+s(n)+":"}))},m.prototype.getRendererBody=function(){return this.expr?p("v[{0}]={1};",s(this.name),l(this.expr,this.engine)):""},w.prototype.getRendererBody=function(){return p("if({0}){{1}}",l(this.value,this.engine),u.prototype.getRendererBody.call(this))},$.prototype.getRendererBody=function(){return p("}else{{0}",u.prototype.getRendererBody.call(this))},x.prototype.getRendererBody=function(){return p('var {0}={1};if({0} instanceof Array)for (var {4}=0,{5}={0}.length;{4}<{5};{4}++){v[{2}]={4};v[{3}]={0}[{4}];{6}}else if(typeof {0}==="object")for(var {4} in {0}){v[{2}]={4};v[{3}]={0}[{4}];{6}}',r(),l(this.list,this.engine),s(this.index||r()),s(this.item),r(),r(),u.prototype.getRendererBody.call(this))},R.prototype.getRendererBody=function(){var t=this.args;return p("{2}fs[{5}]((function(){{0}{4}{1}})(){6}){3}",D,j,B,S,u.prototype.getRendererBody.call(this),s(this.name),t?","+l(t,this.engine):"")};var L={};A("target",g),A("block",y),A("import",v),A("use",E),A("var",m),A("for",x),A("if",w),A("elif",b),A("else",$),A("filter",R),P.prototype.config=function(t){e(this.options,t)},P.prototype.compile=P.prototype.parse=function(t){if(t){var e=_(t,this);if(e.length)return this.targets[e[0]].getRenderer()}return new Function('return ""')},P.prototype.getRenderer=function(t){var e=this.targets[t];return e?e.getRenderer():void 0},P.prototype.render=function(t,e){var n=this.getRenderer(t);return n?n(e):""},P.prototype.addFilter=function(t,e){"function"==typeof e&&(this.filters[t]=e)};var M=new P;M.Engine=P,M.version="3.1.0","object"==typeof exports&&"object"==typeof module?exports=module.exports=M:"function"==typeof define&&define.amd?define(M):t.etpl=M}(this);
},{}],2:[function(require,module,exports){
var GlobalKuNiao = function(){

};
	
	// 获取url里面传过来的参数
	GlobalKuNiao.prototype.getUrlParam = function(){
		var paramString = location.search.slice(1);
		var param = {};

		var vars = paramString.split('&');

		for(var i = 0 ; i < vars.length; i++){
			var temp = vars[i].split('=');

				if( param[temp[0]]){
					continue;
				}

				param[temp[0]] = temp[1];
		}

		return param;
	};

	//操作localstorage
	GlobalKuNiao.prototype.localStorage = {
		get : function(item){
			var ls = '';
				if(typeof localStorage[item] !== 'undefined'){
					try{
						ls = JSON.parse(localStorage[item]);
						if(typeof ls.value !== 'undefined'){
							return ls.value;
						}else{
							return ls;
						}
					}catch(e){
						return localStorage[item];
					}
				}else{
					return false;
				}
		},
		//item 本地存储item，value 相对应item的值（只支持布尔值，number，字符串，json）
		set : function(item,value){
			var t = '',
				v = '';

				// 未定义、null、函数、数组的时候返回false
				if( typeof value === 'undefined'){
					return false;
				}

				localStorage[item] = JSON.stringify({
					// type : t,
					value : value
				});

				return true;
		},
		del : function(item){
			if(typeof localStorage[item] === 'undefined'){
				console.log('this item is not exit!');
			}else{
				delete localStorage[item];
			}
		}
	};
	//操作sessionstorage 主要用于会话期间保存信息
	GlobalKuNiao.prototype.sessionStorage = {
		get : function(item){
			var ls = '';
				if(typeof sessionStorage[item] !== 'undefined'){
					try{
						ls = JSON.parse(sessionStorage[item]);
						if(typeof ls.value !== 'undefined'){
							return ls.value;
						}else{
							return ls;
						}
					}catch(e){
						return sessionStorage[item];
					}
				}else{
					return 'undefined';
				}
		},
		//item 本地存储item，value 相对应item的值（只支持布尔值，number，字符串，json）
		set : function(item,value){
			var t = '',
				v = '';

				// 未定义、null、函数、数组的时候返回false
				if( typeof value === 'undefined'){
					return false;
				}

				sessionStorage[item] = JSON.stringify({
					// type : t,
					value : value
				});

				return true;
		},
		del : function(item){
			if(typeof sessionStorage[item] === 'undefined'){
				console.log('this item is not exit!');
			}else{
				delete sessionStorage[item];
			}
		}
	};

	GlobalKuNiao.prototype.config = {
		serverBase: '/m/',
		knIndex : '/m/nav/kn/index',
		// loginBase : 'http://14.215.56.46:81/',
		loginHref : '/m/nav/login',
		logoutHref: '/m/nav/logout'
	};

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		module.exports = new GlobalKuNiao();
	} else {
		window.GlobalKuNiao = GlobalKuNiao;
	}


},{}],3:[function(require,module,exports){
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

},{"../common/global.js":2}],4:[function(require,module,exports){
var global = require('../common/global.js');
var etpl = require('../common/etpl.js');
var tplShopIndex = require('./tpl/shopIndex.html');
var tplProductItem = require('./tpl/productItem.html');
var tplShopInfo = require('./tpl/contactMerchant.html');
var KNShare = require('../common/share.js');


function setSEO(title, keywords, description, isOg){
	if($.device.iphone){
		//动态为ios系统修改标题hack
		var body = document.getElementsByTagName('body')[0];
	    document.title = title;
	    var iframe = document.createElement("iframe");
	    iframe.style.display="none";
	    iframe.setAttribute("src", "http://named.cn/page/take/img/icon_phone.png");
	    var d = function() {
	      setTimeout(function() {
	        iframe.removeEventListener('load', d);
	        document.body.removeChild(iframe);
	      }, 0);
	    };
	    iframe.addEventListener('load', d);
	    document.body.appendChild(iframe);
	}else{
		document.title = title;
	}
	
	$('meta[name="Keywords"]').attr('content', keywords);
	$('meta[name="Description"]').attr('content', description);
	if(isOg){ //是否需要设置分享
		$('meta[name="ogTitle"]').attr('content', title);
		$('meta[name="ogDesc"]').attr('content', description);
		$('meta[name="ogFlag"]').attr('content', keywords);
	}
}

//商铺首页
var KN_Index = {
	config:{
		shopCode : '',
		apiBase : '',
		request : {
			shopInfo : false,
			advImg : false,
			recommendProduct : false,
			productList : false
		}, //数据请求状态 请求成功将设置为true
		data : {},
		isNeedFav	: 0
	},
	init:function(){
		var param = global.getUrlParam();

		this.config.isNeedFav = param.needFav;
		
			if(typeof param.shopCode === 'undefined'){
				$.alert('该店铺不存在',function(){
					location.href = global.config.knIndex;
				});
				return false;
			}else{
				this.config.shopCode = param.shopCode;
				this.config.apiBase  = global.config.serverBase;
			}

			// 初始化配置参数
			this.config.request = {
				shopInfo : false,
				advImg : false,
				recommendProduct : false,
				productList : false
			};

			this.tplFilter();
			this.getData();

			//设置联系商家链接
			$('.fixed-tab-shop').find('.merchant-link').attr('href','./contactMerchant.html?shopCode=' + param.shopCode);
			//产品目录
			this.proCategory();

			//在localstorage 设置最新访问的店铺名称
			global.localStorage.set('shopCode',param.shopCode);
	},
	getData : function(){
		//店铺基本信息
		var _ts  	= this,
			infoUrl = this.config.apiBase + 'api/shop/info.json',
			advUrl  = this.config.apiBase + 'api/shop/advImg.json',
			recUrl  = this.config.apiBase + 'api/shop/recommendProduct.json',
			latUrl  = this.config.apiBase + 'api/shop/productList.json',
			data 	= {};

			data = {
				shopCode : this.config.shopCode
			};

			this.sendRequest(infoUrl,data,'shopInfo','get');
			this.sendRequest(advUrl,data,'advImg','get');
			this.sendRequest(recUrl,data,'recommendProduct','get');
			this.sendRequest(latUrl,data,'productList','get');
		
	},
	sendRequest:function(url,data,type,rtype){
		var _ts = this;	
		if(rtype === 'post'){
			data = JSON.stringify(data);
		}
		$.ajax({
			url : url,
			type : rtype,
			data : data,
			dataType : 'json',
			contentType : 'application/json',
			success : function(rs){

				_ts.config.request[type] = true;
				if(rs.code === '100'){
					if(type === 'shopInfo'){
						console.log(rs);
						_ts.config.data[type] = rs.shopInfo;

						if(rs.shopInfo.shopStatus === 1){
							$('.fixed-tab-shop').show();
						}

						var title = rs.shopInfo.shopName;
						var keywords = rs.shopInfo.shopName+",特色旅游,高端旅游,主题旅游,旅游线路,酷鸟";
						var desc = "酷鸟旅游网，一个提供特色旅游(旅行)、高端旅游(旅行)、主题旅游(旅行)、旅游线路、旅行线路的旅游网站，特色旅游找酷鸟。酷鸟为"+rs.shopInfo.shopName+"的特色旅游项目提供专业权威的电商解决方案。";
						setSEO(title, keywords, desc, 1);

						var imageUrl = '';
						if(typeof rs.shopInfo.shopLogoImg !== 'undefined'){
							imageUrl = rs.shopInfo.shopLogoImg;
						}

						var shopIntroduction = ' ';
						if(typeof rs.shopInfo.shopIntroduction !== 'undefined'){
							shopIntroduction = rs.shopInfo.shopIntroduction;
						}

						var currentLocation = window.location.href;
						KNShare.initWeixin(currentLocation);

						wx.ready(function() {
				           //分享给朋友圈
							KNShare.onMenuShareTimeline(title,currentLocation,imageUrl);

							//分享给微信好友
							KNShare.onMenuShareAppMessage(title,currentLocation,imageUrl,shopIntroduction);  	 
				        });

					}else if(type === 'advImg'){
						_ts.config.data[type] = rs.list;
					}else if(type === 'recommendProduct'){
						if(rs.page.list.length > 0){
							_ts.config.data[type] = rs.page.list;
						}
					}else if(type === 'productList'){
						if(rs.page.list.length > 0){
							_ts.config.data[type] = rs.page.list;	
						}
					}
					
					_ts.render();
				}else if(rs.code === '300'){
					if(type === 'shopInfo'){
						$.alert(rs.msg,function(){
							location.href = global.config.knIndex;
						});
					}
				}
			},
			error : function(){
				_ts.config.request[type] = true;				
			}
		});
	},
	isCompleteRequest:function(){
		for(var s in this.config.request){
			if(this.config.request[s] === false){
				return false;
			}
		}
		return true;
	},
	render:function(){
		if(!this.isCompleteRequest()){
			return false;
		}

		var data = this.config.data;
		// 初始化模板
		var render = etpl.compile(tplShopIndex);
		//渲染数据
		var text   = render(data);

		// 把渲染好的模板加载到dom上面去
		$('#indexShop .content').html(text);

		this.pageInit();
		this.isShopCollect();

		$('.item').on('click',function(){
			var pcode = $(this).attr('data-pcode'),
				scode = $(this).attr('data-scode');

				$.router.load('../detail/detail.html?productCode='+pcode + '&shopCode=' + scode);
		});
	},
	proCategory:function(){
		var _ts  = this;
		var data = {
			shopCode : this.config.shopCode
		};
		$.ajax({
			url : this.config.apiBase + 'api/shop/productCate.json',
			type : 'get',
			data : data,
			contentType : 'application/json',
			dataType : 'json',
			success : function(rs){
				if(rs.code === '100'){

					if(!rs.hasOwnProperty('list')){
						return false;
					}

					if(rs.list.length === 0){
						return false;
					}

					var html = '';

					for(var i = 0 ;i < rs.list.length ; i++){
						html += '<a href="productCatalog.html?shopCode=';
						html += _ts.config.shopCode +'&catalogCode=' + rs.list[i].catalogCode;
						html += '&catalogName=' + rs.list[i].catalogName;
						html += '">'+rs.list[i].catalogName+'</a>';
					}

					//添加html
					$('.catogery-list').html(html);

					//点击事件
					$('.fixed-tab-shop').on('click','.category-btn',function(){
						if($(this).hasClass('catogery-list-active')){
							$(this).removeClass('catogery-list-active');
						}else{
							$(this).addClass('catogery-list-active');
						}
					});
					/*
					$('body').on('click',function(e){
						$('.category-btn').removeClass('catogery-list-active');
					});*/
				}
			}
		});
	},
	pageInit:function(){
		// 初始化轮播图
		$(".swiper-container").swiper({
			autoplay: 3000,
        	autoplayDisableOnInteraction: false,
			speed : 600
		});
		
		$(".user").click(function(){
			window.location.href = '../home/memberUser.html';
		});
		
		$(".knIndex").click(function(){
			window.location.href = global.config.knIndex;
		});
		
		$(".userCenter").click(function(){
			window.location.href = '../home/memberUser.html';
		});
	},
	isShopCollect : function(){
		var _ts      = this;
		var $collect = $('.collection');
		var url  	 = global.config.serverBase + 'api/user/shopIsFaved.json';
		var data 	 = {
			shopCode : this.config.shopCode
		};
		var cstatus = false;

		$.ajax({
			url : url,
			type : 'get',
			dataType : 'json',
			data : data,
			success : function(rs){
				if(rs.code==='101' && KN_Index.config.isNeedFav==="1"){//未登录点击收藏跳转到登录页面，登录成功后自动收藏
					KN_Index.updateFav(KN_Index.config.shopCode, 1);
				}
				if(rs.code === '100'){
					$collect.addClass('has-collection').html('已收藏');
				}
			}
		});

		$collect.off('click').on('click',function(){
			KN_Index.updateFav(KN_Index.config.shopCode, 1);
		});
	},
	updateFav	: function(shopCode, updateType){
		var $collect = $('.collection');
		var curl = global.config.serverBase + 'api/user/updateFav.json';
		var data = {
			shopCode : shopCode,
			favType : 2,
			updateType : updateType
		};

		var msg = '收藏成功';

		if($collect.hasClass('has-collection')){
			data.updateType = 2;
			msg = '取消收藏成功'; 
		}

		$.ajax({
			url : curl,
			type : 'post',
			dataType : 'json',
			data : JSON.stringify(data),
			contentType : 'application/json',
			success : function(rs){
				if(rs.code === '100'){
					$.toast(msg);
					
					if(data.updateType === 1){
						$collect.addClass('has-collection').html('已收藏');
					}else{
						$collect.removeClass('has-collection').html('收藏');
					}

				}else if(rs.code === '403'){
					var url = location.href + '&needFav=1';
					url = encodeURIComponent(url);
					$.ajax({
						url : '/m/api/global/visited.json?url='+url+'',
						type : 'get',
						dataType : 'json',
						success : function(){
							window.location.href = global.config.loginHref;
						}
					});
				}else{
					$.toast(rs.msg);
				}
			}
		});
	},
	tplFilter:function(){
		etpl.addFilter('scoreFormat',function(s){

				return s/5*100;
		});
	}
};

// 最新上架，推荐产品
var KN_Latest = {
	config:{
		shopCode : '',   //店铺编码
		apiBase : '',	//api基本目录
		param   : {},  //请求参数
		data 	: {}, //数据
		pageNum : {
			shopRecommend : 1,
			shopLatest : 1
		},    //分页页数
		loading : false, //加载状态
		firstLoad : true,
		sort : ''
	},
	init:function(type){
		var param = global.getUrlParam();

			if(typeof param.shopCode === 'undefined'){
				$.router.back();
				return false;
			}else{
				this.config.shopCode = param.shopCode;
				this.config.apiBase  = global.config.serverBase;
			}

			if(type === 'shopRecommend'){
				this.config.url = this.config.apiBase + '/api/shop/recommendProduct.json';
				this.config.param.shopCode = this.config.shopCode;
				this.config.param.pageSize = 10;
				this.config.param.pageNum  = this.config.pageNum.shopRecommend;
				
				this.config.sort = 'shopRecommend';

				this.getShopInfo(param.shopCode, '推荐产品'); //设置SEO






			}else if(type === 'shopLatest'){
				this.config.url = this.config.apiBase + '/api/shop/productList.json';

				this.config.param.shopCode = this.config.shopCode;
				this.config.param.pageSize = 10;
				this.config.param.orderField = 'last_updated_time';
				this.config.param.pageNum  = this.config.pageNum.shopLatest;

				this.config.sort = 'shopLatest';
				
				this.getShopInfo(param.shopCode, '最新上架'); //设置SEO






			}

			if($('#content').find('.item').size() === 0){
				this.getData();
			}else{
				this.scroll();
			}
	},
	getData : function(){
		//店铺基本信息
		var _ts  	= this,
			latUrl  = this.config.url,
			data 	= {};

			this.sendRequest(latUrl,this.config.param,'latest');	
	
	},
	sendRequest:function(url,data,type){
		var _ts = this;	
		$.ajax({
			url : url,
			type : 'get',
			data : data,
			contentType : 'application/json',
			dataType : 'json',
			success : function(rs){
				if(rs.code === '100'){
					_ts.config.total = rs.page.pageCount;
					_ts.config.data[type] = rs.page.list;
					_ts.render();
					_ts.config.loading = false;

					if(type==='latest'){ //最新上架，不需要下拉刷新
						//首次加载初始化无限滚动
						if(_ts.config.firstLoad){
							_ts.config.firstLoad = false;
							_ts.scroll();
						}

						// 返回的数据少于10条，说明已经加载完了
						if(rs.page.list.length < 10){
							// 加载完毕，则注销无限加载事件，以防不必要的加载
							$.detachInfiniteScroll($('.infinite-scroll'));
							// 删除加载提示符
							$('.infinite-scroll-preloader').remove();
						}
					}
				}
			},
			error : function(){
			}
		});
	},
	scroll:function(){

		  	var _ts = this;
		  	// $.attachInfiniteScroll($('.content'));
		    $('.content').on('infinite', function() {

		      // 如果正在加载，则退出
		      if (_ts.config.loading){
		      	return false;
		      }

		      // 设置flag
		      _ts.config.loading = true;
		      // 最多可加载的条目
		      var maxItems = _ts.config.total;

		      if ( _ts.config.param.pageNum > maxItems) {
                  // 加载完毕，则注销无限加载事件，以防不必要的加载
                  $.detachInfiniteScroll($('.infinite-scroll'));
                  // 删除加载提示符
                  $('.infinite-scroll-preloader').remove();
                  return false;
              }

              //发送请求
              _ts.config.pageNum[_ts.config.sort]++;
              _ts.config.param.pageNum = _ts.config.pageNum[_ts.config.sort];
              // console.log(_ts.config);
		      _ts.sendRequest(_ts.config.url,_ts.config.param,'latest');
		    });
	},	
	render:function(){		
		var data = this.config.data.latest;
		// 初始化模板
		var render = etpl.compile(tplProductItem);
		//渲染数据
		var text   = render({
			data : data
		});
		// 把渲染好的模板加载到dom上面去
		$('.content .con').append(text);
		$('.loading-spiner').hide();	

		// $.detachInfiniteScroll($('.infinite-scroll'));
     	 // 删除加载提示符
      	// $('.infinite-scroll-preloader').hide();

      	$('.item').on('click',function(){
			var pcode = $(this).attr('data-pcode'),
				scode = $(this).attr('data-scode');

				$.router.load('../detail/detail.html?productCode='+pcode + '&shopCode=' + scode);
		});

      	return;
	},
	getShopInfo	: function(shopCode, pageTitle){
		$.ajax({
			url	: global.config.serverBase + '/api/shop/info.json',
			type: 'GET',
			data	: {
				shopCode : shopCode
			},
			success: function(data){
				if(data && data.code==='100'){
					var title = pageTitle+"_"+data.shopInfo.shopName;
					var keywords = pageTitle+","+data.shopInfo.shopName+", 特色旅游,高端旅游,酷鸟。";
					var desc = pageTitle+"_"+data.shopInfo.shopName+"，酷鸟为"+data.shopInfo.shopName+"的特色旅游项目提供专业权威的电商解决方案。";
					if(pageTitle===''){    
					     title = data.shopInfo.shopName+"_酷鸟";
					     keywords = data.shopInfo.shopName+", 特色旅游,高端旅游,酷鸟。";
					     desc = data.shopInfo.shopName+"，酷鸟为"+data.shopInfo.shopName+"的特色旅游项目提供专业权威的电商解决方案。";
					}
					setSEO(title, keywords, desc);

					var imageUrl = '';
					if(typeof data.shopInfo.shopLogoImg !== 'undefined'){
						imageUrl = data.shopInfo.shopLogoImg;
					}

					title = data.shopInfo.shopName + "_" +pageTitle;

					var currentLocation = window.location.href;
					KNShare.initWeixin(currentLocation);

					wx.ready(function() {
			           //分享给朋友圈
						KNShare.onMenuShareTimeline(title,currentLocation,imageUrl);

						//分享给微信好友
						KNShare.onMenuShareAppMessage(title,currentLocation,imageUrl,' ');  	 
			        });
				}
			}
		});
	}
};

// 联系商家
var KN_ShopMerchant = {
	config:{
		shopCode : '',
		apiBase : '',
		data : {},
		isNeedFav	: 0
	},
	init:function(){
		var param = global.getUrlParam();
		this.config.isNeedFav = param.needFav;
			if(typeof param.shopCode === 'undefined'){
				$.router.back();
				return false;
			}else{
				this.config.shopCode = param.shopCode;
				this.config.apiBase  = global.config.serverBase;
			}
			this.getData();
			this.isCollected();
	},
	isCollected	: function(){
		var data = {
			shopCode	: KN_ShopMerchant.config.shopCode,
			favType		: 2, //收藏店铺
			updateType	: 1
		};
		$.ajax({
			url : KN_ShopMerchant.config.apiBase + '/api/user/shopIsFaved.json',
			type : 'GET',
			data : data,
			success : function(rs){

				if(rs.code==='101' && KN_ShopMerchant.config.isNeedFav==="1"){//未登录点击收藏跳转到登录页面，登录成功后自动收藏
					KN_ShopMerchant.updateFav(KN_ShopMerchant.config.shopCode, 1);
				}else if(rs.code==='101'){
					var btnCollected = $(".collected-bottom");
					btnCollected.text('收藏');
					btnCollected.removeClass("collected-bottom").addClass("collect-bottom");
					KN_ShopMerchant.initCollect();
				}else if(rs.code === '100'){
					var btn = $(".collect-bottom");
					btn.text('已收藏');
					btn.removeClass("collect-bottom").addClass("collected-bottom");
					KN_ShopMerchant.initCollected();
				}else if(rs.code==="205"){
				}else{
					if(rs.code==='403'){
						KN_ShopMerchant.initCollect();
					}else{
						$.toast('error:'+rs.msg);
					}
				}
			}
		});
		
	},
	updateFav	: function(shopCode, updateType){
		var data = {
			shopCode	: shopCode,
			updateType	: updateType,
			favType		: 2
		};
		$.ajax({
			url		: KN_ShopMerchant.config.apiBase+'api/user/updateFav.json',
			type	: 'POST',
			data	: JSON.stringify(data),
			contentType: "application/json",
			success	: function(data){
				if(data && data.code==='100'){
					if(updateType===1){
						var btn = $(".collect-bottom");
						btn.text('已收藏');
						btn.removeClass("collect-bottom").addClass("collected-bottom");
						KN_ShopMerchant.initCollected();
						$.toast("收藏成功");
					}else{
						$.toast('取消成功');
						var btnCollected = $(".collected-bottom");
						btnCollected.text('收藏');
						btnCollected.removeClass("collected-bottom").addClass("collect-bottom");
						KN_ShopMerchant.initCollect();
					}
				}else if(data.code==="205"){
				}else{
				
					if(data && data.code==='403'){
						var url = location.href + '&needFav=1';
						url = encodeURIComponent(url);
						$.ajax({
							url : '/m/api/global/visited.json?url='+url+'',
							type : 'get',
							dataType : 'json',
							success : function(){
								window.location.href = global.config.loginHref;
							}
						});
					}else{
						$.toast('error:'+data.msg);
					}
				}
			}
		});
	},
	initCollect	: function(){
		$(".collect-bottom").unbind('click').click(function(){
			KN_ShopMerchant.updateFav(KN_ShopMerchant.config.shopCode, 1);
		});
	},
	initCollected	: function(){
		$(".collected-bottom").unbind('click').click(function(){
			KN_ShopMerchant.updateFav(KN_ShopMerchant.config.shopCode, 2);
		});
	},
	getData : function(){
		//店铺基本信息
		var _ts  	= this,
			infoUrl  = this.config.apiBase + 'api/shop/info.json',
			data 	= {};

			data = {
				shopCode : this.config.shopCode
			};
			this.sendRequest(infoUrl,data,'shopInfo');		
	},
	sendRequest:function(url,data,type){
		var _ts = this;	
		$.ajax({
			url : url,
			type : 'get',
			data : data,
			dataType : 'json',
			contentType : 'application/json',
			success : function(rs){
				 console.log(rs);
				if(rs.code === '100'){
					_ts.config.data[type] = rs[type];
					_ts.render();

					var title = "联系商家_"+rs.shopInfo.shopName;
					var keywords = rs.shopInfo.shopName+", 特色旅游,高端旅游,酷鸟。";
					var desc = rs.shopInfo.shopName+"，酷鸟为"+rs.shopInfo.shopName+"的特色旅游项目提供专业权威的电商解决方案。";
					setSEO(title, keywords, desc);

					var imageUrl = '';
					if(typeof rs.shopInfo.shopLogoImg !== 'undefined'){
						imageUrl = rs.shopInfo.shopLogoImg;
					}

					title = rs.shopInfo.shopName + "_联系商家";

					var currentLocation = window.location.href;
					KNShare.initWeixin(currentLocation);

					wx.ready(function() {
			           //分享给朋友圈
						KNShare.onMenuShareTimeline(title,currentLocation,imageUrl);

						//分享给微信好友
						KNShare.onMenuShareAppMessage(title,currentLocation,imageUrl,' ');  	 
			        });
				}
			},
			error : function(){
			}
		});
	},
	render:function(){		
		var data = this.config.data.shopInfo;

		// etpl.addFilter('scoreFormat',function(s){
		// 	return s/5*100;
		// });
	
		var num1 = parseInt(data.shopScore);
		var num2 = data.shopScore*1-num1;
		var scoreList=[];
		for(var i=0;i<5;i++){
			if(i<num1){
				scoreList[i]="14px";
			}else if(i == num1){
				scoreList[i]=14*num2+"px";
			}else{
				scoreList[i]="0px";
			}
		}

		data.scoreList=scoreList;

		// 初始化模板
		var render = etpl.compile(tplShopInfo);


		//渲染数据
		var text   = render(data);

		// 把渲染好的模板加载到dom上面去
		$('.content').html(text);
		// var num1 = parseInt(data.shopScore);
		// var num2 = data.shopScore*1-num1;
		// $('.star li').each(function(index, el){
		// 	var $el = $(el);
		// 	var i = $el.attr('id').substr(4);
		// 	if(i < num1) {
		// 		$('#star'+i).find('span').css('width', '18px');
		// 		// $('#star'+i).css('background-position', '0 0');
		// 	}else if(i == num1) {
		// 		if(!!num2) {
		// 			// $('#star'+i).append('<span></span>');
		// 			$('#star'+i).find('span').css('width', $('.star li').width()*num2);
		// 		}
		// 	}
		// });
		
	}
};

// 产品目录,全部产品
var KN_proCategory = {
	config:{
		tabs : 0, //0，1，2
		cache : [], //将请求的数据缓存起来
		data 	: {}, //数据
		loading : false, //加载状态
		firstLoad : true,
		pageNum : {
			all : 1,
			sale : 1,
			price : 1
		},
		pageSize : { //已加载的数目
			all : 0,
			sale : 0,
			price : 0
		},
		total:{
			all : 0,
			sale : 0,
			price : 0
		},
		sort : 'all' //当前tab
	},
	init:function(type){
		var param = global.getUrlParam();

			if(typeof param.shopCode === 'undefined'){
				$.router.back();
				return false;
			}

			if(typeof param.catalogName !== 'undefined'){
				$('h1').html(decodeURI(param.catalogName));
			}

			this.config.url = global.config.serverBase + 'api/shop/productList.json';
			
			if(type === 'allProducts'){
				this.config.param = {
					pageNum : this.config.pageNum[this.config.sort],
					shopCode : param.shopCode,
					pageSize : 10,
					orderField :'volume',
					orderValue	: 'desc'
				};
				this.getShopInfo(param.shopCode, '全部产品'); //添加SEO
			}else{
				this.config.param = {
					pageNum : this.config.pageNum[this.config.sort],
					shopCode : param.shopCode,
					catalogCode : param.catalogCode,
					pageSize : 10,
					orderField :'last_updated_time',
					orderValue	: 'desc'
				};
				
				this.getShopInfo(param.shopCode, '产品目录'); //添加SEO
			}	


			var $tcon = $('.tabs').find('.con').eq(0);		
				
				if($tcon.find('.item').size() === 0){
					this.getData();
				}

			this.scroll();
			//tab事件
			var _ts = this;

			$('.buttons-tab').on('click','a',function(){
				var _index = parseInt($(this).data('sort'),10);
					
					var isPirceClick = false; //判断是否是价格升降序排序点击
					if(_ts.config.tabs === 2 && _index === 2){
						isPirceClick = true;
					}


					_ts.config.loading = true;
					_ts.config.tabs = _index;

					if(_index === 0){
						//_ts.config.param.orderField = 'last_updated_time';
						_ts.config.param.orderField = 'volume'; //tip:修改为按销量排序，见jira MICROSHOP-101
						_ts.config.sort = 'all';
						_ts.config.param.orderValue = 'desc';	
					}else if(_index === 1){
						_ts.config.param.orderField = 'volume';
						_ts.config.sort = 'sale';
						_ts.config.param.orderValue = 'desc';	
					}else if(_index === 2){
						_ts.config.param.orderField = 'price';
						_ts.config.sort = 'price';
						_ts.config.param.orderValue = 'asc';
						
					}
					//价格排序点击事件处理
					if(isPirceClick){
						_ts.config.pageSize.price  = 0;
						if(!$(this).hasClass('desc')){
							_ts.config.param.orderValue = 'desc';
							$(this).addClass('desc');
						}else{
							_ts.config.param.orderValue = 'asc';
							$(this).removeClass('desc');
						}

						
						$('.content .tab').eq(_index).find('.con').html('');
						$('.content .tab').eq(_index).find('.infinite-scroll-preloader').show();
						_ts.config.pageNum[_ts.config.sort] = 1;
					}

					_ts.config.param.pageNum = _ts.config.pageNum[_ts.config.sort];

					if($('.content .tab').eq(_index).find('.item').size() === 0){
						_ts.sendRequest(_ts.config.url,_ts.config.param,_ts.config.sort);
					}else{
						_ts.config.loading = false;
					}
			});
	},
	getData : function(){
		//店铺基本信息
		var _ts  	= this,
			latUrl  = this.config.url,
			data 	= {};

			this.sendRequest(latUrl,_ts.config.param,'all');	
	
	},
	sendRequest:function(url,data,type){
		var _ts = this;	
		$.ajax({
			url : url,
			type : 'get',
			data : data,
			contentType : 'application/json',
			dataType : 'json',
			success : function(rs){
				if(rs.code === '100'){
					_ts.config.total[_ts.config.sort] = rs.page.total;

					_ts.config.pageSize[_ts.config.sort] += rs.page.list.length;

					_ts.render(rs.page.list);
					_ts.config.loading = false;

					//首次加载初始化无限滚动
					// _ts.scroll();

					// 返回的数据少于10条，说明已经加载完了
					if(rs.page.list.length < 10){
						// $.detachInfiniteScroll($('.infinite-scroll').eq(_ts.config.tabs));
              			// 删除加载提示符
              			$('.infinite-scroll-preloader').eq(_ts.config.tabs).hide();
					}
				}
			},
			error : function(){
			}
		});
	},
	scroll:function(){

	  	var _ts = this;
	  	// $.attachInfiniteScroll($('.content'));
	    $('.content').on('infinite', function() {

	      // 如果正在加载，则退出
	      if (_ts.config.loading){
	      	return false;
	      }

	      // 设置flag
	      _ts.config.loading = true;
	      // 最多可加载的条目
	      var maxItems = _ts.config.total[_ts.config.sort];

	      if ( _ts.config.pageSize[_ts.config.sort] >= maxItems) {
              // 加载完毕，则注销无限加载事件，以防不必要的加载
              // $.detachInfiniteScroll($('.infinite-scroll').eq(_ts.config.tabs));
              // 删除加载提示符

              $('.infinite-scroll-preloader').eq(_ts.config.tabs).hide();
              return false;
          }

          //发送请求
          _ts.config.pageNum[_ts.config.sort] = ++_ts.config.param.pageNum;

	      _ts.sendRequest(_ts.config.url,_ts.config.param,'latest');
	    });
	},	
	render:function(data){		
		// 初始化模板
		var render = etpl.compile(tplProductItem);
		//渲染数据
		var text   = render({
			data : data
		});

		var index = this.config.tabs;
		// 把渲染好的模板加载到dom上面去
		$('.content .tab').eq(index).find('.con').append(text);

		// $.detachInfiniteScroll($('.infinite-scroll'));
     	 // 删除加载提示符
      	// $('.infinite-scroll-preloader').hide();

      	$('.item').on('click',function(){
			var pcode = $(this).attr('data-pcode'),
				scode = $(this).attr('data-scode');

				$.router.load('../detail/detail.html?productCode='+pcode + '&shopCode=' + scode);
		});
		
      	return;
	},
	getShopInfo	: function(shopCode, pageTitle){
		$.ajax({
			url	: global.config.serverBase + '/api/shop/info.json',
			type: 'GET',
			data	: {
				shopCode : shopCode
			},
			success: function(data){
				if(data && data.code==='100'){

					var title = pageTitle+"_"+data.shopInfo.shopName;
					var keywords = pageTitle+","+data.shopInfo.shopName+", 特色旅游,高端旅游,酷鸟。";
					var desc = pageTitle+"_"+data.shopInfo.shopName+"，酷鸟为"+data.shopInfo.shopName+"的特色旅游项目提供专业权威的电商解决方案。";
					//全部产品页面关键词
					if(pageTitle===''){    
					     title = data.shopInfo.shopName+"_酷鸟";
					     keywords = data.shopInfo.shopName+", 特色旅游,高端旅游,酷鸟。";
					     desc = data.shopInfo.shopName+"，酷鸟为"+data.shopInfo.shopName+"的特色旅游项目提供专业权威的电商解决方案。";
					}
					setSEO(title, keywords, desc);

					var imageUrl = '';
					if(typeof data.shopInfo.shopLogoImg !== 'undefined'){
						imageUrl = data.shopInfo.shopLogoImg;
					}

					title = data.shopInfo.shopName + "_" + pageTitle;

					var currentLocation = window.location.href;
					KNShare.initWeixin(currentLocation);

					wx.ready(function() {
			           //分享给朋友圈
						KNShare.onMenuShareTimeline(title,currentLocation,imageUrl);

						//分享给微信好友
						KNShare.onMenuShareAppMessage(title,currentLocation,imageUrl,' ');  	 
			        });
				}
			}
		});
	}
};


// 路由load
$(document).on("pageInit",'#indexShop' ,function(e, pageId, $page) {
	KN_Index.init();
 });
$(document).on("pageInit",'#indexShopLatest' ,function(e, pageId, $page) {
	KN_Latest.init('shopLatest');
 });
$(document).on("pageInit",'#indexProductRecommend', function(e, pageId, $page) {
	KN_Latest.init('shopRecommend');
 });
$(document).on("pageInit",'#indexShopMerchant', function(e, pageId, $page) {
	KN_ShopMerchant.init();
 });
$(document).on("pageInit",'#indexProductCatalog', function(e, pageId, $page) {
	KN_proCategory.init('productCatalog');
 });
$(document).on("pageInit",'#indexAllProducts', function(e, pageId, $page) {
	KN_proCategory.init('allProducts');
 });
},{"../common/etpl.js":1,"../common/global.js":2,"../common/share.js":3,"./tpl/contactMerchant.html":5,"./tpl/productItem.html":6,"./tpl/shopIndex.html":7}],5:[function(require,module,exports){
module.exports="<div class=\"shop-merchant\">    <div class=\"info\">        <div class=\"info-head clearfix\">            <div class=\"info-left\">                <!-- if: ${shopLogoImg} -->                <img src=\"${shopLogoImg}\" class=\"merchant-logo\" width=\"80\" />                <!-- else -->                <img src=\"../../images/home/kooniao.jpg\" class=\"merchant-logo\"  width=\"90\"/>                <!-- /if -->            </div>            <div class=\"info-right\">                <h1>${shopName}</h1>                <div class=\"star\">                    <!-- if: ${shopScore} > 0  -->                    <ul>                        <!-- for: ${scoreList} as ${scoreItem} -->                        <li><span style=\"width:${scoreItem};\"></span></li>                        <!-- /for -->                    </ul>                    <span class=\"score\">${shopScore}分</span>                    <!-- /if -->                </div>            </div>        </div>         <!-- if: ${mobiles[0]}  -->        <div class=\"phone\">            <div class=\"number\">联系电话（默认）：${mobiles[0]}</div>            <a class=\"call external\" href=\"tel:${mobiles[0]}\"></a>        </div>         <!-- /if -->           <!-- if: ${mobiles[1]}  -->        <div class=\"phone\">            <div class=\"number\">联系电话1：${mobiles[1]}</div>            <a class=\"call external\" href=\"tel:${mobiles[1]}\"></a>        </div>         <!-- /if -->           <!-- if: ${mobiles[2]}  -->        <div class=\"phone\">            <div class=\"number\">联系电话2：${mobiles[2]}</div>            <a class=\"call external\" href=\"tel:${mobiles[2]}\"></a>        </div>         <!-- /if -->        <!-- if: ${address} -->        <div class=\"address\">            <div class=\"dizhi\">实体店地址：${province}${city}${zone}${address}</div>        </div>        <!-- /if -->        <div class=\"introduce\">            ${shopIntroduction}        </div>    </div></div>"
},{}],6:[function(require,module,exports){
module.exports="<!-- for: ${data} as ${item},${index} --><div class=\"item\" data-pcode=\"${item.code}\" data-scode=\"${item.shopCode}\">	<a href=\"../detail/detail.html?productCode=${item.code}&shopCode=${item.shopCode}\" external>	  <img src=\"${item.cover}\" alt=\"${item.dataname}\" />	</a>	<h4><a href=\"../detail/detail.html?productCode=${item.code}&shopCode=${item.shopCode}\" external>${item.name}</a></h4>	<p><span>￥${item.minPrice}</span></p></div><!-- /for -->"
},{}],7:[function(require,module,exports){
module.exports="<!-- if: ${shopInfo.shopStatus} === 1 --><!-- if: ${shopInfo} --><div class=\"shop-header\">    <div class=\"con\">      <div class=\"user\">          <a href=\"#\"></a>      </div>      <div class=\"con-inner\">	  <!-- if: ${shopInfo.shopLogoImg} -->        <img src=\"${shopInfo.shopLogoImg}\"/>		<!-- else -->		<img src=\"../../images/home/shop_default.jpg\" />		<!-- /if -->        <div class=\"name\">${shopInfo.shopName}</div>        <!-- if: ${shopInfo.score} > 0 -->        <!-- <p>          <span class=\"score\">            <em style=\"width:${shopInfo.score|scoreFormat}%;\"></em>          </span>          <span>${shopInfo.score}</span>        </p> -->        <!-- /if -->        <div class=\"collection\">收藏</div>      </div>    </div></div><div class=\"buttons-tab\">      <a href=\"index.html?shopCode=${shopInfo.shopCode}\" class=\"button active\">店铺首页</a>      <a href=\"allProducts.html?shopCode=${shopInfo.shopCode}\" class=\"button\">全部产品</a>      <!-- if:${productList} -->      <a href=\"newRelease.html?shopCode=${shopInfo.shopCode}\" class=\"button\">最新上架</a>      <!-- /if -->      <!-- if:${recommendProduct} -->      <a href=\"recommended.html?shopCode=${shopInfo.shopCode}\" class=\"button\">推荐产品</a>      <!-- /if --> </div><!-- /if --><!-- if:${advImg} --><div class=\"dpbanner\" id=\"banner\">    <div class=\"swiper-container\" data-space-between=\'10\'>      <div class=\"swiper-wrapper\">        <!-- for: ${advImg} as ${item},${index} -->        <div class=\"swiper-slide\">          <!-- if:${item.productCode} !== \'\' -->          <a href=\"../detail/detail.html?productCode=${item.productCode}&shopCode=${item.shopCode}\"><img src=\"${item.imgSrc}\" alt=\"\"></a>          <!-- else -->          <a href=\"#\"><img src=\"${item.imgSrc}\" alt=\"\"></a>          <!-- /if -->        </div>        <!-- /for -->      </div>      <div class=\"swiper-pagination\"></div>    </div></div>    <!-- /if --><!-- if: ${recommendProduct}--><div class=\"recommend-pro\">  <h2>推荐产品</h2>  <!-- for: ${recommendProduct} as ${item}, ${index} -->  <div class=\"item\" data-pcode=\"${item.code}\" data-scode=\"${item.shopCode}\">    <a href=\"../detail/detail.html?productCode=${item.code}&shopCode=${item.shopCode}\" external>      <img src=\"${item.cover}\" alt=\"${item.name}\">    </a>    <h4><a href=\"../detail/detail.html?productCode=${item.code}&shopCode=${item.shopCode}\" external>${item.name}</a></h4>    <p><span>￥${item.minPrice}</span></p>  </div>  <!-- /for --></div><!-- /if --><!-- if: ${productList} --><div class=\"latest-pro\">  <h2>最新上架</h2>  <!-- for: ${productList} as ${item}, ${index} -->  <div class=\"item\" data-pcode=\"${item.code}\" data-scode=\"${item.shopCode}\">    <a href=\"../detail/detail.html?productCode=${item.code}&shopCode=${item.shopCode}\" external>      <img src=\"${item.cover}\" alt=\"${item.name}\">    </a>    <h4><a href=\"../detail/detail.html?productCode=${item.code}&shopCode=${item.shopCode}\" external>${item.name}</a></h4>    <p><span>￥${item.minPrice}</span></p>  </div>  <!-- /for --></div><!-- /if --><div class=\"all-shop-pro\">  <a href=\"allProducts.html?shopCode=${shopInfo.shopCode}\">查看全部产品</a></div><div class=\"dpfooter\">    <div class=\"foo\">        <p>          <span>酷鸟</span>          <span>kooniao.com</span>        </p>        <p>酷鸟提供技术支持</p>    </div></div>    <!-- else --><div class=\"shopIndex-pause-container\">  <div class=\"con\">    <div class=\"shop-icon\">    </div>    <h2>店铺暂停营业</h2>    <p>      <a href=\"#\" class=\"knIndex\">酷鸟首页</a>      <a href=\"#\" extral class=\"userCenter\">用户中心</a>    </p>  </div></div><!-- /if -->"
},{}]},{},[4]);
