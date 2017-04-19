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

var KN_cp = {
	init	: function(){
		var params = GlobalKuNiao.getUrlParam();
		if(params.mobile){
			$('#phone').val(params.mobile);
		}
		this.initBackwards();
		this.initp1Form();
		this.initResetPassword();
	},
	initp1Form : function(){
		$(".cp_next").click(function(){
			var mobile = $('#phone');
			var regcode = $('.regcode');
			var v = mobile.val().length;
			if(mobile.val().length===0){    
				$.toast("手机号码不能为空！");
				mobile.focus();
				return false;
			}
			if(regcode.val().length===0){
				$.toast("验证码不能为空！");
				regcode.focus();
				return false;
			}
			var reg = /^((\+?86)|(\(\+86\)))?(13[0-9]{9}|15[0-9]{9}|18[0-9]{9}|147[0-9]{8}|1349[0-9]{7}|170[0-9]{8})$/;
			if(!reg.test(mobile.val()))
			{
				$.toast("请输入11位手机号码");
				mobile.focus();
				return false;
			}
			KN_cp.next();
		});
	},
	initResetPassword	: function(){
		$(".btnreset").click(function(){
			var p = $(".password");
			var r = $(".repsword");
			if(p.val().length===0){
				$.toast("密码不能为空！");
				p.focus();
				return false;
			}
			if(r.val().length===0){
				$.toast("确认密码不能为空！");
				r.focus();
				return false;
			}
			KN_cp.resetPassword();
		});
	},
	reg		: function(){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'/api/user/sendRedomCode.json',
			type	: 'GET',
			data	: {mobile : $('#phone').val()},
			success	: function(result){
				if(result && result.code==='100'){
					$.toast("发送成功");
				}else{
					$.toast('error:'+result.msg);
				}
			}
		});
	},
	initBackwards : function(){	
		$("#btnpass").click(function(){
			KN_cp.time(this, true);
		});
	},
	time	: function(o, isClicked) {
		if (wait === 0) {
			o.removeAttribute("disabled");
			o.value="短信获取验证码";
			wait = 60;
		}else if(wait===60){
			KN_cp.reg();
		}else { 
			o.setAttribute("disabled", true);
			o.style.backgroundColor = "#666666";
			o.value="重新发送(" + wait + ")";
			wait--;
			setTimeout(function() {
				KN_cp.time(o, false);
			}, 1000);
		}
	},
	next	: function(){
		var data = {
			mobile		: $('#phone').val(),
			redomCode	: $('.regcode').val()
		};
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'api/user/proveRedomCode.json',
			type	: 'POST',
			data	: JSON.stringify(data),
			contentType: "application/json",
			success	: function(result){
				if(result && result.code==='100'){
					window.location.href="changepassword2.html";
				}else{
					$.toast('error:'+result.msg);
				}
			}
		});
	},
	resetPassword	: function(){
		var data = {
			newpwd		: $('.password').val(),
			confirmNewpwd: $('.repsword').val()
		};
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'/api/user/updatePassword.json',
			type	: 'POST',
			data	: JSON.stringify(data),
			contentType: "application/json",
			success	: function(data){
				if(data && data.code==='100'){
					window.location.href="accountsafe.html";
				}else{
					$.toast('error:'+data.msg);
				}
			}
		});
	}
};

var wait=60;



$(document).on("pageInit",'#changepassword1' ,function(e, pageId, $page) {
	KN_cp.init();
 });

$(document).on("pageInit",'#changepassword2' ,function(e, pageId, $page) {
	KN_cp.init();
 });
},{"../common/global.js":1}]},{},[2]);
