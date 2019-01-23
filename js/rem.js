(function (doc, win) {
    var docEl = doc.documentElement, //html
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', //事件名称
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 480) {
                docEl.style.fontSize = '100px';
            }
            else {
                docEl.style.fontSize = 100 * (clientWidth / 480) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    //doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);

(function ($) {
  $.fn.extend({
    myTab: function (options) {
     var confings = {
       tabNav: '',//tab导航名称
       tabTag: '',//tab导航标签
       tabCon: '',//tab内容名称
       conTag: '',//tab内容标签和其他的类名
       method: 'mouseover'//鼠标事件状态
     };//默认设置
     options = $.extend(confings, options);
     var that = $(this);
     var tagnav = $(confings.tabNav);
     var tabLi = tagnav.find(confings.tabTag);
     var tabcon = $(confings.tabCon);
     var tabUl = tabcon.find(confings.conTag);
     var timoutid = null;
     tabLi.each(function (ind) {
       $(this).bind(options.method, function () {
         var liNode = $(this);
         timoutid = setTimeout(function () { //鼠标不小心划过的延迟时间
           tabUl.hide();
           tabLi.removeClass("curs");
           tabUl.eq(ind).show();
           liNode.addClass("curs");
         }, 300);
       }).mouseout(function () {
         clearTimeout(timoutid);
       });
     })
     return this;
   }
 })
})(jQuery);
 
$(function () {
  $("#testtab8").myTab({
    tabNav: "#tabtag8",
    tabTag: "li",
    tabCon: "#tabcon8",
    conTag: ".tabcontent",
    method: "mouseover"
  });
 $(".tabNavs ul li:last-child").css("margin-right","0rem");
 $(".pic1:last-child").css("margin-right","0rem");
 $(".tabcontent li:last-child").css("border-bottom","none");
 $("#footer").css('display','none');

 $(".z_tc").click(function(){
		$('#footer').fadeIn();
		$(document.body).css('overflow-y','hidden');
		})
	$("#footer .quxiao").click(function(){
		$("#footer").fadeOut();
		$(".img1").hide();
		$(document.body).css('overflow','scroll');
		})
   $("#qq_id3").click(function(){
		$("#pengyou").animate({"margin-bottom":"8.1rem"},500).show();
		$("#qrcode").animate({"margin-bottom":"-8.1rem"},500).hide();
	});
	$("#qq_id2").click(function(){
		$("#qrcode").animate({"margin-bottom":"8.1rem"},500).show();
		$("#pengyou").animate({"margin-bottom":"-8.1rem"},500).hide();
	});
	$(".img2").click(function(){
		$(".img1").hide();
	})
	
$(".swul li:nth-child(3n)").css("margin-right","0rem");
$(".tplul li:last-child").css("margin-right","0rem");
})


