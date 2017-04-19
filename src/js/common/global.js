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

