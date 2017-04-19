(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
},{}]},{},[1]);
