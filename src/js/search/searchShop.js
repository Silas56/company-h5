var global = require('../common/global.js');
var etpl = require('../common/etpl.js');
var tplShop = require('./tpl/shop.html');

var KN_Shop = {
    param: {
        maxItem: 10,
        loading:false
    },
    init: function() {
        var params = global.getUrlParam();
        if (!params.catevalue || params.catevalue === '*') {
            params.catevalue = '';
        }
        var catevalue = decodeURIComponent(params.catevalue);
        $("input[name=cateValue]").val(catevalue);
        if (!catevalue || catevalue.trim() === '') {
            catevalue = '*';
        }
        this.getShops(catevalue, 0, 10);
        this.initButtons();
        $(".content .datalist").html('');
    },
    initButtons: function() {
        $(".btnsearch").click(function() {
            var keyWord = $("input[name=cateValue]").val();
            if (keyWord.trim().length === 0) {
                keyWord = '*';
            }
            KN_Shop.search(keyWord);
        });
        $(".category").change(function() {
            $(".cateValue").val('');
            var v = $(this).val();
            if (v === '0') {
                $(".cateValue").attr("placeholder", "请输入产品名称");
            } else {
                $(".cateValue").attr("placeholder", "请输入店铺名称");
            }
        });
        $(".clearCateValue").click(function() {
            $(".cateValue").val('');
            window.location.href = 'search.html?type=shop';
        });
    },
    getShops: function(keyWord, from, size) {
        $.ajax({
            url: global.config.serverBase + 'api/search/storeSearch.json',
            type: 'GET',
            data: {
                keyWord: keyWord,
                from: from,
                size: size
            },
            success: function(result) {
                // console.log(result);
                if (result && result.code == '100') {
                    KN_Shop.param.maxItem = result.count;
                    var resultList = result.resultList;
                    if (resultList && resultList.length > 0) {
                        var render = etpl.compile(tplShop);

                        //评分过滤器
                        // etpl.addFilter( 'scoreFormat', function ( score, useExtra ) {
                        // 	return score / 5 * 100;
                        // });

                        for (var i = 0; i < resultList.length; i++) {
                            if (resultList[i].scores_ > 0) {
                                var num1 = parseInt(resultList[i].scores_);
                                var num2 = resultList[i].scores_ * 1 - num1;
                                var scoreList = [];
                                for (var j = 0; j < 5; j++) {
                                    if (j < num1) {
                                        scoreList[j] = "18px";
                                    } else if (j == num1) {
                                        scoreList[j] = 18 * num2 + "px";
                                    } else {
                                        scoreList[j] = "0px";
                                    }
                                }
                                resultList[i].scoreList=scoreList;
                            }
                        }
                        var json = { shops: resultList };
                        var text = render(json);
                        $(".content .datalist").append(text);

                        KN_Shop.loading = false;
                        $.refreshScroller();

                        $('.content-block .product_list').click(function() {
                            var shopCode = $(this).find(".shopCode").val();
                            window.location.href = '../index/index.html?shopCode=' + shopCode;
                        });
                        if (from + size >= result.count) {
                            var tab = $('.infinite-scroll');
                            $.detachInfiniteScroll(tab);
                            $('.infinite-scroll-preloader').hide();
                            var lastRecord = tab.find(".nomore");
                            if (lastRecord.length === 0) {
                                tab.find(".datalist").append("<div class='nomore'>---- 没有更多了 ----</div>");
                            }
                        }
                    } else {
                        $(".content").html('');
                        $(".content").append('<div class="tip">非常抱歉，没有找到相关结果</div>');
                        KN_Shop.getRecommand();
                    }
                } else {
                    $.toast("error:" + result.msg);
                }
            }
        });
    },
    getRecommand: function() {
        $.ajax({
            url: global.config.serverBase + '/api/search/storeRecommand.json',
            type: 'GET',
            success: function(result) {
                if (result && result.code == '100') {
                    var resultList = result.resultList;
                    if (resultList && resultList.length > 0) {
                        var render = etpl.compile(tplShop);

                        var json = { shops: resultList };
                        var text = render(json);
                        var datalist = $(".content .datalist");
                        datalist.append('<div>');
                        datalist.append('<hr class="line"/>');
                        datalist.append('<div class="recommandtip">推荐店铺</div>');
                        datalist.append('<hr class="line"/>');
                        datalist.append('</div>');
                        datalist.append(text);
                    }
                } else {
                    $.toast("error:" + result.msg);
                }
            }
        });
    },
    search: function(keyWord, t) {
        var type = t ? t : $("select[name=category]").val();
        var whichPage = type === "0" ? "searchProduct.html" : "searchShop.html";
        keyWord = encodeURIComponent(keyWord);
        if (keyWord && keyWord.trim().length > 0 && keyWord.trim() !== '*') {
            var his = global.localStorage.get('his');
            var arr = [];
            var obj = {};
            obj.type = type;
            obj.text = keyWord;
            if (his && his !== 'undefined') {
                var isExist = false;
                $.each(his, function(key, value) {
                    if (value && value.type === type && value.text === keyWord) {
                        isExist = true;
                        return false;
                    }
                });
                if (!isExist) {
                    his.push(obj);
                }
            } else {
                arr.push(obj);
                his = arr;
            }
            global.localStorage.set('his', his);
        }
        window.location.href = whichPage + "?catevalue=" + keyWord;
    }
};

$(document).on("pageInit", '#searchShop_page', function(e, pageId, page) {

    KN_Shop.init();

    KN_Shop.loading = false;

    // 每次加载添加多少条目
    var itemsPerLoad = 10;

    $(page).on('infinite', function() {
        // 如果正在加载，则退出
        if (KN_Shop.loading) return;

        // 设置flag
        KN_Shop.loading = true;

        var lastIndex = $(".content .datalist .content-block").length;
        lastIndex = lastIndex === 0 ? 0 : lastIndex;

            if (!KN_Shop.param.maxItem || lastIndex >= KN_Shop.param.maxItem) {
                var tab = $('.infinite-scroll');
                // 加载完毕，则注销无限加载事件，以防不必要的加载
                $.detachInfiniteScroll(tab);
                // 删除加载提示符
                $('.infinite-scroll-preloader').hide();
                var lastRecord = tab.find(".nomore");
                if (lastRecord.length === 0) {
                    tab.find(".datalist").append("<div class='nomore'>---- 没有更多了 ----</div>");
                }
                KN_Shop.loading = false;
                return;
            }

            var keyWord = $("input[name=cateValue]").val();
            if (keyWord.trim().length === 0) {
                keyWord = '*';
            }

            KN_Shop.getShops(keyWord, lastIndex, itemsPerLoad);

    });
});
