var global  = require('../common/global.js');
var etpl    = require('../common/etpl.js');
var tplList = require('./tpl/informationList.html');

etpl.addFilter('certTypeFormart',function(s){
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

});

var editData = '';
var KN_ChangeName = {
	init	: function(){
		var params = global.getUrlParam();
		var name = params.name;
		if(name){
			name = decodeURIComponent(name);
			$(".changename_inp").val(name);
		}

		this.initChangeNick();
		$.ajax({
			type	: 'GET',
			url		:	global.config.serverBase+'/api/user/getUserInfo.json',
			success : function(data){
				if(data && data.code==='100'){

				}else{
					if(data && data.code==='403'){
						window.location.href = global.config.loginHref;
					}else{
						$.toast('error:'+data.msg);
					}
				}
			}
		});
	},
	initChangeNick	: function(){
		$(".changename_btn").click(function(){
			var name = $(".changename_inp").val();
			if(name.trim().length===0){
				$.toast('昵称不能为空');
				return;
			}
			if(!name.match(/^(([a-zA-Z\u4e00-\u9fa5]|[-_]|[\b]){3,10})$/)){
				$.toast('昵称3~10位中英文、"-"、"_"');
				return;
			}
			if(name.trim().length<3 || name.trim().length>10){
				$.toast('昵称3~10位中英文、"-"、"_"');
				return;
			}
			$.ajax({
				url		: global.config.serverBase + 'api/user/updateUser.json',
				type	: 'GET',
				data	: {
					type	: 1,
					value	: name
				},
				success : function(result){
					// console.log(result);
					if(result && result.code === '100'){
						$.toast('修改成功');
						window.location.href = "accountsetting.html";
					}else{
						// result = JSON.parse(result);
						if(result && result.code==='403'){
							window.location.href = global.config.loginHref;
						}else{
							$.toast(result.msg);
						}
					}
				}
			});
		});
	}
};
var KN_Informaion = {
	init : function(){
		this.getContacts();
	},
	getContacts : function(){
		var _ts  = this,
			url  = global.config.serverBase + 'api/usercommon/getList.json',
			data = {
				page_num : 1,
				page_size : 20
			};

			$.ajax({
				url : url,
				type : 'get',
				data : data,
				dataType : 'json',
				success : function(rs){
					if(rs.code === '100'){
						_ts.renderList(rs.userCommonContactList);
					}else if(rs.code === '403'){
						location.href = global.config.loginHref;
					}else if(rs.code === '102'){
						_ts.renderList([]);
					}else{
						$.toast(rs.msg);
					}
				}
			});
	},
	renderList : function(data){
		var render = etpl.compile(tplList);
		var text   = render({
			data : data
		});
		$(".user-information").find('.info-list').html(text);

		this.setDefault();

		this.edit();

		this.del();

		$('.addInformation-btn').css('display','block');

	},
	del : function(){
		var $infoList = $('.user-information').find('.info-list'),
			url 	  = global.config.serverBase + 'api/usercommon/delete.json';

			$infoList.off('click').on('click','.del',function(){
				var $item = $(this).parents('.item'),
					code  = $(this).attr('data-code');
					$.confirm('确定要删除吗？',function(){
						$.ajax({
							url : url,
							type : 'get',
							data : {code : code},
							dataType : 'json',
							success : function(rs){
								if(rs.code === '100'){
									$.toast('删除成功！');
									$item.remove();
								}else{
									if (rs.code === '403') {
										var url = location.href;
										url = encodeURIComponent(url);
										$.ajax({
											url : '/m/api/global/visited.json?url='+url+'',
											type : 'get',
											dataType : 'json',
											success : function(){
												window.location.href = global.config.loginHref;
											}
										});
									} else {
										$.toast(rs.msg);
									}
								}
							}
						});
					},function(){});
			});
	},
	edit : function(){
		var $infoList = $('.user-information').find('.info-list .edit');

			$infoList.off('click').on('click',function(){
				var code     = $(this).attr('data-code'),
					name 	 = $(this).data('name'),
					mobile	 = $(this).data('mobile'),
					email    = $(this).data('email'),
					certType = $(this).data('certtype'),
					certText = $(this).data('certtext'),
					certNumber = $(this).data('certnumber');

					editData = {
						code : code,
						name : name,
						mobile : mobile,
						email : email,
						certType : certType,
						certText : certText,
						certNumber : certNumber
					};

					$.router.load('#homeEditInformation');
			});
	},
	setDefault : function(){
		$('.set-default').off('click').on('click',function(){
			var $this  = $(this);
			if(!$this.hasClass('default')){
				var url  = global.config.serverBase + 'api/usercommon/setDefault.json';
				var code = $(this).attr('data-code');

				$.ajax({
					url : url,
					type : 'get',
					dataType : 'json',
					data : {code : code},
					success : function(rs){
						if(rs.code === '100'){
							$.toast('设置成功！');
							
							$('.set-default').removeClass('default');
							$this.addClass('default');
						}else{
							if (rs.code === '403') {
								var url = location.href;
								url = encodeURIComponent(url);
								$.ajax({
									url : '/m/api/global/visited.json?url='+url+'',
									type : 'get',
									dataType : 'json',
									success : function(){
										window.location.href = global.config.loginHref;
									}
								});
							} else {
								$.toast(rs.msg);
							}
						}
					}
				});	
			}else{
				return false;
			}
		});
	}
};

var KN_AddInformation = {
	param:{
		nickname : '',
		mobile : '',
		email : '',
		certType : '',
		certNumber : ''
	},
	init : function(){
		$('input').val('');
		this.verifincation();

		this.param = {
			nickname : '',
			mobile : '',
			email : '',
			certType : '',
			certNumber : ''
		};
	},
	verifincation : function(){
		var _ts       = this,
			$inputCon = $('#homeAddInformation').find('.add-information');
			//手机号码
			$inputCon.on('change','input[name="mobile"]',function(){
				var _v = $(this).val();
					_ts.param.mobile = _v;
			});

			//昵称
			$inputCon.on('change','input[name="name"]',function(){
				var _v = $(this).val();

					_ts.param.nickname = _v;
			});

			//邮箱
			$inputCon.on('change','input[name="email"]',function(){
				var _v = $(this).val();

					_ts.param.email = _v;
			});

			//证件类型
			/*$inputCon.on('change','input[name="certType"]',function(){
				var _v = $(this).val();

					_ts.param.certType = _v;
			});*/

			//证件类型
			$inputCon.find('input[name="certType"]').off('click').on('click',function(){

				var $certType = $(this);

					$.modal({
						title : '请选择证件类型',
						verticalButtons:true,
						extraClass : 'popup-certType',
						buttons : [
							{
								text: '身份证',
								close : true,
								onClick : function(){
									_ts.param.certType = 1;
									$certType.val('身份证');
								}
							},
							{
								text: '港澳通行证',
								close : true,
								onClick : function(){
									_ts.param.certType = 4;
									$certType.val('港澳通行证');
								}
							},
							{
								text: '学生证',
								close : true,
								onClick : function(){
									_ts.param.certType = 6;
									$certType.val('学生证');
								}
							},
							{
								text: '军官证',
								close : true,
								onClick : function(){
									_ts.param.certType = 5;
									$certType.val('军官证');
								}
							}
						]
					});
			});

			// 证件号码
			$inputCon.on('change','input[name="certNumber"]',function(){
				var _v = $(this).val();

					_ts.param.certNumber = _v;
			});

			$inputCon.off('click').on('click','.save-btn',function(){
				// 昵称
				if(_ts.param.nickname === ''){
					$.toast('请输入昵称！');
					return false;
				}else if(_ts.param.nickname.length < 2 || _ts.param.nickname.length > 10 ){
					$.toast('2~10位中英文、"_"、"-"、空格');
					return false;
				}else if(!_ts.param.nickname.match(/^(([a-zA-Z\u4e00-\u9fa5]|[-_\s]|[\b]){2,10})$/)){
					$.toast('2~10位中英文、"_"、"-"、空格');
					return false;
				}

				// 手机号码
				if(!_ts.param.mobile.match(/^1\d{10}$/)){
					$.toast('请输入正确的手机号码！');
					return false;
				}

				$.showPreloader('');

				_ts.saveInformation();
			});
	},
	saveInformation : function(){
		var url = global.config.serverBase + 'api/usercommon/add.json';

		var data = {
			name : this.param.nickname,
			mobile : this.param.mobile,
			email : this.param.email,
			certType : this.param.certType,
			certNumber : this.param.certNumber
		};

		$.ajax({
			url : url,
			type : 'post',
			dataType : 'json',
			data : JSON.stringify(data),
			contentType :'application/json',
			success : function(rs){
				$.hidePreloader();
				if(rs.code === '100'){
					$.alert('添加成功！',function(){
						$.router.back();
					});
				}else{
					if(rs.code === '403') {
						var url = location.href;
						url = encodeURIComponent(url);
						$.ajax({
							url : '/m/api/global/visited.json?url='+url+'',
							type : 'get',
							dataType : 'json',
							success : function(){
								window.location.href = global.config.loginHref;
							}
						});
					}else {
						$.toast(rs.msg);
					}
				}
			}
		});
	}
};

var KN_EditInformation = {
	param : {

	},
	init : function(){
		// console.log(editData);
		if(editData !== ''){
			this.initHtml();
			this.param = editData;
		}
	},
	initHtml : function(){
		var data = editData;
		var $con = $('#homeEditInformation');

			$con.find('input[name=name]').val(data.name);
			$con.find('input[name=mobile]').val(data.mobile);
			$con.find('input[name=email]').val(data.email);
			$con.find('input[name=certTypeEdit]').val(data.certText);
			$con.find('input[name=certNumber]').val(data.certNumber);

			this.verifincation();

	},
	verifincation : function(){
		var _ts       = this,
			$inputCon = $('#homeEditInformation').find('.add-information');
			//手机号码
			$inputCon.on('change','input[name="mobile"]',function(){
				var _v = $(this).val();
					_ts.param.mobile = _v;
			});

			//昵称
			$inputCon.on('change','input[name="name"]',function(){
				var _v = $(this).val();

					_ts.param.name = _v;
			});

			//邮箱
			$inputCon.on('change','input[name="email"]',function(){
				var _v = $(this).val();

					_ts.param.email = _v;

			});
			//证件类型
			/*$inputCon.on('change','input[name="certType"]',function(){
				var _v = $(this).val();

					_ts.param.certType = _v;
			});*/

			//证件类型
			// console.log();
			$inputCon.find('input[name="certTypeEdit"]').off('click').on('click',function(){
				var $certType = $(this);

					$.modal({
						title : '请选择证件类型',
						verticalButtons:true,
						extraClass : 'popup-certType',
						buttons : [
							{
								text: '身份证',
								close : true,
								onClick : function(){
									_ts.param.certType = 1;
									$certType.val('身份证');
								}
							},
							{
								text: '港澳通行证',
								close : true,
								onClick : function(){
									_ts.param.certType = 4;
									$certType.val('港澳通行证');
								}
							},
							{
								text: '学生证',
								close : true,
								onClick : function(){
									_ts.param.certType = 6;
									$certType.val('学生证');
								}
							},
							{
								text: '军官证',
								close : true,
								onClick : function(){
									_ts.param.certType = 5;
									$certType.val('军官证');
								}
							}
						]
					});
			});

			// 证件号码
			$inputCon.on('change','input[name="certNumber"]',function(){
				var _v = $(this).val();

					_ts.param.certNumber = _v;
			});

			$inputCon.off('click').on('click','.save-btn',function(){
				// 昵称
				if(_ts.param.name === ''){
					$.toast('请输入昵称！');
					return false;
				}else if(_ts.param.name.length < 2 || _ts.param.name.length > 10 ){
					$.toast('请输入2-10位中英文字符、"_"、"-"或空格');
					return false;
				}else if(!_ts.param.name.match(/^(([a-zA-Z\u4e00-\u9fa5]|[-_\s]|[\b]){2,10})$/)){
					$.toast('请输入2-10位中英文字符、"_"、"-"或空格');
					return false;
				}

				// 手机号码
				if(!_ts.param.mobile.toString().match(/^1\d{10}$/)){
					$.toast('请输入11位手机号码');
					return false;
				}

				$.showPreloader();
				_ts.saveInformation();
			});
	},
	saveInformation : function(){
		var url = global.config.serverBase + 'api/usercommon/update.json';

		var data = {
			code : this.param.code,
			name : this.param.name,
			mobile : this.param.mobile,
			email : this.param.email,
			certType : this.param.certType,
			certNumber : this.param.certNumber
		};

		$.ajax({
			url : url,
			type : 'post',
			dataType : 'json',
			data : JSON.stringify(data),
			contentType :'application/json',
			success : function(rs){
				$.hidePreloader();
				if(rs.code === '100'){
					$.alert('修改成功！',function(){
						$.router.back();
					});
				}else{
					if (rs.code === '403') {
						var url = location.href;
						url = encodeURIComponent(url);
						$.ajax({
							url : '/m/api/global/visited.json?url='+url+'',
							type : 'get',
							dataType : 'json',
							success : function(){
								window.location.href = global.config.loginHref;
							}
						});
					} else {
						$.toast(rs.msg);
					}
				}
			}
		});
	}
};

$(document).on('pageInit','#homeInformation',function(e,pageId,$page){
	KN_Informaion.init();
});

$(document).on('pageInit','#homeAddInformation',function(e,pageId,$page){
	KN_AddInformation.init();
});

$(document).on('pageInit','#homeEditInformation',function(e,pageId,$page){
	KN_EditInformation.init();
});
$(document).on('pageInit','#changename',function(e,pageId,$page){
	KN_ChangeName.init();
});