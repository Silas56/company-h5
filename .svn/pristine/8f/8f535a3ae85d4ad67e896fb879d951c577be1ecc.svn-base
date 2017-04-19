// 加载etpl模板
var etpl = require('../common/etpl.js');
var GlobalKuNiao = require('../common/global.js');

var KN_Detail = {
	params	: {
		curPage: 1,
		isNavScroll	: 0, //是否上下滑动，防止右侧导航条显示错乱
		slideGroup  : 0  //上下滑动，记录当前组序号，从0开始
	},
	init : function(param){

	},
	getSnapInfo	: function(orderCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'api/order/orderSnapshot.json',
			type	: 'GET',
			data	: {
				orderCode: orderCode,
			},
			success	: function(data){
				$(".loading-spiner").css("display", "none"); //隐藏加载提示
				if(data && data.code==='100'){
					var snap = data.orderSnapBean;
					var tplDetail = require('./tpl/detailBaseSnapshot.html'); // 加载具体tpl文件
					var render = etpl.compile(tplDetail);
					var json = { snap : data.orderSnapBean };
					var text   = render(json); //渲染数据
					$('.snapshotContent').html(text);
					KN_Detail.initSnapBase(snap); //初始化产品信息

					$(".planIntro").click(function(){
						$.router.load('./snapTravel.html?snapPlanId='+snap.snapPlanId+'&orderCode='+GlobalKuNiao.getUrlParam().orderCode);
					});
				}else{
					$.router.load('./404.html');
				}
			}
		});
	},
	initSnapBase	: function(snap){ //初始化信息
		var title = snap.productName+"_特色旅游_酷鸟";
		var keywords = snap.productName+",特色旅游,高端旅游,旅游线路,酷鸟";
		var desc = snap.productName+"。酷鸟旅游网，一个提供特色旅游特色旅行线路的网站。";
		this.setSEO(title, keywords, desc);
	},
	getTravel	: function(orderCode, snapPlanId){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase + 'api/order/orderPlanSnapshot.json',
			type	: 'GET',
			data	: {
				orderCode : orderCode,
				snapPlanId: snapPlanId
			},
			success	: function(data){
				if(data && data.code==='100'){
					//修改数据，gallery最多只能展示3个
					var days = data.plan.days;
					var dayslength = days.length - 1;
					dayslength = dayslength > 0 ? (days.length - 1)  : 0;
					for(var i = days.length - 1; i >= 0; i--) {
						var nodes = days[i].nodes;
						if (!!nodes){
							var nodeslength = nodes.length - 1;
							nodeslength = nodeslength > 0 ? nodeslength  : 0;
							for(var j = nodeslength; j >= 0; j--) {
								if (!!nodes[j].gallery){
									nodes[j].gallery = nodes[j].gallery.slice(0,3);
								}
							}
						}
					}
					
					$(".loading-spiner").hide();
					var tplViewspot = require('./tpl/snapTravel.html'); // 加载具体tpl文件
					var render = etpl.compile(tplViewspot);
					var json = {
						planSnap: data.plan,
						days: data.plan.days
					};
					var text   = render(json);
					$(".travel-bd .item-day").html(text);

					if (data.plan.days.length < 4) {
						$('.next').addClass('disabled');
					}


					//初始化导航条
					if($(".slide-bar .bar-con a").size() <= 3) {
						$(".next").addClass('disabled');
					}

					$(".prev").click(function(){
						KN_Detail.params.isNavScroll = 1; //右侧导航条触发，防止滚动事件搅局
						if(!$(this).hasClass("disabled")){
							KN_Detail.pageNavigator(1);
						}
					});
					
					$(".next").click(function(){
						KN_Detail.params.isNavScroll = 1; //右侧导航条触发，防止滚动事件搅局
						if(!$(this).hasClass("disabled")){
							KN_Detail.pageNavigator(0);
						}
					});
					
					$(".slide-bar .bar-con a").click(function(){
						KN_Detail.params.isNavScroll = 1; //右侧导航条触发，防止滚动事件搅局
						if(!$(this).hasClass("cur")){
							KN_Detail.navigator($(this), 1);
						}
					});

					//把slide塞到body的直接子标签位置
					// var slideBar = $('.slide-bar').remove().css('z-index','10000');
					// $('body').append(slideBar);
					
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	initTravel	: function(orderCode){
		if(orderCode && orderCode.trim().length>0){
			$("header .back").unbind('click').click(function(){
				window.location.href = 'detailSnapshot.html?orderCode='+orderCode;
			});
		}else{
			$("header .back").removeClass("external");
		}

		$(".content").on('scroll',function(){
			var top = $(this).scrollTop();
			var idTemp = '';
			if(! KN_Detail.params.isNavScroll){  //是否由右侧导航条触发
				$(".travel-bd .item-day>div").each(function(item, index){
					$thisScrollHeight = this.offsetTop;
					if(top >= $thisScrollHeight){
						var dayID = $(this).attr("id");
						if(dayID){
							idTemp = dayID;
						}
						return;
					}
				});
				if(idTemp){
					idTemp = idTemp.substring(idTemp.indexOf("D")+1, idTemp.length);
					var bar = $(".slide-bar .bar-con");
					bar.find("a").removeClass("show").addClass("hide");
					$(".cur").removeClass("cur");
					var curDiv = bar.find("#nav"+idTemp);
					curDiv.addClass("cur").removeClass("hide").addClass("show");
					KN_Detail.navigator(curDiv);
				}
			}
			KN_Detail.params.isNavScroll = 0; //恢复正常阀值
		});
		$(".slide-bar a").off('scroll').on('scroll',function(e){
			if (e && e.stopPropagation) {//非IE浏览器
			　　e.stopPropagation();
			}else {//IE浏览器
				window.event.cancelBubble = true;
			}
		});
	},
	navigator	: function(curDiv, isNeedNavigate){
		var navs = $(".slide-bar .bar-con a");
		var id = curDiv.attr('id').substring(3)*1;
		//记录当前页属于哪个分组，每3个为一组，组号从0开始
		KN_Detail.params.slideGroup = Math.floor((id - 1)/3);
		$(".cur").removeClass("cur");
		navs.removeClass("show").addClass("hide");
		//显示当前项
		curDiv.addClass("cur").removeClass("hide").addClass("show");

		$(".prev").removeClass("disabled");
		$(".next").removeClass("disabled");
		if(navs.size() <= 3) {
			$(".prev").addClass("disabled");
			$(".next").addClass("disabled");
		}else{
			if(id < 3) {
				$(".prev").addClass("disabled");
			}
			if(id > navs.length - 2) {
				$(".next").addClass("disabled");
			}
		}
		if(id === 1) {
			//第一项时显示123
			$('#nav2').removeClass("hide").addClass("show");
			$('#nav3').removeClass("hide").addClass("show");
		}else if(id === navs.length) {
			//第n项时显示n-2 n-1 n
			$('#nav'+(id-2)).removeClass("hide").addClass("show");
			$('#nav'+(id-1)).removeClass("hide").addClass("show");
		}else {
			//中间项显示n-1 n n+1
			$('#nav'+(id-1)).removeClass("hide").addClass("show");
			$('#nav'+(id+1)).removeClass("hide").addClass("show");
		}
		if(isNeedNavigate){
			location.hash = curDiv.attr('href');
		}
	},
	pageNavigator	: function(isUp){ //上下箭头分页，isUp：1向上；0向下
		var navs = $(".slide-bar .bar-con a");
		var pageIndex = KN_Detail.params.slideGroup;
		var lastIndex = Math.floor((navs.length - 1)/3);
		navs.removeClass("show").addClass("hide");
		$(".cur").removeClass("cur");

		function showNavs(index, len) {
			var id = index * 3 + 1;
			//如果长度不是3的倍数，那么最后的三个需要往前移足三个
			if(id > len - 2) id = len - 2;
			$('#nav'+id).removeClass("hide").addClass("cur show");
			$('#nav'+(id+1)).removeClass("hide").addClass("show");
			$('#nav'+(id+2)).removeClass("hide").addClass("show");
			location.hash = $('#nav'+id).attr('href');
		}
		if(isUp){
			pageIndex--;
			if(pageIndex < 0) pageIndex = 0;
			KN_Detail.params.slideGroup = pageIndex;
			if(pageIndex === 0) $(".prev").addClass("disabled");
			if(pageIndex < lastIndex) $(".next").removeClass("disabled");
			showNavs(pageIndex, navs.length);
		}else {
			pageIndex++;
			if(pageIndex > lastIndex) pageIndex = lastIndex;
			KN_Detail.params.slideGroup = pageIndex;
			if(pageIndex === lastIndex) $(".next").addClass("disabled");
			if(pageIndex > 0) $(".prev").removeClass("disabled");
			showNavs(pageIndex, navs.length);
		}
	},
	setSEO	: function(title, keywords, description){
		document.title = title;
		$('meta[name="Keywords"]').attr('content', keywords);
		$('meta[name="Description"]').attr('content', description);
	}
};

// 路由load
$(document).on("pageInit",'#snapshotDetail' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getSnapInfo(params.orderCode);
	KN_Detail.init(params);
 });

$(document).on("pageInit",'#snapTravel' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getTravel(params.orderCode, params.snapPlanId);
	KN_Detail.initTravel(params.orderCode);
	KN_Detail.init(params);
 });
