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
var global 		= require('../common/global.js');
var etpl   		= require('../common/etpl.js');
var tplResult   = require('./tpl/orderResult.html');
var tplPaySuc   = require('./tpl/paySuccess.html');
var tplPaySucAlipay =require('./tpl/paySuccessAlipay.html');

var KN_Pay = {
	config:{
		orderCode : '',
		orderStatus : 1,
		paymentCode: ''
	},
	init : function(){
		var param = global.getUrlParam();

			if(typeof param.orderCode === 'undefined'){
				$.alert('该订单不存在哦!',function(){
					location.href = global.config.knIndex;
				});
				return false;
			}

			global.sessionStorage.set('orderCode',param.orderCode);

			this.config.orderCode = param.orderCode;
			this.config.paymentCode = param.paymentCode;

			this.addFilter();
			this.getOrderInfo();

			this.paySubmit();

			if(navigator.userAgent.match(/MicroMessenger/gi)){
				this.config.payType = 'wechat';
			}else{
				this.config.payType = 'alipay';
			}

	},
	getOrderInfo : function(){
		var _ts  = this;
		var url  = global.config.serverBase + 'api/order/details.json';
		var data = {
			orderCode : this.config.orderCode,
			orderStatus : this.config.orderStatus
		};
			$.ajax({
				url : url,
				type : 'get',
				data : data,
				dataType: 'json',
				success:function(rs){
					if(rs.code === '100'){
						_ts.render(rs);
					}else if(rs.code === '403'){
						location.href = global.config.loginHref;
					}
				}
			});
	},
	render : function(data){
		var $con = $('.suc-container');

		//初始化返回按钮
		$("header .back").unbind('click').click(function(){
			var proList = data.productList;
			var shopInfo = data.shopInfo;
			if(proList.length>0 && proList[proList.length-1].productSpu.trim().length>0 && shopInfo && shopInfo.shopCode.trim().length>0){
				$.router.load("../detail/detail.html?productCode="+proList[proList.length-1].productSpu+"&shopCode="+shopInfo.shopCode);
			}else{
				$(this).removeClass("external");
			}
		});		
		// 初始化模板
		var render = etpl.compile(tplResult);
		//渲染数据
		var text   = render(data);
		// console.log(text);
		$con.html(text);

		this.countdown(data);

	},
	addFilter : function(){
		etpl.addFilter('univalent',function(s1,s2){
			s1 = Number(s1);
			s2 = Number(s2);
			if(s1 === 0){
				return 0;
			}else{
				return s1/s2;	
			}
			
		});

		etpl.addFilter('isWechatNative',function(){
			if(navigator.userAgent.match(/MicroMessenger/gi)){
				return true;
			}else{
				return false;
			}
		});

		etpl.addFilter('formatPrice',function(n){
			n = parseInt(n);
			return n.toFixed(0);
		});
		etpl.addFilter('timeFormat', function ( time, useExtra ) {
			return time==='' ? '' : timeChange(time);
		});
	},
	paySubmit:function(){
		var _ts     = this,
			$payBtn = $('.pay-btn');

			$payBtn.on('click',function(){

				$.showPreloader();

				if(_ts.config.payType === 'wechat'){
					_ts.wechatPay();
				}else{
					_ts.alipay();
				}
			});
	},
	alipay : function(){
		var url = global.config.serverBase + 'api/knpay/pay/alipay/wap.json';
		var rurl = 'http://'+location.host + '/shop/static/html/pay/paySuccessAlipay.html?orderCode='+this.config.orderCode;
		// var rurl = 'http://'+location.host + '/shop/static/html/pay/paySuccess.html';
		var data = {
			invoice_id : this.config.paymentCode,
			order_id : this.config.orderCode,
			return_url : rurl
		};

		$.ajax({
			url : url,
			type : 'get',
			dataType : 'json',
			data : data,
			success : function(rs){
				if(rs.code === '100'){
					$('.content').append(rs.htmlText);
					$('#alipaysubmit').submit();
				}else{
					$.hidePreloader();
					$.toast(rs.msg);
				}
			}
		});
	},
	wechatPay : function(){
		var params = {
			invoice_id	: KN_Pay.config.paymentCode,
			order_id	: KN_Pay.config.orderCode
		};
		$.hidePreloader();
		wechatJSPay.init(params);
	},
	countdown : function(data){
		var $countdown = $('.countdown').find('.countdown-time');
			
			console.log(data);
			if($countdown.size() > 0){
				var orderTime = parseInt(data.userOrderBean.orderTime,10)/1000;

				var nowTime = (new Date(data.currTime)).getTime()/1000;

				var _24H = 60*60*24;

				var sTime = _24H - (nowTime - orderTime);
				if(sTime > 0){
					var timer =	setInterval(function(){
						var h = Math.floor(sTime/3600);
						var m = Math.floor((sTime - h*3600)/60);
						var s = Math.floor(sTime - h*3600 - m*60);

						$countdown.html(h+'时'+ m +'分'+ s+'秒');

						sTime--;

						if(sTime <= 0){
							clearInterval(timer);
							$('.countdown').remove();
						}
					},1000);
				}else{
					$('.countdown').remove();
					$('.pay-btn').addClass('disabled');
				}  

			}
	}
};

var KN_PaySuccess = {
	config:{
		orderCode : '',
		orderStatus : 4,
		shopCode : ''
	},
	init : function(){
			var params    = global.getUrlParam();
			var shopCode  = global.localStorage.get('shopCode') || 1;
			var orderCode = params.orderCode;

			if(typeof orderCode === 'undefined'){
				$.alert('该页面已经失效！',function(){
					location.href = global.config.knIndex;
				});
			}

			this.config.orderCode = orderCode;
			this.config.shopCode  = shopCode;
			
			this.addFilter();
			this.getOrderInfo();

			// this.conitue();
	},
	getOrderInfo : function(){
		var _ts  = this;
		var url  = global.config.serverBase + 'api/order/details.json';
		var data = {
			orderCode : this.config.orderCode,
			orderStatus : this.config.orderStatus
		};
			$.ajax({
				url : url,
				type : 'get',
				data : data,
				dataType: 'json',
				success:function(rs){
					if(rs.code === '100'){
						_ts.render(rs);
					}else if(rs.code === '403'){
						$.alert('你还未登陆哦！请先登陆',function(){
							location.href = global.config.loginHref;
						});
					}
					//_ts.delOrderInfo();
				}
			});
	},
	render : function(data){
		var $con = $('.suc-container');

		//初始化返回按钮
		$("header .back").click(function(){
			var proList = data.productList;
			var shopInfo = data.shopInfo;
			if(proList.length>0 && proList[proList.length-1].productSpu.trim().length>0 && shopInfo && shopInfo.shopCode.trim().length>0){
				window.location.href = "../detail/detail.html?productCode="+proList[proList.length-1].productSpu+"&shopCode="+shopInfo.shopCode;
			}else{
				$(this).removeClass("external");
			}
		});
		
		// 初始化模板
		var render = etpl.compile(tplPaySuc);
		//渲染数据
		var text   = render(data);
		// console.log(text);
		$con.html(text);
		// to detail.html
		$('.item').on('click',function(){
			var ocode = $(this).attr('data-ordercode');

			window.location.href = '../home/memberOrderDetail.html?orderCode='+ocode+'&orderStatus=4&type=3';
		});

		$('#paySuccess').on('click','.pay-btn',function(){
			window.location.href = '../index/index.html?shopCode=' + data.shopInfo.shopCode;
		});
	},
	addFilter : function(){
		etpl.addFilter('univalent',function(s1,s2){
			s1 = Number(s1);
			s2 = Number(s2);
			if(s1 === 0){
				return 0;
			}else{
				return s1/s2;	
			}
			
		});
		etpl.addFilter('formatPrice',function(n){
			n = parseInt(n);
			return n.toFixed(0);
		});
		etpl.addFilter('timeFormat', function ( time, useExtra ) {
			return time==='' ? '' : timeChange(time);
		});
	},
	delOrderInfo : function(){
		global.sessionStorage.del('orderInfo');
	}
};

var KN_PaySuccessAlipay = {
	config:{
		orderCode : '',
		orderStatus : 4,
		shopCode : ''
	},
	init : function(){
			var params    = global.getUrlParam();
			var shopCode  = global.localStorage.get('shopCode') || 1;
			var orderCode = params.orderCode;

			if(typeof orderCode === 'undefined'){
				$.alert('该页面已经失效！',function(){
					location.href = global.config.knIndex;
				});
			}

			this.config.orderCode = orderCode;
			this.config.shopCode  = shopCode;
			
			this.addFilter();
			this.getOrderInfo();

			// this.conitue();
	},
	getOrderInfo : function(){
		var _ts  = this;
		var url  = global.config.serverBase + 'api/order/details.json';
		var data = {
			orderCode : this.config.orderCode,
			orderStatus : this.config.orderStatus
		};
			$.ajax({
				url : url,
				type : 'get',
				data : data,
				dataType: 'json',
				success:function(rs){
					if(rs.code === '100'){
						_ts.render(rs);
					}else if(rs.code === '403'){
						$.alert('你还未登陆哦！请先登陆',function(){
							location.href = global.config.loginHref;
						});
					}
					//_ts.delOrderInfo();
				}
			});
	},
	render : function(data){
		var $con = $('.suc-container');

		//初始化返回按钮
		$("header .back").click(function(){
			var proList = data.productList;
			var shopInfo = data.shopInfo;
			if(proList.length>0 && proList[proList.length-1].productSpu.trim().length>0 && shopInfo && shopInfo.shopCode.trim().length>0){
				window.location.href = "../detail/detail.html?productCode="+proList[proList.length-1].productSpu+"&shopCode="+shopInfo.shopCode;
			}else{
				$(this).removeClass("external");
			}
		});
		
		// 初始化模板
		var render = etpl.compile(tplPaySucAlipay);
		//渲染数据
		var text   = render(data);
		// console.log(text);
		$con.html(text);
		// to detail.html
		$('.item').on('click',function(){
			var ocode = $(this).attr('data-ordercode');

			window.location.href = '../home/memberOrderDetail.html?orderCode='+ocode+'&orderStatus=4&type=3';
		});

		$('#paySuccessAlipay').on('click','.pay-btn',function(){
			window.location.href = '../index/index.html?shopCode=' + data.shopInfo.shopCode;
		});
	},
	addFilter : function(){
		etpl.addFilter('univalent',function(s1,s2){
			s1 = Number(s1);
			s2 = Number(s2);
			if(s1 === 0){
				return 0;
			}else{
				return s1/s2;	
			}
			
		});
		etpl.addFilter('formatPrice',function(n){
			n = parseInt(n);
			return n.toFixed(0);
		});
		etpl.addFilter('timeFormat', function ( time, useExtra ) {
			return time==='' ? '' : timeChange(time);
		});


	},
	delOrderInfo : function(){
		global.sessionStorage.del('orderInfo');
	}
};

var wechatJSPay = {
	params : {},
	init	: function(data){
		//data 必须传 invoice_id(发票/凭证号)， order_id(订单编号)
		$.ajax({
			url		: global.config.serverBase + '/api/knpay/pay/wxpay/jsapi.json',
			type	: 'GET',
			data	: data,
			success	: function(data){
				if(data && data.code==="100"){
					wechatJSPay.params.nonceStr = data.nonceStr;
					wechatJSPay.params.paySign = data.paySign;
					wechatJSPay.params.package = data.prepayId;
					wechatJSPay.params.signType = data.signType;
					wechatJSPay.params.timeStamp = data.timeStamp;
					wechatJSPay.params.appId = data.appId;
					
					wechatJSPay.addListener();
				}else if(data.code==="404"){
					$.confirm('您还没有绑定微信呢，现在绑定？', function(){
						window.location.href = global.config.serverBase + 'nav/wxOAuth/bind';
					});
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	jsApiCall	: function(){
		WeixinJSBridge.invoke(
			'getBrandWCPayRequest',
			wechatJSPay.params,
			function(res){
				if (res.err_msg == "get_brand_wcpay_request:ok") {
					wechatJSPay.queryOrder(KN_Pay.config.paymentCode, KN_Pay.config.orderCode); //须传递支付凭证code和订单code
				} else if (res.err_msg == "get_brand_wcpay_request:cancel") {
					$.toast("交易取消");
				} else if (res.err_msg == "get_brand_wcpay_request:fail") {
					$.toast("交易失败");
				} else {
					$.toast(res.err_msg);
				}				
			}
		);
	},
	addListener	: function(){
		if (typeof WeixinJSBridge == "undefined"){
			if( document.addEventListener ){
				document.addEventListener('WeixinJSBridgeReady', this.jsApiCall, false);
			}else if (document.attachEvent){
				document.attachEvent('WeixinJSBridgeReady', this.jsApiCall); 
				document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
			}
		}else{
			this.jsApiCall();
		}
	},
	queryOrder	: function(invoiceId, orderId){
		$.ajax({
			url		: global.config.serverBase + 'api/knpay/query.json',
			type	: 'GET',
			data	: {
				invoice_id		: invoiceId,
				order_id		: orderId
			},
			success	: function(data){
				if(data && data.code==="100"){
					var isPayed = data.isPayed;
					if(isPayed){
						window.location.href = "paySuccess.html?orderCode="+orderId;
					}else{
						$.toast("未付款");
					}
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	getParams	: function(){
		$.ajax({
			url		: 'api/knpay/query.json',
			type	: 'GET',
			data	: {
				invoice_id		: invoiceId,
				payment_method	: 'wechat',
				payment_scene	: 'JSAPI'
			},
			success	: function(data){
				if(data && data.code==="100"){
					//TODO: window.location.href = "page to navigate"; //须根据查询的支付状态跳转到对应页面
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	}
};

function timeChange(timestamp)
{
	var d = new Date(parseInt(timestamp));    //根据时间戳生成的时间对象
	var date = (d.getFullYear()) + "-" + 
	           (d.getMonth() + 1) + "-" +
	           (d.getDate());	    
	return date;
}

// 路由load
$(document).on("pageInit",'#payOrderResult', function(e, pageId, $page) {
	KN_Pay.init();
});

$(document).on("pageInit",'#paySuccess', function(e, pageId, $page) {
	KN_PaySuccess.init();
});

$(document).on("pageInit",'#paySuccessAlipay', function(e, pageId, $page) {
	KN_PaySuccessAlipay.init();
});


},{"../common/etpl.js":1,"../common/global.js":2,"./tpl/orderResult.html":4,"./tpl/paySuccess.html":5,"./tpl/paySuccessAlipay.html":6}],4:[function(require,module,exports){
module.exports="<div class=\"countdown\">	请在<span class=\"countdown-time\" data-time=\"${userOrderBean.orderTime}\"></span>内支付，超时未支付将取消订单</div><div class=\"con\">	<p class=\"order-code\">		订单编码：${userOrderBean.orderCode}	</p>	<div class=\"info-con\">		<!-- for: ${productList} as ${item},${index} -->		<div class=\"item\" data-ordercode=\"${item.productCode}\">			<div class=\"info\">				<h2><a href=\"../detail/detail.html?shopCode=${shopInfo.shopCode}&productCode=${item.productCode}\">${item.productName}</a></h2>				<p>商品规格：					<span>${item.spec}</span>				</p>				<!-- if: ${userOrderBean.useDate} -->				<p class=\"date\">使用日期：${userOrderBean.useDate|timeFormat}</p>				<!-- /if -->			</div>			<p class=\"price\">				<span>￥${item.price|univalent(${item.price},${item.num})}</span>				<span>x ${item.num}</span>			</p>		</div>		<!-- /for -->	</div>	<p class=\"total-price\">		应付金额：<span>￥${userOrderBean.orderCountPrice}</span>	</p></div><div class=\"pay-type\">	<h3>支付方式</h3>	<div class=\"pay-list\">		<!-- if: ${\'\'|isWechatNative} -->		<p class=\"wechatpay\">微信支付</p>		<!-- else -->			<p class=\"alipay selected\">支付宝支付</p>		<!-- /if -->	</div></div>"
},{}],5:[function(require,module,exports){
module.exports="<div class=\"con\">	<p class=\"order-code\">		订单编码：${userOrderBean.orderCode}	</p>	<div class=\"info-con\">		<!-- for: ${productList} as ${item},${index} -->		<div class=\"item\" data-ordercode=\"${userOrderBean.orderCode}\">			<div class=\"info\">				<h2>${item.productName}</h2>				<p>商品规格：					<span>${item.spec}</span>				</p>				<p>预定数量：					<span>X${item.num}</span>				</p>				<!-- if:${item.useDate} -->				<p class=\"date\">使用日期：${item.useDate}</p>				<!-- /if -->				<!-- if:${userOrderBean.useDate} -->				<p class=\"date\">使用日期：${userOrderBean.useDate | timeFormat}</p>				<!-- /if -->			</div>		</div>		<!-- /for -->	</div>	<p>		支付金额：<span>￥${userOrderBean.orderCountPrice | formatPrice}</span>	</p>	<p>		支付方式：<span>微信</span>	</p></div>"
},{}],6:[function(require,module,exports){
module.exports="<div class=\"con\">	<p class=\"order-code\">		订单编码：${userOrderBean.orderCode}	</p>	<div class=\"info-con\">		<!-- for: ${productList} as ${item},${index} -->		<div class=\"item\" data-ordercode=\"${userOrderBean.orderCode}\">			<div class=\"info\">				<h2>${item.productName}</h2>				<p>商品规格：					<span>${item.spec}</span>				</p>				<p>预定数量：					<span>X${item.num}</span>				</p>				<!-- if:${userOrderBean.useDate} -->				<p class=\"date\">使用日期：${userOrderBean.useDate | timeFormat}</p>				<!-- /if -->			</div>			<div class=\"orderArrow\">				<span class=\"icon icon-right\"></span>			</div>		</div>		<!-- /for -->	</div>	<p>		支付金额：<span>￥${userOrderBean.orderCountPrice | formatPrice}</span>	</p>	<p>		支付方式：<span>支付宝</span>	</p></div>"
},{}]},{},[3]);
