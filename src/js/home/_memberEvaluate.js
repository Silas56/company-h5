var global = require('../common/global.js');
var etpl = require('../common/etpl.js');
var evaluateItem = require('./tpl/evaluateItem.html');
var evaluateProductHead = require('./tpl/evaluateProductHead.html');

$(".formItemDiff").css("background-position", "0px -555px");

function evaluate_sub() {
    var curLength = $("#TextArea1").val();
    if (curLength.length === 0) {
        $.toast("请填写评价信息");
        return false;
    }
    return true;
}

var KN_Evaluate = {
    params: {
        isAnonymous: 1, //是否匿名（0不匿名，1匿名）
        evaluateItems: {}, //评论项
        pageFrom: ''
    },
    init: function() {
        var params = global.getUrlParam();
        var _ts = this;
        var orderCode = params.orderCode,
            orderStatus = params.orderStatus,
            productType = params.productType;

        this.params.orderStatus = params.orderStatus;
        this.params.productType = params.productType;
        this.params.orderCode = params.orderCode;


        //判断页面是否从复制链接进来
        var evaluateFrom = global.sessionStorage.get('evaluateFrom');

        if (evaluateFrom === 'undefined' || !evaluateFrom) {
            //从复制链接进来,跳转订单页面
            setTimeout(function() {
                $.router.load("memberOrder.html?orderType=1");
            }, 1);
        } else {
            if (evaluateFrom == "memberOrderDetail") {
                $(".back").click(function() {
                    KN_Evaluate.params.pageFrom = "memberOrderDetail";
                    $.router.back();
                });
            } else if (evaluateFrom == "memberOrder") {
                KN_Evaluate.params.pageFrom = "memberOrder";
                $(".back").attr("href", "memberOrder.html?orderType=" + global.sessionStorage.get('backOrderType'));
            }
            global.sessionStorage.set('evaluateFrom', '');
        }


        //获取产品信息
        // this.getProductInfo(orderCode, orderStatus);

        $.ajax({
            url: global.config.serverBase + 'api/order/details.json',
            type: 'GET',
            data: {
                orderCode: orderCode,
                orderStatus: orderStatus
            },
            success: function(result) {
                //console.log(result);
                if (result && result.code == '100') {
                    etpl.addFilter('dateFormat', function(date, useExtra) {
                        return dateChange(date / 1000);
                    });
                    etpl.addFilter('timeFormat', function(time, useExtra) {
                        return timeChange(time / 1000);
                    });
                    var render = etpl.compile(evaluateProductHead);
                    //渲染数据
                    var json = {
                        orderDetails: result
                    };
                    var text = render(json);
                    // 把渲染好的模板加载到dom上面去
                    $('.productHead').html(text);
                    $.ajax({
                        url: global.config.serverBase + 'api/order/evaluateType.json',
                        type: 'GET',
                        cache: false,
                        data: {
                            orderCode: orderCode,
                            productType: productType
                        },
                        success: function(result) {
                            // console.log(result);
                            if (result && result.code == '100') {
                                for (i = 0; i < result.orderCommentTypeBean.length; i++) {
                                    _ts.params.evaluateItems[result.orderCommentTypeBean[i].id] = 5;
                                }
                                var render = etpl.compile(evaluateItem);
                                //渲染数据
                                var text = render({
                                    data: result.orderCommentTypeBean
                                });
                                // 把渲染好的模板加载到dom上面去
                                $('.ev_box').append(text);
                                _ts.initButtons();
                            } else {
                                if (result && result.code === '403') {

                                    window.location.href = global.config.loginHref;

                                } else {
                                    $.toast("error:" + result.msg);
                                }
                            }

                        }
                    });
                } else {
                    result = JSON.parse(result);
                    if (result && result.code === '403') {
                        window.location.href = global.config.loginHref;
                    } else {
                        $.toast('error:' + result.msg);
                    }
                }
            }
        });

        //获取评论项

    },
    getProductInfo: function(orderCode, orderStatus) {

    },
    initButtons: function(orderCode) {
        var _ts = this;
        $('#isAnonymous').on('click', '.check', function() {
            if ($(this).hasClass('checked')) {
                $(this).removeClass('checked');
                _ts.params.isAnonymous = '0';
            } else {
                $(this).addClass('checked');
                _ts.params.isAnonymous = '1';
            }
        });
        $('.bar-index').off('click').on('click', 'span', function() {
            var $par = $(this).parents('.bar-index'),
                type = $par.data('type'),
                index = parseInt($(this).data('index'), 10),
                w = (index / 5) * 100 + '%';
            // console.log($par);
            $par.prev().css('width', w);
            // console.log($par.find('.bar-star'));
            if (_ts.params.evaluateItems.hasOwnProperty(type)) {
                _ts.params.evaluateItems[type] = index;
            }
        });

        $('.refund_text_con').bind('input propertychange', function() {
            var $this = $(this);
            if ($this.val().trim() !== '') {
                var enteredFonts = $this.val().length;
                $(".fonts").text(enteredFonts);
            } else {
                $(".fonts").text(0);
            }
        });

        $("#evaluateSubmit").off('click').on('click', function() {

            if (evaluate_sub()) {

                var evaluateItem = Array(),
                    j = 0;
                for (var i in KN_Evaluate.params.evaluateItems) {
                    evaluateItem[j] = {};
                    evaluateItem[j].itemCode = i;
                    evaluateItem[j].itemScore = KN_Evaluate.params.evaluateItems[i];
                    j++;
                }

                // console.log(evaluateItem);
                var data = {
                    content: $(".refund_text_con").val(),
                    orderCode: KN_Evaluate.params.orderCode,
                    productType: KN_Evaluate.params.productType,
                    isAnonymous: KN_Evaluate.params.isAnonymous,
                    evaluateItem: evaluateItem
                };

                $.ajax({
                    url: global.config.serverBase + '/api/order/evaluate.json',
                    type: 'POST',
                    data: JSON.stringify(data),
                    contentType: "application/json",
                    success: function(data) {
                        if (data && data.code === '100') {
                            $.toast('评价成功');

                            // 默认原路返回上一个页面；
                            setTimeout(function() {
                                //$.router.load("memberOrder.html?orderType=1");                    
                                //$.router.back();
                                if (KN_Evaluate.params.pageFrom == "memberOrder") {
                                    window.location.href = "memberOrder.html?orderType=" + global.sessionStorage.get('backOrderType');
                                } else {
                                    $.router.back();
                                }
                            }, 500);
                        } else {
                            // data = JSON.parse(data);
                            if (data && data.code === '403') {
                                window.location.href = global.config.loginHref;
                            } else {
                                $.toast(data.msg);
                            }
                        }
                    }
                });
            }
        });
    }
};

function dateChange(timestamp) {
    var d = new Date(timestamp * 1000); //根据时间戳生成的时间对象
    var date = (d.getFullYear()) + "-" +
        (d.getMonth() + 1) + "-" +
        (d.getDate());


    return date;
}

function timeChange(timestamp) {
    // 对Date的扩展，将 Date 转化为指定格式的String
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
    // 例子： 
    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
    Date.prototype.Format = function(fmt) { //author: meizz 
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "h+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

    var d = new Date(timestamp * 1000); //根据时间戳生成的时间对象
    // var date = (d.getFullYear()) + "-" + 
    //            (d.getMonth() + 1) + "-" +
    //            (d.getDate()) + " " + 
    //            (d.getHours()) + ":" + 
    //            (d.getMinutes()) + ":" + 
    //            (d.getSeconds());
    // return date;

    return d.Format("yyyy-M-d hh:mm:ss");

    // var d = new Date(timestamp);    //根据时间戳生成的时间对象
    // var date = (d.getFullYear()) + "-" + 
    //            (d.getMonth() + 1) + "-" +
    //            (d.getDate()) + " " + 
    //            (d.getHours()) + ":" + 
    //            (d.getMinutes()) + ":" + 
    //            (d.getSeconds());
    // return date;
}

$(document).on("pageInit", '#memberEvaluate', function(e, pageId, $page) {
    KN_Evaluate.init();
});
