
var KN_detail_other = {
	init	: function(){
		this.getData();
	},
	getData	: function(productCode, shopCode){
		$.ajax({
			url		: GlobalKuNiao.prototype.config.serverBase+'/api/product/base.json',
			type	: 'GET',
			data	: {
				productCode		: productCode,
				shopCode		: shopCode
			},
			success	: function(data){
				if(data && data.code==='100'){
					var product = data.product;
					if(product){
						var notice = product.notice;
						$(".desc").html(notice);
					}
				}
			}
		});
	}
};

(function(){
	KN_detail_other.init();
})();