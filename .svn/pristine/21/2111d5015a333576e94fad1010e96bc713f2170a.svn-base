var global= require('../common/global.js');

var KN_suggestion = {
	emptyText	: "请输入您的意见或建议，我们将不断优化体验",
	tip			: "请输入手机号码或邮箱",
	init	: function(){
		this.initArea();
		this.initSubmit();
	},
	initArea	: function(){
		$('.s_ta').bind('input propertychange', function() {
			var $this = $(this);
			if($this.val().trim()!==''){
				$this.css("color", "black");
				var enteredFonts = $this.val().length;
				$(".enterdFonts").text(enteredFonts);
			}else{
				$(".enterdFonts").text(0);
			}
		});
		$('.s_ta').focus(function(){
			var $this = $(this);
			if($this.val()===KN_suggestion.emptyText){
				$this.css("color", "black");
				$this.val('');
			}
		});
		$('.s_ta').blur(function(){
			var $this = $(this);
			if($this.val().trim()===''){
				$this.val(KN_suggestion.emptyText);
				$this.css("color", "silver");
			}
		});
	},
	initSubmit	: function(){
		$(".s_submit").click(function(){
			var textArea = $(".s_ta");
			if(textArea.val().trim()==='' || KN_suggestion.emptyText===textArea.val()){
				$.toast("请填写反馈内容");
				textArea.focus();
				return false;
			}
			var contectInput = $(".contectInput");
			if(contectInput.val().trim()==='' || contectInput.val().trim()===KN_suggestion.tip){
				$.toast('请填写联系方式');
				contectInput.focus();
				return false;
			}
			KN_suggestion.submitData();
		});
	},
	submitData	: function(){
		var suggestion = $(".s_ta").val();
		var contect = $(".contectInput").val();
		var data = {
			content	:	suggestion,
			contactWay		:	contect
		};
		$.ajax({
			url		: global.config.serverBase + '/api/platform/feeback.json',
			type	: 'GET',
			data	: data,
			success	: function(result){
				if(result && result.code==='100'){
					$.toast('保存成功');
					setTimeout(function(){
						window.location.href = "memberUser.html";
					}, 2000);
				}else if(resultShop && resultShop.code=='403'){
					window.location.href = global.config.loginHref;
				}else{
					$.toast('error:'+result.msg);
				}
			}
		});
	}
};

(function(){
	KN_suggestion.init();
})();