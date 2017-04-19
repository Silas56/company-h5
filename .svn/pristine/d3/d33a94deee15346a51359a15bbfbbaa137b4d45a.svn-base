var global = require('../common/global.js');
var etpl = require('../common/etpl.js');
var tplShopIndex = require('./tpl/shopIndex.html');
var tplProductItem = require('./tpl/productItem.html');
var tplShopInfo = require('./tpl/contactMerchant.html');
var KNShare = require('../common/share.js');


function setSEO(title, keywords, description, isOg){
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

//商铺首页
var KN_Index = {
	config:{
		shopCode : '',
		apiBase : '',
		request : {
			shopInfo : false,
			advImg : false,
			recommendProduct : false,
			productList : false
		}, //数据请求状态 请求成功将设置为true
		data : {},
		isNeedFav	: 0
	},
	init:function(){
		var param = global.getUrlParam();

		this.config.isNeedFav = param.needFav;
		
			if(typeof param.shopCode === 'undefined'){
				$.alert('该店铺不存在',function(){
					location.href = global.config.knIndex;
				});
				return false;
			}else{
				this.config.shopCode = param.shopCode;
				this.config.apiBase  = global.config.serverBase;
			}

			// 初始化配置参数
			this.config.request = {
				shopInfo : false,
				advImg : false,
				recommendProduct : false,
				productList : false
			};

			this.tplFilter();
			this.getData();

			//设置联系商家链接
			$('.fixed-tab-shop').find('.merchant-link').attr('href','./contactMerchant.html?shopCode=' + param.shopCode);
			//产品目录
			this.proCategory();

			//在localstorage 设置最新访问的店铺名称
			global.localStorage.set('shopCode',param.shopCode);
	},
	getData : function(){
		//店铺基本信息
		var _ts  	= this,
			infoUrl = this.config.apiBase + 'api/shop/info.json',
			advUrl  = this.config.apiBase + 'api/shop/advImg.json',
			recUrl  = this.config.apiBase + 'api/shop/recommendProduct.json',
			latUrl  = this.config.apiBase + 'api/shop/productList.json',
			data 	= {};

			data = {
				shopCode : this.config.shopCode
			};

			this.sendRequest(infoUrl,data,'shopInfo','get');
			this.sendRequest(advUrl,data,'advImg','get');
			this.sendRequest(recUrl,data,'recommendProduct','get');
			this.sendRequest(latUrl,data,'productList','get');
		
	},
	sendRequest:function(url,data,type,rtype){
		var _ts = this;	
		if(rtype === 'post'){
			data = JSON.stringify(data);
		}
		$.ajax({
			url : url,
			type : rtype,
			data : data,
			dataType : 'json',
			contentType : 'application/json',
			success : function(rs){

				_ts.config.request[type] = true;
				if(rs.code === '100'){
					if(type === 'shopInfo'){
						console.log(rs);
						_ts.config.data[type] = rs.shopInfo;

						if(rs.shopInfo.shopStatus === 1){
							$('.fixed-tab-shop').show();
						}

						var title = rs.shopInfo.shopName;
						var keywords = rs.shopInfo.shopName+",特色旅游,高端旅游,主题旅游,旅游线路,酷鸟";
						var desc = "酷鸟旅游网，一个提供特色旅游(旅行)、高端旅游(旅行)、主题旅游(旅行)、旅游线路、旅行线路的旅游网站，特色旅游找酷鸟。酷鸟为"+rs.shopInfo.shopName+"的特色旅游项目提供专业权威的电商解决方案。";
						setSEO(title, keywords, desc, 1);

						var imageUrl = '';
						if(typeof rs.shopInfo.shopLogoImg !== 'undefined'){
							imageUrl = rs.shopInfo.shopLogoImg;
						}

						var shopIntroduction = ' ';
						if(typeof rs.shopInfo.shopIntroduction !== 'undefined'){
							shopIntroduction = rs.shopInfo.shopIntroduction;
						}

						var currentLocation = window.location.href;
						KNShare.initWeixin(currentLocation);

						wx.ready(function() {
				           //分享给朋友圈
							KNShare.onMenuShareTimeline(title,currentLocation,imageUrl);

							//分享给微信好友
							KNShare.onMenuShareAppMessage(title,currentLocation,imageUrl,shopIntroduction);  	 
				        });

					}else if(type === 'advImg'){
						_ts.config.data[type] = rs.list;
					}else if(type === 'recommendProduct'){
						if(rs.page.list.length > 0){
							_ts.config.data[type] = rs.page.list;
						}
					}else if(type === 'productList'){
						if(rs.page.list.length > 0){
							_ts.config.data[type] = rs.page.list;	
						}
					}
					
					_ts.render();
				}else if(rs.code === '300'){
					if(type === 'shopInfo'){
						$.alert(rs.msg,function(){
							location.href = global.config.knIndex;
						});
					}
				}
			},
			error : function(){
				_ts.config.request[type] = true;				
			}
		});
	},
	isCompleteRequest:function(){
		for(var s in this.config.request){
			if(this.config.request[s] === false){
				return false;
			}
		}
		return true;
	},
	render:function(){
		if(!this.isCompleteRequest()){
			return false;
		}

		var data = this.config.data;
		// 初始化模板
		var render = etpl.compile(tplShopIndex);
		//渲染数据
		var text   = render(data);

		// 把渲染好的模板加载到dom上面去
		$('#indexShop .content').html(text);

		this.pageInit();
		this.isShopCollect();

		$('.item').on('click',function(){
			var pcode = $(this).attr('data-pcode'),
				scode = $(this).attr('data-scode');

				$.router.load('../detail/detail.html?productCode='+pcode + '&shopCode=' + scode);
		});
	},
	proCategory:function(){
		var _ts  = this;
		var data = {
			shopCode : this.config.shopCode
		};
		$.ajax({
			url : this.config.apiBase + 'api/shop/productCate.json',
			type : 'get',
			data : data,
			contentType : 'application/json',
			dataType : 'json',
			success : function(rs){
				if(rs.code === '100'){

					if(!rs.hasOwnProperty('list')){
						return false;
					}

					if(rs.list.length === 0){
						return false;
					}

					var html = '';

					for(var i = 0 ;i < rs.list.length ; i++){
						html += '<a href="productCatalog.html?shopCode=';
						html += _ts.config.shopCode +'&catalogCode=' + rs.list[i].catalogCode;
						html += '&catalogName=' + rs.list[i].catalogName;
						html += '">'+rs.list[i].catalogName+'</a>';
					}

					//添加html
					$('.catogery-list').html(html);

					//点击事件
					$('.fixed-tab-shop').on('click','.category-btn',function(){
						if($(this).hasClass('catogery-list-active')){
							$(this).removeClass('catogery-list-active');
						}else{
							$(this).addClass('catogery-list-active');
						}
					});
					/*
					$('body').on('click',function(e){
						$('.category-btn').removeClass('catogery-list-active');
					});*/
				}
			}
		});
	},
	pageInit:function(){
		// 初始化轮播图
		$(".swiper-container").swiper({
			autoplay: 3000,
        	autoplayDisableOnInteraction: false,
			speed : 600
		});
		
		$(".user").click(function(){
			window.location.href = '../home/memberUser.html';
		});
		
		$(".knIndex").click(function(){
			window.location.href = global.config.knIndex;
		});
		
		$(".userCenter").click(function(){
			window.location.href = '../home/memberUser.html';
		});
	},
	isShopCollect : function(){
		var _ts      = this;
		var $collect = $('.collection');
		var url  	 = global.config.serverBase + 'api/user/shopIsFaved.json';
		var data 	 = {
			shopCode : this.config.shopCode
		};
		var cstatus = false;

		$.ajax({
			url : url,
			type : 'get',
			dataType : 'json',
			data : data,
			success : function(rs){
				if(rs.code==='101' && KN_Index.config.isNeedFav==="1"){//未登录点击收藏跳转到登录页面，登录成功后自动收藏
					KN_Index.updateFav(KN_Index.config.shopCode, 1);
				}
				if(rs.code === '100'){
					$collect.addClass('has-collection').html('已收藏');
				}
			}
		});

		$collect.off('click').on('click',function(){
			KN_Index.updateFav(KN_Index.config.shopCode, 1);
		});
	},
	updateFav	: function(shopCode, updateType){
		var $collect = $('.collection');
		var curl = global.config.serverBase + 'api/user/updateFav.json';
		var data = {
			shopCode : shopCode,
			favType : 2,
			updateType : updateType
		};

		var msg = '收藏成功';

		if($collect.hasClass('has-collection')){
			data.updateType = 2;
			msg = '取消收藏成功'; 
		}

		$.ajax({
			url : curl,
			type : 'post',
			dataType : 'json',
			data : JSON.stringify(data),
			contentType : 'application/json',
			success : function(rs){
				if(rs.code === '100'){
					$.toast(msg);
					
					if(data.updateType === 1){
						$collect.addClass('has-collection').html('已收藏');
					}else{
						$collect.removeClass('has-collection').html('收藏');
					}

				}else if(rs.code === '403'){
					var url = location.href + '&needFav=1';
					url = encodeURIComponent(url);
					$.ajax({
						url : '/m/api/global/visited.json?url='+url+'',
						type : 'get',
						dataType : 'json',
						success : function(){
							window.location.href = global.config.loginHref;
						}
					});
				}else{
					$.toast(rs.msg);
				}
			}
		});
	},
	tplFilter:function(){
		etpl.addFilter('scoreFormat',function(s){

				return s/5*100;
		});
	}
};

// 最新上架，推荐产品
var KN_Latest = {
	config:{
		shopCode : '',   //店铺编码
		apiBase : '',	//api基本目录
		param   : {},  //请求参数
		data 	: {}, //数据
		pageNum : {
			shopRecommend : 1,
			shopLatest : 1
		},    //分页页数
		loading : false, //加载状态
		firstLoad : true,
		sort : ''
	},
	init:function(type){
		var param = global.getUrlParam();

			if(typeof param.shopCode === 'undefined'){
				$.router.back();
				return false;
			}else{
				this.config.shopCode = param.shopCode;
				this.config.apiBase  = global.config.serverBase;
			}

			if(type === 'shopRecommend'){
				this.config.url = this.config.apiBase + '/api/shop/recommendProduct.json';
				this.config.param.shopCode = this.config.shopCode;
				this.config.param.pageSize = 10;
				this.config.param.pageNum  = this.config.pageNum.shopRecommend;
				
				this.config.sort = 'shopRecommend';

				this.getShopInfo(param.shopCode, '推荐产品'); //设置SEO






			}else if(type === 'shopLatest'){
				this.config.url = this.config.apiBase + '/api/shop/productList.json';

				this.config.param.shopCode = this.config.shopCode;
				this.config.param.pageSize = 10;
				this.config.param.orderField = 'last_updated_time';
				this.config.param.pageNum  = this.config.pageNum.shopLatest;

				this.config.sort = 'shopLatest';
				
				this.getShopInfo(param.shopCode, '最新上架'); //设置SEO






			}

			if($('#content').find('.item').size() === 0){
				this.getData();
			}else{
				this.scroll();
			}
	},
	getData : function(){
		//店铺基本信息
		var _ts  	= this,
			latUrl  = this.config.url,
			data 	= {};

			this.sendRequest(latUrl,this.config.param,'latest');	
	
	},
	sendRequest:function(url,data,type){
		var _ts = this;	
		$.ajax({
			url : url,
			type : 'get',
			data : data,
			contentType : 'application/json',
			dataType : 'json',
			success : function(rs){
				if(rs.code === '100'){
					_ts.config.total = rs.page.pageCount;
					_ts.config.data[type] = rs.page.list;
					_ts.render();
					_ts.config.loading = false;

					if(type==='latest'){ //最新上架，不需要下拉刷新
						//首次加载初始化无限滚动
						if(_ts.config.firstLoad){
							_ts.config.firstLoad = false;
							_ts.scroll();
						}

						// 返回的数据少于10条，说明已经加载完了
						if(rs.page.list.length < 10){
							// 加载完毕，则注销无限加载事件，以防不必要的加载
							$.detachInfiniteScroll($('.infinite-scroll'));
							// 删除加载提示符
							$('.infinite-scroll-preloader').remove();
						}
					}
				}
			},
			error : function(){
			}
		});
	},
	scroll:function(){

		  	var _ts = this;
		  	// $.attachInfiniteScroll($('.content'));
		    $('.content').on('infinite', function() {

		      // 如果正在加载，则退出
		      if (_ts.config.loading){
		      	return false;
		      }

		      // 设置flag
		      _ts.config.loading = true;
		      // 最多可加载的条目
		      var maxItems = _ts.config.total;

		      if ( _ts.config.param.pageNum > maxItems) {
                  // 加载完毕，则注销无限加载事件，以防不必要的加载
                  $.detachInfiniteScroll($('.infinite-scroll'));
                  // 删除加载提示符
                  $('.infinite-scroll-preloader').remove();
                  return false;
              }

              //发送请求
              _ts.config.pageNum[_ts.config.sort]++;
              _ts.config.param.pageNum = _ts.config.pageNum[_ts.config.sort];
              // console.log(_ts.config);
		      _ts.sendRequest(_ts.config.url,_ts.config.param,'latest');
		    });
	},	
	render:function(){		
		var data = this.config.data.latest;
		// 初始化模板
		var render = etpl.compile(tplProductItem);
		//渲染数据
		var text   = render({
			data : data
		});
		// 把渲染好的模板加载到dom上面去
		$('.content .con').append(text);
		$('.loading-spiner').hide();	

		// $.detachInfiniteScroll($('.infinite-scroll'));
     	 // 删除加载提示符
      	// $('.infinite-scroll-preloader').hide();

      	$('.item').on('click',function(){
			var pcode = $(this).attr('data-pcode'),
				scode = $(this).attr('data-scode');

				$.router.load('../detail/detail.html?productCode='+pcode + '&shopCode=' + scode);
		});

      	return;
	},
	getShopInfo	: function(shopCode, pageTitle){
		$.ajax({
			url	: global.config.serverBase + '/api/shop/info.json',
			type: 'GET',
			data	: {
				shopCode : shopCode
			},
			success: function(data){
				if(data && data.code==='100'){
					var title = pageTitle+"_"+data.shopInfo.shopName;
					var keywords = pageTitle+","+data.shopInfo.shopName+", 特色旅游,高端旅游,酷鸟。";
					var desc = pageTitle+"_"+data.shopInfo.shopName+"，酷鸟为"+data.shopInfo.shopName+"的特色旅游项目提供专业权威的电商解决方案。";
					if(pageTitle===''){    
					     title = data.shopInfo.shopName+"_酷鸟";
					     keywords = data.shopInfo.shopName+", 特色旅游,高端旅游,酷鸟。";
					     desc = data.shopInfo.shopName+"，酷鸟为"+data.shopInfo.shopName+"的特色旅游项目提供专业权威的电商解决方案。";
					}
					setSEO(title, keywords, desc);

					var imageUrl = '';
					if(typeof data.shopInfo.shopLogoImg !== 'undefined'){
						imageUrl = data.shopInfo.shopLogoImg;
					}

					title = data.shopInfo.shopName + "_" +pageTitle;

					var currentLocation = window.location.href;
					KNShare.initWeixin(currentLocation);

					wx.ready(function() {
			           //分享给朋友圈
						KNShare.onMenuShareTimeline(title,currentLocation,imageUrl);

						//分享给微信好友
						KNShare.onMenuShareAppMessage(title,currentLocation,imageUrl,' ');  	 
			        });
				}
			}
		});
	}
};

// 联系商家
var KN_ShopMerchant = {
	config:{
		shopCode : '',
		apiBase : '',
		data : {},
		isNeedFav	: 0
	},
	init:function(){
		var param = global.getUrlParam();
		this.config.isNeedFav = param.needFav;
			if(typeof param.shopCode === 'undefined'){
				$.router.back();
				return false;
			}else{
				this.config.shopCode = param.shopCode;
				this.config.apiBase  = global.config.serverBase;
			}
			this.getData();
			this.isCollected();
	},
	isCollected	: function(){
		var data = {
			shopCode	: KN_ShopMerchant.config.shopCode,
			favType		: 2, //收藏店铺
			updateType	: 1
		};
		$.ajax({
			url : KN_ShopMerchant.config.apiBase + '/api/user/shopIsFaved.json',
			type : 'GET',
			data : data,
			success : function(rs){

				if(rs.code==='101' && KN_ShopMerchant.config.isNeedFav==="1"){//未登录点击收藏跳转到登录页面，登录成功后自动收藏
					KN_ShopMerchant.updateFav(KN_ShopMerchant.config.shopCode, 1);
				}else if(rs.code==='101'){
					var btnCollected = $(".collected-bottom");
					btnCollected.text('收藏');
					btnCollected.removeClass("collected-bottom").addClass("collect-bottom");
					KN_ShopMerchant.initCollect();
				}else if(rs.code === '100'){
					var btn = $(".collect-bottom");
					btn.text('已收藏');
					btn.removeClass("collect-bottom").addClass("collected-bottom");
					KN_ShopMerchant.initCollected();
				}else if(rs.code==="205"){
				}else{
					if(rs.code==='403'){
						KN_ShopMerchant.initCollect();
					}else{
						$.toast('error:'+rs.msg);
					}
				}
			}
		});
		
	},
	updateFav	: function(shopCode, updateType){
		var data = {
			shopCode	: shopCode,
			updateType	: updateType,
			favType		: 2
		};
		$.ajax({
			url		: KN_ShopMerchant.config.apiBase+'api/user/updateFav.json',
			type	: 'POST',
			data	: JSON.stringify(data),
			contentType: "application/json",
			success	: function(data){
				if(data && data.code==='100'){
					if(updateType===1){
						var btn = $(".collect-bottom");
						btn.text('已收藏');
						btn.removeClass("collect-bottom").addClass("collected-bottom");
						KN_ShopMerchant.initCollected();
						$.toast("收藏成功");
					}else{
						$.toast('取消成功');
						var btnCollected = $(".collected-bottom");
						btnCollected.text('收藏');
						btnCollected.removeClass("collected-bottom").addClass("collect-bottom");
						KN_ShopMerchant.initCollect();
					}
				}else if(data.code==="205"){
				}else{
				
					if(data && data.code==='403'){
						var url = location.href + '&needFav=1';
						url = encodeURIComponent(url);
						$.ajax({
							url : '/m/api/global/visited.json?url='+url+'',
							type : 'get',
							dataType : 'json',
							success : function(){
								window.location.href = global.config.loginHref;
							}
						});
					}else{
						$.toast('error:'+data.msg);
					}
				}
			}
		});
	},
	initCollect	: function(){
		$(".collect-bottom").unbind('click').click(function(){
			KN_ShopMerchant.updateFav(KN_ShopMerchant.config.shopCode, 1);
		});
	},
	initCollected	: function(){
		$(".collected-bottom").unbind('click').click(function(){
			KN_ShopMerchant.updateFav(KN_ShopMerchant.config.shopCode, 2);
		});
	},
	getData : function(){
		//店铺基本信息
		var _ts  	= this,
			infoUrl  = this.config.apiBase + 'api/shop/info.json',
			data 	= {};

			data = {
				shopCode : this.config.shopCode
			};
			this.sendRequest(infoUrl,data,'shopInfo');		
	},
	sendRequest:function(url,data,type){
		var _ts = this;	
		$.ajax({
			url : url,
			type : 'get',
			data : data,
			dataType : 'json',
			contentType : 'application/json',
			success : function(rs){
				 console.log(rs);
				if(rs.code === '100'){
					_ts.config.data[type] = rs[type];
					_ts.render();

					var title = "联系商家_"+rs.shopInfo.shopName;
					var keywords = rs.shopInfo.shopName+", 特色旅游,高端旅游,酷鸟。";
					var desc = rs.shopInfo.shopName+"，酷鸟为"+rs.shopInfo.shopName+"的特色旅游项目提供专业权威的电商解决方案。";
					setSEO(title, keywords, desc);

					var imageUrl = '';
					if(typeof rs.shopInfo.shopLogoImg !== 'undefined'){
						imageUrl = rs.shopInfo.shopLogoImg;
					}

					title = rs.shopInfo.shopName + "_联系商家";

					var currentLocation = window.location.href;
					KNShare.initWeixin(currentLocation);

					wx.ready(function() {
			           //分享给朋友圈
						KNShare.onMenuShareTimeline(title,currentLocation,imageUrl);

						//分享给微信好友
						KNShare.onMenuShareAppMessage(title,currentLocation,imageUrl,' ');  	 
			        });
				}
			},
			error : function(){
			}
		});
	},
	render:function(){		
		var data = this.config.data.shopInfo;

		// etpl.addFilter('scoreFormat',function(s){
		// 	return s/5*100;
		// });
	
		var num1 = parseInt(data.shopScore);
		var num2 = data.shopScore*1-num1;
		var scoreList=[];
		for(var i=0;i<5;i++){
			if(i<num1){
				scoreList[i]="14px";
			}else if(i == num1){
				scoreList[i]=14*num2+"px";
			}else{
				scoreList[i]="0px";
			}
		}

		data.scoreList=scoreList;

		// 初始化模板
		var render = etpl.compile(tplShopInfo);


		//渲染数据
		var text   = render(data);

		// 把渲染好的模板加载到dom上面去
		$('.content').html(text);
		// var num1 = parseInt(data.shopScore);
		// var num2 = data.shopScore*1-num1;
		// $('.star li').each(function(index, el){
		// 	var $el = $(el);
		// 	var i = $el.attr('id').substr(4);
		// 	if(i < num1) {
		// 		$('#star'+i).find('span').css('width', '18px');
		// 		// $('#star'+i).css('background-position', '0 0');
		// 	}else if(i == num1) {
		// 		if(!!num2) {
		// 			// $('#star'+i).append('<span></span>');
		// 			$('#star'+i).find('span').css('width', $('.star li').width()*num2);
		// 		}
		// 	}
		// });
		
	}
};

// 产品目录,全部产品
var KN_proCategory = {
	config:{
		tabs : 0, //0，1，2
		cache : [], //将请求的数据缓存起来
		data 	: {}, //数据
		loading : false, //加载状态
		firstLoad : true,
		pageNum : {
			all : 1,
			sale : 1,
			price : 1
		},
		pageSize : { //已加载的数目
			all : 0,
			sale : 0,
			price : 0
		},
		total:{
			all : 0,
			sale : 0,
			price : 0
		},
		sort : 'all' //当前tab
	},
	init:function(type){
		var param = global.getUrlParam();

			if(typeof param.shopCode === 'undefined'){
				$.router.back();
				return false;
			}

			if(typeof param.catalogName !== 'undefined'){
				$('h1').html(decodeURI(param.catalogName));
			}

			this.config.url = global.config.serverBase + 'api/shop/productList.json';
			
			if(type === 'allProducts'){
				this.config.param = {
					pageNum : this.config.pageNum[this.config.sort],
					shopCode : param.shopCode,
					pageSize : 10,
					orderField :'volume',
					orderValue	: 'desc'
				};
				this.getShopInfo(param.shopCode, '全部产品'); //添加SEO
			}else{
				this.config.param = {
					pageNum : this.config.pageNum[this.config.sort],
					shopCode : param.shopCode,
					catalogCode : param.catalogCode,
					pageSize : 10,
					orderField :'last_updated_time',
					orderValue	: 'desc'
				};
				
				this.getShopInfo(param.shopCode, '产品目录'); //添加SEO
			}	


			var $tcon = $('.tabs').find('.con').eq(0);		
				
				if($tcon.find('.item').size() === 0){
					this.getData();
				}

			this.scroll();
			//tab事件
			var _ts = this;

			$('.buttons-tab').on('click','a',function(){
				var _index = parseInt($(this).data('sort'),10);
					
					var isPirceClick = false; //判断是否是价格升降序排序点击
					if(_ts.config.tabs === 2 && _index === 2){
						isPirceClick = true;
					}


					_ts.config.loading = true;
					_ts.config.tabs = _index;

					if(_index === 0){
						//_ts.config.param.orderField = 'last_updated_time';
						_ts.config.param.orderField = 'volume'; //tip:修改为按销量排序，见jira MICROSHOP-101
						_ts.config.sort = 'all';
						_ts.config.param.orderValue = 'desc';	
					}else if(_index === 1){
						_ts.config.param.orderField = 'volume';
						_ts.config.sort = 'sale';
						_ts.config.param.orderValue = 'desc';	
					}else if(_index === 2){
						_ts.config.param.orderField = 'price';
						_ts.config.sort = 'price';
						_ts.config.param.orderValue = 'asc';
						
					}
					//价格排序点击事件处理
					if(isPirceClick){
						_ts.config.pageSize.price  = 0;
						if(!$(this).hasClass('desc')){
							_ts.config.param.orderValue = 'desc';
							$(this).addClass('desc');
						}else{
							_ts.config.param.orderValue = 'asc';
							$(this).removeClass('desc');
						}

						
						$('.content .tab').eq(_index).find('.con').html('');
						$('.content .tab').eq(_index).find('.infinite-scroll-preloader').show();
						_ts.config.pageNum[_ts.config.sort] = 1;
					}

					_ts.config.param.pageNum = _ts.config.pageNum[_ts.config.sort];

					if($('.content .tab').eq(_index).find('.item').size() === 0){
						_ts.sendRequest(_ts.config.url,_ts.config.param,_ts.config.sort);
					}else{
						_ts.config.loading = false;
					}
			});
	},
	getData : function(){
		//店铺基本信息
		var _ts  	= this,
			latUrl  = this.config.url,
			data 	= {};

			this.sendRequest(latUrl,_ts.config.param,'all');	
	
	},
	sendRequest:function(url,data,type){
		var _ts = this;	
		$.ajax({
			url : url,
			type : 'get',
			data : data,
			contentType : 'application/json',
			dataType : 'json',
			success : function(rs){
				if(rs.code === '100'){
					_ts.config.total[_ts.config.sort] = rs.page.total;

					_ts.config.pageSize[_ts.config.sort] += rs.page.list.length;

					_ts.render(rs.page.list);
					_ts.config.loading = false;

					//首次加载初始化无限滚动
					// _ts.scroll();

					// 返回的数据少于10条，说明已经加载完了
					if(rs.page.list.length < 10){
						// $.detachInfiniteScroll($('.infinite-scroll').eq(_ts.config.tabs));
              			// 删除加载提示符
              			$('.infinite-scroll-preloader').eq(_ts.config.tabs).hide();
					}
				}
			},
			error : function(){
			}
		});
	},
	scroll:function(){

	  	var _ts = this;
	  	// $.attachInfiniteScroll($('.content'));
	    $('.content').on('infinite', function() {

	      // 如果正在加载，则退出
	      if (_ts.config.loading){
	      	return false;
	      }

	      // 设置flag
	      _ts.config.loading = true;
	      // 最多可加载的条目
	      var maxItems = _ts.config.total[_ts.config.sort];

	      if ( _ts.config.pageSize[_ts.config.sort] >= maxItems) {
              // 加载完毕，则注销无限加载事件，以防不必要的加载
              // $.detachInfiniteScroll($('.infinite-scroll').eq(_ts.config.tabs));
              // 删除加载提示符

              $('.infinite-scroll-preloader').eq(_ts.config.tabs).hide();
              return false;
          }

          //发送请求
          _ts.config.pageNum[_ts.config.sort] = ++_ts.config.param.pageNum;

	      _ts.sendRequest(_ts.config.url,_ts.config.param,'latest');
	    });
	},	
	render:function(data){		
		// 初始化模板
		var render = etpl.compile(tplProductItem);
		//渲染数据
		var text   = render({
			data : data
		});

		var index = this.config.tabs;
		// 把渲染好的模板加载到dom上面去
		$('.content .tab').eq(index).find('.con').append(text);

		// $.detachInfiniteScroll($('.infinite-scroll'));
     	 // 删除加载提示符
      	// $('.infinite-scroll-preloader').hide();

      	$('.item').on('click',function(){
			var pcode = $(this).attr('data-pcode'),
				scode = $(this).attr('data-scode');

				$.router.load('../detail/detail.html?productCode='+pcode + '&shopCode=' + scode);
		});
		
      	return;
	},
	getShopInfo	: function(shopCode, pageTitle){
		$.ajax({
			url	: global.config.serverBase + '/api/shop/info.json',
			type: 'GET',
			data	: {
				shopCode : shopCode
			},
			success: function(data){
				if(data && data.code==='100'){

					var title = pageTitle+"_"+data.shopInfo.shopName;
					var keywords = pageTitle+","+data.shopInfo.shopName+", 特色旅游,高端旅游,酷鸟。";
					var desc = pageTitle+"_"+data.shopInfo.shopName+"，酷鸟为"+data.shopInfo.shopName+"的特色旅游项目提供专业权威的电商解决方案。";
					//全部产品页面关键词
					if(pageTitle===''){    
					     title = data.shopInfo.shopName+"_酷鸟";
					     keywords = data.shopInfo.shopName+", 特色旅游,高端旅游,酷鸟。";
					     desc = data.shopInfo.shopName+"，酷鸟为"+data.shopInfo.shopName+"的特色旅游项目提供专业权威的电商解决方案。";
					}
					setSEO(title, keywords, desc);

					var imageUrl = '';
					if(typeof data.shopInfo.shopLogoImg !== 'undefined'){
						imageUrl = data.shopInfo.shopLogoImg;
					}

					title = data.shopInfo.shopName + "_" + pageTitle;

					var currentLocation = window.location.href;
					KNShare.initWeixin(currentLocation);

					wx.ready(function() {
			           //分享给朋友圈
						KNShare.onMenuShareTimeline(title,currentLocation,imageUrl);

						//分享给微信好友
						KNShare.onMenuShareAppMessage(title,currentLocation,imageUrl,' ');  	 
			        });
				}
			}
		});
	}
};


// 路由load
$(document).on("pageInit",'#indexShop' ,function(e, pageId, $page) {
	KN_Index.init();
 });
$(document).on("pageInit",'#indexShopLatest' ,function(e, pageId, $page) {
	KN_Latest.init('shopLatest');
 });
$(document).on("pageInit",'#indexProductRecommend', function(e, pageId, $page) {
	KN_Latest.init('shopRecommend');
 });
$(document).on("pageInit",'#indexShopMerchant', function(e, pageId, $page) {
	KN_ShopMerchant.init();
 });
$(document).on("pageInit",'#indexProductCatalog', function(e, pageId, $page) {
	KN_proCategory.init('productCatalog');
 });
$(document).on("pageInit",'#indexAllProducts', function(e, pageId, $page) {
	KN_proCategory.init('allProducts');
 });