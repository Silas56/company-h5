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
var global= require('../common/global.js');

var KN_user = {
	init	: function(){
		this.getUserInfo();

		this.getData(2);
		this.getData(3);
		this.getData(4);

		var shopCode = global.localStorage.get('shopCode');
/*
		if(shopCode){
			$('.user_menu a').attr('href','../index/index.html?shopCode='+shopCode);
		}else{
			
			$('.user_menu a').css("background","url(../../images/index/kuniao-logo.png) no-repeat");
			$('.user_menu a').css("margin", "0.3rem auto 0 0.3rem");
			$('.user_menu a').css("background-size", "29px auto");
			$('.user_menu a').click(function(){
				window.location.href = '../index/kuniaoIndex.html';
			});
		}
*/
		$('.user_menu a').click(function(){
			//window.location.href = '../index/kuniaoIndex.html';
			window.location.href = global.config.serverBase + '/nav/kn/index';
		});
		
	},
	getData : function(orderType){
		$.ajax({
			url		: global.config.serverBase + 'api/order/list.json',
			type	: 'GET',
			data	: {
				orderType 	: orderType,
				pageSize	: 1,
				pageNum		: 1
			},
			success : function(result){
				if(result && result.code==='100'){
					var total = result.orderList.total;
					var divToSet = '';
					switch(orderType){
						case 2:
							divToSet = 'order-waiting';
							break;
						case 3:
							divToSet = 'order-pay';
							break;
						case 4:
							divToSet = 'order-comment';
							break;
					}
					if(!total || total<1){
						$("."+divToSet).find('.num em').css("display", "none");
					}else{
						$("."+divToSet).find('.num em').html(total).css("display", "block");
					}
				}else {
					result = JSON.parse(result);
					if(result && result.code==='403'){
						window.location.href = global.config.loginHref;
					}else{
						$.toast('error:'+result.msg);
					}
				}
			}
		});
	},
	getUserInfo: function(rs){
		var _ts = this,
			url = global.config.serverBase + 'api/user/getUserInfo.json';

			$.ajax({
				url : url,
				type : 'get',
				dataType : 'json',
				success : function(rs){
					if(rs.code === '403'){
						location.href = global.config.loginHref;
					}else{
						_ts.initUserInfo(rs.userInfo);

					}
				}
			});
	},
	initUserInfo : function(data){
		if(data.hasOwnProperty('profile_photos')){
			$('.user-avator').find('img').attr('src',data.profile_photos);	
		}
		$('.user-avator').find('.name').html(data.nickName);
	}
};
$(document).on("pageInit", "#user_pageCurrent", function(e, id, page) {
	KN_user.init();
});
},{"../common/global.js":1}]},{},[2]);
