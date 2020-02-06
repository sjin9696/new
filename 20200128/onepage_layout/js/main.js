// main.js
$(function(){
    var i = 0;
    var isAnimate = false;
    $(window).on("mousewheel DOMMousewheel", function(e){
        if(isAnimate == true){
            return;
        }
        isAnimate = true;
        var dt = e.originalEvent.wheelDelta;
        if(dt < 0){
            i++;
            if(i > 4){
                i = 4;
                isAnimate = false;
                return;
            }
        }
        else {
            // 마우스 휠을 위로 돌림
            i--;
            if(i < 0) {
                i = 0;
                isAnimate = false;
                return;
            }
        }
        pageSlide();
    });

    $(window).keydown(function(e){
        if(isAnimate == true){
            return;
        }
        isAnimate = true;
        // var dt = e.originalEvent.wheelDelta;
        if(e.keyCode == 40){ // 아래쪽 화살표
            i++;
            if(i > 4){
                i = 4;
                isAnimate = false;
                return;
            }
            // $("section").stop().animate({top:i*-100+"vh"}, 1000);
        }
        else if(e.keyCode == 38){
            // 위쪽 화살표
            i--;
            if(i < 0) {
                i = 0;
                isAnimate = false;
                return;
            }
            // $("section").stop().animate({top:i*-100+"vh"}, 1000);
        }
        pageSlide();
    });

    $(".pager").click(function(){
        if(isAnimate == true){
            return;
        }
        isAnimate = true;
        i = $(this).index();
        pageSlide();
    });

    function pageSlide(){
        $("section").stop().animate({top:i*-100+"vh"}, 1000, function(){
            // section의 애니메이션이 끝나고 나서 실행
            isAnimate = false;
        });
        $(".pager").removeClass("active");
        $(".pager").eq(i).addClass("active");
    }
})
