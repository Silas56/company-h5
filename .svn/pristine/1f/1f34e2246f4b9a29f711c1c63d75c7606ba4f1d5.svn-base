var global= require('../common/global.js');
var etpl = require('../common/etpl.js');
var tplShop = require('./tpl/allShop.html');

var KN_Shop = {
	param	: {
		pageNum: 1,
		maxItem	: 10
	},
	init : function(){
		this.getShops(1, 10);
		$(".content .datalist").html('');
	},
	getShops : function(from, size){
		$.ajax({
			url	:	global.config.serverBase + 'api/shop/shopList.json',
			type: 'GET',
			data:	{
				pageNum	: from,
				pageSize: size
			},
			success: function(result){
				if(result && result.code=='100'){
					KN_Shop.param.maxItem = result.allShopPage.total;
					var resultList = result.allShopPage.allShopBeans;
					if(resultList && resultList.length>0){
						var render = etpl.compile(tplShop);
						var json = {shops : resultList};
						var text = render(json);
						$(".content .datalist").append(text);
						
						$('.content-block .product_list').click(function(){
							var shopCode = $(this).find(".shopCode").val();
							window.location.href = '../index/index.html?shopCode='+shopCode;
						});
						if(from+size >= result.allShopPage.total){
							var tab = $('.infinite-scroll');
							$.detachInfiniteScroll(tab);
							$('.infinite-scroll-preloader').hide();
							var lastRecord = tab.find(".nomore");
							if(lastRecord.length===0){
							  tab.find(".datalist").append("<div class='nomore'>---- 没有更多了 ----</div>");
							}
						}
					}else{
						$('.infinite-scroll-preloader').addClass('d-n');
						$(".noshop").removeClass('d-n');
					}
				}else if(result && result.code=='403'){
					$.alert('你还未登陆哦，请先登陆！',function(){
						location.href = global.config.loginHref;
					});
				}else if(result && result.code=='106'){
					$('.infinite-scroll-preloader').addClass('d-n');
					$(".noshop").removeClass('d-n');
				}else{
					$.toast("error:"+result.msg);
				}
			}
		});
	},
};

$(document).on("pageInit",'#allShop_page' ,function(e, pageId, page) {
	KN_Shop.init();
	
	var loading = false;
	// 每次加载添加多少条目
	var itemsPerLoad = 10;
	$(page).on('infinite', function() {
	  // 如果正在加载，则退出
	  if (loading) return;
	  // 设置flag
	  loading = true;
	  var lastIndex = $(".content .datalist .content-block").length;
	  // lastIndex = lastIndex===0 ? 0 : lastIndex;
	  // 模拟1s的加载过程
	  setTimeout(function() {
		// 重置加载flag
		loading = false;
		if (!KN_Shop.param.maxItem || lastIndex >= KN_Shop.param.maxItem) {
			var tab = $('.infinite-scroll');
		  // 加载完毕，则注销无限加载事件，以防不必要的加载
		  // $.detachInfiniteScroll(tab);
		  // 删除加载提示符
		  $('.infinite-scroll-preloader').hide();
		  var lastRecord = tab.find(".nomore");
		  if(lastRecord.length===0){
			  tab.find(".datalist").append("<div class='nomore'>---- 没有更多了 ----</div>");
		  }
		  return;
		}
		KN_Shop.param.pageNum++;
		KN_Shop.getShops(KN_Shop.param.pageNum, itemsPerLoad);
		// 更新最后加载的序号
		lastIndex =  $(".content .datalist .content-block").length;
		$.refreshScroller();
	  }, 1000);
	});
});