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
var global= require('../common/global.js');
//加载etpl模板
var etpl = require('../common/etpl.js');
// 加载具体tpl文件
var tplOrderDetails = require('./tpl/memberOrderDetails.html');	

// var intDiff = parseInt(86400);//倒计时总秒数量
function timer(intDiff){
    window.setInterval(function(){
    var day=0,
    	hour=0,
        minute=0,
        second=0;//时间默认值       
    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }else{
		window.setTimeout(function(){
			window.location.reload();
		},1000);
	}
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('#hour_show').html(hour+'时');
    $('#minute_show').html(minute+'分');
    $('#second_show').html(second+'秒');
    intDiff--;
    }, 1000);
} 

function dateChange(timestamp)
{
	var d = new Date(timestamp * 1000);    //根据时间戳生成的时间对象
	var date = (d.getFullYear()) + "-" + 
	           (d.getMonth() + 1) + "-" +
	           (d.getDate());
	 
	    
	return date;
}
function timeChange(timestamp)
{
	// 对Date的扩展，将 Date 转化为指定格式的String
	// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
	// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
	// 例子： 
	// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
	// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
	Date.prototype.Format = function (fmt) { //author: meizz 
	    var o = {
	        "M+": this.getMonth() + 1, //月份 
	        "d+": this.getDate(), //日 
	        "h+": this.getHours(), //小时 
	        "m+": this.getMinutes(), //分 
	        "s+": this.getSeconds(), //秒 
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	        "S": this.getMilliseconds() //毫秒 
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	};

	var d = new Date(timestamp * 1000);    //根据时间戳生成的时间对象
	// var date = (d.getFullYear()) + "-" + 
	//            (d.getMonth() + 1) + "-" +
	//            (d.getDate()) + " " + 
	//            (d.getHours()) + ":" + 
	//            (d.getMinutes()) + ":" + 
	//            (d.getSeconds());
	// return date;

	return d.Format("yyyy-M-d hh:mm:ss");

	// var d = new Date(timestamp);    //根据时间戳生成的时间对象
	// var date = (d.getFullYear()) + "-" + 
	//            (d.getMonth() + 1) + "-" +
	//            (d.getDate()) + " " + 
	//            (d.getHours()) + ":" + 
	//            (d.getMinutes()) + ":" + 
	//            (d.getSeconds());
	// return date;
}

etpl.addFilter('formatCertType',function(s){
	var s1 = parseInt(s,10);
	var v = '';

	switch(s1){
		case 1 : v = '身份证';break;
		case 2 : v = '护照';break;
		case 3 : v = '其他';break;
		case 4 : v = '港澳通行证';break;
		case 5 : v = '军官证'; break;
		case 6 : v = '学生证'; break;
		default : 
			v = '';
	}

	return v ;

});


var KN_MemberOrderDetail = {
	param	: {
		orderCode : '',
		orderStatus : 4
	},
	init : function(){
		var params = global.getUrlParam();
		this.param.orderCode = params.orderCode;
		this.param.orderStatus = params.orderStatus ? params.orderStatus : 4;
		var orderType = params.type;
		if(!orderType){
			orderType = '1';
		}
		$(".back").attr("href", "memberOrder.html?orderType="+orderType);
		this.getData();
	},
	initButtons		: function(){
		$(".cancelOrder").unbind('click').click(function(){
			var $parent = $(this).parent();
			$.confirm('订单取消后将无法恢复', function(){
				var orderCode = $parent.find(".orderCode").val();
				$.ajax({
					url		: global.config.serverBase + 'api/order/cancelOrder.json',
					type	: 'GET',
					data	: {orderCode : orderCode},
					success	: function(result){
						if(result && result.code==='100'){
							window.location.reload();
						}else{
							result = JSON.parse(result);
							if(result && result.code==='403'){
								window.location.href = global.config.loginHref;
							}else{
								$.toast('error:'+result.msg);
							}
						}
					}
				});
			});
		});
		
		$(".pay").unbind('click').click(function(){
			var params = global.getUrlParam(); 
			var $parent = $(this).parent();
			var paymentCode = $parent.find(".paymentCode").val();
			if(!paymentCode){
				paymentCode = params.paymentCode;
			}
			var orderCode = $parent.find(".orderCode").val();

			window.location.href = "../pay/orderResult.html?paymentCode="+paymentCode+"&orderCode="+orderCode;
		});
		
		$(".refund").unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			window.location.href = "memberRefund.html?orderCode="+orderCode;
		});
		
		$(".resendResume").unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			$.ajax({
				url		: global.config.serverBase + 'api/order/resendConsumerCode.json',
				type	: 'GET',
				data	: {orderCode : orderCode},
				success	: function(result){
					if(result && result.code==='100'){
						window.location.reload();
					}else{
						result = JSON.parse(result);
						if(result && result.code==='403'){
							window.location.href = global.config.loginHref;
						}else{
							$.toast('error:'+result.msg);
						}
					}
				}
			});
		});
		
		$(".cancelRefund").unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			var data = {
				orderCode	: orderCode
			};
			$.ajax({
				url	:	global.config.serverBase + 'api/order/cancelRefundOrder.json',
				type: 'GET',
				data: data,
				success: function(result){
					if(result && result.code=='100'){
						window.location.reload();
					}else{
						result = JSON.parse(result);
						if(result && result.code==='403'){
							window.location.href = global.config.loginHref;
						}else{
							$.toast('error:'+result.msg);
						}
					}
				}
			});
		});
		
		$(".applyArbitration").unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			window.location.href = "memberArbitration.html?orderCode="+orderCode;
		});
		
		$(".evaluate").unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			var orderStatus = $(this).parent().find(".orderStatus").val();
			var productType = $(this).parent().find(".productType").val();

			//记录进入评价页面前的页面
			global.sessionStorage.set('evaluateFrom',"memberOrderDetail");

		    window.location.href = "memberEvaluate.html?orderCode="+orderCode+"&productType="+productType+"&orderStatus="+orderStatus;
		});
		
		$(".cancelArbitration").unbind('click').click(function(){
			var arbitrationCode = $(this).parent().find(".arbitrationCode").val();
			var data = {
				arbitrationCode	: arbitrationCode
			};
			$.ajax({
				url	:	global.config.serverBase + 'api/order/cancelArbitration.json',
				type: 'POST',
				data: data,
				success: function(result){
					if(result && result.code=='100'){
						window.location.reload();
					}else{
						result = JSON.parse(result);
						if(result && result.code==='403'){
							window.location.href = global.config.loginHref;
						}else{
							$.toast('error:'+result.msg);
						}
					}
				}
			});
		});
		$('.content_mid').unbind('click').click(function(){
			var sCode = $(this).attr('data-shopCode'),
				pSpu = $(this).attr('data-productCode');
			$.router.load('../detail/detail.html?shopCode=' + sCode + '&productCode=' + pSpu );
		});

		// 交易快照
		$('.orderSnapshot').unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			$.router.load('../detail/detailSnapshot.html?orderCode=' + orderCode );
		});
	},
	getData : function(){
		 $.ajax({
		 	url	:	global.config.serverBase + 'api/order/details.json',
		 	type: 'GET',
		 	data:{
				orderCode	: this.param.orderCode,
				orderStatus	: this.param.orderStatus
		 	},
		 	success: function(result){
		 		// console.log(result);
				if(result && result.code=='100'){
					var userOrderPlayerInfoBean = result.userOrderPlayerInfoBean;
					var intDiff =86400-(Math.round(new Date().getTime()/1000)-(result.userOrderBean.lastUpdateTime/1000));

					etpl.addFilter( 'dateFormat', function ( date, useExtra ) {
						return dateChange(date/1000);
					});

					etpl.addFilter( 'timeFormat', function ( time, useExtra ) {
						return timeChange(time/1000);
					});

					etpl.addFilter( 'indexFormat', function (s) {
						return parseInt(s,10)+1;
					});

					etpl.addFilter( 'fourNumOneSpace', function (s) {
						return s.replace(/(\d{4})(?=\d)/g,"$1 ");
					});

				// var userNoticesResp = result.userOrderBean.userNoticeList;
				// if(userNoticesResp && userNoticesResp.length>0){
					var render = etpl.compile(tplOrderDetails);
					
					var json = {
						intDiff:intDiff,
						orderDetails : result,
						userOrderPlayerInfoBean: userOrderPlayerInfoBean
					};
					var text = render(json);
			
					$(".content").html(text);
					// }
					
					if(intDiff>0){
						timer(intDiff);
					}
					
					KN_MemberOrderDetail.initButtons();
				}else{
					result = JSON.parse(result);
					if(result && result.code==='403'){
						window.location.href = global.config.loginHref;
					}else{
						$.toast('error:'+result.msg);
					}
				}
				
			}
		});
	}
};

$(document).on("pageInit",'#orderDetail_pageCurrent' ,function(e, pageId, $page) {
	KN_MemberOrderDetail.init();
});
},{"../common/etpl.js":1,"../common/global.js":2,"./tpl/memberOrderDetails.html":4}],4:[function(require,module,exports){
module.exports="<div class=\"content\">    <div class=\"tabs\" id=\"notpay_tabs\">        <div id=\"tab1\" class=\"tab active\">            <div class=\"order_listall\">                <!-- if:${orderDetails.userOrderBean.payStatus}==\'2\' && ${intDiff}>0 -->                <!-- if:${orderDetails.userOrderBean.orderStatus}==\'1\' -->                <div class=\"order_mg\">                    <div class=\"order_mg_text\">商家将在                        <span class=\"time-item\">                  <span id=\"hour_show\"></span>                        <span id=\"minute_show\"></span>                        <span id=\"second_show\"></span>                        </span>内处理该订单，请耐心等待                    </div>                </div>                <!-- elif:${orderDetails.userOrderBean.orderStatus}==\'2\' -->                <div class=\"order_mg\">                    <div class=\"order_mg_text\">请在                        <span class=\"time-item\">                  <span id=\"hour_show\"></span>                        <span id=\"minute_show\"></span>                        <span id=\"second_show\"></span>                        </span>内支付。超时未支付将取消该订单！                    </div>                </div>                <!-- /if -->                <!-- /if -->                <div class=\"order_list\" id=\"notpay_order_list\">                    <div class=\"order_content\">                        <div class=\"content_heading\">                            <div class=\"heading_right\">                                <!-- if:${orderDetails.userOrderBean.orderStatus}==\'1\' -->                                <span>待支付 待确认</span>                                <!-- elif:${orderDetails.userOrderBean.orderStatus}==\'2\' -->                                <span>待支付 已确认</span>                                <!-- elif:${orderDetails.userOrderBean.orderStatus}==\'3\' -->                                <span>已取消</span>                                <!-- elif:${orderDetails.userOrderBean.orderStatus}==\'4\' -->                                <span>已支付 已确认</span>                                <!-- elif:${orderDetails.userOrderBean.orderStatus}==\'5\' -->                                <span>交易关闭 等待退款</span>                                <!-- elif:${orderDetails.userOrderBean.orderStatus}==\'6\' -->                                <span>交易关闭 仲裁退款中</span>                                <!-- elif:${orderDetails.userOrderBean.orderStatus}==\'7\' -->                                <span>交易关闭 退款成功</span>                                <!-- elif: ${orderDetails.userOrderBean.orderStatus}==\'8\' -->                                <span>交易成功</span>                                <!-- /if -->                                <!-- /if -->                            </div>                            <div class=\"heading_left\">                                <span class=\"head_num\">订单编号:</span>                                <span class=\"head_true\">${orderDetails.userOrderBean.orderCode}</span>                            </div>                        </div>                        <!-- for: ${orderDetails.productList} as ${item},${index} -->                        <div class=\"content_mid\" data-shopcode=\"${orderDetails.shopInfo.shopCode}\" data-productCode=\"${item.productSpu}\">                            <div class=\"mid_left\">                                <div class=\"mid_img\">                                    <img src=\"${item.cover}\">                                </div>                            </div>                            <div class=\"mid_right\">                                <div class=\"mid_title\">                                    <div class=\"title_span\">${item.productName}</div>                                </div>                                <div class=\"mid_specifications\">                                    <div class=\"s_left\">                                        <div class=\"s_left_money\">￥ ${item.price}</div>                                        <div class=\"s_left_num\">×${item.num}</div>                                    </div>                                    <div class=\"s_right\">                                        <p class=\"s_right_p\">商品规格：</p>${item.spec}                                    </div>                                    <!-- if:${orderDetails.userOrderBean.useDate} -->                                    <div class=\"s_right\">                                        <p class=\"s_right_p\">使用日期：</p>${orderDetails.userOrderBean.useDate|dateFormat}                                    </div>                                    <!-- /if -->                                </div>                            </div>                        </div>                        <!-- /for -->                        <div class=\"content_footing\">                            <div class=\"foot_tex\">                                总 金 额： <strong>￥ ${orderDetails.userOrderBean.orderCountPrice}</strong>                            </div>                            <div class=\"refundStatus\">                                <!-- if: ${orderDetails.userOrderBean.orderStatus}==\'8\' && ${orderDetails.orderRefundInfo.refundStatus}==\'1\' -->                                <span>仲裁退款中</span>                                <!-- elif:${orderDetails.userOrderBean.orderStatus}==\'8\' && ${orderDetails.orderRefundInfo.refundStatus}==\'2\' -->                                <span>仲裁退款拒绝</span>                                <!-- elif:${orderDetails.userOrderBean.orderStatus}==\'8\' && ${orderDetails.orderRefundInfo.refundStatus}==\'3\' -->                                <span>仲裁取消</span>                                <!-- elif:${orderDetails.userOrderBean.orderStatus}==\'8\' && ${orderDetails.orderRefundInfo.refundStatus}==\'4\' -->                                <span>仲裁退款成功</span>                                <!-- /if -->                            </div>                        </div>                    </div>                </div>            </div>        </div>    </div>    <!-- 消费验证码 -->    <!-- if: ${orderDetails.consumerCodeBean.consumerCode} !==\'\' -->    <div class=\"order_code\">        <div class=\"order_code_contacts_mg\">            <p>消费验证码:${orderDetails.consumerCodeBean.consumerCode|fourNumOneSpace}</p>            <p class=\"paied\">                <!-- if: ${orderDetails.consumerCodeBean.consumerCodeStatus} ===1 -->                未使用                <!-- elif: ${orderDetails.consumerCodeBean.consumerCodeStatus} ==2 -->                已使用                <!-- /if -->            </p>        </div>    </div>    <!-- /if -->    <!-- 店铺信息 -->    <div class=\"order_shop\">        <div class=\"shop_title\">            <div class=\"title_tex\">                店铺信息            </div>        </div>        <a href=\"../index/index.html?shopCode=${orderDetails.shopInfo.shopCode}\">            <div class=\"shop_mid\">                <div class=\"mid_left\">                    <img src=\"${orderDetails.shopInfo.shopLogoImg}\">                </div>                <div class=\"shop_right\">                    <p>${orderDetails.shopInfo.shopName}</p>                    <p id=\"shop_phonenum\">${orderDetails.shopInfo.mobile}</p>                </div>            </div>        </a>        <div class=\"shop_foot\">            <div class=\"foot_btn\">                <div class=\"r_btn button button-dark left\">                    <a href=\"../index/index.html?shopCode=${orderDetails.shopInfo.shopCode}\"><img class=\"shop_img\" src=\"../../images/home/u99.png\">进入店铺</a>                </div>                <div class=\"r_btn button button-dark right\">                    <a href=\"tel:${orderDetails.shopInfo.mobile}\" class=\"external\"><img class=\"shop_img\" src=\"../../images/home/u104.png\">联系商家</a>                </div>            </div>        </div>    </div>    <!-- 联系 -->    <div class=\"contacts\">        <div class=\"contacts_title\">            <div class=\"contacts_title_tex\">                联系人            </div>        </div>        <div class=\"contacts_mg\">            <span>${orderDetails.userOrderContactInfo.name}</span>            <span>${orderDetails.userOrderContactInfo.mobile}</span>        </div>    </div>    <!-- for:${userOrderPlayerInfoBean} as ${userInfoBean} ,${index} -->    <div class=\"contacts\">        <div class=\"contacts_title\">            <div class=\"contacts_title_tex\">                旅客 ${index | indexFormat}            </div>        </div>        <div class=\"contacts_mg\">            <span>${userInfoBean.name}</span>            <span>${userInfoBean.mobile}</span>        </div>        <!-- if:${userInfoBean.certType} > 0 -->        <p class=\"certType\">            <span>${userInfoBean.certType | formatCertType}</span>            <span>${userInfoBean.certNo}</span>        </p>        <!-- /if -->    </div>    <!-- /for -->    <div class=\"Creation_time\" id=\"cre_successpaurefund\">        <div class=\"Creation_time_contacts_mg\">            <p>创建时间：${orderDetails.userOrderBean.orderTime|timeFormat}</p>            <!-- for:${orderDetails.orderPayInfoBean} as ${payInfo} -->            <!-- if: ${payInfo.payType}==1 -->            <!-- if: ${payInfo.payment} -->            <p>支付方式：${payInfo.payment}</p>            <!-- /if -->            <!-- if: ${payInfo.payTime}-->            <p>支付时间：${payInfo.payTime|timeFormat}</p>            <!-- /if -->            <!-- /if -->            <!-- /for -->            <!-- if: ${orderDetails.consumerCodeBean.consumerCodeCheckTime} && ${orderDetails.consumerCodeBean.consumerCodeStatus}==2 -->            <p>验证时间：${orderDetails.consumerCodeBean.consumerCodeCheckTime|timeFormat}</p>            <!-- /if -->        </div>    </div>    <!-- if: (${orderDetails.userOrderBean.orderStatus}==\'8\' && ${orderDetails.orderRefundInfo.refundStatus}==\'4\') || ${orderDetails.userOrderBean.orderStatus}==\'7\' || ${orderDetails.userOrderBean.orderStatus}==\'9\' -->    <div class=\"refund_time\">        <div class=\"refund_time_contacts_mg\">            <p>退款金额：￥${orderDetails.orderRefundInfo.refundAmount}</p>            <p>退款时间：${orderDetails.orderRefundInfo.refundTime|timeFormat}</p>        </div>    </div>    <!-- /if -->    <div class=\"order_operation\">        <input type=\"hidden\" value=\"${orderDetails.userOrderBean.orderCode}\" class=\"orderCode\" />        <input type=\"hidden\" value=\"${orderDetails.userOrderBean.arbitrationCode}\" class=\"arbitrationCode\" />        <input type=\"hidden\" value=\"${orderDetails.orderPayInfoBean[0].paymentCode}\" class=\"paymentCode\" />        <input type=\"hidden\" value=\"${orderDetails.userOrderBean.orderStatus}\" class=\"orderStatus\" />        <input type=\"hidden\" value=\"${orderDetails.productList[0].productType}\" class=\"productType\" />         <!-- if: ${orderDetails.isComment}==\'2\' -->          <div class=\"r_btn button button-dark evaluate\">评价</div>          <!-- /if -->        <!-- if: ${orderDetails.userOrderBean.orderStatus}==\'1\' -->        <div class=\"r_btn button button-dark cancelOrder\">取消订单</div>        <!-- elif: ${orderDetails.userOrderBean.orderStatus}==\'2\' -->        <div class=\"r_btn button button-fill button-danger pay\">立即支付</div>        <div class=\"r_btn button button-dark cancelOrder\">取消订单</div>        <!-- elif: ${orderDetails.userOrderBean.orderStatus}==\'4\' -->        <div class=\"r_btn button button-dark refund\">申请退款</div>        <div class=\"r_btn button button-dark resendResume\">重发消费码</div>        <!-- elif: ${orderDetails.userOrderBean.orderStatus}==\'5\' -->        <div class=\"r_btn button button-dark cancelRefund\">取消申请</div>        <!-- elif: ${orderDetails.userOrderBean.orderStatus}==\'8\' && (${orderDetails.orderRefundInfo.refundStatus}==\'0\' || ${orderDetails.orderRefundInfo.refundStatus}==\'3\') -->        <div class=\"r_btn button button-dark applyArbitration\">申请仲裁退款</div>        <!-- <div class=\"r_btn button button-dark evaluate\">评价</div> -->        <!-- elif: ${orderDetails.userOrderBean.orderStatus}==\'12\' -->        <!-- <div class=\"r_btn button button-dark evaluate\">评价</div> -->        <div class=\"r_btn button button-dark cancelArbitration\">取消仲裁</div>        <!-- elif: ${orderDetails.userOrderBean.orderStatus}==\'13\'&&${orderDetails.userOrderBean.payStatus}==\'11\' -->        <!-- <div class=\"r_btn button button-dark evaluate\">评价</div> -->        <!-- elif: ${orderDetails.userOrderBean.orderStatus}==\'8\' && (${orderDetails.orderRefundInfo.refundStatus}==\'1\' || ${orderDetails.orderRefundInfo.refundStatus}==\'2\' || ${orderDetails.orderRefundInfo.refundStatus}==\'4\') -->        <!-- <div class=\"r_btn button button-dark evaluate\">评价</div> -->        <!-- /if -->        <div class=\"l_btn button button-dark orderSnapshot\">交易快照</div>    </div></div>"
},{}]},{},[3]);
