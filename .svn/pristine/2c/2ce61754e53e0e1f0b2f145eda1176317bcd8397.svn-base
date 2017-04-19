var global= require('../common/global.js');
//加载etpl模板
var etpl = require('../common/etpl.js');
// 加载具体tpl文件
//var tplMemberMyCollection = require('./tpl/memberMyCollection.html');	
//
var arr,curLength,refund_money,num;
function refund_sub()
{  
			 /*------判断radio是否有选中，获取选中的值--------*/  
	arr=document.getElementsByName("my-radio");
	curLength=$("#TextArea1").val().length; 
	refund_money=$("#refund_money_input").val().length;
	num = 0;

	var j =0;
	for(var i=0;i<arr.length;i++)
	{
	  if(arr[i].checked)
		{	
			num = i;
			j=1;
		}
	}
	  	
	if(j===0)
	{	
		$.toast("请选择退申请退款原因");
		return false;	
	}
	
		else if(refund_money===0)
	{
		$.toast("请填写退款金额");
		return false;
	}
	else if(curLength===0)
	{
		$.toast("请填写退款描述");
		return false;
	}	 
     
}
	

var KN_Refund = {
	param : {
		refundReason : 0
	},
	init : function(){
		var params = global.getUrlParam();
		var orderCode = params.orderCode;
		this.initButtons(orderCode);
		this.getData(orderCode);
	},
	getData		: function(orderCode){
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
	initButtons : function(orderCode){
		$(".refundReason").click(function(){
			$(".refundReasonList").css("display", "block");
			$(".modal-overlay").addClass("modal-overlay-visible");
		});
		
		$(".radioOption").click(function(){
			var refundReason = $(this).attr("value");
			KN_Refund.param.refundReason = parseInt(refundReason);
			var selectedText = $(this).find(".modal-text").text();
			$(".refundReason").val(selectedText);
			$(".refundReasonList").css("display", "none");
			$(".modal-overlay").removeClass("modal-overlay-visible");
		});
		$('.refund_text_con').bind('input propertychange', function() {
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
		$("#RefundSubmit").click(function(){
			//refund_sub();
			if(KN_Refund.checkForm())
			{
				var data = {
					applyRefundReason	: KN_Refund.param.refundReason,
					applyRefundAmount	: $(".refund_money_inp").val(),
					applyRefundDescribe	: $("#TextArea1").val(),
					orderCode			: orderCode
				};
				$.ajax({
					url	:	global.config.serverBase + 'api/order/applyRefund.json',
					type: 'POST',
					data: JSON.stringify(data),
					contentType: "application/json",
					success: function(data){
						if(data && data.code==='100'){
							window.location.href = "memberOrder.html?orderType=1";
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
			}
		});
		
	},
	checkForm	: function(){
		if(this.param.refundReason===0 || this.param.refundReason==='0'){
			$.toast("请选择退申请退款原因");
			return false;
		}
		if($(".refund_money_inp").val()===''){
			$.toast("请填写退款金额");
			return false;
		}
		if($(".fonts").text()==='0'){
			$.toast("请填写退款描述");
			return false;
		}
		return true;
	}
};

$(document).on("pageInit", "#refund_pageCurrent", function(e, id, page) {
	KN_Refund.init();
});