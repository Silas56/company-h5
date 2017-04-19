//加载etpl模板
var etpl = require('../common/etpl.js');
// 加载具体tpl文件
var commentTpl = require('./tpl/comment.html');

var KN_comment = {
	init	: function(){
		var params = GlobalKuNiao.prototype.getUrlParam();
		var productCode = params.productCode;
		var shopCode = params.shopCode;
		this.getData(productCode, shopCode);
	},
	getData : function(productCode, shopCode){
		$.ajax({
			url		: GlobalKuNiao.prototype.config.serverBase + '/api/comments/list.json',
			type	: 'GET',
			data	: {
				productCode		: productCode,
				shopCode		: shopCode
			},
			success	: function(data){
				if(data && data.code==='100'){
					var comments = data.comments;
					if(comments){
						var list = comments.list;
						if(list && list.length>0){
							// 初始化模板
							var render = etpl.compile(commentTpl);
							//渲染数据
							var text   = render({comments: list});

							// 把渲染好的模板加载到dom上面去
							$('.cm-list ul').html(text);
						}
					}
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	}
};

(function(){
	KN_comment.init();
	
})();