$(function() {  
$(window).scroll(function(){
   object_scroll();	
});
function object_scroll(){	
    if ($(window).scrollTop()>50){
        $('.fixed_bar').css({display:'flex'});
    }else {
        $('.fixed_bar').css({display:'none'});
    }
    
    if ($(window).scrollTop()>150){   
        $('.fixed_bar').css({top:0});
        $('#back').fadeIn(); 
        $('#back').css({ 'bottom': '25px' });
        // console.log("scrollTop:"+$(window).scrollTop());   
        // console.log("height:"+$(window).height()); 
        let window_hight=$(window).height();
        if ($(window).scrollTop()>(window_hight-110)){  
            //alert(window_hight-110);
            $('#back').css({ 'bottom': '60px' });
        }        
    } else {
        $('.fixed_bar').css({top:'-100%'});
        $('#back').fadeOut(); 
        $('#back').css({ 'bottom': '-100px' });
    }
    

}    
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
