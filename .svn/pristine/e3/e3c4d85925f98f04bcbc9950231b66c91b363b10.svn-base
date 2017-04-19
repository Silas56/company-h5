//加载etpl模板
var etpl = require('../common/etpl.js');
// 加载具体tpl文件
var tplMemberMyCollectionShop = require('./tpl/memberMyCollectionShop.html');	
var global= require('../common/global.js');

var KN_ShopFav = {
	init : function(){
		this.getData();
	},
	getData:function(){

		 $.ajax({
		 	url	:	global.config.serverBase + ' api/user/getShopFav.json',
		 	type: 'GET',
		 	success: function(resultShop){
				
				//var dataShop='{"code":"100","msg":"处理成功","shopFavList":{"total":4,"pages":1,"pageNum":1,"pageSize":10,"shopInfoList":[{"shopCode":"0114515427237882587","name":"我的店铺","score":0.0},{"shopCode":"011451373238993517","name":"我的店铺","score":0.0},{"shopCode":"123","name":"lzm的店铺测试版","score":0.0},{"shopCode":"0114503359758307839","name":"lzm的店铺","score":3.7}]}}';
				//var resultShop = $.parseJSON(dataShop);
				if(resultShop && resultShop.code=='100'){

					var shopInfoList = resultShop.shopFavList.shopInfoList;

					etpl.addFilter( 'scoreFormat', function ( score, useExtra ) {
						return score / 5 * 100;
					});

					 if(shopInfoList && shopInfoList.length>0){
						var render = etpl.compile(tplMemberMyCollectionShop);
						var jsonShop = {
							myCollectionShop : resultShop,
							shopInfoList : shopInfoList
						};
						var textShop = render(jsonShop);
				
						$("#tab1-2").html(textShop);
					 }
				}else{
					resultShop = JSON.parse(resultShop);
					if(resultShop && resultShop.code==='403'){
						window.location.href = global.config.loginHref;
					}else{
						$.toast('error:'+resultShop.msg);
					}
				}
			}
		});
	}
};


(function(){
	KN_ShopFav.init();
})();