var global= require('../common/global.js');
//加载etpl模板
var etpl = require('../common/etpl.js');
// 加载具体tpl文件
var tplOrderDetails = require('./tpl/memberOrderDetails.html');	

// var intDiff = parseInt(86400);//倒计时总秒数量
function timer(intDiff){
    window.setInterval(function(){
    var day=0,
    	hour=0,
        minute=0,
        second=0;//时间默认值       
    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }else{
		window.setTimeout(function(){
			window.location.reload();
		},1000);
	}
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('#hour_show').html(hour+'时');
    $('#minute_show').html(minute+'分');
    $('#second_show').html(second+'秒');
    intDiff--;
    }, 1000);
} 

function dateChange(timestamp)
{
	var d = new Date(timestamp * 1000);    //根据时间戳生成的时间对象
	var date = (d.getFullYear()) + "-" + 
	           (d.getMonth() + 1) + "-" +
	           (d.getDate());
	 
	    
	return date;
}
function timeChange(timestamp)
{
	// 对Date的扩展，将 Date 转化为指定格式的String
	// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
	// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
	// 例子： 
	// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
	// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
	Date.prototype.Format = function (fmt) { //author: meizz 
	    var o = {
	        "M+": this.getMonth() + 1, //月份 
	        "d+": this.getDate(), //日 
	        "h+": this.getHours(), //小时 
	        "m+": this.getMinutes(), //分 
	        "s+": this.getSeconds(), //秒 
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	        "S": this.getMilliseconds() //毫秒 
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	};

	var d = new Date(timestamp * 1000);    //根据时间戳生成的时间对象
	// var date = (d.getFullYear()) + "-" + 
	//            (d.getMonth() + 1) + "-" +
	//            (d.getDate()) + " " + 
	//            (d.getHours()) + ":" + 
	//            (d.getMinutes()) + ":" + 
	//            (d.getSeconds());
	// return date;

	return d.Format("yyyy-M-d hh:mm:ss");

	// var d = new Date(timestamp);    //根据时间戳生成的时间对象
	// var date = (d.getFullYear()) + "-" + 
	//            (d.getMonth() + 1) + "-" +
	//            (d.getDate()) + " " + 
	//            (d.getHours()) + ":" + 
	//            (d.getMinutes()) + ":" + 
	//            (d.getSeconds());
	// return date;
}

etpl.addFilter('formatCertType',function(s){
	var s1 = parseInt(s,10);
	var v = '';

	switch(s1){
		case 1 : v = '身份证';break;
		case 2 : v = '护照';break;
		case 3 : v = '其他';break;
		case 4 : v = '港澳通行证';break;
		case 5 : v = '军官证'; break;
		case 6 : v = '学生证'; break;
		default : 
			v = '';
	}

	return v ;

});


var KN_MemberOrderDetail = {
	param	: {
		orderCode : '',
		orderStatus : 4
	},
	init : function(){
		var params = global.getUrlParam();
		this.param.orderCode = params.orderCode;
		this.param.orderStatus = params.orderStatus ? params.orderStatus : 4;
		var orderType = params.type;
		if(!orderType){
			orderType = '1';
		}
		$(".back").attr("href", "memberOrder.html?orderType="+orderType);
		this.getData();
	},
	initButtons		: function(){
		$(".cancelOrder").unbind('click').click(function(){
			var $parent = $(this).parent();
			$.confirm('订单取消后将无法恢复', function(){
				var orderCode = $parent.find(".orderCode").val();
				$.ajax({
					url		: global.config.serverBase + 'api/order/cancelOrder.json',
					type	: 'GET',
					data	: {orderCode : orderCode},
					success	: function(result){
						if(result && result.code==='100'){
							window.location.reload();
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
			});
		});
		
		$(".pay").unbind('click').click(function(){
			var params = global.getUrlParam(); 
			var $parent = $(this).parent();
			var paymentCode = $parent.find(".paymentCode").val();
			if(!paymentCode){
				paymentCode = params.paymentCode;
			}
			var orderCode = $parent.find(".orderCode").val();

			window.location.href = "../pay/orderResult.html?paymentCode="+paymentCode+"&orderCode="+orderCode;
		});
		
		$(".refund").unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			window.location.href = "memberRefund.html?orderCode="+orderCode;
		});
		
		$(".resendResume").unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			$.ajax({
				url		: global.config.serverBase + 'api/order/resendConsumerCode.json',
				type	: 'GET',
				data	: {orderCode : orderCode},
				success	: function(result){
					if(result && result.code==='100'){
						window.location.reload();
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
		});
		
		$(".cancelRefund").unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			var data = {
				orderCode	: orderCode
			};
			$.ajax({
				url	:	global.config.serverBase + 'api/order/cancelRefundOrder.json',
				type: 'GET',
				data: data,
				success: function(result){
					if(result && result.code=='100'){
						window.location.reload();
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
		});
		
		$(".applyArbitration").unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			window.location.href = "memberArbitration.html?orderCode="+orderCode;
		});
		
		$(".evaluate").unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			var orderStatus = $(this).parent().find(".orderStatus").val();
			var productType = $(this).parent().find(".productType").val();

			//记录进入评价页面前的页面
			global.sessionStorage.set('evaluateFrom',"memberOrderDetail");

		    window.location.href = "memberEvaluate.html?orderCode="+orderCode+"&productType="+productType+"&orderStatus="+orderStatus;
		});
		
		$(".cancelArbitration").unbind('click').click(function(){
			var arbitrationCode = $(this).parent().find(".arbitrationCode").val();
			var data = {
				arbitrationCode	: arbitrationCode
			};
			$.ajax({
				url	:	global.config.serverBase + 'api/order/cancelArbitration.json',
				type: 'POST',
				data: data,
				success: function(result){
					if(result && result.code=='100'){
						window.location.reload();
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
		});
		$('.content_mid').unbind('click').click(function(){
			var sCode = $(this).attr('data-shopCode'),
				pSpu = $(this).attr('data-productCode');
			$.router.load('../detail/detail.html?shopCode=' + sCode + '&productCode=' + pSpu );
		});

		// 交易快照
		$('.orderSnapshot').unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			$.router.load('../detail/detailSnapshot.html?orderCode=' + orderCode );
		});
	},
	getData : function(){
		 $.ajax({
		 	url	:	global.config.serverBase + 'api/order/details.json',
		 	type: 'GET',
		 	data:{
				orderCode	: this.param.orderCode,
				orderStatus	: this.param.orderStatus
		 	},
		 	success: function(result){
		 		// console.log(result);
				if(result && result.code=='100'){
					var userOrderPlayerInfoBean = result.userOrderPlayerInfoBean;
					var intDiff =86400-(Math.round(new Date().getTime()/1000)-(result.userOrderBean.lastUpdateTime/1000));

					etpl.addFilter( 'dateFormat', function ( date, useExtra ) {
						return dateChange(date/1000);
					});

					etpl.addFilter( 'timeFormat', function ( time, useExtra ) {
						return timeChange(time/1000);
					});

					etpl.addFilter( 'indexFormat', function (s) {
						return parseInt(s,10)+1;
					});

					etpl.addFilter( 'fourNumOneSpace', function (s) {
						return s.replace(/(\d{4})(?=\d)/g,"$1 ");
					});

				// var userNoticesResp = result.userOrderBean.userNoticeList;
				// if(userNoticesResp && userNoticesResp.length>0){
					var render = etpl.compile(tplOrderDetails);
					
					var json = {
						intDiff:intDiff,
						orderDetails : result,
						userOrderPlayerInfoBean: userOrderPlayerInfoBean
					};
					var text = render(json);
			
					$(".content").html(text);
					// }
					
					if(intDiff>0){
						timer(intDiff);
					}
					
					KN_MemberOrderDetail.initButtons();
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
	}
};

$(document).on("pageInit",'#orderDetail_pageCurrent' ,function(e, pageId, $page) {
	KN_MemberOrderDetail.init();
});