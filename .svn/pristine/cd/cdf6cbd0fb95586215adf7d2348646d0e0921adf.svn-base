var GlobalKuNiao = require('../common/global.js');

var KN_cp = {
	init	: function(){
		var params = GlobalKuNiao.getUrlParam();
		if(params.mobile){
			$('#phone').val(params.mobile);
		}
		this.initBackwards();
		this.initp1Form();
		this.initResetPassword();
	},
	initp1Form : function(){
		$(".cp_next").click(function(){
			var mobile = $('#phone');
			var regcode = $('.regcode');
			var v = mobile.val().length;
			if(mobile.val().length===0){    
				$.toast("手机号码不能为空！");
				mobile.focus();
				return false;
			}
			if(regcode.val().length===0){
				$.toast("验证码不能为空！");
				regcode.focus();
				return false;
			}
			var reg = /^((\+?86)|(\(\+86\)))?(13[0-9]{9}|15[0-9]{9}|18[0-9]{9}|147[0-9]{8}|1349[0-9]{7}|170[0-9]{8})$/;
			if(!reg.test(mobile.val()))
			{
				$.toast("请输入11位手机号码");
				mobile.focus();
				return false;
			}
			KN_cp.next();
		});
	},
	initResetPassword	: function(){
		$(".btnreset").click(function(){
			var p = $(".password");
			var r = $(".repsword");
			if(p.val().length===0){
				$.toast("密码不能为空！");
				p.focus();
				return false;
			}
			if(r.val().length===0){
				$.toast("确认密码不能为空！");
				r.focus();
				return false;
			}
			KN_cp.resetPassword();
		});
	},
	reg		: function(){
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'/api/user/sendRedomCode.json',
			type	: 'GET',
			data	: {mobile : $('#phone').val()},
			success	: function(result){
				if(result && result.code==='100'){
					$.toast("发送成功");
				}else{
					$.toast('error:'+result.msg);
				}
			}
		});
	},
	initBackwards : function(){	
		$("#btnpass").click(function(){
			KN_cp.time(this, true);
		});
	},
	time	: function(o, isClicked) {
		if (wait === 0) {
			o.removeAttribute("disabled");
			o.value="短信获取验证码";
			wait = 60;
		}else if(wait===60){
			KN_cp.reg();
		}else { 
			o.setAttribute("disabled", true);
			o.style.backgroundColor = "#666666";
			o.value="重新发送(" + wait + ")";
			wait--;
			setTimeout(function() {
				KN_cp.time(o, false);
			}, 1000);
		}
	},
	next	: function(){
		var data = {
			mobile		: $('#phone').val(),
			redomCode	: $('.regcode').val()
		};
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'api/user/proveRedomCode.json',
			type	: 'POST',
			data	: JSON.stringify(data),
			contentType: "application/json",
			success	: function(result){
				if(result && result.code==='100'){
					window.location.href="changepassword2.html";
				}else{
					$.toast('error:'+result.msg);
				}
			}
		});
	},
	resetPassword	: function(){
		var data = {
			newpwd		: $('.password').val(),
			confirmNewpwd: $('.repsword').val()
		};
		$.ajax({
			url		: GlobalKuNiao.config.serverBase+'/api/user/updatePassword.json',
			type	: 'POST',
			data	: JSON.stringify(data),
			contentType: "application/json",
			success	: function(data){
				if(data && data.code==='100'){
					window.location.href="accountsafe.html";
				}else{
					$.toast('error:'+data.msg);
				}
			}
		});
	}
};

var wait=60;



$(document).on("pageInit",'#changepassword1' ,function(e, pageId, $page) {
	KN_cp.init();
 });

$(document).on("pageInit",'#changepassword2' ,function(e, pageId, $page) {
	KN_cp.init();
 });