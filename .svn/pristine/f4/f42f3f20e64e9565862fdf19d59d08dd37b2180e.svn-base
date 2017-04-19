var global = require('../common/global.js');
var etpl   = require('../common/etpl.js');
var tplProListItem = require('./tpl/proItem.html');
var tplTraveler = require('./tpl/traveler.html');

var picker = require('../common/picker.js');
var pickerDate = require('../common/picker.date.js');
var maskSku;//存储屏蔽的SKU
var defaultMaskSku;//存储不屏蔽的SKU
var startMask;//初始化绝对屏蔽的SKU
var KN_Order = {
	orderInfo : {
		spuCode : '',
		proItem : []
	},
	init:function(){
		// 检测浏览器是否支持本地存储
		if(!window.sessionStorage){
			$.alert('你的浏览器不支持本地存储哦，如果你启用了隐私模式，<br/>请切换回正常模式哦！',function(){
				location.href = global.config.knIndex;
			});
		}
		var orderInfo = global.sessionStorage.get('orderInfo');

			if(!orderInfo.hasOwnProperty('contact')){
				orderInfo.contact = {};
				global.sessionStorage.set('orderInfo',orderInfo);
			}

		if(orderInfo === 'undefined'){
			$.alert('该订单已经失效，请重新下单哦！',function(){
				location.href = global.config.knIndex;
			});
			return false;
		}

		//展示需二次确认提示文字
		if(orderInfo.confirmType == 2){
			$('.twoConfirmTip').css('display', 'block');
		}

		$('.fill-order-bd').find('input').on('focusin',function(){
			var _t = this;
				isFocus = true;
			setTimeout(function(){
				$(_t).get(0).scrollIntoView();
			},300);
		});

		this.orderInfo.spuCode = orderInfo.spuCode;

		// 初始化标题
		$('h2').html(orderInfo.name);
		//console.log(orderInfo);

		var title = orderInfo.name+"_特色旅游_酷鸟";
		var keywords = orderInfo.name+",特色旅游,高端旅游,旅游线路,酷鸟";
		var desc = orderInfo.name+"。酷鸟旅游网，一个提供特色旅游特色旅行线路的网站。";
		this.setSEO(title, keywords, desc, 1);
		$('.o-number').find('input').attr('value',orderInfo.limitMinNum);
		
		if(orderInfo.limitMinNum > 0){
			$('.o-number').find('.o-m-con .sub').addClass('disabled');
			$('.o-number').find('.o-m-con em').show().html('最低起订量' + orderInfo.limitMinNum);
		}
		
		//初始化返回按钮
		$("header .back").click(function(){
			if(orderInfo.spuCode && orderInfo.spuCode.trim().length>0 && orderInfo.shopCode && orderInfo.shopCode.trim().length>0){
				window.location.href = "../detail/detail.html?productCode="+orderInfo.spuCode+"&shopCode="+orderInfo.shopCode;
			}else{
				$(this).removeClass("external");
			}
		});
		
		this.addFilter();

		// 获取商品规格
		this.getShopInfo();
		
		this.getSkuInfo();

		this.traveler();

		// this.contacts();

		this.orderNum();

		// this.getEffectDay();

		this.getUserInfo();

		// console.log(orderInfo.hasOwnProperty('skuCode'));

		if(orderInfo.hasOwnProperty('skuCode')){
			this.getSkuDetail();
		}

		this.selectTracerler();

		// 短信验证码
		// this.getAuthCode();
		// 提交订单
		this.submit();

		$('.picker--opened').remove();

	},
	// 获取商品规格信息
	getShopInfo:function(){
		var _ts  = this;
		var url  = global.config.serverBase + 'api/product/queryProductSpecList.json';
		var data = {
			spu_code : this.orderInfo.spuCode
		};
			$.ajax({
				url : url,
				type : 'get',
				data : data,
				dataType: 'json',
				success:function(rs){
					if(rs.code === '100'){
						var orderInfo = global.sessionStorage.get('orderInfo');
							//设置该商品
							orderInfo.proList = rs.productSpecList;
							
							if(typeof orderInfo.selectedItemList === 'undefined'){
								orderInfo.selectedItemList = [];
							}

							global.sessionStorage.set('orderInfo',orderInfo);

							_ts.setShopInfo();
					}
				}
			});
	},
	//设置商品规格
	setShopInfo:function(){
		var _ts 	  = this,
			orderInfo = global.sessionStorage.get('orderInfo'),
			html 	  = '';
			// 初始化模板
			var render = etpl.compile(tplProListItem);
			//渲染数据
			var text   = render({
				data : orderInfo.proList
			});
			function repeat(arr){
							var result = [], hash = {};
						    for (var i = 0, elem; (elem = arr[i]) !== undefined ; i++) {
						        if (!hash[elem]) {
						            result.push(elem);
						            hash[elem] = true;
						        }
						    }
						    return result;
						}

			//判断数组完全包含 ,arr1 父数据 , arr2子数组 
			function containAry(arr1,arr2){
				var ps = false;
				arr1 = arr1.split('-');
				arr2 = arr2.split('-');
				if ($.isArray(arr1) && $.isArray(arr2)){
					$.each(arr2,function(i,v){
						if (arr1.indexOf(v) >=0){
							ps = true;
						}else{
							ps = false;
							return false;
						}
					});
				}
				return ps;
			}

			$('.order-info-con').find('.o-type').html(text);

			// 添加商品规格选择事件
			$('.o-type-item').on('click','span',function(){
				if ($(this).attr('className') == "disabled"){$(this).removeClass('cur');return false;}
				var $pro 	  = $(this).parents('.o-type-item'),
					index 	  = parseInt($pro.data('index'),10),
					proId     = $pro.data('proid'),
					itemId    = $(this).data('itemid'),
					orderInfo = global.sessionStorage.get('orderInfo');


					if (!!!$(this).hasClass("cur")){
						$pro.find('span').removeClass('cur');
						$(this).addClass('cur');
						orderInfo.selectedItemList[index] = [proId,itemId];
					}else{
						$(this).removeClass('cur');
						orderInfo.selectedItemList.splice(index,1);
					}

					global.sessionStorage.set('orderInfo',orderInfo);

					var _c = _ts.checkSkuCode();

					//console.log(_c);

					if( _c > 0){
						_ts.getSkuDetail();
					}
					if(_c !== 2){
						$('.o-time').removeClass('show');
							$('.order-mony em').html("￥ 0");
					}

					var tmpTypeItem = $('.o-type-item');
					var tmpSelect = [];
					var tmpMaskSku;

					//选中
					var select = $(tmpTypeItem).find('span.cur');
					var selectLength = select.length;

					


					//选了三个就干掉其它的
					if(selectLength == 3){
						$('.o-type-item').find('span').addClass('disabled');
						$(select).each(function(i,v){
							$(v).removeClass('disabled');
						});
					}else{

					
						tmpMaskSku = $.extend(true,{}, maskSku);
						var tmpSku = [];

						//拼接选中的项
						var select_id = [];
						$.each(select,function(i,v){
							select_id.push($(v).data('itemid'));
						});

						select_id = select_id.join("-");

						//抽取需要检查的数据
						var tmpdefaultMaskSku = [];
						$.each(defaultMaskSku,function(di,dv){
							var tmpid = dv.join("-");
								if (containAry(tmpid,select_id)){
								//if (tmpid.indexOf(select_id) >=0){
									tmpdefaultMaskSku.push(dv);
								}
						});
						var defAry = [];
						
						//查找选中对应的SKU
						$.each(tmpMaskSku,function(mi,mv){
							var tmpid = mv.join("-");
							if (containAry(tmpid,select_id)){
							//if (tmpid.indexOf(select_id) >=0){

								var tmpselect = select_id.split("-");
								var tmpselectlength = tmpselect.length;
								//select_id = select_id.split("-");
								if (tmpselectlength > 0 ){

									var needAry = [];

									$.each(tmpselect,function(i,v){
										v = v*1;
										mv.splice(mv.indexOf(v),1);


									});
									//检查屏蔽
									$.each(mv,function(mmi,mmv){
										var pass = true;
										$.each(tmpdefaultMaskSku,function(ddi,ddv){
											if (ddv.indexOf(mmv) >=0){
												pass = true;
												return false;
											}else{
												pass = false;
											}
										});
										if (pass === false){
											defAry.push(mmv);
										}
									});
									
								}
								
							}
						});

						
						defAry = repeat(defAry);
						var defAryLength = defAry.length;
			
						   	//$(tmpTypeItem).find('span.disabled').removeClass('disabled');
							$(tmpTypeItem).find('span').each(function(e,t){
								$(t).removeClass('disabled');
								if (defAryLength > 0){
									$.each(defAry,function(i,v){
											if (v == $(t).data('itemid')){
												$(t).removeClass('cur').addClass('disabled');
											}
									});
								}

								$.each(startMask,function(i,v){
										if (v == $(t).data('itemid')){
											$(t).removeClass('cur').addClass('disabled');
										}
								});
							});


					//选中后屏蔽同行
					if (!!!$(this).hasClass("cur")){
						

						$pro.find('span').each(function(i,v){
							var thisType = $(v).hasClass('disabled');
							if (!thisType && $(v).attr('data-deftype')){
								$(v).removeClass('disabled');
							}
						});



					}else{
						$pro.find('span').each(function(i,v){
							var thisType = $(v).hasClass('disabled');
							if (!thisType){
								$(v).addClass('disabled');
								$(v).attr('data-deftype',true);
							}else{
								$(v).attr('data-deftype',false);
							}
						});
					}
				
				}
			});

			// 恢复之前的操作
			if(typeof orderInfo.selectedItemList !== 'undefined'){
				for(var i =0 ;i < orderInfo.selectedItemList.length; i++){
					if(orderInfo.selectedItemList[i]!==null){
						var $fitem = $('.o-type-item[data-proid="'+orderInfo.selectedItemList[i][0]+'"]');
						$fitem.find('span').removeClass('cur');
						$fitem.find('span[data-itemid="'+orderInfo.selectedItemList[i][1]+'"]').addClass('cur');
					}
				}
			}
	},
	// 检查是否已经全选规格,
	// 0：未全选，
	// 1 ： stocktype = 1, 
	// 2 : stockType = 2,
	// -1 ： 意外情况
	checkSkuCode:function(){
		var orderInfo = global.sessionStorage.get('orderInfo');
		var selected  = orderInfo.selectedItemList;
		var stemp 	  = [];
		
		if(!orderInfo.hasOwnProperty('proList')){
			return 0;
		}

		for(var i = 0; i < orderInfo.proList.length;i++ ){
			//如果存在undefined，说明未全部选择
			if(typeof selected[i] === 'undefined'){
				return 0;
			}
		}

		//将选择的商品规格contact起来对比skulist获取skucode
		var skuCode  = '';
		for(var j = 0 ; j < selected.length;j++){
			stemp = stemp.concat(selected[j]);
		}

		for(var k = 0 ; k < orderInfo.skuList.length;k++){
			if(orderInfo.skuList[k].value.toString() === stemp.toString()){

				orderInfo.stockType = orderInfo.skuList[k].stockType;

				// 设置新的skucode之前，先对比是否跟之前的选择一致，不一致则删掉日期
				if(orderInfo.skuCode !== orderInfo.skuList[k].skuCode){
					try{
						delete orderInfo.effectDate;
					}catch(e){}
				}

				orderInfo.skuCode = orderInfo.skuList[k].skuCode;

				global.sessionStorage.set('orderInfo',orderInfo);

				if(orderInfo.skuList[k].stockType === 1){

					return 1;

				}else if(orderInfo.skuList[k].stockType === 2){
					return 2;
				}
			}
		}
		orderInfo.skuCode = null;
		global.sessionStorage.set('orderInfo',orderInfo);
		return -1;
	},
	// 获取用户信息
	getUserInfo : function(){
		var _ts  = this;
		var url  = global.config.serverBase + 'api/user/getUserInfo.json';
			$.ajax({
				url : url,
				type : 'get',
				dataType: 'json',
				success:function(rs){
					var orderInfo = global.sessionStorage.get('orderInfo');
					if(rs.code === '100'){

						if(orderInfo.hasOwnProperty('contact')){
							if(!orderInfo.contact.hasOwnProperty('name') && !orderInfo.contact.hasOwnProperty('mobile')){
								orderInfo.contact = {
									name : rs.userInfo.contact.name,
									mobile : rs.userInfo.contact.mobile
								};
							}
						}
						
						orderInfo.login = true;
						
						global.sessionStorage.set('orderInfo',orderInfo);
						
					}else{

						orderInfo.login = false;

						// delete orderInfo.contact;

						global.sessionStorage.set('orderInfo',orderInfo);
					}

					_ts.contacts();
				}
			});
	},
	// 获取商品sku信息
	getSkuInfo : function(){
		var url  = global.config.serverBase + 'api/product/queryProductSkuList.json';
		var data = {
			spu_code : this.orderInfo.spuCode
		};

			$.ajax({
				url : url,
				type : 'get',
				data : data,
				dataType: 'json',
				success:function(rs){
					if(rs.code === '100'){
						// 设置sku list列表
						var orderInfo = global.sessionStorage.get('orderInfo');

						var arr 	  = [];

						//将屏蔽的初始SKU储存起来
						maskSku = [];
						//将开放的初始SKU储存起来
						defaultMaskSku = [];
						//后端返回的初始屏蔽SKU
						startMask = [];

						//$('.o-type-item').find('span').removeClass('cur');

						var tmpMaskSku, tmpdefaultMaskSku;

						for(var i=0; i < rs.data.length ; i++){
							var data = {};
							// 只有stockType=2的时候，时间才有效
							var s = [];
							//需要屏蔽的SKU和可能屏蔽的SKU处理
							if (rs.data[i].saleStatus == 2){
								tmpMaskSku = [];
							}else{
								tmpdefaultMaskSku = [];
							}
							for(var j = 0; j < rs.data[i].productSkuSpecList.length ; j++){
								var sid = rs.data[i].productSkuSpecList[j].specId;
								var sitemId = rs.data[i].productSkuSpecList[j].specItemId;
								var onlyKey = rs.data[i].productSkuSpecList[j].onlyKey;
								var disableList = rs.disableList.initial;//startMask

								if (onlyKey){
									if(disableList.indexOf(onlyKey) >= 0){
										startMask.push(sitemId);
									}
								}

								if (rs.data[i].saleStatus == 2){
									tmpMaskSku.push(sitemId);
								}else{
									tmpdefaultMaskSku.push(sitemId);
								}
								s.push(sid,sitemId);
							}
							if (rs.data[i].saleStatus == 2){
								maskSku.push(tmpMaskSku);
							}else{
								defaultMaskSku.push(tmpdefaultMaskSku);
							}
							data.stockType = rs.data[i].stockType;
							data.skuCode = rs.data[i].skuCode;
							data.value   = s;
							arr.push(data);
						}
					    //console.log(defaultMaskSku);
						orderInfo.skuList = arr ;
						global.sessionStorage.set('orderInfo',orderInfo);

						//屏蔽不可以点的规格
						var tmpTypeItem = $('.o-type-item');
						$(tmpTypeItem).find('span.disabled').removeClass('disabled');
						$(tmpTypeItem).find('span').each(function(e,t){
							//console.log(tmpMaskSku);
							$.each(startMask,function(i,v){
									if (v == $(t).data('itemid')){
										$(t).removeClass('cur').addClass('disabled');
									}
								
							});
						});
						
					}
				}
				
			});
	},
	// 获取选择的商品规格的信息
	getSkuDetail : function(){
		var _ts  = this;
		var url  = global.config.serverBase + 'api/product/queryProductSkuAttrList.json';
		var orderInfo = global.sessionStorage.get('orderInfo');
		var data = {
			sku_code : orderInfo.skuCode
		};
			$.ajax({
				url : url,
				type : 'get',
				data : data,
				dataType: 'json',
				success:function(rs){
					if(rs.code === '100'){
						var orderInfo = global.sessionStorage.get('orderInfo');
							
							if(rs.stockType === 2){
								orderInfo.stockType  = 2;
								orderInfo.effectDateList = rs.productSkuDailyAttrList;
								global.sessionStorage.set('orderInfo',orderInfo);

								_ts.setEffectDate(rs.productSkuDailyAttrList);
							}else if(rs.stockType === 1){
								orderInfo.stockType  = 1;
								orderInfo.totalStock = rs.totalStock;
								orderInfo.price 	 = rs.skuPrice;
								global.sessionStorage.set('orderInfo',orderInfo);
								_ts.orderNum();
							}
					}
				}
			});
	},
	// 设置商品有效期
	setEffectDate : function(ds){
		var _ts   = this,
			_val  = '',
			$time = $('.o-time'),
			orderInfo = global.sessionStorage.get('orderInfo');

			//初始化选择日期提示
			var dateTip = '';
			if(orderInfo.productType === 'plan'){
				dateTip = '请选择出行日期';
			}else if(orderInfo.productType === 'hotel'){
				dateTip = '请选择入住日期';
			}else{
				dateTip = '请选择使用日期';
			}

			// $('#o-time-input').attr('placeholder',dateTip);

			if(orderInfo.hasOwnProperty('effectDate')){
				_val = orderInfo.effectDate;
			}

			$('#o-time-input').remove();

			$time.find('.o-m-con').html('<input type="text" name="o-time" placeholder="'+dateTip+'" id="o-time-input" readonly="" value='+_val+'>');

			// $('.date-order-calender').remove();
			/*if($('.date-order-calender').size() === 0){
				$('body').append('<div class="date-order-calender"></div>');
			}*/

			$('.date-order-calender').html(' ');
			
		if(!orderInfo.effectDateList.length) return;
		var l 		= orderInfo.effectDateList.length,
			minDate = formatDate(orderInfo.effectDateList[0].effectDate),
			maxDate = formatDate(orderInfo.effectDateList[l-1].effectDate),
			disable = disableDate(orderInfo.effectDateList);
			// console.log(disable);
			// console.log(minDate);
		var $timePicker = $('#o-time-input').pickadate({
				priceData: ds,
				today: '',
				clear: '',
				close: '',
				format : 'yyyy-m-d',
				min  : new Date(minDate[0],minDate[1],minDate[2]),
				max  : new Date(maxDate[0],maxDate[1],maxDate[2]),
				disable: disable,
				// container : '.date-order-calender',
				onSet : function(c){
					setOrderInfoDate(c.select);
				}
			});

		//设置选中日期
		if(_val){
			var picker = $timePicker.pickadate('picker');
			picker.set('select',_val);
		}
		
		$time.addClass('show');


		// 匹配信息看选择了那个日期
		function selectDate(n){
			var orderInfo = global.sessionStorage.get('orderInfo');

				for(var i =0 ;i < orderInfo.effectDateList.length ; i++){
					if(orderInfo.effectDateList[i].effectDate === n){
						return orderInfo.effectDateList[i];
					}
				}

				return false;
		}

		//设置订单日期和相关价格库存
		function setOrderInfoDate(n,dn){
			var data = selectDate(n);

				if(data !== false){
					var orderInfo = global.sessionStorage.get('orderInfo'),
						t 		  = formatDate(n);
						// console.log(data);
						orderInfo.totalStock = data.stock;
						orderInfo.price = data.price;
						orderInfo.number = orderInfo.limitMinNum === 0 ? 1 : orderInfo.limitMinNum;
						orderInfo.effectDate = t[0] + '-' + (t[1] + 1) + '-' + t[2];

						global.sessionStorage.set('orderInfo',orderInfo);
						
						$('.o-number').find('.o-m-con span').removeClass('disabled');

						_ts.updateTotalPrice();
						_ts.orderNum();
						// console.log(orderInfo);
				}
		}

		//格式化日期
		function formatDate(n){
			var s = new Date(n),
				y = s.getFullYear(),
				m = s.getMonth(),
				d = s.getDate();

			return [y,m,d];
		}

		function disableDate(list){
			var arr = [],
				al  = list.length;

			//从第二个开始
			for(var i = 1; i < al ; i++){
				// 第一个日期跟第二个日期是连续时间
				if(list[i].effectDate === list[i-1].effectDate + 60*60*24*1000){
					continue;
				}else{
					var f = formatDate(list[i-1].effectDate + 60*60*24*1000),
						t = formatDate(list[i].effectDate - 60*60*24*1000);

						arr.push({from:[f[0],f[1],f[2]],to:[t[0],t[1],t[2]]});
				}	
			}
			return arr;
		}
	},
	// 数量操作
	orderNum : function(){
		var _ts 	 = this,
			$oNumber = $('.o-number'),
			$sub     = $oNumber.find('.sub'),
			$add 	 = $oNumber.find('.add'),
			$text 	 = $oNumber.find('input');

		var orderInfo  = global.sessionStorage.get('orderInfo');
		var totalStock = orderInfo.totalStock || 1;
		var limit 	   = orderInfo.limitMinNum || 1;



			$oNumber.addClass('show');
			
			if(orderInfo.hasOwnProperty('number')){
				updateTotalNumber(orderInfo.number,true);
			}else{
				updateTotalNumber(limit,true);
			}

			//加
			$add.off('click').on('click',function(){
				var val = parseInt($text.val());

					if(_ts.checkSkuCode() === 0){
						$.toast('请先选择商品规格');
						return false;
					}

					if(orderInfo.preStatus != 1 && val + 1 > totalStock){
						$add.addClass('disabled');
						return false;
					}

					$sub.removeClass('disabled');
					updateTotalNumber(++val);
			});

			// 减
			$sub.off('click').on('click',function(){
				var val = parseInt($text.val());

					if(_ts.checkSkuCode() === 0){
						$.toast('请先选择商品规格');
						return false;
					}

					if(val - 1 < limit){
						$sub.addClass('disabled');
						return false;
					}else if(val == limit){
						updateTotalNumber(val);
						$sub.addClass('disabled');
						return false;
					}

					$add.removeClass('disabled');
					updateTotalNumber(--val);
			});

			//输入框
			$text.on('input',function(){
				var val = parseInt($text.val()) || '';

				if(val === ''){
					return false;
				}

				if(val > totalStock){
					val = totalStock;
				}else if(val < limit){
					val = limit;
				}

				updateTotalNumber(val);
				

			});

		function updateTotalNumber(n,t){
			var orderInfo = global.sessionStorage.get('orderInfo');

				orderInfo.number = n;

				if(!t){
					if(typeof orderInfo.skuCode === 'undefined'){
						$.toast('请先选择商品规格哦!');
						return false;
					}
				}
				$text.val(n);
				$text.attr('value',n);
				global.sessionStorage.set('orderInfo',orderInfo);

				_ts.renderTraveler();
				
				// 规格选完之后才更新价格
				if(_ts.checkSkuCode() > 0){
					_ts.updateTotalPrice();
				}
		}
	},
	updateTotalPrice : function(){
		var $totalPrice = $('.order-mony').find('em'),
			orderInfo   = global.sessionStorage.get('orderInfo');
			//orderInfo.totalPrice = (orderInfo.price*orderInfo.number).toFixed(2);
			orderInfo.totalPrice = orderInfo.price*orderInfo.number;
			if(isNaN(orderInfo.totalPrice)){
				orderInfo.totalPrice = 0;
			}
			global.sessionStorage.set('orderInfo',orderInfo);
			$totalPrice.html('￥' + orderInfo.totalPrice);
	},
	// 联系人
	contacts:function(){
		var $contact  = $('.o-contact'),
			$name     = $contact.find('input[name=contactName]'),
			$mobile   = $contact.find('input[name=contactPhone]'),
			$authCode = $contact.find('input[name=contactAuth]'),
			orderInfo = global.sessionStorage.get('orderInfo');

			// console.log(orderInfo.hasOwnProperty('contact'));

			if(orderInfo.hasOwnProperty('contact')){
				if(orderInfo.contact.hasOwnProperty('name')){
					$name.val(orderInfo.contact.name);
					// $name.attr('value',orderInfo.contact.name);
				}

				if(orderInfo.contact.hasOwnProperty('mobile')){
					$mobile.val(orderInfo.contact.mobile);
					// $mobile.attr('value',orderInfo.contact.mobile);
				}

				if(orderInfo.hasOwnProperty('verifyCode')){
					$authCode.attr('value',orderInfo.verifyCode);
				}			
				
			}	

			if(orderInfo.hasOwnProperty('login')){
				if(orderInfo.login){
					$('.u-yz').hide();
					$('.friends-btn').show();
				}else{
					$('.friends-btn').hide();
				}
			}else{
				$('.friends-btn').show();
			}


			$name.on('input',function(){
				var val = $(this).val();
				var o 	= global.sessionStorage.get('orderInfo');

						o.contact.name = val;
						global.sessionStorage.set('orderInfo',o);

			});	

			$mobile.on('input',function(){
				var val = $(this).val();
				var o = global.sessionStorage.get('orderInfo');
					o.contact.mobile = val;

					global.sessionStorage.set('orderInfo',o);
				
		
			});

			this.getAuthCode();
	},
	// 获取短信验证码
	getAuthCode : function(){
		var _ts		  = this,
			st 		  = true,
			$authBtn  = $('.auth-btn'),
			$authText = $('input[name="contactAuth"]'),
			$mobile   = $('.o-contact').find('input[name="contactPhone"]');

			$authBtn.off('click').on('click',function(){
				var url = global.config.serverBase + 'api/torder/sendVerifyCode.json';
				var mobile = $mobile.val().toString();

				if($(this).hasClass('has_send')){
					return false;
				}
				
				if(mobile === ''){
					$.toast('请填写手机号码');
					return false;
				}

				if(!mobile.match(/^1\d{10}$/)){
					$.toast('请填写正确的手机号码');
					return false;
				}
				if(!st){
					return false;
				}
				st = false;

				var data = {
					mobile : mobile
				};

				$.ajax({
					url : url,
					type : 'get',
					data : data,
					dataType: 'json',
					success:function(rs){
						if(rs.code === '100'){
							var $authcode = $('.auth-btn');

								$.toast('短信发送成功');
								$authcode.addClass('has_send');
								$authcode.html('<em>60</em>秒后重发');

							var countTimer = setInterval(function(){
								var s = parseInt($authcode.find('em').html(),10) - 1;
									if(s > 0){
										$authcode.find('em').html(s);
									}else{
										clearInterval(countTimer);
										$authcode.removeClass('has_send');
										$authcode.html('获取验证码');
									}
							},1000);
						}else{
							$.toast(rs.msg);
						}
						st = true;
					}
				});
			});

			$authText.on('input',function(){
				var val = $(this).val();

					if(val.length === 6 ){
						if(val.match(/\d{6}$/)){
							var orderInfo = global.sessionStorage.get('orderInfo');

							orderInfo.verifyCode = val;

							global.sessionStorage.set('orderInfo',orderInfo);
						}else{
							$.toast('请输入6位数字验证码');
						}
					}
			});
	},
	// 提交订单
	submit : function(){
		var _ts 	= this,
			$submit = $('.order-btn');

			$submit.off('click').on('click',function(){
				var orderInfo = global.sessionStorage.get('orderInfo');
					if(!_ts.checkSkuCode()){
						$.toast("请选择规格项目");
						return false;
					}

					if(orderInfo.stockType === 2){
						if(!orderInfo.hasOwnProperty('effectDate')){
							$.toast("请选择日期");
							return false;
						}
					}

					if(!orderInfo.contact.hasOwnProperty('name')){
						$.toast('请输入联系人名字');
						return false;
					}else if(orderInfo.contact.name.length < 2 && orderInfo.contact.name.length > 10){
						$.toast('联系人请输入2~10位中英文、"-"、"_"、空格');
						return false;
					}else if(!orderInfo.contact.name.match(/^(([a-zA-Z\u4e00-\u9fa5]|[-_]|[\s]|){2,10})$/)){
						$.toast('联系人请输入2~10位中英文、"-"、"_"、空格');
						return false;
					}

					if(!orderInfo.contact.hasOwnProperty('mobile')){
						$.toast('请填写手机号码');
						return false;
					}

					if(!orderInfo.contact.hasOwnProperty('mobile') || !orderInfo.contact.mobile.match(/\d{11}$/)){
						$.toast('请填写正确的的手机号码');
						return false;
					}

					if(!orderInfo.login){
						if(typeof orderInfo.verifyCode === 'undefined' || !orderInfo.verifyCode.match(/\d{6}$/)){
							$.toast('请输入验证码');
							return false;
						}
					}

					var traveler;

					//产品为【线路、酒店、门票、潜水】类型的产品游客信息为必填项；
					if(orderInfo.parentId > 0 && orderInfo.parentId < 5){
					
						//验证信息是否完整
						if(_ts.verifyTracerlerRequire()){
							traveler = _ts.saveTracerlerForSubmit();
							_ts.orderInfo.traveler = traveler;

							$.showPreloader();
							_ts.submitRequest();
						}
					}else{

						traveler = _ts.verifyTracerler();
						_ts.orderInfo.traveler = traveler;

						$.showPreloader();
				   		_ts.submitRequest();
					}
			});
	},
	submitRequest : function(){
		var orderInfo = global.sessionStorage.get('orderInfo'),
			url 	  = global.config.serverBase + 'api/torder/saveOrder.json',
			data  	  = {
				contact:{
					name : orderInfo.contact.name,
					mobile : orderInfo.contact.mobile
				},
				spuCode : orderInfo.spuCode,
				shopCode : orderInfo.shopCode,
				skuCode : orderInfo.skuCode,
				number : orderInfo.number,
				totalPrice : orderInfo.totalPrice,
				contactName : orderInfo.contact.name,
				contactMobile : orderInfo.contact.mobile,
				verifyCode : orderInfo.verifyCode
			};
			// console.log(orderInfo);
			if(orderInfo.stockType === 2){
				data.effectDate = orderInfo.effectDate;
			}

			if(this.orderInfo.traveler.length > 0){
				data.passengerList = this.orderInfo.traveler;
			}

			data = JSON.stringify(data);
			$.ajax({
					url : url,
					type : 'post',
					data : data,
					dataType: 'json',
					contentType:'application/json',
					success:function(rs){
						if(rs.code !== '100'){
							$.toast(rs.msg);
						}else if(rs.code === '100'){
							if (rs.orderStatus === 1) {
								$.router.load('./orderResult2.html?orderCode='+ rs.orderCode + '&paymentCode=' + rs.paymentCode,true);
							}else{
								$.router.load('./orderResult.html?orderCode='+ rs.orderCode + '&paymentCode=' + rs.paymentCode,true);
							}
						}
						$.hidePreloader();
					},
					error:function(){
						$.hidePreloader();
						$.alert('网络错误，请稍后再尝试！');
					}
			});
	},
	// 旅客信息
	traveler : function(){
		var $traveler = $('.o-user'),
			$btn 	  = $traveler.find('.more');

			$btn.off('click').on('click',function(){
				if($traveler.hasClass('show')){
					$traveler.removeClass('show');
				}else{
					$traveler.addClass('show');
				}
			});
	},
	renderTraveler : function(){
		var orderInfo  = global.sessionStorage.get('orderInfo'),
			$traveler  = $('.o-user').find('.user-list'),
			t  		   = [];


		if(orderInfo.hasOwnProperty('traveler')){
			t = orderInfo.traveler;
		}

		//如果保存的旅客信息多于预定的数量，截取预定的数量
		if(t.length > orderInfo.number){
			t = t.slice(0,orderInfo.number);
		}else{
			t = t.concat(new Array(orderInfo.number - t.length));
		}

		// 初始化模板
		var render = etpl.compile(tplTraveler);

		//渲染数据
		var text   = render({
			data : t,
			num  : orderInfo.number
		});

		$traveler.html(text);

		//如果选了旅客信息，显示
		if(!!global.sessionStorage.get('showTraverler')){
			global.sessionStorage.set('showTraverler',false);
			 $('.o-user').addClass('show');
		}

		$traveler.find('.contactType').off('click').on('click',function(){
				var $certType = $(this);

					//证件选择控件
					$.modal({
						title : '请选择证件类型',
						verticalButtons:true,
						extraClass : 'popup-certType',
						buttons : [
							{
								text: '身份证',
								close : true,
								onClick : function(){
									//_ts.param.certType = 1;
									$certType.attr('data-type',1);
									$certType.html('身份证');
								}
							},
							{
								text: '港澳通行证',
								close : true,
								onClick : function(){
									//_ts.param.certType = 4;
									$certType.attr('data-type',4);
									$certType.html('港澳通行证');
								}
							},
							{
								text: '学生证',
								close : true,
								onClick : function(){
									//_ts.param.certType = 6;
									$certType.attr('data-type',6);
									$certType.html('学生证');
								}
							},
							{
								text: '军官证',
								close : true,
								onClick : function(){
									//_ts.param.certType = 5;
									$certType.attr('data-type',5);
									$certType.html('军官证');
								}
							}
						]
					});
			});
	},
	//选择联系人，选择旅客
	selectTracerler : function(){
		var _ts = this;
		$('.o-contact').off('click').on('click','.friends-btn',function(){
			var orderInfo = global.sessionStorage.get('orderInfo');
				orderInfo.selectType = 'contact';

				//跳转页面保存旅客信息
				var traveler = _ts.saveTracerler();
				orderInfo.traveler = traveler;

				global.sessionStorage.set('orderInfo',orderInfo);

				$.router.load('./contacts.html');
		});
		$('.o-user').off('click').on('click','.friends-btn',function(){
			var orderInfo = global.sessionStorage.get('orderInfo');
				orderInfo.selectType = 'traveler';

				//跳转页面保存旅客信息
				var traveler = _ts.saveTracerler();
				orderInfo.traveler = traveler;

				global.sessionStorage.set('orderInfo',orderInfo);

				$.router.load('./contacts.html');
		});
	},
	//跳转页面或提交信息保存旅客信息,用于显示
	saveTracerler : function(){
		var $ouser = $('.o-user').find('.user-list').find('li');
		var arr    = [];

			for(var i = 0; i < $ouser.size(); i++){
				
				var name 	= $ouser.eq(i).find('input[name="contactName"]').val(),
					mobile  = $ouser.eq(i).find('input[name="contactPhone"]').val(),
					certType= $ouser.eq(i).find('.contactType').data('type'),
					certNumber = $ouser.eq(i).find('input[name="contactCertNumber"]').val(),
					certTypeTxt = $ouser.eq(i).find('.contactType').html(),
					sa      = {};

					sa.name = name;
                    sa.mobile = mobile;
                    sa.certType = certType;
                    sa.certNumber = certNumber;
                    sa.certTypeTxt = certTypeTxt;
                    
					if(Object.keys(sa).length > 0){
						arr.push(sa);
					}
			}

			return arr;
	},
	//保存旅客信息,用于提交数据
	saveTracerlerForSubmit : function(){
		var $ouser = $('.o-user').find('.user-list').find('li');
		var arr    = [];

			for(var i = 0; i < $ouser.size(); i++){
				
			var name = $ouser.eq(i).find('input[name="contactName"]').val(),
		        mobile = $ouser.eq(i).find('input[name="contactPhone"]').val(),
		        cardType = $ouser.eq(i).find('.contactType').data('type'),
		        cardNo = $ouser.eq(i).find('input[name="contactCertNumber"]').val(),
		        sa = {};

				sa.name = name;
                sa.phone = mobile;
                sa.cardType = cardType;
                sa.cardNo = cardNo;
                    
				if(Object.keys(sa).length > 0){
					arr.push(sa);
				}
			}

			return arr;
	},
	//旅客信息必填情况下验证
	verifyTracerlerRequire : function(){
		var _ts = this;
		var $ouser = $('.o-user').find('.user-list').find('li');
		var isVerify = true;

			for(var i = 0; i < $ouser.size(); i++){
				
				var name 	= $ouser.eq(i).find('input[name="contactName"]').val(),
					mobile  = $ouser.eq(i).find('input[name="contactPhone"]').val(),
					cardType= $ouser.eq(i).find('.contactType').data('type'),
					cardNo = $ouser.eq(i).find('input[name="contactCertNumber"]').val(),
					sa      = {};
				if (mobile !== '' || cardNo !== '' || name !== '') {
						//验证是否填写了旅客名字
						if(name !== ''){
							// 验证旅客名字长度
							if(name.length >=2 && name.length <= 10 ){
								// 验证旅客名字合法性
								if(name.match(/^(([a-zA-Z\u4e00-\u9fa5]|[-_]|[\s]){2,10})$/)){
									sa.name = name;

									// 如果旅客手机号码填写了
									if(mobile !== ''){
										if(mobile.match(/\d{11}$/)){
											sa.name  = name;
											sa.phone = mobile;

										}else{
											$.toast('请正确填写旅客的手机号码');
											isVerify = false;
											return false;
										}
									}else{
										$.toast('请填写旅客的手机号码');
										isVerify = false;
										return false;
									}

									// 如果旅客证件号码填写了
									if(cardNo !== ''){
										if(cardNo.match(/^[A-Za-z0-9]+$/)){

											//身份证认证信息
											if(cardType == 1){
												if(_ts.identityCodeValid(cardNo)){
													sa.cardType   = cardType;
													sa.cardNo = cardNo;
												}else{
													$.toast('请正确填写旅客的身份证号码');
													isVerify = false;
													return false;
												}
											}else{
												sa.cardType   = cardType;
												sa.cardNo = cardNo;
											}
										}else{
											$.toast('请正确填写旅客的证件号码');
											isVerify = false;
											return false;
										}
									}else{
										$.toast('请填写旅客的证件号码');
										isVerify = false;
										return false;
									}
								}else{
									$.toast('旅客名字只能是中英文或者空格组成');
									isVerify = false;
									return false;
								}
							}else{
								$.toast('旅客名字长度为2-10位');
								isVerify = false;
								return false;
							}
						}else{
							$.toast('请填写旅客名字');
							isVerify = false;
							return false;
						}
				} else {
		            $.toast('请填写旅客信息');
		            isVerify = false;
		            return false;
		        }
			}
			return isVerify;
	},
	verifyTracerler: function() {
	    var $ouser = $('.o-user').find('.user-list').find('li');
	    var arr = [];

	    for (var i = 0; i < $ouser.size(); i++) {
	        var name = $ouser.eq(i).find('input[name="contactName"]').val(),
	            mobile = $ouser.eq(i).find('input[name="contactPhone"]').val(),
	            cardType = $ouser.eq(i).find('.contactType').data('type'),
	            cardNo = $ouser.eq(i).find('input[name="contactCertNumber"]').val(),
	            sa = {};

	        // 如果用户填写了手机号码或者证件号码才去验证
	        if (mobile !== '' || cardNo !== '' || name !== '') {

	            //验证是否填写了旅客名字
	            if (name !== '') {
	                // 验证旅客名字长度
	                if (name.length >= 2 && name.length <= 10) {
	                    // 验证旅客名字合法性
	                    if (name.match(/^(([a-zA-Z\u4e00-\u9fa5]|[-_]|[\s]){2,10})$/)) {
	                        sa.name = name;
	                        // 如果旅客手机号码填写了
	                        if (mobile !== '') {
	                            if (mobile.match(/\d{11}$/)) {
	                                sa.name = name;
	                                sa.phone = mobile;

	                            } else {
	                                $.toast('请正确填写旅客' + (i + 1) + '的手机号码');
	                                return false;
	                            }
	                        } else {
	                            $.toast('请填写旅客' + (i + 1) + '的手机号码');
	                            return false;
	                        }

	                        // 如果旅客证件号码填写了
	                        if (cardNo !== '') {
	                            if (cardNo.match(/[0-9]+$/)) {
	                                sa.cardType = cardType;
	                                sa.cardNo = cardNo;
	                            } else {
	                                $.toast('请正确填写旅客' + (i + 1) + '的证件号码');
	                                return false;
	                            }
	                        }

	                    } else {
	                        $.toast('旅客' + (i + 1) + '名字只能是中英文或者空格组成');
	                        return false;
	                    }
	                } else {
	                    $.toast('旅客' + (i + 1) + '名字长度为2-10位');
	                    return false;
	                }
	            } else {
	                $.toast('请填写旅客' + (i + 1) + '名字');
	                return false;
	            }

	            // if()
	        }

	        if (Object.keys(sa).length > 0) {
	            arr.push(sa);
	        }
	    }

	    console.log(arr);
	    return arr;
	},
	//身份证认证信息
    identityCodeValid : function (no) { 
            var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
            var pass= true;
            //格式错误
            if(!no || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(no)){
                pass = false;
            }else if(!city[no.substr(0,2)]){
                pass = false;
            }else{
                //18位身份证需要验证最后一位校验位
                if(no.length == 18){
                    no = no.split('');
                    //加权因子
                    var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                    //校验位
                    var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                    var sum = 0;
                    var ai = 0;
                    var wi = 0;
                    for (var i = 0; i < 17; i++)
                    {
                        ai = no[i];
                        wi = factor[i];
                        sum += ai * wi;
                    }
                    var last = parity[sum % 11];
                    //校验位错误
                    if(parity[sum % 11] != no[17]){
                        pass =false;
                    }
                }
            }
            return pass;
    },
	addFilter : function(){
		etpl.addFilter('travelerIndex',function(s){
			return parseInt(s,10) +1;
		});
	},
	setSEO : function(title, keywords, description, isOg){
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

var KN_OrderContacts = {
	arr : {},
	init : function(){
		this.getTraverler();
	},
	getTraverler : function(){
		var _ts = this;
		var url = global.config.serverBase + 'api/usercommon/getList.json';
		var data = {
			page_num : 1,
			page_size : 20
		};

		$.ajax({
			url : url,
			type : 'get',
			data : data,
			dataType: 'json',
			success:function(rs){
				if(rs.code === '100'){
					_ts.render(rs.userCommonContactList);
				}else if(rs.code === '403'){
					$.alert('你还未登陆哦，请先登陆！',function(){
						location.href = global.config.loginHref;
					});
				}else if(rs.code === '102'){
					_ts.render([]);
				}else{
					$.toast(rs.msg);
				}
			}
		});
	},
	render : function(data){
		var $list = $('.user-list').find('ul');
		var html  = '';

		for(var i = 0 ; i< data.length; i++){	
			html +='<li data-index="'+i+'" data-ucode="'+data[i].userCode+'" data-certType="'+data[i].certType+'" data-certNumber="'+data[i].certNumber+'" data-certTypeTxt="'+ this.formatCertType(data[i].certType) +'">';
			html += '<p><span>'+data[i].name+'</span><em>'+data[i].mobile+'</em></p>';

			if(data[i].certType > 0){
				html += '<p class="certType"><span>'+this.formatCertType(data[i].certType)+'</span><em>'+data[i].certNumber+'</em><em</p>';
			}

			html += '</li>';
		}
		$list.html(html);

		$('.infinite-scroll-preloader').hide();
		$('.sure-btn').show();
		this.selectTracerler();
	},
	selectTracerler : function(){
		var _ts 	  = this;
		var orderInfo = global.sessionStorage.get('orderInfo');
		var total     = 0;
		var arr 	  = {};
		var temp      = 0; //保存已选择数量
		var $li 	  = $('.user-list').find('li');
			if(orderInfo.selectType === 'contact'){
				total = 1;
			}else{
				total = orderInfo.number;
			}	

			$li.on('click',function(){
				var name    	= $(this).find('span').html(),
					mobile  	= $(this).find('em').html(),
					index   	= $(this).attr('data-index'),
					certType 	= $(this).attr('data-certtype'),
					usercode    = $(this).attr('data-ucode'),
					certTypeTxt = $(this).attr('data-certtypetxt'),
					certNumber  = $(this).attr('data-certnumber');

					if($(this).hasClass('selected')){
						$(this).removeClass('selected');
						delete arr[index];
						temp--;
					}else{

						if(temp >= total){
							$.toast('你最多只能选择'+ total +'个哦！');
							return false;
						}

						arr[index] = {
							name : name,
							mobile : mobile,
							usercode : usercode,
							certType : certType,
							certNumber : certNumber,
							certTypeTxt : certTypeTxt
						};
						temp++;
						$(this).addClass('selected');
					}
					_ts.arr = arr;
			});

			this.sureBtn();
	},
	sureBtn : function(){
		var _ts  = this;
		var $btn = $('.sure-btn');
			$btn.on('click',function(){
				//console.log(_ts.arr);
				if(Object.keys(_ts.arr).length > 0){
					var orderInfo = global.sessionStorage.get('orderInfo');
					var key  	  = '';
						if(orderInfo.selectType == 'contact'){
							for(key in _ts.arr){
								orderInfo.contact.name = _ts.arr[key].name;
								orderInfo.contact.mobile = _ts.arr[key].mobile;
							}
						}else{
							orderInfo.traveler = [];
							for(key in _ts.arr){
								var o   = _ts.arr[key];
								var tem = {
										'name' : o.name,
										'mobile' : o.mobile,
										'usercode' : o.usercode
								};  

									if(o.certType > 0){
										tem.certType = o.certType;
										tem.certNumber = o.certNumber;
										tem.certTypeTxt = o.certTypeTxt;
									}

									orderInfo.traveler.push(tem);
							}
						}
						// console.log(orderInfo);
						global.sessionStorage.set('orderInfo',orderInfo);

						global.sessionStorage.set('showTraverler',true);

						// console.log(global.sessionStorage.get('orderInfo'));
						$.router.load('./orderInfo.html');
				}else{	
					$.toast('请选择联系人');
				}
			});
	},
	formatCertType:function(s){
		var s1 = parseInt(s,10);
		var v = '';

		switch(s1){
			case 1 : v = '身份证';break;
			case 2 : v = '护照';break;
			case 3 : v = '其他';break;
			case 4 : v = '港澳通行证';break;
			case 5 : v = '军官证'; break;
			case 6 : v = '学生证'; break;
			default : 
				v = '';
		}

		return v ;
	}
};


// 路由load
$(document).on("pageInit",'#payfillOrder' ,function(e, pageId, $page) {
	// var s = {"limitMinNum":5,"spuCode":"6614577609782578766","shopCode":"4014576907211892974","name":"醉在春光烂漫时金川-丹巴-色达-海螺沟梨花主题七日之旅","number":5,"login":false,"proList":[{"specId":89,"specName":"成员","productSpecItemList":[{"specItemId":117,"specItemName":"儿童"},{"specItemId":114,"specItemName":"成人"}]},{"specId":93,"specName":"出游天数","productSpecItemList":[{"specItemId":119,"specItemName":"七天游"},{"specItemId":120,"specItemName":"日历库存"}]}],"selectedItemList":[null,null],"skuList":[{"stockType":1,"skuCode":"6814577609783319537","value":[89,117,93,119]},{"stockType":2,"skuCode":"6814577609783951486","value":[89,117,93,120]},{"stockType":2,"skuCode":"6814577609783425540","value":[89,114,93,120]},{"stockType":1,"skuCode":"6814577609783057079","value":[89,114,93,119]}],"skuCode":null,"contact":{}};

	// global.sessionStorage.set('orderInfo',s);
	KN_Order.init();
 });

$(document).on("pageInit",'#payOrderContacts' ,function(e, pageId, $page) {
	KN_OrderContacts.init();
 });