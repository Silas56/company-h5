//加载etpl模板
var etpl = require('../common/etpl.js');
// 加载具体tpl文件
var tplMemberMyCollectionPro = require('./tpl/memberMyCollectionPro.html');
var tplMemberMyCollectionShop = require('./tpl/memberMyCollectionShop.html');
var global = require('../common/global.js');
var KNShare = require('../common/share.js');

var tabIndex, loading;
var KN_Fav = {
    params: {
        selectedProCode: '',
        selectedShopCode: '',
        selectDetailUrl: '',
        pageNum: 1,
        pageNum2: 1,
        maxItems: []
    },
    init: function() {
        this.getProdFav(1, 10);
        this.getShopFav(1, 10);
        $(".content .datalist").html('');
        loading = false;
        this.initShopFavButton();
    },
    initProdFavButton: function() {
        $("#tab1").find(".content-block").unbind('click').click(function() {
            var productCode = $(this).find(".productCode").val();
            var shopCode = $(this).find(".shopCode").val();
            // window.location.href = "../detail/detail.html?shopCode="+shopCode+"&productCode="+productCode;
            $.router.load("../detail/detail.html?shopCode=" + shopCode + "&productCode=" + productCode);
        });
        $("#tab1").find('.product_list_r_menu').unbind('click').click(function(e) {
            var $contentBlock = $(this).parent().parent().parent();
            var productCode = $contentBlock.find(".productCode").val();

            KN_Fav.params.selectedProCode = productCode;

            var shopCode = $contentBlock.find(".shopCode").val();

            KN_Fav.params.selectedShopCode = shopCode;

            KN_Fav.params.selectDetailUrl = 'http://' + location.host + '/shop/static/html/detail/detail.html?shopCode=' + shopCode + '&productCode=' + productCode;

            var imgSrc = $contentBlock.find("img").attr("src");
            var proName = $contentBlock.find(".product_list_r_title").text();
            KN_Fav.initShare(proName, imgSrc, 1);

            $(".menu_click_shade").css({ "display": "block" });
            $(".click1").css({ "bottom": '0px' }).css({ "display": "block" });

            $(".menu_click_bottom").unbind('click').click(function() {
                $(".menu_click_shade").css({ "display": "none" });
                $(".click1").css({ bottom: '-218px' });
            });
            if (e && e.stopPropagation) {
                e.stopPropagation();
            } else {
                window.event.cancelBubble = true;
            }
        });

        $(".productShare").unbind('click').click(function() {
            $(".myCollection_shade").css("display", "block").css('bottom', '0px');
            $(".myCollection_share").css("display", "block").css('bottom', '0px');
        });
        $(".share_bottom").unbind('click').click(function() {
            $(".myCollection_shade").css("display", "none").css('bottom', '-218px');
            $(".myCollection_share").css("display", "none").css('bottom', '-218px');
        });

        $(".prodCancelCollection").unbind('click').click(function() {
            var data = {
                shopCode: KN_Fav.params.selectedShopCode,
                spuCode: KN_Fav.params.selectedProCode,
                favType: 1,
                updateType: 2
            };
            $.confirm('确定取消收藏？', '', function() {
                $.ajax({
                    url: global.config.serverBase + 'api/user/updateFav.json',
                    type: 'POST',
                    data: JSON.stringify(data),
                    contentType: "application/json",
                    success: function(resultPro) {
                        if (resultPro && resultPro.code == '100') {
                            $.toast("取消收藏成功");
                            window.location.reload();
                        } else {
                            resultPro = JSON.parse(resultPro);
                            if (resultPro && resultPro.code === '403') {
                                window.location.href = global.config.loginHref;
                            } else {
                                $.toast('error:' + resultPro.msg);
                            }
                        }
                    }
                });
            });
        });

        $(".order").unbind('click').click(function() {
            $.ajax({
                url: global.config.serverBase + 'api/product/base.json',
                type: 'GET',
                data: {
                    productCode: KN_Fav.params.selectedProCode,
                    shopCode: KN_Fav.params.selectedShopCode
                },
                success: function(resultPro) {
                    if (resultPro && resultPro.code == '100') {
                        $(".menu_click_shade").css({ "display": "none" });
                        $(".click1").css({ bottom: '-218px' });

                        var product = resultPro.product;
                        // global.sessionStorage.del('orderInfo');
                        var infoData = {
                            limitMinNum: product.limitMinNum,
                            spuCode: KN_Fav.params.selectedProCode,
                            shopCode: KN_Fav.params.selectedShopCode,
                            name: product.title,
                            productType: product.productType
                        };

                        if (resultPro.product.shopStatus === 1 && resultPro.product.saleStatus === 1) {
                            global.sessionStorage.del('orderInfo');
                            global.sessionStorage.set('orderInfo', infoData);
                            $.router.load('../pay/orderInfo.html?spuCode=' + infoData.spuCode);
                        } else {
                            $.toast('该商品暂时不可售，敬请期待！');
                        }
                        // global.sessionStorage.set('orderInfo',infoData); 
                        // $.router.load('../pay/orderInfo.html?spuCode='+infoData.spuCode);

                        // global.localStorage.set('shopCode',product.shopCode);
                    } else {
                        resultPro = JSON.parse(resultPro);
                        if (resultPro && resultPro.code === '403') {
                            window.location.href = global.config.loginHref;
                        } else {
                            $.toast('error:' + resultPro.msg);
                        }
                    }
                }
            });
        });
    },
    initShopFavButton: function() {
        $("#tab2").find(".content-block").unbind('click').click(function() {
            var shopCode = $(this).find(".shopCode").val();
            // window.location.href = "../index/index.html?shopCode="+shopCode;
            $.router.load("../index/index.html?shopCode=" + shopCode);
        });
        $("#tab2").find(".product_list_r_menu").unbind('click').click(function(e) {
            var $contentBlock = $(this).parent().parent().parent();
            var shopCode = $contentBlock.find(".shopCode").val();
            KN_Fav.params.selectedShopCode = shopCode;

            KN_Fav.params.selectDetailUrl = KN_Fav.params.selectDetailUrl = 'http://' + location.host + '/shop/static/html/index/index.html?shopCode=' + shopCode;

            var imgSrc = $contentBlock.find("img").attr("src");
            var shopName = $contentBlock.find(".product_list_r_title").text();
            KN_Fav.initShare(shopName, imgSrc);

            $(".menu_click_shade").css({ "display": "block" });
            $(".click2").css({ bottom: '0px' }).css({ "display": "block" });

            $(".menu_click_bottom").unbind('click').click(function() {
                $(".menu_click_shade").css({ "display": "none" });
                $(".click2").css({ bottom: '-218px' });
            });
            if (e && e.stopPropagation) {
                e.stopPropagation();
            } else {
                window.event.cancelBubble = true;
            }
        });
        $(".shopShare").unbind('click').click(function() {
            $(".myCollection_shade").css("display", "block").css("bottom", '0px');
            $(".myCollection_share").css("display", "block").css("bottom", '0px');
        });
        $(".share_bottom").unbind('click').click(function() {
            $(".myCollection_shade").css("display", "none").css('bottom', '-218px');
            $(".myCollection_share").css("display", "none").css('bottom', '-218px');
        });
        $(".shopCancelCollection").unbind('click').click(function() {
            $.confirm('确定取消收藏？', '', function() {
                var data = {
                    shopCode: KN_Fav.params.selectedShopCode,
                    favType: 2,
                    updateType: 2
                };
                $.ajax({
                    url: global.config.serverBase + 'api/user/updateFav.json',
                    type: 'POST',
                    data: JSON.stringify(data),
                    contentType: "application/json",
                    success: function(result) {
                        if (result && result.code == '100') {
                            $.toast("取消收藏成功");
                            window.location.reload();
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
            });
        });
    },
    getProdFav: function(pageNum, pageSize) {
        $.ajax({
            url: global.config.serverBase + '/api/user/getProdFav.json',
            type: 'GET',
            cache: false,
            data: {
                pageNum: pageNum,
                pageSize: pageSize
            },
            success: function(resultPro) {
                if (resultPro && resultPro.code == '100') {
                    // 重置加载flag
                    loading = false;
                    tabIndex = 1;

                    if (resultPro.prodFavList.total < 1) {
                        $('#tab1 .datalist').html("<div class='nomore' style='text-align:center;font-size: 0.8rem;'>暂无数据<div>");
                        $('.infinite-scroll-preloader').eq(tabIndex - 1).hide();
                        return;
                    }

                    var prodInfoList = resultPro.prodFavList.prodInfoList;
                    if (prodInfoList && prodInfoList.length > 0) {
                        KN_Fav.params.maxItems[tabIndex] = resultPro.prodFavList.total;

                        var render = etpl.compile(tplMemberMyCollectionPro);
                        var jsonPro = {
                            myCollectionProduct: resultPro,
                            prodInfoList: prodInfoList
                        };
                        var textPro = render(jsonPro);
                        $("#tab1 .datalist").append(textPro);
                        KN_Fav.initProdFavButton();

                        $.refreshScroller();

                        if (pageSize >= resultPro.prodFavList.total) {
                            $('.infinite-scroll-preloader').eq(tabIndex - 1).hide();
                            var currentTab = $('.infinite-scroll').eq(tabIndex - 1);
                            var lastRecord = currentTab.find(".nomore");
                            if (lastRecord.length === 0) {
                                currentTab.find(".datalist").append("<div class='nomore' style='text-align:center;font-size: 0.8rem;'>---- 没有更多了 ----</div>");
                            }
                            return;
                        }
                    }
                } else {
                    if (resultPro && resultPro.code === '403') {
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
                        $.toast('error:' + resultPro.msg);
                    }
                }
            }
        });
    },
    getShopFav: function(pageNum, pageSize) {
        $.ajax({
            url: global.config.serverBase + ' /api/user/getShopFav.json',
            type: 'GET',
            cache: false,
            data: {
                pageNum: pageNum,
                pageSize: pageSize
            },
            success: function(resultShop) {
                if (resultShop && resultShop.code == '100') {
                    // 重置加载flag
                    loading = false;
                     tabIndex = 2;
                    if (resultShop.shopFavList.total < 1) {
                        $('#tab2 .datalist').html("<div class='nomore' style='text-align:center;font-size: 0.8rem;'>暂无数据<div>");
                        $('.infinite-scroll-preloader').eq(tabIndex - 1).hide();
                        return;
                    }

                    var shopInfoList = resultShop.shopFavList.shopInfoList;

                    etpl.addFilter('scoreFormat', function(score, useExtra) {
                        return score / 5 * 100;
                    });

                    if (shopInfoList && shopInfoList.length > 0) {
                        KN_Fav.params.maxItems[tabIndex] = resultShop.shopFavList.total;

                        var render = etpl.compile(tplMemberMyCollectionShop);
                        var jsonShop = {
                            myCollectionShop: resultShop,
                            shopInfoList: shopInfoList
                        };
                        var textShop = render(jsonShop);

                        $("#tab2 .datalist").append(textShop);

                        KN_Fav.initShopFavButton();

                        $.refreshScroller();

                        if (pageSize >= resultShop.shopFavList.total) {
                            $('.infinite-scroll-preloader').eq(tabIndex - 1).hide();
                            var currentTab = $('.infinite-scroll').eq(tabIndex - 1);
                            var lastRecord = currentTab.find(".nomore");
                            if (lastRecord.length === 0) {
                                currentTab.find(".datalist").append("<div class='nomore' style='text-align:center;font-size: 0.8rem;'>---- 没有更多了 ----</div>");
                            }
                            return;
                        }
                    }
                } else {
                    if (resultShop && resultShop.code === '403') {
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
                        $.toast('error:' + resultShop.msg);
                    }
                }
            }
        });
    },
    initShare: function(title, imgSrc, isPro) { //初始化分享按钮
        var url = '';
        if (isPro) {
            url = 'http://' + location.host + '/shop/static/html/detail/detail.html?shopCode=' + KN_Fav.params.selectedShopCode + '&productCode=' + KN_Fav.params.selectedProCode;
        } else {
            url = 'http://' + location.host + '/shop/static/html/index/index.html?shopCode=' + KN_Fav.params.selectedShopCode;
        }
        var shareData = {
            imageUrl: imgSrc,
            url: url,
            desc: '',
            title: title,
            site: '酷鸟',
            appid: '',
            summary: '酷鸟',
            pics: imgSrc,
            appkey: '',
            ralateUid: '',
            pageUrl: this.params.selectDetailUrl
        };
        var wurl = KNShare.weibo(shareData.appkey, shareData.ralateUid, shareData.title, shareData.url, shareData.imageUrl);
        $('.weibo').find('a').attr('href', wurl);
        var qqurl = KNShare.qq_friends(shareData.site, shareData.title, shareData.imageUrl, shareData.appid, shareData.url, shareData.pageUrl);
        $('.QQFriends').find('a').attr('href', qqurl);
        var zurl = KNShare.qzone(shareData.url, shareData.title, shareData.desc, shareData.summary, shareData.site, shareData.pics);
        $('.Qzone').find('a').attr('href', zurl);
    }
};


$(document).on("pageInit", "#page_myCollection", function(e, id, page) {
    KN_Fav.init();

    $(function() {
        $(".menu_click_shade").css({ "display": "none" });
        $(".click2").css({ "display": "none" });

        $(".click1").css({ "display": "none" });
        $(".menu_click_shade").css({ "display": "none" });

        $(".myCollection_shade").css("display", "none").css('bottom', '-218px');
        $(".myCollection_share").css("display", "none").css('bottom', '-218px');
    });

    loading = false;
    // 每次加载添加多少条目
    var itemsPerLoad = 10;

    $(page).off('infinite').on('infinite', function() {
    	
        // 如果正在加载，则退出
        if (loading) return;
        // 设置flag
        loading = true;
        tabIndex = $(".tabs .active").attr('id');
        tabIndex = tabIndex.substring(3, tabIndex.length);
        tabIndex = parseInt(tabIndex);
        var lastIndex = $(".tabs .active .content-block").length;

        if (!KN_Fav.params.maxItems[tabIndex] || lastIndex >= KN_Fav.params.maxItems[tabIndex]) {
            var tab = $('.infinite-scroll');
            // 加载完毕，则注销无限加载事件，以防不必要的加载
            // $.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex-1));
            // 删除加载提示符
            $('.infinite-scroll-preloader').eq(tabIndex - 1).hide();
            var currentTab = $('.infinite-scroll').eq(tabIndex - 1);
            var lastRecord = currentTab.find(".nomore");
            if (lastRecord.length === 0) {
                currentTab.find(".datalist").append("<div class='nomore' style='text-align:center;font-size: 0.8rem;'>---- 没有更多了 ----</div>");
            }
            loading = false;
            return;
        }

        if (tabIndex === 1) {
            KN_Fav.params.pageNum++;
            KN_Fav.getProdFav(KN_Fav.params.pageNum, itemsPerLoad);
        } else if (tabIndex === 2) {
            KN_Fav.params.pageNum2++;
            KN_Fav.getShopFav(KN_Fav.params.pageNum2, itemsPerLoad);
        }
    });
});
