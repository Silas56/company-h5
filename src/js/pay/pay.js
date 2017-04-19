var global 		= require('../common/global.js');
var etpl   		= require('../common/etpl.js');
var tplResult   = require('./tpl/orderResult.html');
var tplPaySuc   = require('./tpl/paySuccess.html');
var tplPaySucAlipay =require('./tpl/paySuccessAlipay.html');

var KN_Pay = {
	config:{
		orderCode : '',
		orderStatus : 1,
		paymentCode: ''
	},
	init : function(){
		var param = global.getUrlParam();

			if(typeof param.orderCode === 'undefined'){
				$.alert('该订单不存在哦!',function(){
					location.href = global.config.knIndex;
				});
				return false;
			}

			global.sessionStorage.set('orderCode',param.orderCode);

			this.config.orderCode = param.orderCode;
			this.config.paymentCode = param.paymentCode;

			this.addFilter();
			this.getOrderInfo();

			this.paySubmit();

			if(navigator.userAgent.match(/MicroMessenger/gi)){
				this.config.payType = 'wechat';
			}else{
				this.config.payType = 'alipay';
			}

	},
	getOrderInfo : function(){
		var _ts  = this;
		var url  = global.config.serverBase + 'api/order/details.json';
		var data = {
			orderCode : this.config.orderCode,
			orderStatus : this.config.orderStatus
		};
			$.ajax({
				url : url,
				type : 'get',
				data : data,
				dataType: 'json',
				success:function(rs){
					if(rs.code === '100'){
						_ts.render(rs);
					}else if(rs.code === '403'){
						location.href = global.config.loginHref;
					}
				}
			});
	},
	render : function(data){
		var $con = $('.suc-container');

		//初始化返回按钮
		$("header .back").unbind('click').click(function(){
			var proList = data.productList;
			var shopInfo = data.shopInfo;
			if(proList.length>0 && proList[proList.length-1].productSpu.trim().length>0 && shopInfo && shopInfo.shopCode.trim().length>0){
				$.router.load("../detail/detail.html?productCode="+proList[proList.length-1].productSpu+"&shopCode="+shopInfo.shopCode);
			}else{
				$(this).removeClass("external");
			}
		});		
		// 初始化模板
		var render = etpl.compile(tplResult);
		//渲染数据
		var text   = render(data);
		// console.log(text);
		$con.html(text);

		this.countdown(data);

	},
	addFilter : function(){
		etpl.addFilter('univalent',function(s1,s2){
			s1 = Number(s1);
			s2 = Number(s2);
			if(s1 === 0){
				return 0;
			}else{
				return s1/s2;	
			}
			
		});

		etpl.addFilter('isWechatNative',function(){
			if(navigator.userAgent.match(/MicroMessenger/gi)){
				return true;
			}else{
				return false;
			}
		});

		etpl.addFilter('formatPrice',function(n){
			n = parseInt(n);
			return n.toFixed(0);
		});
		etpl.addFilter('timeFormat', function ( time, useExtra ) {
			return time==='' ? '' : timeChange(time);
		});
	},
	paySubmit:function(){
		var _ts     = this,
			$payBtn = $('.pay-btn');

			$payBtn.on('click',function(){

				$.showPreloader();

				if(_ts.config.payType === 'wechat'){
					_ts.wechatPay();
				}else{
					_ts.alipay();
				}
			});
	},
	alipay : function(){
		var url = global.config.serverBase + 'api/knpay/pay/alipay/wap.json';
		var rurl = 'http://'+location.host + '/shop/static/html/pay/paySuccessAlipay.html?orderCode='+this.config.orderCode;
		// var rurl = 'http://'+location.host + '/shop/static/html/pay/paySuccess.html';
		var data = {
			invoice_id : this.config.paymentCode,
			order_id : this.config.orderCode,
			return_url : rurl
		};

		$.ajax({
			url : url,
			type : 'get',
			dataType : 'json',
			data : data,
			success : function(rs){
				if(rs.code === '100'){
					$('.content').append(rs.htmlText);
					$('#alipaysubmit').submit();
				}else{
					$.hidePreloader();
					$.toast(rs.msg);
				}
			}
		});
	},
	wechatPay : function(){
		var params = {
			invoice_id	: KN_Pay.config.paymentCode,
			order_id	: KN_Pay.config.orderCode
		};
		$.hidePreloader();
		wechatJSPay.init(params);
	},
	countdown : function(data){
		var $countdown = $('.countdown').find('.countdown-time');
			
			console.log(data);
			if($countdown.size() > 0){
				var orderTime = parseInt(data.userOrderBean.orderTime,10)/1000;

				var nowTime = (new Date(data.currTime)).getTime()/1000;

				var _24H = 60*60*24;

				var sTime = _24H - (nowTime - orderTime);
				if(sTime > 0){
					var timer =	setInterval(function(){
						var h = Math.floor(sTime/3600);
						var m = Math.floor((sTime - h*3600)/60);
						var s = Math.floor(sTime - h*3600 - m*60);

						$countdown.html(h+'时'+ m +'分'+ s+'秒');

						sTime--;

						if(sTime <= 0){
							clearInterval(timer);
							$('.countdown').remove();
						}
					},1000);
				}else{
					$('.countdown').remove();
					$('.pay-btn').addClass('disabled');
				}  

			}
	}
};

var KN_PaySuccess = {
	config:{
		orderCode : '',
		orderStatus : 4,
		shopCode : ''
	},
	init : function(){
			var params    = global.getUrlParam();
			var shopCode  = global.localStorage.get('shopCode') || 1;
			var orderCode = params.orderCode;

			if(typeof orderCode === 'undefined'){
				$.alert('该页面已经失效！',function(){
					location.href = global.config.knIndex;
				});
			}

			this.config.orderCode = orderCode;
			this.config.shopCode  = shopCode;
			
			this.addFilter();
			this.getOrderInfo();

			// this.conitue();
	},
	getOrderInfo : function(){
		var _ts  = this;
		var url  = global.config.serverBase + 'api/order/details.json';
		var data = {
			orderCode : this.config.orderCode,
			orderStatus : this.config.orderStatus
		};
			$.ajax({
				url : url,
				type : 'get',
				data : data,
				dataType: 'json',
				success:function(rs){
					if(rs.code === '100'){
						_ts.render(rs);
					}else if(rs.code === '403'){
						$.alert('你还未登陆哦！请先登陆',function(){
							location.href = global.config.loginHref;
						});
					}
					//_ts.delOrderInfo();
				}
			});
	},
	render : function(data){
		var $con = $('.suc-container');

		//初始化返回按钮
		$("header .back").click(function(){
			var proList = data.productList;
			var shopInfo = data.shopInfo;
			if(proList.length>0 && proList[proList.length-1].productSpu.trim().length>0 && shopInfo && shopInfo.shopCode.trim().length>0){
				window.location.href = "../detail/detail.html?productCode="+proList[proList.length-1].productSpu+"&shopCode="+shopInfo.shopCode;
			}else{
				$(this).removeClass("external");
			}
		});
		
		// 初始化模板
		var render = etpl.compile(tplPaySuc);
		//渲染数据
		var text   = render(data);
		// console.log(text);
		$con.html(text);
		// to detail.html
		$('.item').on('click',function(){
			var ocode = $(this).attr('data-ordercode');

			window.location.href = '../home/memberOrderDetail.html?orderCode='+ocode+'&orderStatus=4&type=3';
		});

		$('#paySuccess').on('click','.pay-btn',function(){
			window.location.href = '../index/index.html?shopCode=' + data.shopInfo.shopCode;
		});
	},
	addFilter : function(){
		etpl.addFilter('univalent',function(s1,s2){
			s1 = Number(s1);
			s2 = Number(s2);
			if(s1 === 0){
				return 0;
			}else{
				return s1/s2;	
			}
			
		});
		etpl.addFilter('formatPrice',function(n){
			n = parseInt(n);
			return n.toFixed(0);
		});
		etpl.addFilter('timeFormat', function ( time, useExtra ) {
			return time==='' ? '' : timeChange(time);
		});
	},
	delOrderInfo : function(){
		global.sessionStorage.del('orderInfo');
	}
};

var KN_PaySuccessAlipay = {
	config:{
		orderCode : '',
		orderStatus : 4,
		shopCode : ''
	},
	init : function(){
			var params    = global.getUrlParam();
			var shopCode  = global.localStorage.get('shopCode') || 1;
			var orderCode = params.orderCode;

			if(typeof orderCode === 'undefined'){
				$.alert('该页面已经失效！',function(){
					location.href = global.config.knIndex;
				});
			}

			this.config.orderCode = orderCode;
			this.config.shopCode  = shopCode;
			
			this.addFilter();
			this.getOrderInfo();

			// this.conitue();
	},
	getOrderInfo : function(){
		var _ts  = this;
		var url  = global.config.serverBase + 'api/order/details.json';
		var data = {
			orderCode : this.config.orderCode,
			orderStatus : this.config.orderStatus
		};
			$.ajax({
				url : url,
				type : 'get',
				data : data,
				dataType: 'json',
				success:function(rs){
					if(rs.code === '100'){
						_ts.render(rs);
					}else if(rs.code === '403'){
						$.alert('你还未登陆哦！请先登陆',function(){
							location.href = global.config.loginHref;
						});
					}
					//_ts.delOrderInfo();
				}
			});
	},
	render : function(data){
		var $con = $('.suc-container');

		//初始化返回按钮
		$("header .back").click(function(){
			var proList = data.productList;
			var shopInfo = data.shopInfo;
			if(proList.length>0 && proList[proList.length-1].productSpu.trim().length>0 && shopInfo && shopInfo.shopCode.trim().length>0){
				window.location.href = "../detail/detail.html?productCode="+proList[proList.length-1].productSpu+"&shopCode="+shopInfo.shopCode;
			}else{
				$(this).removeClass("external");
			}
		});
		
		// 初始化模板
		var render = etpl.compile(tplPaySucAlipay);
		//渲染数据
		var text   = render(data);
		// console.log(text);
		$con.html(text);
		// to detail.html
		$('.item').on('click',function(){
			var ocode = $(this).attr('data-ordercode');

			window.location.href = '../home/memberOrderDetail.html?orderCode='+ocode+'&orderStatus=4&type=3';
		});

		$('#paySuccessAlipay').on('click','.pay-btn',function(){
			window.location.href = '../index/index.html?shopCode=' + data.shopInfo.shopCode;
		});
	},
	addFilter : function(){
		etpl.addFilter('univalent',function(s1,s2){
			s1 = Number(s1);
			s2 = Number(s2);
			if(s1 === 0){
				return 0;
			}else{
				return s1/s2;	
			}
			
		});
		etpl.addFilter('formatPrice',function(n){
			n = parseInt(n);
			return n.toFixed(0);
		});
		etpl.addFilter('timeFormat', function ( time, useExtra ) {
			return time==='' ? '' : timeChange(time);
		});


	},
	delOrderInfo : function(){
		global.sessionStorage.del('orderInfo');
	}
};

var wechatJSPay = {
	params : {},
	init	: function(data){
		//data 必须传 invoice_id(发票/凭证号)， order_id(订单编号)
		$.ajax({
			url		: global.config.serverBase + '/api/knpay/pay/wxpay/jsapi.json',
			type	: 'GET',
			data	: data,
			success	: function(data){
				if(data && data.code==="100"){
					wechatJSPay.params.nonceStr = data.nonceStr;
					wechatJSPay.params.paySign = data.paySign;
					wechatJSPay.params.package = data.prepayId;
					wechatJSPay.params.signType = data.signType;
					wechatJSPay.params.timeStamp = data.timeStamp;
					wechatJSPay.params.appId = data.appId;
					
					wechatJSPay.addListener();
				}else if(data.code==="404"){
					$.confirm('您还没有绑定微信呢，现在绑定？', function(){
						window.location.href = global.config.serverBase + 'nav/wxOAuth/bind';
					});
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	jsApiCall	: function(){
		WeixinJSBridge.invoke(
			'getBrandWCPayRequest',
			wechatJSPay.params,
			function(res){
				if (res.err_msg == "get_brand_wcpay_request:ok") {
					wechatJSPay.queryOrder(KN_Pay.config.paymentCode, KN_Pay.config.orderCode); //须传递支付凭证code和订单code
				} else if (res.err_msg == "get_brand_wcpay_request:cancel") {
					$.toast("交易取消");
				} else if (res.err_msg == "get_brand_wcpay_request:fail") {
					$.toast("交易失败");
				} else {
					$.toast(res.err_msg);
				}				
			}
		);
	},
	addListener	: function(){
		if (typeof WeixinJSBridge == "undefined"){
			if( document.addEventListener ){
				document.addEventListener('WeixinJSBridgeReady', this.jsApiCall, false);
			}else if (document.attachEvent){
				document.attachEvent('WeixinJSBridgeReady', this.jsApiCall); 
				document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
			}
		}else{
			this.jsApiCall();
		}
	},
	queryOrder	: function(invoiceId, orderId){
		$.ajax({
			url		: global.config.serverBase + 'api/knpay/query.json',
			type	: 'GET',
			data	: {
				invoice_id		: invoiceId,
				order_id		: orderId
			},
			success	: function(data){
				if(data && data.code==="100"){
					var isPayed = data.isPayed;
					if(isPayed){
						window.location.href = "paySuccess.html?orderCode="+orderId;
					}else{
						$.toast("未付款");
					}
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	getParams	: function(){
		$.ajax({
			url		: 'api/knpay/query.json',
			type	: 'GET',
			data	: {
				invoice_id		: invoiceId,
				payment_method	: 'wechat',
				payment_scene	: 'JSAPI'
			},
			success	: function(data){
				if(data && data.code==="100"){
					//TODO: window.location.href = "page to navigate"; //须根据查询的支付状态跳转到对应页面
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	}
};

function timeChange(timestamp)
{
	var d = new Date(parseInt(timestamp));    //根据时间戳生成的时间对象
	var date = (d.getFullYear()) + "-" + 
	           (d.getMonth() + 1) + "-" +
	           (d.getDate());	    
	return date;
}

// 路由load
$(document).on("pageInit",'#payOrderResult', function(e, pageId, $page) {
	KN_Pay.init();
});

$(document).on("pageInit",'#paySuccess', function(e, pageId, $page) {
	KN_PaySuccess.init();
});

$(document).on("pageInit",'#paySuccessAlipay', function(e, pageId, $page) {
	KN_PaySuccessAlipay.init();
});

