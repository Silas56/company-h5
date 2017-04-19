var global = require('../common/global.js');

var KN_as = {
	init : function(){

		this.getData();

		// this.updateBirth();

	},
	getData : function(){
		$.ajax({
			type	: 'GET',
			url		:	global.config.serverBase+'/api/user/getUserInfo.json',
			success : function(data){
				KN_as.updateBirth();
				if(data && data.code==='100'){
					var userInfo = data.userInfo;
					if(userInfo){
						var nickName = userInfo.nickName;
						if(!nickName){
							nickName = "未设置";
						}
						$(".nickname .nav1 a").text(nickName).attr('href',"changename.html?name="+nickName);
						
						if(userInfo.gender){
							var gender = '';
							if(userInfo.gender === 1){
								gender = '男';
							}else if(userInfo.gender === 2){
								gender = '女';
							}else {
								gender = '保密';
							}
							$(".sex").html(gender);
						}
						
						if(userInfo.birthday){
							$(".birth").val(userInfo.birthday);
						}
						var photo = userInfo.profile_photos;
						if(!photo){
							if(userInfo.gender===1){
								photo = '../../images/home/photo_man.jpg';
							}else if(userInfo.gender===2){
								photo = '../../images/home/photo_woman.jpg';
							}else{
								photo = '../../images/home/photo_default.jpg';
							}
						}
						$(".img-right").attr("src", photo);
					}
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
	uploadFile : function(){		
		var data = {
			module	: 'user',
			file	: $(".headUpload").val()
		};
		$.ajax({
			type	: 'POST',
			data	: data,
			url		: global.config.serverBase+'api/common/upload.json',
			enctype : 'multipart/form-data',
			success : function(data){
				if(data && data.code==='100'){
					$(".img-right").attr("src", data.imgUrl);
					KN_as.updateUserInfo(2, data.imgUrl); //更新头像
				}else{
					data = JSON.parse(data);
					if(data && data.code==='403'){
						window.location.href = global.config.loginHref;
					}else{
						$.toast('error:'+data.msg);
					}
				}
				
			}
		});	
	},
	updateUserInfo : function(type, value){ //上传图片
		var data = {
			type	:	type,
			value	:	value
		};
		 console.log(data);
		$.ajax({
			type	: 'GET',
			url		:	global.config.serverBase+'api/user/updateUser.json',
			data	: data,
			success : function(data){
				if(data && data.code==='100'){
					if(type===2){
						$(".img-right").attr("src", value);
					}
					KN_as.getData();
					/*if (type===3 && value===1) {
						$(".img-right").attr("src", '../../images/home/photo_man.jpg');
					}else {
						$(".img-right").attr("src", '../../images/home/photo_woman.jpg');
					}*/
					$.toast("操作成功");
				}else{
					// data = JSON.parse(data);
					if(data && data.code==='403'){
						window.location.href = global.config.loginHref;
					}else{
						$.toast(data.msg);
					}
				}
			}
		});
	},
	updateBirth: function(){
		var nowTime = new Date(),
			y 		= nowTime.getFullYear(),
			m 		= nowTime.getMonth() + 1,
			d 	 	= nowTime.getDate();

			m = m > 9 ? m : '0' + m;
			d = d > 9 ? d : '0' + d;

			// console.log((y-10) + '-' + m + '-' + d);
		$(".birth").calendar({
			onOpen:function(){
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
			// value : [y + '-' + m + '-' + d],
			maxDate : y + '-' + m + '-' + d,
			onChange : function(p, values, displayValues){
				KN_as.updateUserInfo(4, displayValues[0]); //更新出生日期
				p.destroy();
			}
		});
	},
	logout : function(){
		window.location.href = global.config.logoutHref;
	}
};

// 路由load
$(document).on("pageInit",'#accountsetting' ,function(e, pageId, $page) {
	KN_as.init();
	$(".modal-overlay").click(function(e){
		e.stopPropagation();
	});
	$('.sexdiv').click(function(){
		$.ajax({
			type	: 'GET',
			url		:	global.config.serverBase+'/api/user/getUserInfo.json',
			success : function(data){
				if(data && data.code==='100'){
					$.modal({
						// title : '',
						verticalButtons:true,
						extraClass : 'popup-sexdiv',
						buttons : [
							{
								text: '男',
								close : true,
								onClick : function(){
									$(".sex").text('男');
									KN_as.updateUserInfo(3, 1); //更新性别
								}
							},
							{
								text: '女',
								close : true,
								onClick : function(){
									$(".sex").text('女');
									KN_as.updateUserInfo(3, 2); //更新性别
								}
							}
						]
					});
				}else{
					if(data && data.code==='403'){
						window.location.href = global.config.loginHref;
					}else{
						$.toast('error:'+data.msg);
					}
				}
			}
		});
	});
	
	$(".radioOption").click(function(e){
		e.cancelBubble = true;
		//preventDefaul
		$(".optionList").css("display", "none");
		$(".modal-overlay").removeClass("modal-overlay-visible");
		var $this = $(this);
		var text = $this.text();
		$(".sex").text(text);
		KN_as.updateUserInfo(3, $this.val()); //更新性别
	});
	
	$(".headUpload").click(function(e){
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
	});


	$(".headUpload").change(function(e){
		//KN_as.uploadFile();
		var _iframe =  $('iframe[name=ajaxUpload]').get(0);
		_iframe.onload = _iframe.onreadystatechange = iframeLoad;

		function iframeLoad(){
			if (!_iframe.readyState || _iframe.readyState == "complete") {
				try{
					var _ret = _iframe.contentWindow.document;
					_ret = _ret.getElementsByTagName('pre')[0].innerText;
					_ret = JSON.parse(_ret);
					if(_ret.code=='905'){
						$.toast(_ret.msg);
					}
					if (!!_ret.imgUrl) {
						$(".img-right").attr("src", _ret.imgUrl);
						KN_as.updateUserInfo(2, _ret.imgUrl); //更新头像
					}
				}catch(e){
					console.log(e);
				}
			}
		}

		var f = e.currentTarget.files[0];
		var reg=new RegExp('\\.(jpg|png|jpeg|gif)$',"i");
		var maxFileSize = 1000000;

        if(f) {
        	if(reg.test(f.name)){
        		if(f.size <= maxFileSize) {
					$(".form").attr("action", global.config.serverBase+'/api/common/upload.json');
					$(".form").submit();
	            }else{
	            	$.toast('图片大小不可大于1M');
	            }
        	}else{
        		$.toast('只支持png、jpg、jpeg、gif格式的图片上传');
        	}
        }
	});

	$(".exit-acount-li").click(function(){ //退出
		$.confirm('确定退出当前账户 ?', function () {
			KN_as.logout();
		});
	});
	$(".acount-safe-li").click(function(){
		$.router.load("accountsafe.html");
	});
 });
