var global= require('../common/global.js');
var etpl = require('../common/etpl.js');
var tplDetail = require('./tpl/suggest.html');

var KN_Search = {
	init : function(){
		var params = global.getUrlParam();
		if(params && params.type==='shop'){
			$(".category").val(1);
			$(".cateValue").attr("placeholder", "请输入店铺名称");
		}
		var pSearch = global.config.serverBase + 'api/search/productHotSearch.json';
		//var sSearch = global.config.serverBase + '/api/search/storeHotSearch.json';
		this.getHotSearch(pSearch);
		//this.getHotSearch(sSearch);
		this.getHistory();
		this.initButtons();
	},
	initButtons	: function(){
		$(".category").change(function(){
			$(".cateValue").val('');
			var v = this.options[this.selectedIndex].value;
			var hotSearchUrl = '';
			if(v==='0'){
				hotSearchUrl = 'productSuggest.json';
				$(".cateValue").attr("placeholder", "请输入产品名称");
			}else{
				hotSearchUrl = 'storeSuggest.json';
				$(".cateValue").attr("placeholder", "请输入店铺名称");
			}
			hotSearchUrl = global.config.serverBase + 'api/search/' + hotSearchUrl;
			KN_Search.getHotSearch(hotSearchUrl);
			var historyUrl = v==='0' ? 'productHotSearch.json' : 'storeHotSearch.json';
			historyUrl = global.config.serverBase + 'api/search/' + historyUrl;
			KN_Search.getHistory(historyUrl);
		});
		$(".cateValue").focus(function(){
			$(".relative").attr("display", "block");
		});
		$(".cateValue").blur(function(){
			$(".relative").attr("display", "none");
		});
		$(".cateValue").change(function(){
			var $category = $(".category");
			var v = $category.val();
			var relativeUrl = v==='0' ? 'productSuggest.json' : 'storeSuggest.json';
			relativeUrl = global.config.serverBase + 'api/search/' + relativeUrl;
			var keyWord = $(this).val();
			KN_Search.getRelative($(".relative"), relativeUrl, keyWord, v);
		});
		$(".clearHis a").click(function(){
			KN_Search.clearHisSearch();
			window.location.reload();
		});
		
		
		$(".content-block a").click(function(){
			var keyWord = $(this).attr("value");
			KN_Search.search(keyWord);
		});
		$(".btnsearch").click(function(){
			var keyWord = $(".cateValue").val();
			KN_Search.search(keyWord);
		});
		$("#search_page .bar-nav a").click(function(){
			window.location.href = global.config.serverBase + "/nav/kn/index";
		});
		$(".clearCateValue").click(function(){
			$(".cateValue").val('');
			window.location.href = 'search.html?type=shop';
		});
	},
	getHotSearch : function(url){
		$.ajax({
			url	:	url,
			type: 'GET',
			success: function(result){
				if(result && result.code=='100'){
					var resultList = result.resultList;
					if(resultList && resultList.length>0){
						var $category = $(".category");
						var v = $category.val();
						var whichPage = v==="0" ? "searchProduct.html" : "searchShop.html";
						
						var text = '';
						$.each(resultList, function(key, value){
							var keyWord = encodeURIComponent(this);
							text = text + "<a href='"+whichPage + "?catevalue="+keyWord+"' class='button' value='" + this + "'external>" + this + "</a>";
						});
						$(".content-block").html(text);
					}
				}
			}
		});
	},
	getHistory : function(){
		var his = global.localStorage.get('his');
		var html = '';
		if(his && his!=='undefined'){
			var type = $(".category").val();
			var index = 0;
			$.each(his, function(key, value){
				if(value && value.type===type && index<10){
					html += '<li class="item-content" type='+value.type+'><div class="item-inner"><div class="item-title">'+decodeURIComponent(value.text)+'</div></div></li>';
					++index;
				}
				if(index===10) return false;
			});
		}
		$(".history ul").html(html);
		
		$("li.item-content").click(function(){
			var keyWord = $(this).find(".item-title").text();
			var type = $(this).attr("type");
			KN_Search.search(keyWord, type);
		});
	},
	getRelative : function(node, url, keyWord, arg){
		var data={};
		if(arg && arg.trim()!==""){
			data = {
				keyWord : keyWord,
				arg1		: arg
			};
		}
		$.ajax({
			url	:	url,
			type: 'GET',
			data : data,
			success: function(result){
				if(result && result.code=='100'){
					var resultList = result.resultList;
					if(resultList && resultList.length>0){
						var render = etpl.compile(tplDetail);
						
						var json = {suggests : resultList};
						var text = render(json);
						node.html(text);
					}
					
				}
			}
		});
	},
	clearHisSearch : function(){
		global.localStorage.del("his");
	},
	search : function(keyWord, t){
		var type = t ? t : $(".category").val();
		var whichPage = type==="0" ? "searchProduct.html" : "searchShop.html";
		
		if(keyWord.trim().length===0){
			window.location.href = whichPage;
			return;
		}
		
		keyWord = encodeURIComponent(keyWord);
		
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
		
		window.location.href = whichPage + "?catevalue="+keyWord;
	}
};

$(document).on("pageInit", "#search_page", function(e, id, page) {
	KN_Search.init();
});