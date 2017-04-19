(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}],2:[function(require,module,exports){
var GlobalKuNiao = require('../common/global.js');

var KN_accountSafe = {
	init	: function(){
		this.getDate();
	},
	getDate	: function(){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase + 'api/user/getUserInfo.json',
			type	: 'GET',
			success	: function(data){
				if(data && data.code==='100'){
					var userInfo = data.userInfo;
					if(userInfo){
						var phone = userInfo.mobile.slice(0,3) + '****' + userInfo.mobile.slice(userInfo.mobile.length-4);	
						$(".mobile").text(phone);
						$(".cpDiv").unbind('click').click(function(){
							$.router.load("changepassword1.html?mobile="+userInfo.mobile);
						});
						var qqNumber = userInfo.qqNumber;
						var weixinNumber = userInfo.weixinNumber;
						if(qqNumber && qqNumber.trim()!==''){
							$(".QQ .nav1 a").css("color", "black").html(qqNumber);
						}
						if(weixinNumber && weixinNumber.trim()!==''){
							$(".wechat .nav1 a").css("color", "black").html(weixinNumber);
						}
					}
				}else{
					// data = JSON.parse(data);
					if(data && data.code==='403'){
						window.location.href = GlobalKuNiao.config.loginHref;
					}else{
						$.toast('error:'+data.msg);
					}
				}
			}
		});
	}
};

// 路由load
$(document).on("pageInit",'#accountsSafe' ,function(e, pageId, $page) {
	KN_accountSafe.init();
 });


},{"../common/global.js":1}]},{},[2]);
