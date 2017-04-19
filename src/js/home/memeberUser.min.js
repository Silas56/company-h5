(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// $(function () {
//   'use strict';
$(document).on("pageInit", "#user_pageCurrent", function(e, id, page) {
	
	/*个人中心菜单*/
	var  gt='.shadeDiv,.point,.point_click';
	var divs = $("body *").not(".shadeDiv").not(".point").not(".point_click");
	$(document).click(function(){
		$(".point_click").hide();
		});
	$(document).on('click',gt,function(){
	$(".point_click").toggle();			
	});
	
});


	/*申请退款 文本域输入限制*/
function words_deal() 
{ 

	var curLength=$("#TextArea1").val().length; 
	if(curLength>300) 
	{ 
		var num=$("#TextArea1").val().substr(0,300); 
		$("#TextArea1").val(num); 
	} 
	else 
	{ 
		$("#get_refund_text_num").text($("#TextArea1").val().length+"/300"); 
	} 
}



/*申请退款提交*/
// function refund_sub()
// {  
// 			 /*------判断radio是否有选中，获取选中的值--------*/  
// 	var arr=document.getElementsByName("my-radio");
// 	var curLength=$("#TextArea1").val().length; 
// 	var refund_money=$("#refund_money_input").val().length;

// 	var j =0;
// 	for(var i=0;i<arr.length;i++)
// 	{
// 	  if(arr[i].checked)
// 		{	
// 			j=1;
// 		}
// 	}
	  	
// 	if(j===0)
// 	{	
// 		$.toast("请选择退申请退款原因");
// 		return false;	
// 	}
	
// 		else if(refund_money===0)
// 	{
// 		$.toast("请填写退款金额");
// 		return false;
// 	}
// 	else if(curLength===0)
// 	{
// 		$.toast("请填写退款描述");
// 		return false;
// 	}	 
     
// }
	

// function arbitration_sub()
// {
// 	var curLength=$("#TextArea1").val().length; 
// 	var arbitration_money=$("#arbitration_mon_inp").val().length;	

// 	if(arbitration_money===0)
// 	{
// 		$.toast("请填写退款金额");
// 		return false;
// 	}
// 	else if(curLength===0)
// 	{
// 		$.toast("请填写退款描述");
// 		return false;
// 	}
// }


 // 评价

// 星星
// $(document).on("pageInit", "#page_evaluate", function(e, id, page) {
// 	$(".formItemDiff").css("background-position", "0px -555px");

// 	$(".formItemDiff").click(function() {
// 	    $(this).css("background-position", "0px -555px");
// 	    $(this).nextAll().css("background-position", "0px -555px");
// 	    $(this).prevAll().css("background-position", "0px -575px");
	  
// 	    $("#pointP").html($(this).nextAll().length+"分");
// 	  });
// });

 // function evaluate_sub()
 // {
 // 	var curLength=$("#TextArea1").val().length; 
 // 	if(curLength===0)
 // 	{
 // 		$.toast("请填写评价信息");
	// 	return false;
 // 	}
 // }


// 取消订单



// 底部无限滚动

$(document).on("pageInit", "#page_member_order", function(e, id, page) {
    var loading = false;
    // 每次加载添加多少条目
    var itemsPerLoad = 1;
    // 最多可加载的条目
    var maxItems = 100;
    var lastIndex = $('#tab1 .order_list').length;  
    function addItems(number, lastIndex) {
      // 生成新条目的HTML
      var html = '';
      for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
        html += '<div class="order_list"><div class="order_content"><div class="content_heading"><div class="heading_left"><span class="head_num">订单编号:</span><span class="head_true">E8888888888888</span></div><div class="heading_right"><span>待支付</span><span>已确认</span></div></div><div class="content_mid"><div class="mid_left"><div class="mid_img"><img src="./images/u12.png"></div></div> <div class="mid_right"><div class="mid_title"><div class="title_span">你好你好你好你nijhaosasd好你好</div></div><div class="mid_specifications"><div class="s_left"><div class="s_left_money">￥1234</div><div class="s_left_num">×123</div></div><div class="s_right">商品规格：你好  索拉卡见识到了空间</div><div class="s_right">使用日期：  2016-01-01</div></div></div></div><div class="content_footing"><div class="foot_tex">总 金 额： ￥1234</div><div class="r_btn button button-fill button-danger">立即支付</div><a class="confirm-title-ok"><div class="r_btn button button-dark">取消订单</div></a></div></div></div>';
      }
      // 添加新条目
      $('.tab1_all_list').append(html);
    }

    $(document).on('infinite',function() {
      // 如果正在加载，则退出
      if (loading) return;
      // 设置flag
      loading = true;
      // 模拟1s的加载过程
      setTimeout(function() {
        // 重置加载flag
        loading = false;
        if (lastIndex >= maxItems) {
          // 加载完毕，则注销无限加载事件，以防不必要的加载
          $.detachInfiniteScroll($('.infinite-scroll'));
          // 删除加载提示符
          $('.infinite-scroll-preloader').remove();
          return;
        }
        addItems(itemsPerLoad,lastIndex);
        // 更新最后加载的序号
        lastIndex = $('#tab1 .order_list').length;
        $.refreshScroller();
      }, 1000);
    });
});

$(document).on("pageInit",'.page-group',function(e, id, page) {
	// alert(location.hash);
    if(location.hash==='#page_member_order#tab2')
    {
      $('.tab-link').eq(1).trigger('click');
      
    }
      
    else if(location.hash==='#page_member_order#tab3')
    {

      var aaa = $('.tab-link').eq(2);
      aaa.trigger('click');
    }
     
    else if(location.hash==='#page_member_order#tab4')
    {

      var bbb =  $('.tab-link').eq(3);
      // alert(bbb);
      bbb.trigger('click');
      // alert("ok");
      
    }
    else  $('.tab-link').eq(0).click();


    	//倒计时
    // var intDiff = parseInt(86400);//倒计时总秒数量
    // function timer(intDiff){
    //     window.setInterval(function(){
    //     var day=0,
    //     	hour=0,
    //         minute=0,
    //         second=0;//时间默认值       
    //     if(intDiff > 0){
    //         day = Math.floor(intDiff / (60 * 60 * 24));
    //         hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
    //         minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
    //         second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    //     }
    //     if (minute <= 9) minute = '0' + minute;
    //     if (second <= 9) second = '0' + second;
    //     $('#hour_show').html(hour+'时');
    //     $('#minute_show').html(minute+'分');
    //     $('#second_show').html(second+'秒');
    //     intDiff--;
    //     }, 1000);
    // } 
    // $(function(){
    //     timer(intDiff);
    // });   



    		//取消订单
	  $(document).on('click','.confirm-title-ok', function () {
	    var a1 = $(this).children();
	    $.confirm('订单取消后将无法恢复', '', function () {
	        //$.alert('You clicked Ok button');
	        a1.text("已取消");
	    });
	  });     
  
});


// $(document).on("pageInit",'#user_pageCurrent',function(e, id, page) {

// 	if(location.hash=='#page_member_order#tab2')
// 	{
// 	  $('.tab-link').eq(1).click();
	  
// 	}
	  
// 	else if(location.hash=='#page_member_order#tab3')
// 	{
// 	  $('.tab-link').eq(2).click();
	  
// 	}
	 
// 	else if(location.hash=='#page_member_order#tab4')
// 	{
// 	  $('.tab-link').eq(3).click();

// 	}
// 	else $('.tab-link').eq(0).click();

// })





    $.init();


// });


},{}]},{},[1]);
