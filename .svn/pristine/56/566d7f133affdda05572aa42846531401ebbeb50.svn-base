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
// 加载etpl模板
var etpl = require('../common/etpl.js');
var GlobalKuNiao = require('../common/global.js');

var KN_Detail = {
	params	: {
		curPage: 1,
		isNavScroll	: 0, //是否上下滑动，防止右侧导航条显示错乱
		slideGroup  : 0  //上下滑动，记录当前组序号，从0开始
	},
	init : function(param){

	},
	getSnapInfo	: function(orderCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'api/order/orderSnapshot.json',
			type	: 'GET',
			data	: {
				orderCode: orderCode,
			},
			success	: function(data){
				$(".loading-spiner").css("display", "none"); //隐藏加载提示
				if(data && data.code==='100'){
					var snap = data.orderSnapBean;
					var tplDetail = require('./tpl/detailBaseSnapshot.html'); // 加载具体tpl文件
					var render = etpl.compile(tplDetail);
					var json = { snap : data.orderSnapBean };
					var text   = render(json); //渲染数据
					$('.snapshotContent').html(text);
					KN_Detail.initSnapBase(snap); //初始化产品信息

					$(".planIntro").click(function(){
						$.router.load('./snapTravel.html?snapPlanId='+snap.snapPlanId+'&orderCode='+GlobalKuNiao.getUrlParam().orderCode);
					});
				}else{
					$.router.load('./404.html');
				}
			}
		});
	},
	initSnapBase	: function(snap){ //初始化信息
		var title = snap.productName+"_特色旅游_酷鸟";
		var keywords = snap.productName+",特色旅游,高端旅游,旅游线路,酷鸟";
		var desc = snap.productName+"。酷鸟旅游网，一个提供特色旅游特色旅行线路的网站。";
		this.setSEO(title, keywords, desc);
	},
	getTravel	: function(orderCode, snapPlanId){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase + 'api/order/orderPlanSnapshot.json',
			type	: 'GET',
			data	: {
				orderCode : orderCode,
				snapPlanId: snapPlanId
			},
			success	: function(data){
				if(data && data.code==='100'){
					//修改数据，gallery最多只能展示3个
					var days = data.plan.days;
					var dayslength = days.length - 1;
					dayslength = dayslength > 0 ? (days.length - 1)  : 0;
					for(var i = days.length - 1; i >= 0; i--) {
						var nodes = days[i].nodes;
						if (!!nodes){
							var nodeslength = nodes.length - 1;
							nodeslength = nodeslength > 0 ? nodeslength  : 0;
							for(var j = nodeslength; j >= 0; j--) {
								if (!!nodes[j].gallery){
									nodes[j].gallery = nodes[j].gallery.slice(0,3);
								}
							}
						}
					}
					
					$(".loading-spiner").hide();
					var tplViewspot = require('./tpl/snapTravel.html'); // 加载具体tpl文件
					var render = etpl.compile(tplViewspot);
					var json = {
						planSnap: data.plan,
						days: data.plan.days
					};
					var text   = render(json);
					$(".travel-bd .item-day").html(text);

					if (data.plan.days.length < 4) {
						$('.next').addClass('disabled');
					}


					//初始化导航条
					if($(".slide-bar .bar-con a").size() <= 3) {
						$(".next").addClass('disabled');
					}

					$(".prev").click(function(){
						KN_Detail.params.isNavScroll = 1; //右侧导航条触发，防止滚动事件搅局
						if(!$(this).hasClass("disabled")){
							KN_Detail.pageNavigator(1);
						}
					});
					
					$(".next").click(function(){
						KN_Detail.params.isNavScroll = 1; //右侧导航条触发，防止滚动事件搅局
						if(!$(this).hasClass("disabled")){
							KN_Detail.pageNavigator(0);
						}
					});
					
					$(".slide-bar .bar-con a").click(function(){
						KN_Detail.params.isNavScroll = 1; //右侧导航条触发，防止滚动事件搅局
						if(!$(this).hasClass("cur")){
							KN_Detail.navigator($(this), 1);
						}
					});

					//把slide塞到body的直接子标签位置
					// var slideBar = $('.slide-bar').remove().css('z-index','10000');
					// $('body').append(slideBar);
					
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	initTravel	: function(orderCode){
		if(orderCode && orderCode.trim().length>0){
			$("header .back").unbind('click').click(function(){
				window.location.href = 'detailSnapshot.html?orderCode='+orderCode;
			});
		}else{
			$("header .back").removeClass("external");
		}

		$(".content").on('scroll',function(){
			var top = $(this).scrollTop();
			var idTemp = '';
			if(! KN_Detail.params.isNavScroll){  //是否由右侧导航条触发
				$(".travel-bd .item-day>div").each(function(item, index){
					$thisScrollHeight = this.offsetTop;
					if(top >= $thisScrollHeight){
						var dayID = $(this).attr("id");
						if(dayID){
							idTemp = dayID;
						}
						return;
					}
				});
				if(idTemp){
					idTemp = idTemp.substring(idTemp.indexOf("D")+1, idTemp.length);
					var bar = $(".slide-bar .bar-con");
					bar.find("a").removeClass("show").addClass("hide");
					$(".cur").removeClass("cur");
					var curDiv = bar.find("#nav"+idTemp);
					curDiv.addClass("cur").removeClass("hide").addClass("show");
					KN_Detail.navigator(curDiv);
				}
			}
			KN_Detail.params.isNavScroll = 0; //恢复正常阀值
		});
		$(".slide-bar a").off('scroll').on('scroll',function(e){
			if (e && e.stopPropagation) {//非IE浏览器
			　　e.stopPropagation();
			}else {//IE浏览器
				window.event.cancelBubble = true;
			}
		});
	},
	navigator	: function(curDiv, isNeedNavigate){
		var navs = $(".slide-bar .bar-con a");
		var id = curDiv.attr('id').substring(3)*1;
		//记录当前页属于哪个分组，每3个为一组，组号从0开始
		KN_Detail.params.slideGroup = Math.floor((id - 1)/3);
		$(".cur").removeClass("cur");
		navs.removeClass("show").addClass("hide");
		//显示当前项
		curDiv.addClass("cur").removeClass("hide").addClass("show");

		$(".prev").removeClass("disabled");
		$(".next").removeClass("disabled");
		if(navs.size() <= 3) {
			$(".prev").addClass("disabled");
			$(".next").addClass("disabled");
		}else{
			if(id < 3) {
				$(".prev").addClass("disabled");
			}
			if(id > navs.length - 2) {
				$(".next").addClass("disabled");
			}
		}
		if(id === 1) {
			//第一项时显示123
			$('#nav2').removeClass("hide").addClass("show");
			$('#nav3').removeClass("hide").addClass("show");
		}else if(id === navs.length) {
			//第n项时显示n-2 n-1 n
			$('#nav'+(id-2)).removeClass("hide").addClass("show");
			$('#nav'+(id-1)).removeClass("hide").addClass("show");
		}else {
			//中间项显示n-1 n n+1
			$('#nav'+(id-1)).removeClass("hide").addClass("show");
			$('#nav'+(id+1)).removeClass("hide").addClass("show");
		}
		if(isNeedNavigate){
			location.hash = curDiv.attr('href');
		}
	},
	pageNavigator	: function(isUp){ //上下箭头分页，isUp：1向上；0向下
		var navs = $(".slide-bar .bar-con a");
		var pageIndex = KN_Detail.params.slideGroup;
		var lastIndex = Math.floor((navs.length - 1)/3);
		navs.removeClass("show").addClass("hide");
		$(".cur").removeClass("cur");

		function showNavs(index, len) {
			var id = index * 3 + 1;
			//如果长度不是3的倍数，那么最后的三个需要往前移足三个
			if(id > len - 2) id = len - 2;
			$('#nav'+id).removeClass("hide").addClass("cur show");
			$('#nav'+(id+1)).removeClass("hide").addClass("show");
			$('#nav'+(id+2)).removeClass("hide").addClass("show");
			location.hash = $('#nav'+id).attr('href');
		}
		if(isUp){
			pageIndex--;
			if(pageIndex < 0) pageIndex = 0;
			KN_Detail.params.slideGroup = pageIndex;
			if(pageIndex === 0) $(".prev").addClass("disabled");
			if(pageIndex < lastIndex) $(".next").removeClass("disabled");
			showNavs(pageIndex, navs.length);
		}else {
			pageIndex++;
			if(pageIndex > lastIndex) pageIndex = lastIndex;
			KN_Detail.params.slideGroup = pageIndex;
			if(pageIndex === lastIndex) $(".next").addClass("disabled");
			if(pageIndex > 0) $(".prev").removeClass("disabled");
			showNavs(pageIndex, navs.length);
		}
	},
	setSEO	: function(title, keywords, description){
		document.title = title;
		$('meta[name="Keywords"]').attr('content', keywords);
		$('meta[name="Description"]').attr('content', description);
	}
};

// 路由load
$(document).on("pageInit",'#snapshotDetail' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getSnapInfo(params.orderCode);
	KN_Detail.init(params);
 });

$(document).on("pageInit",'#snapTravel' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getTravel(params.orderCode, params.snapPlanId);
	KN_Detail.initTravel(params.orderCode);
	KN_Detail.init(params);
 });

},{"../common/etpl.js":1,"../common/global.js":2,"./tpl/detailBaseSnapshot.html":4,"./tpl/snapTravel.html":5}],4:[function(require,module,exports){
module.exports="<!-- if: ${snap.productImgUrl} --><div class=\"cover\">	<img src=\"${snap.productImgUrl}\"></div><!-- else --><div class=\"cover\">	<img src=\"../../images/detail/default-cover.jpg\"></div><!-- /if --><div class=\"info\">	<h1>${snap.productName}</h1>	<div class=\"base\">		<p>商品规格：${snap.spec}</p>		<p>使用日期：${snap.departureDate}</p>		<p>价格：￥${snap.price}</p>		<p>数量：${snap.num}</p>		<p>总金额：￥${snap.totalPrice}</p>	</div></div><div class=\"list-function\">	<!-- if: ${snap.snapPlanId}!== 0 -->	<a href=\"#\" class=\"planIntro\">行程介绍</a>	<!-- /if -->	<!-- if: ${snap.bookingNotes} -->	<div class=\"bookNotice\">		<h6>预订须知</h6>		<p>${snap.bookingNotes|raw}</p>	</div>	<!-- /if -->	<!-- if: ${snap.otherNotes} -->	<div class=\"others\">		<h6>其它事项</h6>		<p>${snap.otherNotes|raw}</p>	</div>	<!-- /if -->	<!-- if: ${snap.feeNotes} -->	<div class=\"cost-desc\">			<h6>费用说明</h6>		<p>${snap.feeNotes|raw}</p>	</div>	<!-- /if -->		<!-- if: ${snap.detailContent} -->	<div class=\"product\">		<h6>产品特色</h6>		<p>${snap.detailContent|raw}</p>	</div>	<!-- /if --></div>"
},{}],5:[function(require,module,exports){
module.exports="<!-- for: ${days} as ${day} --><div id=\"D${day.day}\">	<header>		<h2>D${day.day}</h2>		<h3>${day.title}</h3>		<p>${day.summary}</p>	</header>	<!-- var: nodes=${day.nodes} -->	<!-- for: ${nodes} as ${node} -->	<div class=\"item-bd\">		<h4>${node.title}</h4>		<p class=\"desc\">${node.overview|raw}</p>		<div class=\"img-list\">			<!-- var: gallerys=${node.gallery} -->			<!-- for: ${gallerys} as ${gallery} -->			<img src=\"${gallery}\" alt=\"\">			<!-- /for -->		</div>	</div>	<!-- /for --></div><!-- /for --><!-- if: ${days.length}>0 --><div class=\"slide-bar\">	<a href=\"javascript:void(0);\" class=\"prev disabled\" external><span class=\"icon icon-up\"></span></a>	<div class=\"bar-con\">		<!-- for: ${days} as ${day},${index} -->		<a id=\"nav${day.day}\" href=\"#D${day.day}\" 		<!-- if:  ${index}<3 -->			<!-- if: ${index}===0 -->			class=\"cur\"			<!-- /if -->		<!-- else -->			class=\"hide\"		<!-- /if -->		external>D${day.day}</a>		<!-- /for -->	</div>	<a href=\"javascript:void(0);\" class=\"next\" external><span class=\"icon icon-down\"></span></a></div><!-- /if -->"
},{}]},{},[3]);
