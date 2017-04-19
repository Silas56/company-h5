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