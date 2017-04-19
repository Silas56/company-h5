var global= require('../common/global.js');
var etpl = require('../common/etpl.js');
var tplDetail = require('./tpl/product.html');

var KN_sp = {
	param	: {
		maxItems	: [],
		loading:false
	},
	init : function(){
		var params = global.getUrlParam();
		if(!params.catevalue){
			params.catevalue = '';
		}
		var catevalue = decodeURIComponent(params.catevalue);
		if(catevalue==='*'){
			catevalue = '';
		}
		$("input[name=cateValue]").val(catevalue);
		this.initData();
		this.initButtons();

		//  (function (doc, win) {
		// 	var docEl = doc.documentElement,
		// 		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		// 		recalc = function () {
		// 			var clientWidth = docEl.clientWidth;
		// 			if (!clientWidth) return;
		// 			if (clientWidth >= 750) clientWidth = 750;
		// 			$('html').css('font-size', 100* (clientWidth / 750) + 'px!important');
		// 		};
		// 	if (!doc.addEventListener) return;
		// 	win.addEventListener(resizeEvt, recalc, false);
		// 	doc.addEventListener('DOMContentLoaded', recalc, false);
		// })(document, window);
	},
	initData	: function(){
		$(".datalist").html('');
		
		var catevalue = $("input[name=cateValue]").val();
		if(!catevalue || catevalue.trim().length===0){
			catevalue = '*';
		}
		this.getData($("#tab1 .datalist"), catevalue, 0, 10);
		this.getData($("#tab2 .datalist"), catevalue, 0, 10, 'sales', 'desc');
		this.setPriceSortType();
		this.getData($("#tab3 .datalist"), catevalue, 0, 10, 'price', 'desc');
	},
	initButtons	: function(){
		$(document).on("click", ".tab-link", function(){
			var clicked = $(this);
			var tab = clicked.data("tab") || clicked.attr('href');
			var tabToShow = $(tab);
			tabToShow.siblings().removeClass('active');
			tabToShow.addClass('active');

			//价格tab的click事件
			var tabId = tab.substr(tab.indexOf('#tab')+4, tab.length-1);
			if(tabId==='3' && clicked.hasClass('active')){
				KN_sp.setPriceSortType();
				var pageIndex = tabToShow.attr("pi");
				var sortType = $(".price").attr("sortType");
				sortType = sortType==="1" ? 'desc' : 'asc';
				var cateValue = $("input[name=cateValue]").val();
				var isClick = true;
				KN_sp.getData(tabToShow.find(".datalist"), cateValue, pageIndex, 10, 'price', sortType, isClick);
			}else if(tabToShow.find(".datalist").children().length===0){
				var sortField = tabId==='1' ? '*' : (tabId==='2' ? 'sales' : 'price');
				//tabToShow.attr("pi", 0);
				var keyWord = $("input[name=cateValue]").val();
				KN_sp.getData(tabToShow.find(".datalist"), keyWord, 0, 10, sortField, 'desc');
			}
			clicked.parent().children('.active').removeClass('active');
			clicked.addClass('active');

		});
		$(".btnsearch").click(function(){
			var keyWord = $("input[name=cateValue]").val();
			if(keyWord.trim().length===0){
				keyWord = '*';
			}
			KN_sp.search(keyWord);
		});
		$(".category").change(function(){
			$(".cateValue").val('');
			var v = $(this).val();
			if(v==='0'){
				$(".cateValue").attr("placeholder", "请输入产品名称");
			}else{
				$(".cateValue").attr("placeholder", "请输入店铺名称");
			}
		});
		$(".clearCateValue").click(function(){
			$(".cateValue").val('');
			window.location.href = 'search.html';
		});
	},
	getData:function(tabToShow, keyWord, from, size, sortField, sortType, isClick){
		var data = {
				'keyWord': keyWord,
				'from'	: from,
				'size'	: size
			};
		if(sortField && sortField.trim()!==''){
			data.sortField = sortField;
			data.sortType  = sortType;
		}
		var description = keyWord+"，酷鸟旅游网，一个提供特色旅游(旅行)、高端旅游(旅行)、主题旅游(旅行)、旅游线路、旅行线路的旅游网站，特色旅游找酷鸟。";
		this.setSEO(description);
		$.ajax({
			url	:	global.config.serverBase + '/api/search/productSearch.json',
			type: 'GET',
			data:	data,
			success: function(result){
				//console.log(result);
				if(result && result.code=='100'){
					var tabIndex = tabToShow.parent().attr("id");
					var resultList = result.resultList;
					if(resultList && resultList.length>0){
						tabIndex = tabIndex.substring(3, tabIndex.length);
						KN_sp.param.maxItems[tabIndex] = result.count;
						var render = etpl.compile(tplDetail);
						
						//评分过滤器
						// etpl.addFilter( 'scoreFormat', function ( score, useExtra ) {
						// 	return score / 5 * 100;
						// });
		
						 for (var i = 0; i < resultList.length; i++) {
                            if (resultList[i].scores_ > 0) {
                                var num1 = parseInt(resultList[i].scores_);
                                var num2 = resultList[i].scores_ * 1 - num1;
                                var scoreList = [];
                                for (var j = 0; j < 5; j++) {
                                    if (j < num1) {
                                        scoreList[j] = "18px";
                                    } else if (j == num1) {
                                        scoreList[j] = 18 * num2 + "px";
                                    } else {
                                        scoreList[j] = "0px";
                                    }
                                }
                                resultList[i].scoreList=scoreList;
                            }
                        }


						
						var json = {products:resultList};
						var text = render(json);
				
						if(isClick){
							tabToShow.html(text);
						}else{
							tabToShow.append(text);
						}
						KN_sp.loading = false;
                        $.refreshScroller();

						$(".chanpin").unbind('click').click(function(){
							var shopCode = $(this).find(".shopCode").val();
							var productCode = $(this).find(".productCode").val();
							window.location.href = '../detail/detail.html?productCode='+productCode+'&shopCode='+shopCode;
						});
						if(from+10>result.count){
							$('.infinite-scroll-preloader').eq(tabIndex-1).hide();
							var currentTab = $('.infinite-scroll').eq(tabIndex-1);
							var lastRecord = currentTab.find(".nomore");
							if(lastRecord.length===0){
							  currentTab.find(".datalist").append("<div class='nomore'>---- 没有更多了 ----</div>");
							}
							return;
						}
					}else{
						var activeTabContent = $(".tabs .active");
						activeTabContent.html('<div class="datalist"></div>');
						activeTabContent.append('<div class="tip">非常抱歉，没有找到相关结果</div>');
						KN_sp.getRecommand();
					}
				}
				
			}
		});
	},
	getRecommand : function(){
		$.ajax({
			url	:	global.config.serverBase + '/api/search/productRecommand.json',
			type: 'GET',
			success: function(result){
				if(result && result.code=='100'){
					var resultList = result.resultList;
					if(resultList && resultList.length>0){
						var render = etpl.compile(tplDetail);
										
						var json = {products : resultList};
						var text = render(json);
						var activeTabContent = $(".tabs .active");
						activeTabContent.append('<div>');
						activeTabContent.append('<hr class="line"/>');
						activeTabContent.append('<div class="recommandtip">推荐产品</div>');
						activeTabContent.append('<hr class="line"/>');
						activeTabContent.append('</div>');
						activeTabContent.append(text);
					}
				}else{
					$.toast("error:"+result.msg);
				}
			}
		});
	},
	setPriceSortType : function(){
		var price = $(".price");
		var oldSortType = price.attr("sortType");
		var display = "";
		if(oldSortType==="1"){
			display = ".downarrow";
			oldSortType="0";
		}else{
			display = ".uparrow";
			oldSortType="1";
		}
		$(display).css("display", "block");
		var a = $(display).siblings();
		a.css("display", "none");
		price.attr("sortType", oldSortType);
	},
	search : function(keyWord, t){
		var type = t ? t : $("select[name=category]").val();
		var whichPage = type==="0" ? "searchProduct.html" : "searchShop.html";
		keyWord = encodeURIComponent(keyWord);
		if(keyWord && keyWord.trim().length>0 && keyWord.trim()!=='*'){
			var his = global.localStorage.get('his');
			var arr = [];
			var obj = {};
			obj.type = type;
			obj.text = keyWord;
			if(his && his!=='undefined'){
				var isExist = false;
				$.each(his, function(key, value){
					if(value && value.type===type && value.text===keyWord){
						isExist = true;
						return false;
					}
				});
				if(!isExist){
					his.push(obj);
				}
			}else{
				arr.push(obj);
				his=arr;
			}
			global.localStorage.set('his', his);
		}
		window.location.href = whichPage + "?catevalue="+keyWord;
	},
	setSEO : function(description){
		$('meta[name="Description"]').attr('content', description);
	}
};

$(document).on("pageInit",'#searchProduct_page' ,function(e, pageId, page) {
	KN_sp.init();

	KN_sp.loading = false;

	// 每次加载添加多少条目
	var itemsPerLoad = 10;

	$(page).on('infinite', function() {

	  // 如果正在加载，则退出
	  if (KN_sp.loading) return;

	  // 设置flag
	  KN_sp.loading = true;

	  var tabIndex = $(".tabs .active").attr('id');
	  tabIndex = tabIndex.substring(3, tabIndex.length);
	  tabIndex = parseInt(tabIndex);
	  var lastIndex = $(".tabs .active .chanpin").length;
	  lastIndex = lastIndex===0 ? 0 : lastIndex;

		if (!KN_sp.param.maxItems[tabIndex] || lastIndex >= KN_sp.param.maxItems[tabIndex]) {
		  // 加载完毕，则注销无限加载事件，以防不必要的加载
		  //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex-1));
		  // 删除加载提示符
		  $('.infinite-scroll-preloader').eq(tabIndex-1).hide();
		  var currentTab = $('.infinite-scroll').eq(tabIndex-1);
		  var lastRecord = currentTab.find(".nomore");
		  if(lastRecord.length===0){
			  currentTab.find(".datalist").append("<div class='nomore'>---- 没有更多了 ----</div>");
		  }
		  KN_sp.loading = false;
		  return;
		}

		var keyWord = $("input[name=cateValue]").val();
		if(keyWord.trim().length===0){
			keyWord = '*';
		}

		if(tabIndex===3){
			var sortType = $(".price").attr("sortType");
			sortType = sortType==="1" ? 'desc' : 'asc';
			KN_sp.getData($("#tab"+tabIndex+" .datalist"), keyWord, lastIndex, itemsPerLoad, 'price', sortType);
		}else{
			KN_sp.getData($("#tab"+tabIndex+" .datalist"), keyWord, lastIndex, itemsPerLoad);
		}

	});
});