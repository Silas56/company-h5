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
var etpl = require('../common/etpl.js');
var tplDetail = require('./tpl/product.html');

var KN_sp = {
	param	: {
		maxItems	: [],
		loading:false
	},
	init : function(){
		var params = global.getUrlParam();
		if(!params.catevalue){
			params.catevalue = '';
		}
		var catevalue = decodeURIComponent(params.catevalue);
		if(catevalue==='*'){
			catevalue = '';
		}
		$("input[name=cateValue]").val(catevalue);
		this.initData();
		this.initButtons();

		//  (function (doc, win) {
		// 	var docEl = doc.documentElement,
		// 		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		// 		recalc = function () {
		// 			var clientWidth = docEl.clientWidth;
		// 			if (!clientWidth) return;
		// 			if (clientWidth >= 750) clientWidth = 750;
		// 			$('html').css('font-size', 100* (clientWidth / 750) + 'px!important');
		// 		};
		// 	if (!doc.addEventListener) return;
		// 	win.addEventListener(resizeEvt, recalc, false);
		// 	doc.addEventListener('DOMContentLoaded', recalc, false);
		// })(document, window);
	},
	initData	: function(){
		$(".datalist").html('');
		
		var catevalue = $("input[name=cateValue]").val();
		if(!catevalue || catevalue.trim().length===0){
			catevalue = '*';
		}
		this.getData($("#tab1 .datalist"), catevalue, 0, 10);
		this.getData($("#tab2 .datalist"), catevalue, 0, 10, 'sales', 'desc');
		this.setPriceSortType();
		this.getData($("#tab3 .datalist"), catevalue, 0, 10, 'price', 'desc');
	},
	initButtons	: function(){
		$(document).on("click", ".tab-link", function(){
			var clicked = $(this);
			var tab = clicked.data("tab") || clicked.attr('href');
			var tabToShow = $(tab);
			tabToShow.siblings().removeClass('active');
			tabToShow.addClass('active');

			//价格tab的click事件
			var tabId = tab.substr(tab.indexOf('#tab')+4, tab.length-1);
			if(tabId==='3' && clicked.hasClass('active')){
				KN_sp.setPriceSortType();
				var pageIndex = tabToShow.attr("pi");
				var sortType = $(".price").attr("sortType");
				sortType = sortType==="1" ? 'desc' : 'asc';
				var cateValue = $("input[name=cateValue]").val();
				var isClick = true;
				KN_sp.getData(tabToShow.find(".datalist"), cateValue, pageIndex, 10, 'price', sortType, isClick);
			}else if(tabToShow.find(".datalist").children().length===0){
				var sortField = tabId==='1' ? '*' : (tabId==='2' ? 'sales' : 'price');
				//tabToShow.attr("pi", 0);
				var keyWord = $("input[name=cateValue]").val();
				KN_sp.getData(tabToShow.find(".datalist"), keyWord, 0, 10, sortField, 'desc');
			}
			clicked.parent().children('.active').removeClass('active');
			clicked.addClass('active');

		});
		$(".btnsearch").click(function(){
			var keyWord = $("input[name=cateValue]").val();
			if(keyWord.trim().length===0){
				keyWord = '*';
			}
			KN_sp.search(keyWord);
		});
		$(".category").change(function(){
			$(".cateValue").val('');
			var v = $(this).val();
			if(v==='0'){
				$(".cateValue").attr("placeholder", "请输入产品名称");
			}else{
				$(".cateValue").attr("placeholder", "请输入店铺名称");
			}
		});
		$(".clearCateValue").click(function(){
			$(".cateValue").val('');
			window.location.href = 'search.html';
		});
	},
	getData:function(tabToShow, keyWord, from, size, sortField, sortType, isClick){
		var data = {
				'keyWord': keyWord,
				'from'	: from,
				'size'	: size
			};
		if(sortField && sortField.trim()!==''){
			data.sortField = sortField;
			data.sortType  = sortType;
		}
		var description = keyWord+"，酷鸟旅游网，一个提供特色旅游(旅行)、高端旅游(旅行)、主题旅游(旅行)、旅游线路、旅行线路的旅游网站，特色旅游找酷鸟。";
		this.setSEO(description);
		$.ajax({
			url	:	global.config.serverBase + '/api/search/productSearch.json',
			type: 'GET',
			data:	data,
			success: function(result){
				//console.log(result);
				if(result && result.code=='100'){
					var tabIndex = tabToShow.parent().attr("id");
					var resultList = result.resultList;
					if(resultList && resultList.length>0){
						tabIndex = tabIndex.substring(3, tabIndex.length);
						KN_sp.param.maxItems[tabIndex] = result.count;
						var render = etpl.compile(tplDetail);
						
						//评分过滤器
						// etpl.addFilter( 'scoreFormat', function ( score, useExtra ) {
						// 	return score / 5 * 100;
						// });
		
						 for (var i = 0; i < resultList.length; i++) {
                            if (resultList[i].scores_ > 0) {
                                var num1 = parseInt(resultList[i].scores_);
                                var num2 = resultList[i].scores_ * 1 - num1;
                                var scoreList = [];
                                for (var j = 0; j < 5; j++) {
                                    if (j < num1) {
                                        scoreList[j] = "18px";
                                    } else if (j == num1) {
                                        scoreList[j] = 18 * num2 + "px";
                                    } else {
                                        scoreList[j] = "0px";
                                    }
                                }
                                resultList[i].scoreList=scoreList;
                            }
                        }


						
						var json = {products:resultList};
						var text = render(json);
				
						if(isClick){
							tabToShow.html(text);
						}else{
							tabToShow.append(text);
						}
						KN_sp.loading = false;
                        $.refreshScroller();

						$(".chanpin").unbind('click').click(function(){
							var shopCode = $(this).find(".shopCode").val();
							var productCode = $(this).find(".productCode").val();
							window.location.href = '../detail/detail.html?productCode='+productCode+'&shopCode='+shopCode;
						});
						if(from+10>result.count){
							$('.infinite-scroll-preloader').eq(tabIndex-1).hide();
							var currentTab = $('.infinite-scroll').eq(tabIndex-1);
							var lastRecord = currentTab.find(".nomore");
							if(lastRecord.length===0){
							  currentTab.find(".datalist").append("<div class='nomore'>---- 没有更多了 ----</div>");
							}
							return;
						}
					}else{
						var activeTabContent = $(".tabs .active");
						activeTabContent.html('<div class="datalist"></div>');
						activeTabContent.append('<div class="tip">非常抱歉，没有找到相关结果</div>');
						KN_sp.getRecommand();
					}
				}
				
			}
		});
	},
	getRecommand : function(){
		$.ajax({
			url	:	global.config.serverBase + '/api/search/productRecommand.json',
			type: 'GET',
			success: function(result){
				if(result && result.code=='100'){
					var resultList = result.resultList;
					if(resultList && resultList.length>0){
						var render = etpl.compile(tplDetail);
										
						var json = {products : resultList};
						var text = render(json);
						var activeTabContent = $(".tabs .active");
						activeTabContent.append('<div>');
						activeTabContent.append('<hr class="line"/>');
						activeTabContent.append('<div class="recommandtip">推荐产品</div>');
						activeTabContent.append('<hr class="line"/>');
						activeTabContent.append('</div>');
						activeTabContent.append(text);
					}
				}else{
					$.toast("error:"+result.msg);
				}
			}
		});
	},
	setPriceSortType : function(){
		var price = $(".price");
		var oldSortType = price.attr("sortType");
		var display = "";
		if(oldSortType==="1"){
			display = ".downarrow";
			oldSortType="0";
		}else{
			display = ".uparrow";
			oldSortType="1";
		}
		$(display).css("display", "block");
		var a = $(display).siblings();
		a.css("display", "none");
		price.attr("sortType", oldSortType);
	},
	search : function(keyWord, t){
		var type = t ? t : $("select[name=category]").val();
		var whichPage = type==="0" ? "searchProduct.html" : "searchShop.html";
		keyWord = encodeURIComponent(keyWord);
		if(keyWord && keyWord.trim().length>0 && keyWord.trim()!=='*'){
			var his = global.localStorage.get('his');
			var arr = [];
			var obj = {};
			obj.type = type;
			obj.text = keyWord;
			if(his && his!=='undefined'){
				var isExist = false;
				$.each(his, function(key, value){
					if(value && value.type===type && value.text===keyWord){
						isExist = true;
						return false;
					}
				});
				if(!isExist){
					his.push(obj);
				}
			}else{
				arr.push(obj);
				his=arr;
			}
			global.localStorage.set('his', his);
		}
		window.location.href = whichPage + "?catevalue="+keyWord;
	},
	setSEO : function(description){
		$('meta[name="Description"]').attr('content', description);
	}
};

$(document).on("pageInit",'#searchProduct_page' ,function(e, pageId, page) {
	KN_sp.init();

	KN_sp.loading = false;

	// 每次加载添加多少条目
	var itemsPerLoad = 10;

	$(page).on('infinite', function() {

	  // 如果正在加载，则退出
	  if (KN_sp.loading) return;

	  // 设置flag
	  KN_sp.loading = true;

	  var tabIndex = $(".tabs .active").attr('id');
	  tabIndex = tabIndex.substring(3, tabIndex.length);
	  tabIndex = parseInt(tabIndex);
	  var lastIndex = $(".tabs .active .chanpin").length;
	  lastIndex = lastIndex===0 ? 0 : lastIndex;

		if (!KN_sp.param.maxItems[tabIndex] || lastIndex >= KN_sp.param.maxItems[tabIndex]) {
		  // 加载完毕，则注销无限加载事件，以防不必要的加载
		  //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex-1));
		  // 删除加载提示符
		  $('.infinite-scroll-preloader').eq(tabIndex-1).hide();
		  var currentTab = $('.infinite-scroll').eq(tabIndex-1);
		  var lastRecord = currentTab.find(".nomore");
		  if(lastRecord.length===0){
			  currentTab.find(".datalist").append("<div class='nomore'>---- 没有更多了 ----</div>");
		  }
		  KN_sp.loading = false;
		  return;
		}

		var keyWord = $("input[name=cateValue]").val();
		if(keyWord.trim().length===0){
			keyWord = '*';
		}

		if(tabIndex===3){
			var sortType = $(".price").attr("sortType");
			sortType = sortType==="1" ? 'desc' : 'asc';
			KN_sp.getData($("#tab"+tabIndex+" .datalist"), keyWord, lastIndex, itemsPerLoad, 'price', sortType);
		}else{
			KN_sp.getData($("#tab"+tabIndex+" .datalist"), keyWord, lastIndex, itemsPerLoad);
		}

	});
});
},{"../common/etpl.js":1,"../common/global.js":2,"./tpl/product.html":4}],4:[function(require,module,exports){
module.exports="<!-- for: ${products} as ${product} --><div class=\"chanpin\">	<input type=\"hidden\" class=\"shopCode\" value=\"${product.shop_code_}\" />	<input type=\"hidden\" class=\"productCode\" value=\"${product.code_}\" />    <div class=\"chanpin_list_l\">        <!-- if: ${product.symbol_image_} -->            <img src=\"${product.symbol_image_}\">        <!-- else -->            <img src=\"../../images/home/shop_default.jpg\" />        <!-- /if -->    </div>    <div class=\"chanpin_list_r\">        <div class=\"chanpin_name\">${product.name_}</div>        <div class=\"chanpin_p_s\">            <div class=\"chanpin_price\">￥${product.price_}</div>             <!-- if: ${product.scores_} -->            <div class=\"chanpin_star\">                               <ul>                    <!-- for: ${product.scoreList} as ${scoreItem} -->                    <li><span style=\"width:${scoreItem};\"></span></li>                    <!-- /for -->                </ul>                <span class=\"score\">${product.scores_}分</span>            </div>              <!-- /if -->        </div>    </div></div><!-- /for -->"
},{}]},{},[3]);
