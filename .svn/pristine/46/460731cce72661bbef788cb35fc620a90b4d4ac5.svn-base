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

var KN_Share = function(){};


//分享给微信好友
KN_Share.prototype.wechat_sendAppMsg = function(imgUrl, link, desc, title){
	WeixinJSBridge.invoke('sendAppMessage', {
		"img_url": imgUrl,
		 "img_width": "200",
		 "img_height": "200",
		"link": encodeURIComponent(link),
		"desc": encodeURIComponent(desc),
		"title": encodeURIComponent(title)
	}, function (res) {	
		if(res.err_msg=="send_app_msg:confirm"){
			$.toast("分享成功");
		}else{
			$.toast("分享失败");
		}
	});
};

//分享到朋友圈
KN_Share.prototype.wechat_timeLine = function(imgUrl, link, desc, title){
	WeixinJSBridge.invoke('shareTimeline', {
		"img_url": imgUrl,
		"img_width": "200",
		"img_height": "200",
		"link": encodeURIComponent(link),
		"desc": encodeURIComponent(desc),
		"title": encodeURIComponent(title)
	}, function (res) {
		if(res.err_msg=="share_timeline:ok"){
			$.toast("分享成功");
		}else{
			$.toast("分享失败");
		}
	});
};

//分享给QQ好友
KN_Share.prototype.qq_friends = function(site, title, imageUrl, appid, targetUrl, pageUrl){
	if(typeof appid !== 'undefind' || appid === ''){
		appid ='1105220679';
	}
	var qqUrl = "http://openmobile.qq.com/api/check?page=shareindex.html&style=9&status_os=0&sdkp=0&action=shareToQQ";
	qqUrl += "&site="+encodeURIComponent(site);
	qqUrl += "&title=" + encodeURIComponent(title);
	qqUrl += "&imageUrl="+imageUrl;
	qqUrl += "&appid="+appid;
	qqUrl += "&targetUrl="+encodeURIComponent(targetUrl);
	qqUrl += "&page_url="+encodeURIComponent(pageUrl);
	
	return qqUrl;
};

//分享到QQ空间
KN_Share.prototype.qzone = function(url, title, desc, summary, site, pics){
	var zoneUrl = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+encodeURIComponent(url);
	zoneUrl += "&title="+title;
	zoneUrl += "&desc="+ desc;
	zoneUrl += "&summary="+summary;
	zoneUrl += "&site="+site;
	zoneUrl += "&pics="+encodeURIComponent(pics);
	
	return zoneUrl;
};

//分享到新浪微博
KN_Share.prototype.weibo = function(appkey, ralateUid, title, url, pic){
	var weiboUrl = "http://v.t.sina.com.cn/share/share.php?";
	weiboUrl += "appkey="+appkey;
	weiboUrl += "&ralateUid="+ralateUid;
	weiboUrl += "&title="+encodeURIComponent(title);
	weiboUrl += "&url="+encodeURIComponent(url);
	weiboUrl += "&pic="+pic;
	
	return weiboUrl;
}

if ( typeof module === "object" && typeof module.exports === "object" ) {

	module.exports = new KN_Share();
} else {
	window.KN_Share = KN_Share;
}
},{}],4:[function(require,module,exports){
//加载etpl模板
var etpl = require('../common/etpl.js');
// 加载具体tpl文件
var tplMemberMyCollectionPro = require('./tpl/memberMyCollectionPro.html');
var tplMemberMyCollectionShop = require('./tpl/memberMyCollectionShop.html');
var global = require('../common/global.js');
var KNShare = require('../common/share.js');

var tabIndex, loading;
var KN_Fav = {
    params: {
        selectedProCode: '',
        selectedShopCode: '',
        selectDetailUrl: '',
        pageNum: 1,
        pageNum2: 1,
        maxItems: []
    },
    init: function() {
        this.getProdFav(1, 10);
        this.getShopFav(1, 10);
        $(".content .datalist").html('');
        loading = false;
        this.initShopFavButton();
    },
    initProdFavButton: function() {
        $("#tab1").find(".content-block").unbind('click').click(function() {
            var productCode = $(this).find(".productCode").val();
            var shopCode = $(this).find(".shopCode").val();
            // window.location.href = "../detail/detail.html?shopCode="+shopCode+"&productCode="+productCode;
            $.router.load("../detail/detail.html?shopCode=" + shopCode + "&productCode=" + productCode);
        });
        $("#tab1").find('.product_list_r_menu').unbind('click').click(function(e) {
            var $contentBlock = $(this).parent().parent().parent();
            var productCode = $contentBlock.find(".productCode").val();

            KN_Fav.params.selectedProCode = productCode;

            var shopCode = $contentBlock.find(".shopCode").val();

            KN_Fav.params.selectedShopCode = shopCode;

            KN_Fav.params.selectDetailUrl = 'http://' + location.host + '/shop/static/html/detail/detail.html?shopCode=' + shopCode + '&productCode=' + productCode;

            var imgSrc = $contentBlock.find("img").attr("src");
            var proName = $contentBlock.find(".product_list_r_title").text();
            KN_Fav.initShare(proName, imgSrc, 1);

            $(".menu_click_shade").css({ "display": "block" });
            $(".click1").css({ "bottom": '0px' }).css({ "display": "block" });

            $(".menu_click_bottom").unbind('click').click(function() {
                $(".menu_click_shade").css({ "display": "none" });
                $(".click1").css({ bottom: '-218px' });
            });
            if (e && e.stopPropagation) {
                e.stopPropagation();
            } else {
                window.event.cancelBubble = true;
            }
        });

        $(".productShare").unbind('click').click(function() {
            $(".myCollection_shade").css("display", "block").css('bottom', '0px');
            $(".myCollection_share").css("display", "block").css('bottom', '0px');
        });
        $(".share_bottom").unbind('click').click(function() {
            $(".myCollection_shade").css("display", "none").css('bottom', '-218px');
            $(".myCollection_share").css("display", "none").css('bottom', '-218px');
        });

        $(".prodCancelCollection").unbind('click').click(function() {
            var data = {
                shopCode: KN_Fav.params.selectedShopCode,
                spuCode: KN_Fav.params.selectedProCode,
                favType: 1,
                updateType: 2
            };
            $.confirm('确定取消收藏？', '', function() {
                $.ajax({
                    url: global.config.serverBase + 'api/user/updateFav.json',
                    type: 'POST',
                    data: JSON.stringify(data),
                    contentType: "application/json",
                    success: function(resultPro) {
                        if (resultPro && resultPro.code == '100') {
                            $.toast("取消收藏成功");
                            window.location.reload();
                        } else {
                            resultPro = JSON.parse(resultPro);
                            if (resultPro && resultPro.code === '403') {
                                window.location.href = global.config.loginHref;
                            } else {
                                $.toast('error:' + resultPro.msg);
                            }
                        }
                    }
                });
            });
        });

        $(".order").unbind('click').click(function() {
            $.ajax({
                url: global.config.serverBase + 'api/product/base.json',
                type: 'GET',
                data: {
                    productCode: KN_Fav.params.selectedProCode,
                    shopCode: KN_Fav.params.selectedShopCode
                },
                success: function(resultPro) {
                    if (resultPro && resultPro.code == '100') {
                        $(".menu_click_shade").css({ "display": "none" });
                        $(".click1").css({ bottom: '-218px' });

                        var product = resultPro.product;
                        // global.sessionStorage.del('orderInfo');
                        var infoData = {
                            limitMinNum: product.limitMinNum,
                            spuCode: KN_Fav.params.selectedProCode,
                            shopCode: KN_Fav.params.selectedShopCode,
                            name: product.title,
                            productType: product.productType
                        };

                        if (resultPro.product.shopStatus === 1 && resultPro.product.saleStatus === 1) {
                            global.sessionStorage.del('orderInfo');
                            global.sessionStorage.set('orderInfo', infoData);
                            $.router.load('../pay/orderInfo.html?spuCode=' + infoData.spuCode);
                        } else {
                            $.toast('该商品暂时不可售，敬请期待！');
                        }
                        // global.sessionStorage.set('orderInfo',infoData); 
                        // $.router.load('../pay/orderInfo.html?spuCode='+infoData.spuCode);

                        // global.localStorage.set('shopCode',product.shopCode);
                    } else {
                        resultPro = JSON.parse(resultPro);
                        if (resultPro && resultPro.code === '403') {
                            window.location.href = global.config.loginHref;
                        } else {
                            $.toast('error:' + resultPro.msg);
                        }
                    }
                }
            });
        });
    },
    initShopFavButton: function() {
        $("#tab2").find(".content-block").unbind('click').click(function() {
            var shopCode = $(this).find(".shopCode").val();
            // window.location.href = "../index/index.html?shopCode="+shopCode;
            $.router.load("../index/index.html?shopCode=" + shopCode);
        });
        $("#tab2").find(".product_list_r_menu").unbind('click').click(function(e) {
            var $contentBlock = $(this).parent().parent().parent();
            var shopCode = $contentBlock.find(".shopCode").val();
            KN_Fav.params.selectedShopCode = shopCode;

            KN_Fav.params.selectDetailUrl = KN_Fav.params.selectDetailUrl = 'http://' + location.host + '/shop/static/html/index/index.html?shopCode=' + shopCode;

            var imgSrc = $contentBlock.find("img").attr("src");
            var shopName = $contentBlock.find(".product_list_r_title").text();
            KN_Fav.initShare(shopName, imgSrc);

            $(".menu_click_shade").css({ "display": "block" });
            $(".click2").css({ bottom: '0px' }).css({ "display": "block" });

            $(".menu_click_bottom").unbind('click').click(function() {
                $(".menu_click_shade").css({ "display": "none" });
                $(".click2").css({ bottom: '-218px' });
            });
            if (e && e.stopPropagation) {
                e.stopPropagation();
            } else {
                window.event.cancelBubble = true;
            }
        });
        $(".shopShare").unbind('click').click(function() {
            $(".myCollection_shade").css("display", "block").css("bottom", '0px');
            $(".myCollection_share").css("display", "block").css("bottom", '0px');
        });
        $(".share_bottom").unbind('click').click(function() {
            $(".myCollection_shade").css("display", "none").css('bottom', '-218px');
            $(".myCollection_share").css("display", "none").css('bottom', '-218px');
        });
        $(".shopCancelCollection").unbind('click').click(function() {
            $.confirm('确定取消收藏？', '', function() {
                var data = {
                    shopCode: KN_Fav.params.selectedShopCode,
                    favType: 2,
                    updateType: 2
                };
                $.ajax({
                    url: global.config.serverBase + 'api/user/updateFav.json',
                    type: 'POST',
                    data: JSON.stringify(data),
                    contentType: "application/json",
                    success: function(result) {
                        if (result && result.code == '100') {
                            $.toast("取消收藏成功");
                            window.location.reload();
                        } else {
                            result = JSON.parse(result);
                            if (result && result.code === '403') {
                                window.location.href = global.config.loginHref;
                            } else {
                                $.toast('error:' + result.msg);
                            }
                        }
                    }
                });
            });
        });
    },
    getProdFav: function(pageNum, pageSize) {
        $.ajax({
            url: global.config.serverBase + '/api/user/getProdFav.json',
            type: 'GET',
            cache: false,
            data: {
                pageNum: pageNum,
                pageSize: pageSize
            },
            success: function(resultPro) {
                if (resultPro && resultPro.code == '100') {
                    // 重置加载flag
                    loading = false;
                    tabIndex = 1;

                    if (resultPro.prodFavList.total < 1) {
                        $('#tab1 .datalist').html("<div class='nomore' style='text-align:center;font-size: 0.8rem;'>暂无数据<div>");
                        $('.infinite-scroll-preloader').eq(tabIndex - 1).hide();
                        return;
                    }

                    var prodInfoList = resultPro.prodFavList.prodInfoList;
                    if (prodInfoList && prodInfoList.length > 0) {
                        KN_Fav.params.maxItems[tabIndex] = resultPro.prodFavList.total;

                        var render = etpl.compile(tplMemberMyCollectionPro);
                        var jsonPro = {
                            myCollectionProduct: resultPro,
                            prodInfoList: prodInfoList
                        };
                        var textPro = render(jsonPro);
                        $("#tab1 .datalist").append(textPro);
                        KN_Fav.initProdFavButton();

                        $.refreshScroller();

                        if (pageSize >= resultPro.prodFavList.total) {
                            $('.infinite-scroll-preloader').eq(tabIndex - 1).hide();
                            var currentTab = $('.infinite-scroll').eq(tabIndex - 1);
                            var lastRecord = currentTab.find(".nomore");
                            if (lastRecord.length === 0) {
                                currentTab.find(".datalist").append("<div class='nomore' style='text-align:center;font-size: 0.8rem;'>---- 没有更多了 ----</div>");
                            }
                            return;
                        }
                    }
                } else {
                    if (resultPro && resultPro.code === '403') {
                        var url = location.href;
						url = encodeURIComponent(url);
						$.ajax({
							url : '/m/api/global/visited.json?url='+url+'',
							type : 'get',
							dataType : 'json',
							success : function(){
								window.location.href = global.config.loginHref;
							}
						});
                    } else {
                        $.toast('error:' + resultPro.msg);
                    }
                }
            }
        });
    },
    getShopFav: function(pageNum, pageSize) {
        $.ajax({
            url: global.config.serverBase + ' /api/user/getShopFav.json',
            type: 'GET',
            cache: false,
            data: {
                pageNum: pageNum,
                pageSize: pageSize
            },
            success: function(resultShop) {
                if (resultShop && resultShop.code == '100') {
                    // 重置加载flag
                    loading = false;
                     tabIndex = 2;
                    if (resultShop.shopFavList.total < 1) {
                        $('#tab2 .datalist').html("<div class='nomore' style='text-align:center;font-size: 0.8rem;'>暂无数据<div>");
                        $('.infinite-scroll-preloader').eq(tabIndex - 1).hide();
                        return;
                    }

                    var shopInfoList = resultShop.shopFavList.shopInfoList;

                    etpl.addFilter('scoreFormat', function(score, useExtra) {
                        return score / 5 * 100;
                    });

                    if (shopInfoList && shopInfoList.length > 0) {
                        KN_Fav.params.maxItems[tabIndex] = resultShop.shopFavList.total;

                        var render = etpl.compile(tplMemberMyCollectionShop);
                        var jsonShop = {
                            myCollectionShop: resultShop,
                            shopInfoList: shopInfoList
                        };
                        var textShop = render(jsonShop);

                        $("#tab2 .datalist").append(textShop);

                        KN_Fav.initShopFavButton();

                        $.refreshScroller();

                        if (pageSize >= resultShop.shopFavList.total) {
                            $('.infinite-scroll-preloader').eq(tabIndex - 1).hide();
                            var currentTab = $('.infinite-scroll').eq(tabIndex - 1);
                            var lastRecord = currentTab.find(".nomore");
                            if (lastRecord.length === 0) {
                                currentTab.find(".datalist").append("<div class='nomore' style='text-align:center;font-size: 0.8rem;'>---- 没有更多了 ----</div>");
                            }
                            return;
                        }
                    }
                } else {
                    if (resultShop && resultShop.code === '403') {
                        var url = location.href;
						url = encodeURIComponent(url);
						$.ajax({
							url : '/m/api/global/visited.json?url='+url+'',
							type : 'get',
							dataType : 'json',
							success : function(){
								window.location.href = global.config.loginHref;
							}
						});
                    } else {
                        $.toast('error:' + resultShop.msg);
                    }
                }
            }
        });
    },
    initShare: function(title, imgSrc, isPro) { //初始化分享按钮
        var url = '';
        if (isPro) {
            url = 'http://' + location.host + '/shop/static/html/detail/detail.html?shopCode=' + KN_Fav.params.selectedShopCode + '&productCode=' + KN_Fav.params.selectedProCode;
        } else {
            url = 'http://' + location.host + '/shop/static/html/index/index.html?shopCode=' + KN_Fav.params.selectedShopCode;
        }
        var shareData = {
            imageUrl: imgSrc,
            url: url,
            desc: '',
            title: title,
            site: '酷鸟',
            appid: '',
            summary: '酷鸟',
            pics: imgSrc,
            appkey: '',
            ralateUid: '',
            pageUrl: this.params.selectDetailUrl
        };
        var wurl = KNShare.weibo(shareData.appkey, shareData.ralateUid, shareData.title, shareData.url, shareData.imageUrl);
        $('.weibo').find('a').attr('href', wurl);
        var qqurl = KNShare.qq_friends(shareData.site, shareData.title, shareData.imageUrl, shareData.appid, shareData.url, shareData.pageUrl);
        $('.QQFriends').find('a').attr('href', qqurl);
        var zurl = KNShare.qzone(shareData.url, shareData.title, shareData.desc, shareData.summary, shareData.site, shareData.pics);
        $('.Qzone').find('a').attr('href', zurl);
    }
};


$(document).on("pageInit", "#page_myCollection", function(e, id, page) {
    KN_Fav.init();

    $(function() {
        $(".menu_click_shade").css({ "display": "none" });
        $(".click2").css({ "display": "none" });

        $(".click1").css({ "display": "none" });
        $(".menu_click_shade").css({ "display": "none" });

        $(".myCollection_shade").css("display", "none").css('bottom', '-218px');
        $(".myCollection_share").css("display", "none").css('bottom', '-218px');
    });

    loading = false;
    // 每次加载添加多少条目
    var itemsPerLoad = 10;

    $(page).off('infinite').on('infinite', function() {
    	
        // 如果正在加载，则退出
        if (loading) return;
        // 设置flag
        loading = true;
        tabIndex = $(".tabs .active").attr('id');
        tabIndex = tabIndex.substring(3, tabIndex.length);
        tabIndex = parseInt(tabIndex);
        var lastIndex = $(".tabs .active .content-block").length;

        if (!KN_Fav.params.maxItems[tabIndex] || lastIndex >= KN_Fav.params.maxItems[tabIndex]) {
            var tab = $('.infinite-scroll');
            // 加载完毕，则注销无限加载事件，以防不必要的加载
            // $.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex-1));
            // 删除加载提示符
            $('.infinite-scroll-preloader').eq(tabIndex - 1).hide();
            var currentTab = $('.infinite-scroll').eq(tabIndex - 1);
            var lastRecord = currentTab.find(".nomore");
            if (lastRecord.length === 0) {
                currentTab.find(".datalist").append("<div class='nomore' style='text-align:center;font-size: 0.8rem;'>---- 没有更多了 ----</div>");
            }
            loading = false;
            return;
        }

        if (tabIndex === 1) {
            KN_Fav.params.pageNum++;
            KN_Fav.getProdFav(KN_Fav.params.pageNum, itemsPerLoad);
        } else if (tabIndex === 2) {
            KN_Fav.params.pageNum2++;
            KN_Fav.getShopFav(KN_Fav.params.pageNum2, itemsPerLoad);
        }
    });
});

},{"../common/etpl.js":1,"../common/global.js":2,"../common/share.js":3,"./tpl/memberMyCollectionPro.html":5,"./tpl/memberMyCollectionShop.html":6}],5:[function(require,module,exports){
module.exports="<!-- for: ${prodInfoList} as ${prodInfo} -->  <div class=\"content-block\">		<input type=\"hidden\" value=\"${prodInfo.productCode}\" class=\"productCode\" />		<input type=\"hidden\" value=\"${prodInfo.shopCode}\" class=\"shopCode\" />        <div class=\"product_list\">      <div class=\"product_list_l\">        <img src=\"${prodInfo.imgSrc}\">        <!-- if: ${prodInfo.visit_status} == \'2\' -->        <div class=\"under_shelf\">已下架</div>        <!-- /if -->      </div>      <div class=\"product_list_r\">        <div class=\"product_list_r_title\">${prodInfo.name}</div>        <div class=\"product_list_r_money\">￥${prodInfo.price}</div>        <div class=\"product_list_r_menu\" id=\"product_menu\">          <div class=\"menu_circular left\"></div>          <div class=\"menu_circular mid\" ></div>          <div class=\"menu_circular right\"></div>        </div>      </div>    </div>  </div><!-- /for -->      "
},{}],6:[function(require,module,exports){
module.exports="  <!-- for: ${shopInfoList} as ${shopInfo} -->  <div class=\"content-block\">  <input type=\"hidden\" value=\"${shopInfo.shopCode}\" class=\"shopCode\" />    <div class=\"product_list\">      <div class=\"product_list_l\">        <!-- if: ${shopInfo.imgSrc} -->            <img src=\"${shopInfo.imgSrc}\">        <!-- else -->            <img src=\"../../images/home/shop_default.jpg\" onerror=\"this.src=\'../../images/home/shop_default.jpg\'\" />        <!-- /if -->      </div>      <div class=\"product_list_r\">        <div class=\"product_list_r_title\">${shopInfo.name}</div>        <!-- <div class=\"product_list_r_star\">          <span class=\"score\"><em style=\"width:${shopInfo.score|scoreFormat}% ;\"></em></span>          ${shopInfo.score}分        </div> -->        <div class=\"product_list_r_menu\" id=\"shop_menu\">          <div class=\"menu_circular left\"></div>          <div class=\"menu_circular mid\" ></div>          <div class=\"menu_circular right\"></div>        </div>      </div>    </div>  </div>  <!-- /for -->"
},{}]},{},[4]);
