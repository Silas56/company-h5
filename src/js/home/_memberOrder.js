var global= require('../common/global.js');
//加载etpl模板
var etpl = require('../common/etpl.js');
// 加载具体tpl文件
var tplMemberOrder = require('./tpl/memberOrder.html');	

function timer(type){
	var $orderMg = $("#tab" + type + " .order_mg .order_mg_text");
	if($orderMg.size() >0){
		window._oTimer = window._oTimer || {};

		$orderMg.each(function(index){

			var key = type + '_' + index;
			var _nowTime = $(this).find('.currTime').val();
			var _oTime   = $(this).find(".orderTime").attr("value");
				// console.log(_nowTime);
				// console.log(_oTime);
			var diff = 60*60*24 - parseInt((_nowTime - _oTime)/1000,10);

				// console.log(diff);
			    _oTimer[key] = {
			    	timer : '',
			    	diff : diff,
			    	remain : diff
			    };


				if(diff > 0){
					    _oTimer[key].timer = setInterval(function(){

							var h = Math.floor(_oTimer[key].remain/3600);
							var m = Math.floor((_oTimer[key].remain - h*3600)/60);
							var s = Math.floor(_oTimer[key].remain - h*3600 - m*60);

							$orderMg.eq(index).find('.time-item').html(h+'时'+ m +'分'+ s+'秒');

							_oTimer[key].remain--;

							if(_oTimer[key].remain <= 0){
								clearInterval(_oTimer[key].timer);
								location.reload();
							}

					},1000);
				}
		});
	}
}

function timeChange(timestamp)
{
	var d = new Date(parseInt(timestamp));    //根据时间戳生成的时间对象
	var date = (d.getFullYear()) + "-" + 
	           (d.getMonth() + 1) + "-" +
	           (d.getDate());	    
	return date;
}

var KN_MemberOrder = {
	param: {
		orderType	: '1',
		maxItems	: []
	},
	init : function(){
		var params = global.getUrlParam();
		if(params.orderType){
			this.param.orderType = params.orderType;
			this.setActive(params.orderType);
		}
		$(".tab1_all_list").html('');
		this.getData(1);
		this.getData(2);
		this.getData(3);
		this.getData(4);
	},
	initButtons	: function(){
		$(".content_mid").unbind('click').click(function(){
			var $parent = $(this).parent();
			var orderStatus = $parent.find(".orderStatus").val();
			var orderCode = $parent.find(".orderCode").val();
			var paymentCode = $parent.find(".paymentCode").val(); 
			var tabIndex = $(".buttons-tab .active").attr('href');
			tabIndex = tabIndex.substring(tabIndex.indexOf('#tab')+4, tabIndex.length);
			window.location.href = "memberOrderDetail.html?orderCode="+orderCode+"&orderStatus="+orderStatus+'&type='+tabIndex+'&paymentCode='+paymentCode;
		});
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
							//window.location.reload();
							var tabIndex = $(".buttons-tab .active").attr('href');
							tabIndex = tabIndex.substring(tabIndex.indexOf('#tab')+4, tabIndex.length);
							window.location.href = "?orderType="+tabIndex;
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
			var $parent = $(this).parent();
			var paymentCode = $parent.find(".paymentCode").val();
			var orderCode = $parent.find(".orderCode").val();
			window.location.href = "../pay/orderResult.html?paymentCode="+paymentCode+"&orderCode="+orderCode;
		});
		
		$(".applyRefund").unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			window.location.href = "memberRefund.html?orderCode="+orderCode;
		});
		
		$(".resendResume").unbind('click').click(function(){
			var orderCode = $(this).parent().find(".orderCode").val();
			
			$.ajax({
				url		: global.config.serverBase + 'api/order/resendConsumerCode.json',
				type	: 'GET',
				data	: {orderCode : orderCode},
				success	: function(data){
					if(data && data.code==='100'){
						var tabIndex = $(".buttons-tab .active").attr('href');
						tabIndex = tabIndex.substring(tabIndex.indexOf('#tab')+4, tabIndex.length);
						window.location.href = "?orderType="+tabIndex;
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
						var tabIndex = $(".buttons-tab .active").attr('href');
						tabIndex = tabIndex.substring(tabIndex.indexOf('#tab')+4, tabIndex.length);
						window.location.href = "?orderType="+tabIndex;
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
			var $parent = $(this).parent();
			var orderStatus = $parent.find(".orderStatus").val();
			var orderCode = $parent.find(".orderCode").val();
			var productType = $parent.find(".productType").val();

			//记录进入评价页面前的页面
			global.sessionStorage.set('evaluateFrom',"memberOrder");

			var tabIndex = $(".buttons-tab .active").attr('href');
			tabIndex = tabIndex.substring(tabIndex.indexOf('#tab')+4, tabIndex.length);
			global.sessionStorage.set('backOrderType',tabIndex);
			
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
						var tabIndex = $(".buttons-tab .active").attr('href');
						tabIndex = tabIndex.substring(tabIndex.indexOf('#tab')+4, tabIndex.length);
						window.location.href = "?orderType="+tabIndex;
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
	},
	getData:function(orderType, lastIndex){
		var data = {orderType	: orderType};
		if(lastIndex>0){
			data.pageNum = parseInt(lastIndex/10 + 1);
			data.pageSize = 10;
		}else{
			lastIndex = 0;
		}
		$.ajax({
			url	:	global.config.serverBase + 'api/order/list.json',
			type: 'GET',
			cache:false,
			data: data,
			success: function(result){
				if(result && result.code=='100'){
					if(result.orderList.total<1){
						$('#tab'+orderType+" .tab1_all_list").html("<div class='lastRecord' style='text-align:center;font-size: 0.8rem;'>暂无数据<div>");
						$('.infinite-scroll-preloader').eq(orderType-1).hide();
						return;
					}
					KN_MemberOrder.param.maxItems[orderType] = result.orderList.total;
					
					var list = result.orderList.list;
					
					etpl.addFilter('scoreFormat', function ( score, useExtra ) {
						return score==='' ? '' : timeChange(score);
					});
					etpl.addFilter('timeFormat', function ( time, useExtra ) {
						return new Date(parseInt(time)).toLocaleString();
					});
					var render = etpl.compile(tplMemberOrder);
					
					var json = {
							MemberOrder : list,
							currTime : result.currTime
						};
					var text = render(json);
			
					$('#tab'+orderType+" .tab1_all_list").append(text);
					if(orderType === 2 || orderType === 1){
						timer(orderType);	
					}
					// timer();
					KN_MemberOrder.initButtons();
					if(lastIndex+10 >= result.orderList.total){
						var length = $('#tab'+orderType+" .tab1_all_list .lastRecord").length;
						if(length===0){
							$('#tab'+orderType+" .tab1_all_list").append("<div class='lastRecord' style='text-align:center;font-size: 0.8rem;'>已经是最后一条了哦<div>");
							$('.infinite-scroll-preloader').eq(orderType-1).hide();
						}
					}
				}else{
					if(result && result.code==='403'){
						window.location.href = global.config.loginHref;
					}else{
						$.toast("error:"+result.msg);
					}
				}
				
			}
		});
	},
	setActive	: function(orderType){
		var tabLinks = $(".tab-link");
		tabLinks.removeClass("active");
		tabLinks.each(function(item, index){
			var href = $(this).attr("href");
			if(href==='#tab'+orderType){
				$(this).addClass("active");
				return;
			}
		});
		$(".tab").removeClass("active");
		$("#tab"+orderType).addClass("active");
	}
};
 
 $(document).on("pageInit", "#page_member_order", function(e, id, page) {
	KN_MemberOrder.init();
	var loading = false;
	// 每次加载添加多少条目
	var itemsPerLoad = 10;
	$(page).on('infinite', function() {
	  // 如果正在加载，则退出
	  if (loading) return;
	  // 设置flag
	  loading = true;
	  var tabIndex = $(this).find('.infinite-scroll.active').attr('id');
	  tabIndex = tabIndex.substring(3, tabIndex.length);
	  tabIndex = parseInt(tabIndex);
	  var lastIndex =  $('.tab.active').find('.order_list').length;
	//   lastIndex = lastIndex===0 ? 1 : lastIndex+1;
	  // 模拟1s的加载过程
	  setTimeout(function() {
		// 重置加载flag
		loading = false;
		if (!KN_MemberOrder.param.maxItems[tabIndex] || lastIndex >= KN_MemberOrder.param.maxItems[tabIndex]) {
		  // 加载完毕，则注销无限加载事件，以防不必要的加载
		//   $.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
		  // 删除加载提示符
		  $('.infinite-scroll-preloader').eq(tabIndex).hide();
		  return;
		}
		KN_MemberOrder.getData(tabIndex, lastIndex);
		// 更新最后加载的序号
		lastIndex =  $('.tab.active').eq(tabIndex).find('.order_list').length;
		$.refreshScroller();
	  }, 1000);
	});
});