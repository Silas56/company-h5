//加载etpl模板
var etpl = require('../common/etpl.js');
var GlobalKuNiao = require('../common/global.js');
var KNShare = require('../common/share.js');

var KN_Detail = {
	params	: {
		isNeedFav	: 0, //是否需要自动收藏
		isNavScroll	: 0, //是否上下滑动，防止右侧导航条显示错乱
		slideGroup  : 0  //上下滑动，记录当前组序号，从0开始
	},
	init : function(param){
        this.getCurrentProductDetail(param.productCode,param.shopCode);
		//初始化顶部通栏
		$('.nav-bar').find('.shop').attr('href','../index/index.html?shopCode=' + param.shopCode);

		this.isCollect(param.productCode, param.shopCode); //检查是否已收藏
	},
    getCurrentProductDetail :function(productCode,shopCode){
        $('#productDetail').hide();
        $('#productNotFound').hide();
        $('.recommend-pro').find('p').hide();
        $('.recommend-pro').find('hr').hide();
	    var _ts = this;
        $.ajax({
            url : '/m/api/product/base.json',
            type : 'get',
            data : {
                productCode:productCode,
                shopCode:shopCode
            },
            dataType : 'json',
            contentType : 'application/json',
            success : function(data){
                console.log(data,'产品的基本信息');
                // saleStatus  1 -- >可销售 -- > 掉库存接口  1. 0 --> 售罄  1--> 正常使用    0 -- >不可销售  --->下架
                // 0 ---> 下架   1--->售罄
                if(data.product.saleStatus == 0){//测试用
                    $('#productDetail').hide();
                    $('#productNotFound').find('.title').html('该产品已下架');
                    $('#productNotFound').find('.tipsComent').html('该产品已下架');
                    $('#productNotFound').find('.back').unbind('click').click(function(){
                        location.href = '../index/index.html?shopCode='+shopCode;
                    });
                    $('#productNotFound').find('.knindex').unbind('click').click(function(){
                        location.href = GlobalKuNiao.config.knIndex;
                    });
                    $('#productNotFound').find('.shopIndex').unbind('click').click(function(){
                        location.href = '../index/index.html?shopCode='+shopCode;
                    });
                    $('#productNotFound').show();
					_ts.getrecommendForNotFound(shopCode);
                }else if(data.product.stock == 0){
                    $('#productDetail').hide();
                    $('#productNotFound').find('.title').html('该产品已售罄');
                    $('#productNotFound').find('.tipsComent').html('该产品已售罄');
                    $('#productNotFound').find('.back').unbind('click').click(function(){
                        location.href = '../index/index.html?shopCode='+shopCode;
                    });
                    $('#productNotFound').find('.knindex').unbind('click').click(function(){
                        location.href = GlobalKuNiao.config.knIndex;
                    });
                    $('#productNotFound').find('.shopIndex').unbind('click').click(function(){
                        location.href = '../index/index.html?shopCode='+shopCode;
                    });
                    $('#productNotFound').show();
                    _ts.getrecommendForNotFound(shopCode);
                }else{
                    $('#productDetail').show();
                    $('#productNotFound').hide();
                }
            }});
    },
    getrecommendForNotFound:function(shopCode){
        var _ts = this;

        $.ajax({
            url		: GlobalKuNiao.config.serverBase+'api/shop/recommendProduct.json',
            type	: 'GET',
            data	: {
                shopCode:shopCode
            },
            success	: function(data){
                if(data && data.code==='100'){
                    if(data.page.list.length == 0){
						$('.recommend-pro').find('p').hide();
                        $('.recommend-pro').find('hr').hide();
					}else{
                        $('.recommend-pro').find('p').show();
                        $('.recommend-pro').find('hr').show();
                        _ts.notFoundRender(data);
					}

                }
            }
        });
    },
    notFoundRender:function(data){
        var tplNotFound = require('./tpl/notFound.html'); // 加载具体tpl文件
        var render = etpl.compile(tplNotFound);

        var text   = render({
            data : data.page.list
        });
        $(".recommend-pro .item-list").html(text);
    },
	getData : function(){
		var tplDetail = require('./tpl/detail.html');
		var render = etpl.compile(tplDetail);
		var text   = render('fj');
		$(".content").html(text);
		$(".swiper-container").swiper({
							autoplay: 3000,
							autoplayDisableOnInteraction: false,
							speed : 600
						});
	},
	getProductInfo	: function(productCode, shopCode, option){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'api/product/base.json',
			type	: 'GET',
			data	: {
				productCode		: productCode,
				shopCode		: shopCode
			},
			success	: function(data){
				$(".loading-spiner").css("display", "none"); //隐藏加载提示
				if(data && data.code==='100'){
					var product = data.product;
						product.shopCode = shopCode;
						product.code = productCode;

					if(!product){
						$.toast('无产品信息');
						return;
					}

					if(option===0){  //预定须知页面

						var bookingNotes = product.bookingNotes;
						$(".bookingNotes .desc").html(bookingNotes);

						//初始化微信js-sdk
						 currentLocation = window.location.href;
						KNShare.initWeixin(currentLocation);

						 title = product.title + "_预定须知";
						wx.ready(function() {

				            //分享给朋友圈
							KNShare.onMenuShareTimeline(title,currentLocation,product.cover);

							//分享给微信好友
							KNShare.onMenuShareAppMessage(title,currentLocation,product.cover," ");    	 
				        });
					}else if(option===1){ //其他事项

						var notice = product.notice;
						$(".others-bd .desc").html(notice);

						//初始化微信js-sdk
						 currentLocation = window.location.href;
						KNShare.initWeixin(currentLocation);

						 title = product.title + "_其他事项";
						wx.ready(function() {

				            //分享给朋友圈
							KNShare.onMenuShareTimeline(title,currentLocation,product.cover);

							//分享给微信好友
							KNShare.onMenuShareAppMessage(title,currentLocation,product.cover," ");    	 
				        });


					}else{
						var tplDetail = require('./tpl/detailBase.html'); // 加载具体tpl文件
						var render = etpl.compile(tplDetail);
						var json = {
							product		: product,
							gallerys	: product.gallery,
							elements	: product.elements,
							bundles		: product.bundle
						};
						var text   = render(json); //渲染数据
						$('.productcontent').html(text);
						// 初始化轮播图
						$(".swiper-container").swiper({
							autoplay: 3000,
							autoplayDisableOnInteraction: false,
							speed : 600
						});


						//加载评论数据
						KN_Detail.getComment(productCode, shopCode);


						KN_Detail.initProductBase(product, option); //初始化产品信息
					}
				}else{
					$.router.load('./404.html');
				}
			}
		});
	},

	jumpToOrder : function(name, productType, spuCode, shopCode, limitMinNum, preStatus, confirmType, parentId){ //跳转到订单
		GlobalKuNiao.sessionStorage.del('orderInfo');
		var infoData = {
			limitMinNum: limitMinNum,
			spuCode : spuCode,
			shopCode: shopCode,
			name : name,
			productType : productType,
			preStatus: preStatus,
			confirmType: confirmType,
			parentId: parentId
		};
		GlobalKuNiao.sessionStorage.set('orderInfo',infoData); 
		// $.router.load('../pay/orderInfo.html?spuCode='+infoData.spuCode);
		window.location.href='../pay/orderInfo.html?spuCode='+infoData.spuCode;

		GlobalKuNiao.localStorage.set('shopCode',shopCode);
	},
	initProductBase	: function(product, option){ //初始化产品信息
		var _ts = this;
		// 电话
		$('.nav-bar').find('.call').attr('href','tel:' + product.contact);
		if(product.shopStatus !== 1){
			$('.nav-bar').find('.pause').show();
		}

		if(product.saleStatus === 1 && product.shopStatus === 1 && product.minFinalPrice!==0 && product.maxFinalPrice!==0){
			$('.nav-bar').find('.buy-unable').addClass('buy-now');
		}

		$(".pro").on('click',function(){
			if(product.saleStatus === 1){
				_ts.jumpToOrder(product.title, product.productType, product.code, product.shopCode, product.limitMinNum, product.preStatus, product.confirmType, product.parentId);
			}else{
				$.alert('该产品咱不可售！');
				return false;
			}
		});
		$(".buy-now").on('click',function(){
			if(product.saleStatus === 1){
				_ts.jumpToOrder(product.title, product.productType, product.code, product.shopCode, product.limitMinNum, product.preStatus, product.confirmType, product.parentId);
			}else{
				$.alert('该产品咱不可售！');
				return false;
			}
		});

		$(".bundleDiv").parent().click(function(){
			var productCode = $(this).attr("pcode");
			var shopCode = $(this).attr("scode");
			window.location.href = "detail.html?productCode="+productCode+"&shopCode="+shopCode;
		});
		
		$(".share").click(function(){
			$(".productShade").css({"display":"block"});
			$(".productShare").css({"display":"block"});
		});
		
		$(".share_bottom").click(function(){
			$(".productShade").css({"display":"none"});
			$(".productShare").css({"display":"none"});
		});
		
		var title = product.title;
		var keywords = product.title+",特色旅游,高端旅游,旅游线路,酷鸟";
		var desc = product.title+"。酷鸟旅游网，一个提供特色旅游特色旅行线路的网站。";
		var isOg = option===2 ? true : false;
		this.setSEO(title, keywords, desc, isOg);
		
		this.initShare(product);
	},
	initShare	: function(product){ //初始化分享按钮
		var shareData = {
			imageUrl	: product.cover,
			url	: window.location.href,
			desc	: product.content,
			title	: product.title,
			site	: '酷鸟',
			appid	: '',
			summary	: '酷鸟',
			pics	: product.cover,
			appkey	: '',
			ralateUid: '',
			pageUrl	: window.location.href
		};

	    //拼接产品特色字段
		var ProductSpecial = '';
		if(typeof product.startFrom !== 'undefined' && product.startFrom){
			ProductSpecial += "出发地：" + product.startFrom +" ";
		}
		if(typeof product.destination !== 'undefined' && product.destination){
			ProductSpecial += "目的地：" + product.destination ;
		}
		if(ProductSpecial){
			ProductSpecial += "\n";
		}
		if(typeof product.openHours !== 'undefined' && product.openHours){
			ProductSpecial += "营业时间：" + product.openHours +" ";
		}
		if(typeof product.address !== 'undefined' && product.address){
			ProductSpecial += "地址：" + product.address ;
		}
		var reg=new RegExp('(\\n)$'); 
		if(!reg.test(ProductSpecial)){
			ProductSpecial += "\n";
		}
		if(typeof product.content !== 'undefined' && product.content){
			ProductSpecial +=  product.content.replace(/\ +/g, "").replace(/[ ]/g, "").replace(/[\r\n]/g, "").replace(/\s*/ig,'');
		}

	

		//过滤html标签
		ProductSpecial = ProductSpecial.replace(/<[^>]+>/g,"");

	
		//初始化微信js-sdk
		var currentLocation = window.location.href;
		KNShare.initWeixin(currentLocation);

		wx.ready(function() {
            //分享给朋友圈
			KNShare.onMenuShareTimeline(shareData.title,shareData.url,shareData.imageUrl);

			//分享给微信好友
			KNShare.onMenuShareAppMessage(shareData.title,shareData.url,shareData.imageUrl,ProductSpecial);    	 
        });


		var wurl  = KNShare.weibo(shareData.appkey, shareData.ralateUid, shareData.title, shareData.url, shareData.imageUrl);
			$('.weibo').find('a').attr('href',wurl);
		var qqurl = KNShare.qq_friends(shareData.site, shareData.title, shareData.imageUrl, shareData.appid, shareData.url, shareData.pageUrl);
			$('.QQFriends').find('a').attr('href',qqurl);
		var zurl  = KNShare.qzone(shareData.url, shareData.title, shareData.desc, shareData.summary, shareData.site, shareData.pics);
 			$('.Qzone').find('a').attr('href',zurl);
	},
	isCollect	: function(productCode, shopCode){ //检查是否已收藏
		var _ts = this;
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'api/user/prodIsFaved.json',
			type	: 'GET',
			data	: {
				spuCode		: productCode,
				shopCode	: shopCode
			},
			success	: function(data){
				if(data && data.code==='101' && _ts.params.isNeedFav==="1"){//未登录点击收藏跳转到登录页面，登录成功后自动收藏
					_ts.updateFav(shopCode, productCode, 1);
				}
				if(data && data.code==='100'){
					$(".collect").addClass("collected");
				}
				_ts.initCollect(shopCode, productCode);
			}
		});
	},
	initCollect	: function(shopCode, spuCode){  //初始化收藏
		var _ts = this;
		$(".collect").off('click').on('click',function(){
			if($(this).hasClass('collected')){
				_ts.updateFav(shopCode, spuCode, 2);
			}else{
				_ts.updateFav(shopCode, spuCode, 1);
			}
		});
	},
	updateFav	: function(shopCode, spuCode, updateType){
		var data = {
			spuCode		: spuCode,
			shopCode	: shopCode,
			updateType	: updateType,
			favType		: 1
		};
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'api/user/updateFav.json',
			type	: 'POST',
			data	: JSON.stringify(data),
			contentType: "application/json",
			success	: function(data){
				if(data && data.code==='100'){
					if(updateType===1){
						$(".collect").addClass("collected");
						$.toast("收藏成功");
					}else{
						$(".collect").removeClass("collected");
						$.toast("取消成功");
					}
				}else if(data.code==="205"){
				}else{
					// data = JSON.parse(data);
					if(data && data.code==='403'){
						var url = location.href + '&needFav=1';
						url = encodeURIComponent(url);
						$.ajax({
							url : '/m/api/global/visited.json?url='+url+'',
							type : 'get',
							dataType : 'json',
							success : function(){
								window.location.href = GlobalKuNiao.config.loginHref;
							}
						});
					}else{
						$.toast('error:'+data.msg);
					}
				}
			}
		});
	},
	getComment	: function(productCode, shopCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'api/comments/list.json',
			type	: 'GET',
			data	: {
				productCode		: productCode,
				shopCode		: shopCode,
				pageNum			: 1,
				pageSize		: 1,
				sortField		: '1',
				sortType		: '1'
			},
			success	: function(data){
				//console.log(data);
				if(data && data.code==='100'){
					$(".loading-spiner").css("display", "none"); //隐藏加载提示
					
					var tplDetailComment = require('./tpl/detailComment.html'); // 加载具体tpl文件
					etpl.addFilter( 'scoreFormat', function ( score, useExtra ) {
						return score / 5 * 100;
					});

					var render = etpl.compile(tplDetailComment);
					var json = {
						total	: data.total,
						coments	: data.evaluationComments,
						productCode : productCode,
						shopCode	: shopCode
					};

					var text   = render(json);
					$(".comment").html(text);
					
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	getRecommend	: function(productCode, shopCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'api/product/recommand.json',
			type	: 'GET',
			data	: {
				productCode		: productCode,
				shopCode		: shopCode,
				pageNum			: 1,
				pageSize		: 6,
				sortField		: '1',
				sortType		: '1'
			},
			success	: function(data){
				if(data && data.code==='100'){
					$(".loading-spiner").css("display", "none"); //隐藏加载提示
					
					var tplDetailRecommend = require('./tpl/detailRecommend.html'); // 加载具体tpl文件
					var render = etpl.compile(tplDetailRecommend);
					var json = {
						recommends	: data.products.list
					};
					var text   = render(json);
					var recommend = $(".recommend");
					recommend.attr("pi", data.products.pageNum);
					$(".recommend").html(text);
					
					$(".re-con li").click(function(){
						var $this = $(this);
						var shopCode = $this.attr("data-shopcode");
						var productCode = $this.attr("data-proCode");
						window.location.href = "?shopCode="+shopCode+"&productCode="+productCode;
					});
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	getHotel	: function(nodeCode,productCode, shopCode, planCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase + 'api/product/detail/hotel.json',
			type	: 'GET',
			data	: {nodeCode : nodeCode},
			success	: function(data){
				if(data && data.code==='100'){
					$(".loading-spiner").hide();
					var tplHotel = require('./tpl/hotel.html'); // 加载具体tpl文件
					var render = etpl.compile(tplHotel);
					var json = {
						hotel	: data.hotel,
						gallerys: data.hotel.gallery
					};
					var text   = render(json);
					$(".hotel-bd").html(text);
					$(".swiper-container").swiper({ //轮播实现
						autoplay: 3000,
						autoplayDisableOnInteraction: false,
						speed : 600
					});
					if(productCode && productCode.trim().length>0 && shopCode && shopCode.trim().length>0){
						$("header .back").unbind('click').click(function(){
							window.location.href = 'detail.html?productCode='+productCode+'&shopCode='+shopCode;
						});
					}else if(planCode && planCode.trim().length>0){
						$("header .back").unbind('click').click(function(){
							window.location.href = 'travel.html?planCode='+planCode;
						});
					}else{
						$("header .back").removeClass("external");
					}
					//var title = data.hotel.title+"_特色旅游_酷鸟";
					var title = "酒店介绍";
					var keywords = data.hotel.title+",特色旅游,高端旅游,旅游线路,酷鸟";
					var desc = data.hotel.title+"。酷鸟旅游网，一个提供特色旅游特色旅行线路的网站。";
					KN_Detail.setSEO(title, keywords, desc);
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	getViewSpot	: function(nodeCode, productCode, shopCode, planCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase + 'api/product/detail/viewspot.json',
			type	: 'GET',
			data	: {nodeCode : nodeCode},
			success	: function(data){
				if(data && data.code==='100'){

					$(".loading-spiner").hide();
					var tplViewspot = require('./tpl/viewspot.html'); // 加载具体tpl文件
					var render = etpl.compile(tplViewspot);
					var json = {
						viewspot	: data.viewspot,
						gallerys	: data.viewspot.gallery
					};
					var text   = render(json);
					$("header .title").text(data.viewspot.title);
					$(".viewspot-bd").html(text);
					$(".viewspot-bd .desc").html(data.viewspot.content);
					$(".swiper-container").swiper({ //轮播实现
						autoplay: 3000,
						autoplayDisableOnInteraction: false,
						speed : 600
					});
					if(productCode && productCode.trim().length>0 && shopCode && shopCode.trim().length>0){
						$("header .back").unbind('click').click(function(){
							window.location.href = 'detail.html?productCode='+productCode+'&shopCode='+shopCode;
						});
					}else if(planCode && planCode.trim().length>0){
						$("header .back").unbind('click').click(function(){
							window.location.href = 'travel.html?planCode='+planCode;
						});
					}else{
						$("header .back").removeClass("external");
					}
					
					//var title = data.viewspot.title+"_旅游行程详情_特色旅游";
					var title = "景点介绍";
					var keywords = data.viewspot.title+",特色旅游,高端旅游,旅游线路,酷鸟";
					var desc = data.viewspot.title+"。酷鸟旅游网，一个提供特色旅游特色旅行线路的网站。";
					KN_Detail.setSEO(title, keywords, desc);



					var imageUrl = '';
					if(typeof data.viewspot.gallery[0] !== 'undefined'){
						imageUrl = data.viewspot.gallery[0];
					}


					var currentLocation = window.location.href;
					KNShare.initWeixin(currentLocation);

					wx.ready(function() {
			           //分享给朋友圈
						KNShare.onMenuShareTimeline(data.viewspot.title,currentLocation,imageUrl);

						//分享给微信好友
						KNShare.onMenuShareAppMessage(data.viewspot.title,currentLocation,imageUrl," ");  	 
			        });

				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	getTravel	: function(planCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase + 'api/product/detail/plan.json',
			type	: 'GET',
			data	: {planCode : planCode},
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
					var tplViewspot = require('./tpl/travel.html'); // 加载具体tpl文件
					var render = etpl.compile(tplViewspot);
					var json = {
						days	: data.plan.days,
						planCode: data.plan.code
					};
					var text   = render(json);
					$(".travel-bd .item-day").html(text);
					
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
				
					//var title = data.plan.title+"_旅游行程详情_特色旅游";
					var title = "行程详情";
					var keywords = data.plan.start+"-"+data.plan.end+", "+data.plan.start+"+旅游,"+data.plan.start+"-"+data.plan.end+"+特色旅游线路,行程详情,"+data.plan.title+",酷鸟";
					var desc = data.plan.start+"-"+data.plan.end+", "+data.plan.start+"+旅游,"+data.plan.start+"-"+data.plan.end+"+特色旅游线路,行程详情,"+data.plan.title+"，酷鸟旅游网，一个提供特色旅游、特色旅行线路的网站。";
					KN_Detail.setSEO(title, keywords, desc, 1);

					var imageUrl = '';
					if(typeof days[0].nodes[0].gallery[0] !== 'undefined'){
						imageUrl = days[0].nodes[0].gallery[0];
					}

					var currentLocation = window.location.href;
					KNShare.initWeixin(currentLocation);

					wx.ready(function() {
			           //分享给朋友圈
						KNShare.onMenuShareTimeline(data.plan.title,currentLocation,imageUrl);

						//分享给微信好友
						KNShare.onMenuShareAppMessage(data.plan.title,currentLocation,imageUrl," ");  	 
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
	initTravel	: function(productCode, shopCode){
		$('.slide-bar').on('scroll', function(e){
			e.stopPropagation();
		});
		$(".content").on('scroll',function(e){
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
		if(productCode && productCode.trim().length>0 && shopCode && shopCode.trim().length>0){
			$("header .back").unbind('click').click(function(){
				window.location.href = 'detail.html?productCode='+productCode+'&shopCode='+shopCode;
			});
		}else{
			$("header .back").removeClass("external");
		}




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
	getComments	: function(productCode, shopCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'api/comments/list.json',
			type	: 'GET',
			data	: {
				productCode		: productCode,
				shopCode		: shopCode
			},
			success	: function(data){

				console.log(data);
				if(data && data.code==='100'){
					$(".loading-spiner").css("display", "none"); //隐藏加载提示
					
					var tplComment = require('./tpl/comment.html'); // 加载具体tpl文件
					etpl.addFilter( 'scoreFormat', function ( score, useExtra ) {
						return score / 5 * 100;
					});
					var render = etpl.compile(tplComment);
					var json = {
						comments	: data.evaluationComments
					};
					var text   = render(json);
					$(".comment-bd .cm-list ul").html(text);
					
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	getLifeStyle	: function(nodeCode, productCode, shopCode, planCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase + 'api/product/detail/lifestyle.json',
			type	: 'GET',
			data	: {nodeCode : nodeCode},
			success	: function(data){
				if(data && data.code==='100'){
					$(".loading-spiner").hide();
					var tplViewspot = require('./tpl/lifestyle.html'); // 加载具体tpl文件
					var render = etpl.compile(tplViewspot);
					var json = {
						lifestyle	: data.lifestyle,
						gallerys	: data.lifestyle.gallery
					};
					var text   = render(json);
					$(".viewspot-bd").html(text);
					$(".viewspot-bd .desc").html(data.lifestyle.content);
					$(".swiper-container").swiper({ //轮播实现
						autoplay: 3000,
						autoplayDisableOnInteraction: false,
						speed : 600
					});
					if(productCode && productCode.trim().length>0 && shopCode && shopCode.trim().length>0){
						$("header .back").unbind('click').click(function(){
							window.location.href = 'detail.html?productCode='+productCode+'&shopCode='+shopCode;
						});
					}else if(planCode && planCode.trim().length>0){
						$("header .back").unbind('click').click(function(){
							window.location.href = 'travel.html?planCode='+planCode;
						});
					}else{
						$("header .back").removeClass("external");
					}
					
					var title = data.lifestyle.title+"_特色旅游_酷鸟";
					var keywords = data.lifestyle.title+",特色旅游,高端旅游,旅游线路,酷鸟";
					var desc = data.lifestyle.title+"。酷鸟旅游网，一个提供特色旅游特色旅行线路的网站。";
					KN_Detail.setSEO(title, keywords, desc);
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	getCustomHotel	: function(nodeCode, planCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase + '/api/product/detail/custom_hotel.json',
			type	: 'GET',
			data	: {nodeCode : nodeCode},
			success	: function(data){
				if(data && data.code==='100'){
					$(".loading-spiner").hide();
					var tplViewspot = require('./tpl/customHotel.html'); // 加载具体tpl文件
					var render = etpl.compile(tplViewspot);
					var json = {
						hotel	: data.hotel,
						gallerys	: data.hotel.gallery
					};
					var text   = render(json);
					$(".viewspot-bd").html(text);
					$('header .title').text(data.hotel.title);
					$(".viewspot-bd .desc").html(data.hotel.content);
					$(".swiper-container").swiper({ //轮播实现
						autoplay: 3000,
						autoplayDisableOnInteraction: false,
						speed : 600
					});
					if(planCode && planCode.trim().length>0){
						$("header .back").unbind('click').click(function(){
							window.location.href = 'travel.html?planCode='+planCode;
						});
					}else{
						$("header .back").removeClass("external");
					}
					
					var title = data.hotel.title+"_特色旅游_酷鸟";
					var keywords = data.hotel.title+",特色旅游,高端旅游,旅游线路,酷鸟";
					var desc = data.hotel.title+"。酷鸟旅游网，一个提供特色旅游特色旅行线路的网站。";
					KN_Detail.setSEO(title, keywords, desc);
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	getCustomViewSpot	: function(nodeCode, planCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase + 'api/product/detail/custom_viewspot.json',
			type	: 'GET',
			data	: {nodeCode : nodeCode},
			success	: function(data){
				if(data && data.code==='100'){
					$(".loading-spiner").hide();
					var tplViewspot = require('./tpl/customViewspot.html'); // 加载具体tpl文件
					var render = etpl.compile(tplViewspot);
					var json = {
						viewspot	: data.viewspot,
						gallerys	: data.viewspot.gallery
					};
					var text   = render(json);
					$(".viewspot-bd").html(text);
					$('header .title').text(data.viewspot.title);
					$(".viewspot-bd .desc").html(data.viewspot.content);
					$(".swiper-container").swiper({ //轮播实现
						autoplay: 3000,
						autoplayDisableOnInteraction: false,
						speed : 600
					});
					if(planCode && planCode.trim().length>0){
						$("header .back").unbind('click').click(function(){
							window.location.href = 'travel.html?planCode='+planCode;
						});
					}else{
						$("header .back").removeClass("external");
					}
					
					var title = data.viewspot.title+"_特色旅游_酷鸟";
					var keywords = data.viewspot.title+",特色旅游,高端旅游,旅游线路,酷鸟";
					var desc = data.viewspot.title+"。酷鸟旅游网，一个提供特色旅游特色旅行线路的网站。";
					KN_Detail.setSEO(title, keywords, desc);
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	getCustomTraffic	: function(nodeCode, planCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase + 'api/product/detail/custom_traffic.json',
			type	: 'GET',
			data	: {nodeCode : nodeCode},
			success	: function(data){
				if(data && data.code==='100'){
					$(".loading-spiner").hide();
					var tplViewspot = require('./tpl/customTraffic.html'); // 加载具体tpl文件
					var render = etpl.compile(tplViewspot);
					var json = {
						traffic	: data.traffic,
						gallerys	: data.traffic.gallery
					};
					var text   = render(json);
					$(".viewspot-bd").html(text);
					$("header .title").text(data.traffic.title);
					$(".swiper-container").swiper({ //轮播实现
						autoplay: 3000,
						autoplayDisableOnInteraction: false,
						speed : 600
					});
					if(planCode && planCode.trim().length>0){
						$("header .back").unbind('click').click(function(){
							window.location.href = 'travel.html?planCode='+planCode;
						});
					}else{
						$("header .back").removeClass("external");
					}
					
					var title = data.traffic.title+"_特色旅游_酷鸟";
					var keywords = data.traffic.title+",特色旅游,高端旅游,旅游线路,酷鸟";
					var desc = data.traffic.title+"。酷鸟旅游网，一个提供特色旅游特色旅行线路的网站。";
					KN_Detail.setSEO(title, keywords, desc);
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	getCustomEvent	: function(nodeCode, planCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase + 'api/product/detail/custom_event.json',
			type	: 'GET',
			data	: {nodeCode : nodeCode},
			success	: function(data){
				if(data && data.code==='100'){
					$(".loading-spiner").hide();
					var tplViewspot = require('./tpl/customEvent.html'); // 加载具体tpl文件
					var render = etpl.compile(tplViewspot);
					var json = {
						event	: data.event,
						gallerys	: data.event.gallery
					};
					var text   = render(json);
					$(".viewspot-bd").html(text);
					$('header .title').text(data.event.title);
					$(".swiper-container").swiper({ //轮播实现
						autoplay: 3000,
						autoplayDisableOnInteraction: false,
						speed : 600
					});
					if(planCode && planCode.trim().length>0){
						$("header .back").unbind('click').click(function(){
							window.location.href = 'travel.html?planCode='+planCode;
						});
					}else{
						$("header .back").removeClass("external");
					}
					
					var title = data.event.title+"_特色旅游_酷鸟";
					var keywords = data.event.title+",特色旅游,高端旅游,旅游线路,酷鸟";
					var desc = data.event.title+"。酷鸟旅游网，一个提供特色旅游特色旅行线路的网站。";
					KN_Detail.setSEO(title, keywords, desc);
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	getCustomLifeStyle	: function(nodeCode, planCode){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase + 'api/product/detail/custom_lifestyle.json',
			type	: 'GET',
			data	: {nodeCode : nodeCode},
			success	: function(data){
				if(data && data.code==='100'){
					$(".loading-spiner").hide();
					var tplViewspot = require('./tpl/customLifeStyle.html'); // 加载具体tpl文件
					var render = etpl.compile(tplViewspot);
					var json = {
						lifestyle	: data.lifestyle,
						gallerys	: data.lifestyle.gallery
					};
					var text   = render(json);
					$(".viewspot-bd").html(text);
					$("header .title").text(data.lifestyle.title);
					$(".viewspot-bd .desc").html(data.lifestyle.content);
					$(".swiper-container").swiper({ //轮播实现
						autoplay: 3000,
						autoplayDisableOnInteraction: false,
						speed : 600
					});
					if(planCode && planCode.trim().length>0){
						$("header .back").unbind('click').click(function(){
							window.location.href = 'travel.html?planCode='+planCode;
						});
					}else{
						$("header .back").removeClass("external");
					}
					
					var title = data.lifestyle.title+"_特色旅游_酷鸟";
					var keywords = data.lifestyle.title+",特色旅游,高端旅游,旅游线路,酷鸟";
					var desc = data.lifestyle.title+"。酷鸟旅游网，一个提供特色旅游特色旅行线路的网站。";
					KN_Detail.setSEO(title, keywords, desc);
				}else{
					$.toast("error:"+data.msg);
				}
			}
		});
	},
	setSEO	: function(title, keywords, description, isOg){
		if($.device.iphone){
			//动态为ios系统修改标题hack
			var body = document.getElementsByTagName('body')[0];
		    document.title = title;
		    var iframe = document.createElement("iframe");
		    iframe.style.display="none";
		    iframe.setAttribute("src", "http://named.cn/page/take/img/icon_phone.png");
		    var d = function() {
		      setTimeout(function() {
		        iframe.removeEventListener('load', d);
		        document.body.removeChild(iframe);
		      }, 0);
		    };
		    iframe.addEventListener('load', d);
		    document.body.appendChild(iframe);
		}else{
			document.title = title;
		}

		$('meta[name="Keywords"]').attr('content', keywords);
		$('meta[name="Description"]').attr('content', description);
		if(isOg){ //是否需要设置分享
			$('meta[name="ogTitle"]').attr('content', title);
			$('meta[name="ogDesc"]').attr('content', description);
			$('meta[name="ogFlag"]').attr('content', keywords);
		}
	}
};

var KN_ProductNotFound = {
	init : function(){

		$(".knIndex").click(function(){
			location.href = GlobalKuNiao.config.knIndex;
		});
		
		/*$(".userCenter").click(function(){
			$.router.load('../home/memberUser.html');
		});*/

		$('.bar-nav .icon-left').click(function(){
			location.href = GlobalKuNiao.config.knIndex;
		});
		// 暂时撤掉推荐
		// this.getRecommend();
	},
	getRecommend:function(){
		var _ts = this;

		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'api/home/products.json',
			type	: 'GET',
			data	: {
				limit: 6
			},
			success	: function(data){
				if(data && data.code==='100'){
					_ts.render(data);
				}
			}
		});
	},
	render:function(data){
		var tplNotFound = require('./tpl/notFound.html'); // 加载具体tpl文件
		var render = etpl.compile(tplNotFound);
		
		var text   = render({
			data : data.products
		});

		// console.log(text);

		$(".recommend-pro .item-list").html(text);
		
		$(".re-con li").click(function(){
			var $this = $(this);
			var shopCode = $this.attr("data-shopcode");
			var productCode = $this.attr("data-proCode");
			window.location.href = "?shopCode="+shopCode+"&productCode="+productCode;
		});
	}
};

// 路由load
$(document).on("pageInit",'#productDetail' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.params.isNeedFav = params.needFav;
	KN_Detail.getProductInfo(params.productCode, params.shopCode, 2);
	
	KN_Detail.getRecommend(params.productCode, params.shopCode);
	KN_Detail.init(params);
 });

$(document).on("pageInit",'#detailBookNotice' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.params.isNeedFav = params.needFav;
	KN_Detail.getProductInfo(params.productCode, params.shopCode, 0);
	KN_Detail.init(params);
 });

$(document).on("pageInit",'#detailOther' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.params.isNeedFav = params.needFav;
	KN_Detail.getProductInfo(params.productCode, params.shopCode, 1);
	KN_Detail.init(params);
 });

$(document).on("pageInit",'#detailHotel' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getHotel(params.nodeCode, params.productCode, params.shopCode, params.planCode);
	KN_Detail.init(params);
 });

$(document).on("pageInit",'#detailTravel' ,function(e, pageId, $page) {
	// console.log(pageId);
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getTravel(params.planCode);
	KN_Detail.initTravel(params.productCode, params.shopCode);
	KN_Detail.init(params);
 });

$(document).on("pageInit",'#detailViewport' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getViewSpot(params.nodeCode, params.productCode, params.shopCode, params.planCode);
	KN_Detail.init(params);
 });
$(document).on("pageInit",'#detailLifeStyle' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getLifeStyle(params.nodeCode, params.productCode, params.shopCode, params.planCode);
	KN_Detail.init(params);
});
 
$(document).on("pageInit",'#detailComment' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getComments(params.productCode, params.shopCode);
	KN_Detail.init(params);
 });
$(document).on("pageInit",'#detailCustomEvent' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getCustomEvent(params.nodeCode, params.planCode);
	KN_Detail.init(params);
});
$(document).on("pageInit",'#detailCustomHotel' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getCustomHotel(params.nodeCode, params.planCode);
	KN_Detail.init(params);
});
$(document).on("pageInit",'#detailCustomLifeStyle' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getCustomLifeStyle(params.nodeCode, params.planCode);
	KN_Detail.init(params);
});
$(document).on("pageInit",'#detailCustomTraffic' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getCustomTraffic(params.nodeCode, params.planCode);
	KN_Detail.init(params);
});
$(document).on("pageInit",'#detailCustomViewspot' ,function(e, pageId, $page) {
	var params = GlobalKuNiao.getUrlParam();
	KN_Detail.getCustomViewSpot(params.nodeCode, params.planCode);
	KN_Detail.init(params);
});

$(document).on("pageInit",'#productNotFound' ,function(e, pageId, $page) {
	KN_ProductNotFound.init();
});