//var g_interface = 'http://14.215.56.46:82/m';
//加载etpl模板
var etpl = require('../common/etpl.js');
// 加载具体tpl文件
var tplMemberMynews = require('./tpl/memberMynews.html');
var global= require('../common/global.js');

var KN_Detail = {
	init : function(){
		this.getData();
	},
	getData:function(){
		 $.ajax({
		 	url	:	global.config.serverBase + 'api/user/getNotices.json',
		 	type: 'GET',
		 	success: function(result){
				if(result && result.code=='100'){
					var userNoticesResp = result.userNoticesResp.userNoticeList;
					if(userNoticesResp && userNoticesResp.length>0){
						var render = etpl.compile(tplMemberMynews);
						
						var json = {myNews : userNoticesResp};
						var text = render(json);
				
						$(".content").html(text);
						$(".order").click(function(){
							var orderCode = $(this).attr("oc");
							var orderStatus = $(this).attr("os");
							window.location.href = "memberOrderDetail.html?orderCode="+orderCode+"&orderStatus="+orderStatus;
						});
					}
				}else{
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
};

$(document).on("pageInit", "#mynews_pageCurrent", function(e, id, page) {
	KN_Detail.init();
});