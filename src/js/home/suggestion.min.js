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

var KN_suggestion = {
	emptyText	: "请输入您的意见或建议，我们将不断优化体验",
	tip			: "请输入手机号码或邮箱",
	init	: function(){
		this.initArea();
		this.initSubmit();
	},
	initArea	: function(){
		$('.s_ta').bind('input propertychange', function() {
			var $this = $(this);
			if($this.val().trim()!==''){
				$this.css("color", "black");
				var enteredFonts = $this.val().length;
				$(".enterdFonts").text(enteredFonts);
			}else{
				$(".enterdFonts").text(0);
			}
		});
		$('.s_ta').focus(function(){
			var $this = $(this);
			if($this.val()===KN_suggestion.emptyText){
				$this.css("color", "black");
				$this.val('');
			}
		});
		$('.s_ta').blur(function(){
			var $this = $(this);
			if($this.val().trim()===''){
				$this.val(KN_suggestion.emptyText);
				$this.css("color", "silver");
			}
		});
	},
	initSubmit	: function(){
		$(".s_submit").click(function(){
			var textArea = $(".s_ta");
			if(textArea.val().trim()==='' || KN_suggestion.emptyText===textArea.val()){
				$.toast("请填写反馈内容");
				textArea.focus();
				return false;
			}
			var contectInput = $(".contectInput");
			if(contectInput.val().trim()==='' || contectInput.val().trim()===KN_suggestion.tip){
				$.toast('请填写联系方式');
				contectInput.focus();
				return false;
			}
			KN_suggestion.submitData();
		});
	},
	submitData	: function(){
		var suggestion = $(".s_ta").val();
		var contect = $(".contectInput").val();
		var data = {
			content	:	suggestion,
			contactWay		:	contect
		};
		$.ajax({
			url		: global.config.serverBase + '/api/platform/feeback.json',
			type	: 'GET',
			data	: data,
			success	: function(result){
				if(result && result.code==='100'){
					$.toast('保存成功');
					setTimeout(function(){
						window.location.href = "memberUser.html";
					}, 2000);
				}else if(resultShop && resultShop.code=='403'){
					window.location.href = global.config.loginHref;
				}else{
					$.toast('error:'+result.msg);
				}
			}
		});
	}
};

(function(){
	KN_suggestion.init();
})();
},{"../common/global.js":1}]},{},[2]);
