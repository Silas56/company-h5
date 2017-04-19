var global= require('../common/global.js');
//加载etpl模板
var etpl = require('../common/etpl.js');
// 加载具体tpl文件
//var tplMemberMyCollection = require('./tpl/memberMyCollection.html');	
//
function arbitration_sub()
{
	var curLength =  $("#TextArea1").val(),
		arbitration_money = $("#arbitration_mon_inp").val(),
		amount    = parseInt(KN_Arbitration.amount,10);	

	if(arbitration_money.length===0){
		$.toast("请填写退款金额");
		return false;
	}else if(arbitration_money<=0){
		$.toast("请填写正确的金额");
		return false;
	}else if(!arbitration_money.match(/^[0-9]*$/)){
		$.toast("请填写正确的金额");
		return false;
	}else if(arbitration_money > amount){
		$.toast("申请退款金额不能大于" + amount + '元');
		return false;
	}

	if(curLength.length===0){
		$.toast("请填写退款描述");
		return false;
	}else if(curLength.length > 300){
		$.toast("退款描述字数不能超过300个字哦！");
		return false;
	}

	return true;
}
	

var KN_Arbitration = {
	init : function(){
		var params = global.getUrlParam();
		var orderCode = params.orderCode;
		this.getData(orderCode);
		this.initButtons(orderCode);
	},
	getData		: function(orderCode){
		var _ts = this;
		$.ajax({
			url	:	global.config.serverBase + 'api/order/details.json',
			type: 'GET',
			data: {
				orderCode	: orderCode,
				orderStatus	: '4'
			},
			success: function(data){
				if(data && data.code==='100'){
					var order = data.userOrderBean;
					if(order){
						var amount = order.orderCountPrice;
						$(".amount").text(amount);

						_ts.amount = amount;
					}
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
	initButtons		: function(orderCode){
		$('.refund_text_con').on('input', function() {
			var $this = $(this);
			if($this.val().trim()!==''){
				var enteredFonts = $this.val().length;
				$(".fonts").text(enteredFonts);
			}else{
				$(".fonts").text(0);
			}
		});
		$(".refund_money_inp").keyup(function(){
			var money = $(this).val();
			var amount = $(".amount").text();
			money = parseFloat(money);
			amount = parseFloat(amount);
			if(money && money>amount){
				$(this).val(amount);
			}
		});
		$("#ArbitrationSubmit").on('click',function(){
			if(arbitration_sub()){
				var data = {
					applyArbitrationReason	: $(".refund_text_con").val(),
					applyArbitrationAmount	: $(".refund_money_inp").val(),
					orderCode				: orderCode
				};
				$.ajax({
					url	:	global.config.serverBase + 'api/order/applyArbitration.json',
					type: 'POST',
					data: JSON.stringify(data),
					contentType: "application/json",
					success: function(data){
						if(data && data.code==='100'){
							$.toast('提交成功');
							//$.alert(data.msg,function(){
							window.location.href='memberOrder.html?orderType=1';
							//});
						}else{
							data = JSON.parse(data);
							if(data && data.code==='403'){
								//TODO:跳转到登录页面
								location.href = global.config.loginHref;
							}else{
								$.toast('error:'+data.msg);
							}
						}
					}
						
				});
			}
		});
		
	},
};

$(document).on("pageInit",'#memberArbitration' ,function(e, pageId, $page) {
	KN_Arbitration.init();
 });
