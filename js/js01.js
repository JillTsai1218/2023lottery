$(function() {  
    function backgo(){
        var all_h=$(window).scrollTop() + $(window).height();
        var obj_h=$('footer').outerHeight()+10;
        var foot_top= $('footer').offset().top;
        var bottom_ad_h=$('.flexd_bottom_ad').outerHeight();
    
        if ($(window).scrollTop()>50){
            $("#back").fadeIn(200);
            $("nav").css({
                'background-color':'rgba(0,0,0,0.7)',
                'backdrop-filter': 'blur(20px)'
            });
        }else{
            $("#back").fadeOut(200);
            $("nav").css({
                'background-color':'rgba(0,0,0,1)',
                'backdrop-filter': 'blur(20px)'
            });
        }
    
        if ($(window).width()>767){
            $(".flexd_bottom_ad").hide();
            if(all_h > foot_top) {
                $("#back").css({"bottom":obj_h-40});
            }else{
                $("#back").css({"bottom":"20px"});
            }
        }else{
            if ($(window).scrollTop()>50){
                $(".flexd_bottom_ad").show();
            }else{
                $(".flexd_bottom_ad").hide();
            }
            if(all_h > foot_top) {
                $("#back").css({"bottom":obj_h-40,"transition":"0.3s"});
                // $(".flexd_bottom_ad").css({"bottom":obj_h-10,"transition":"0.3s"});
    
            }else{      
                $("#back").css({"bottom":"20px","transition":"0.3s"});
               // $(".flexd_bottom_ad").css({"bottom":"0px","transition":"0.3s"});
            }
        }
    } 
    $(window).scroll(function(){backgo();}); 
/*gotop*/
    var $el = $(scrollableElement('html', 'body'));
    var speed = 550;
    var $iconTOP = $('#back-img1');
    $($iconTOP).click(function(event) {
        event.preventDefault();
        $el.stop().animate({ scrollTop: -50 }, speed);
    });
    // 透過scrollTop檢測可用元素的函數// http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links#update4
    function scrollableElement() {
        var i, len, el, $el, scrollable;
        for (i = 0, len = arguments.length; i < len; i++) {
            el = arguments[i];
            $el = $(el);
            if ($el.scrollTop() > 0) {

                return el;
            } else {
                $el.scrollTop(1);
                scrollable = $el.scrollTop() > 0;
                $el.scrollTop(0);
                if (scrollable) {
                    return el;
                }
            }
        }
        return [];
    }
 /*gotop ed*/

});
