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
var global = require('../common/global.js');

var KN_as = {
	init : function(){

		this.getData();

		// this.updateBirth();

	},
	getData : function(){
		$.ajax({
			type	: 'GET',
			url		:	global.config.serverBase+'/api/user/getUserInfo.json',
			success : function(data){
				KN_as.updateBirth();
				if(data && data.code==='100'){
					var userInfo = data.userInfo;
					if(userInfo){
						var nickName = userInfo.nickName;
						if(!nickName){
							nickName = "未设置";
						}
						$(".nickname .nav1 a").text(nickName).attr('href',"changename.html?name="+nickName);
						
						if(userInfo.gender){
							var gender = '';
							if(userInfo.gender === 1){
								gender = '男';
							}else if(userInfo.gender === 2){
								gender = '女';
							}else {
								gender = '保密';
							}
							$(".sex").html(gender);
						}
						
						if(userInfo.birthday){
							$(".birth").val(userInfo.birthday);
						}
						var photo = userInfo.profile_photos;
						if(!photo){
							if(userInfo.gender===1){
								photo = '../../images/home/photo_man.jpg';
							}else if(userInfo.gender===2){
								photo = '../../images/home/photo_woman.jpg';
							}else{
								photo = '../../images/home/photo_default.jpg';
							}
						}
						$(".img-right").attr("src", photo);
					}
				}else{
					if(data && data.code==='403'){
						window.location.href = global.config.loginHref;
					}else{
						$.toast('error:'+data.msg);
					}
				}
			}
		});
	},
	uploadFile : function(){		
		var data = {
			module	: 'user',
			file	: $(".headUpload").val()
		};
		$.ajax({
			type	: 'POST',
			data	: data,
			url		: global.config.serverBase+'api/common/upload.json',
			enctype : 'multipart/form-data',
			success : function(data){
				if(data && data.code==='100'){
					$(".img-right").attr("src", data.imgUrl);
					KN_as.updateUserInfo(2, data.imgUrl); //更新头像
				}else{
					data = JSON.parse(data);
					if(data && data.code==='403'){
						window.location.href = global.config.loginHref;
					}else{
						$.toast('error:'+data.msg);
					}
				}
				
			}
		});	
	},
	updateUserInfo : function(type, value){ //上传图片
		var data = {
			type	:	type,
			value	:	value
		};
		 console.log(data);
		$.ajax({
			type	: 'GET',
			url		:	global.config.serverBase+'api/user/updateUser.json',
			data	: data,
			success : function(data){
				if(data && data.code==='100'){
					if(type===2){
						$(".img-right").attr("src", value);
					}
					KN_as.getData();
					/*if (type===3 && value===1) {
						$(".img-right").attr("src", '../../images/home/photo_man.jpg');
					}else {
						$(".img-right").attr("src", '../../images/home/photo_woman.jpg');
					}*/
					$.toast("操作成功");
				}else{
					// data = JSON.parse(data);
					if(data && data.code==='403'){
						window.location.href = global.config.loginHref;
					}else{
						$.toast(data.msg);
					}
				}
			}
		});
	},
	updateBirth: function(){
		var nowTime = new Date(),
			y 		= nowTime.getFullYear(),
			m 		= nowTime.getMonth() + 1,
			d 	 	= nowTime.getDate();

			m = m > 9 ? m : '0' + m;
			d = d > 9 ? d : '0' + d;

			// console.log((y-10) + '-' + m + '-' + d);
		$(".birth").calendar({
			onOpen:function(){
				$.ajax({
					type	: 'GET',
					url		:	global.config.serverBase+'/api/user/getUserInfo.json',
					success : function(data){
						if(data && data.code==='100'){

						}else{
							if(data && data.code==='403'){
								window.location.href = global.config.loginHref;
							}else{
								$.toast('error:'+data.msg);
							}
						}
					}
				});
			},
			// value : [y + '-' + m + '-' + d],
			maxDate : y + '-' + m + '-' + d,
			onChange : function(p, values, displayValues){
				KN_as.updateUserInfo(4, displayValues[0]); //更新出生日期
				p.destroy();
			}
		});
	},
	logout : function(){
		window.location.href = global.config.logoutHref;
	}
};

// 路由load
$(document).on("pageInit",'#accountsetting' ,function(e, pageId, $page) {
	KN_as.init();
	$(".modal-overlay").click(function(e){
		e.stopPropagation();
	});
	$('.sexdiv').click(function(){
		$.ajax({
			type	: 'GET',
			url		:	global.config.serverBase+'/api/user/getUserInfo.json',
			success : function(data){
				if(data && data.code==='100'){
					$.modal({
						// title : '',
						verticalButtons:true,
						extraClass : 'popup-sexdiv',
						buttons : [
							{
								text: '男',
								close : true,
								onClick : function(){
									$(".sex").text('男');
									KN_as.updateUserInfo(3, 1); //更新性别
								}
							},
							{
								text: '女',
								close : true,
								onClick : function(){
									$(".sex").text('女');
									KN_as.updateUserInfo(3, 2); //更新性别
								}
							}
						]
					});
				}else{
					if(data && data.code==='403'){
						window.location.href = global.config.loginHref;
					}else{
						$.toast('error:'+data.msg);
					}
				}
			}
		});
	});
	
	$(".radioOption").click(function(e){
		e.cancelBubble = true;
		//preventDefaul
		$(".optionList").css("display", "none");
		$(".modal-overlay").removeClass("modal-overlay-visible");
		var $this = $(this);
		var text = $this.text();
		$(".sex").text(text);
		KN_as.updateUserInfo(3, $this.val()); //更新性别
	});
	
	$(".headUpload").click(function(e){
		$.ajax({
			type	: 'GET',
			url		:	global.config.serverBase+'/api/user/getUserInfo.json',
			success : function(data){
				if(data && data.code==='100'){

				}else{
					if(data && data.code==='403'){
						window.location.href = global.config.loginHref;
					}else{
						$.toast('error:'+data.msg);
					}
				}
			}
		});
	});


	$(".headUpload").change(function(e){
		//KN_as.uploadFile();
		var _iframe =  $('iframe[name=ajaxUpload]').get(0);
		_iframe.onload = _iframe.onreadystatechange = iframeLoad;

		function iframeLoad(){
			if (!_iframe.readyState || _iframe.readyState == "complete") {
				try{
					var _ret = _iframe.contentWindow.document;
					_ret = _ret.getElementsByTagName('pre')[0].innerText;
					_ret = JSON.parse(_ret);
					if(_ret.code=='905'){
						$.toast(_ret.msg);
					}
					if (!!_ret.imgUrl) {
						$(".img-right").attr("src", _ret.imgUrl);
						KN_as.updateUserInfo(2, _ret.imgUrl); //更新头像
					}
				}catch(e){
					console.log(e);
				}
			}
		}

		var f = e.currentTarget.files[0];
		var reg=new RegExp('\\.(jpg|png|jpeg|gif)$',"i");
		var maxFileSize = 1000000;

        if(f) {
        	if(reg.test(f.name)){
        		if(f.size <= maxFileSize) {
					$(".form").attr("action", global.config.serverBase+'/api/common/upload.json');
					$(".form").submit();
	            }else{
	            	$.toast('图片大小不可大于1M');
	            }
        	}else{
        		$.toast('只支持png、jpg、jpeg、gif格式的图片上传');
        	}
        }
	});

	$(".exit-acount-li").click(function(){ //退出
		$.confirm('确定退出当前账户 ?', function () {
			KN_as.logout();
		});
	});
	$(".acount-safe-li").click(function(){
		$.router.load("accountsafe.html");
	});
 });

},{"../common/global.js":1}]},{},[2]);
