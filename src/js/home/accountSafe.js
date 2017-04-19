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

