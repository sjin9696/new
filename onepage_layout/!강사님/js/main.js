// main.js
$(function(){
    var i = 0;
    var isAnimate = false;
    var titleAnim = false;
    $(window).on("mousewheel DOMMousewheel", function(e){
        if(titleAnim == false){
            return;
        }

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
        if(titleAnim == false){
            return;
        }

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
            if(i==1){
                $("#profile_area > h1").textillate("in");
            }
            if(i==2){
                $("#ability_area > h1").textillate("in");
            }
            if(i==3){
                $("#works_area > h1").textillate("in");
            }
            if(i==4){
                $("#contact_area > h1").textillate("in");
            }
        });
        $(".pager").removeClass("active");
        $(".pager").eq(i).addClass("active");
    }

    $("#title_area > h1").textillate({
        in:{
            effect:"rotateInDownLeft",
            shuffle:true,
            callback:function(){
                $("#title_area > p").textillate("in");
            }
        }
    });
    $("#title_area > p").textillate({
        autoStart:false,
        type:"word",
        in:{
            effect:"jackInTheBox",
            callback:function(){
                titleAnim = true;
                $(".pager_area").stop().animate({right:"20px"}, 1000);
                // $("#particle").css("opacity", 1);
                $("#particle").stop().animate({opacity:1}, 1000);
            }
        }
    });
    $("#profile_area > h1").textillate({
        autoStart:false,
        in:{
            effect:"bounceInDown",
            sync:true,
            callback:function(){
                $("#profile_area > p").textillate("in");
            }
        }
    })
    $("#profile_area > p").textillate({
        autoStart:false,
        in:{
            effect:"rollIn",
            shuffle:true,
            delay:10,
            callback:function(){
                $(".detail_left > p").eq(0).css("opacity", 1).addClass("animated bounceInDown").css("animation-delay", "0s");
                $(".detail_left > h1").css("opacity", 1).addClass("animated bounceInDown").css("animation-delay", "0.2s");
                $(".detail_left > img").css("opacity", 1).addClass("animated bounceInDown").css("animation-delay", "0.4s");
                $(".detail_left > p").eq(1).css("opacity", 1).addClass("animated bounceInDown").css("animation-delay", "0.6s");
                $(".detail_left > p").eq(2).css("opacity", 1).addClass("animated bounceInDown").css("animation-delay", "0.8s");
                $(".detail_left > p").eq(3).css("opacity", 1).addClass("animated bounceInDown").css("animation-delay", "1.0s");
                $(".detail_left > p").eq(4).css("opacity", 1).addClass("animated bounceInDown").css("animation-delay", "1.2s");
                setTimeout(function(){
                    $(".detail_right h1").textillate("in");
                },2000)
            }
        }
    })
    $(".detail_right > h1").textillate({
        autoStart:false,
        in:{
            effect:"bounceInDown",
            sync:true,
            callback:function(){
                $(".p_item").css("opacity", 1).addClass("animated jackInTheBox");
                for(var i=0; i<6; i++){
                    $(".p_item").eq(i).css("animation-delay", i*200+"ms");
                }
                setTimeout(function(){
                    $(".center_line").css("height", "75%");
                },2000)
            }
        }
    });

    var html = new ProgressBar.Circle("#html",{
        color:"#f00",
        strokeWidth:4,
        trailColor:"#ccc",
        trailWidth:4,
        text:{
            style:{
                fontSize:"36px",
                position:"absolute",
                left:"50%",
                top:"40%",
                transform:"translate(-50%, -50%)",
                color:"#fff",
                fontFamily:"'Bangers', cursive"
            }
        },
        step:function(state, graph){
            var v = Math.round(graph.value()*100)+"%";
            graph.setText(v);
        }
    });

    var css = new ProgressBar.Circle("#css",{
        color:"#f00",
        strokeWidth:4,
        trailColor:"#ccc",
        trailWidth:4,
        text:{
            style:{
                fontSize:"36px",
                position:"absolute",
                left:"50%",
                top:"40%",
                transform:"translate(-50%, -50%)",
                color:"#fff",
                fontFamily:"'Bangers', cursive"
            }
        },
        step:function(state, graph){
            var v = Math.round(graph.value()*100)+"%";
            graph.setText(v);
        }
    });

    var js = new ProgressBar.Circle("#js",{
        color:"#f00",
        strokeWidth:4,
        trailColor:"#ccc",
        trailWidth:4,
        text:{
            style:{
                fontSize:"36px",
                position:"absolute",
                left:"50%",
                top:"40%",
                transform:"translate(-50%, -50%)",
                color:"#fff",
                fontFamily:"'Bangers', cursive"
            }
        },
        step:function(state, graph){
            var v = Math.round(graph.value()*100)+"%";
            graph.setText(v);
        }
    });

    var jq = new ProgressBar.Circle("#jq",{
        color:"#f00",
        strokeWidth:4,
        trailColor:"#ccc",
        trailWidth:4,
        text:{
            style:{
                fontSize:"36px",
                position:"absolute",
                left:"50%",
                top:"40%",
                transform:"translate(-50%, -50%)",
                color:"#fff",
                fontFamily:"'Bangers', cursive"
            }
        },
        step:function(state, graph){
            var v = Math.round(graph.value()*100)+"%";
            graph.setText(v);
        }
    });

    var db = new ProgressBar.Circle("#db",{
        color:"#f00",
        strokeWidth:4,
        trailColor:"#ccc",
        trailWidth:4,
        text:{
            style:{
                fontSize:"36px",
                position:"absolute",
                left:"50%",
                top:"40%",
                transform:"translate(-50%, -50%)",
                color:"#fff",
                fontFamily:"'Bangers', cursive"
            }
        },
        step:function(state, graph){
            var v = Math.round(graph.value()*100)+"%";
            graph.setText(v);
        }
    });

    var php = new ProgressBar.Circle("#php",{
        color:"#f00",
        strokeWidth:4,
        trailColor:"#ccc",
        trailWidth:4,
        text:{
            style:{
                fontSize:"36px",
                position:"absolute",
                left:"50%",
                top:"40%",
                transform:"translate(-50%, -50%)",
                color:"#fff",
                fontFamily:"'Bangers', cursive"
            }
        },
        step:function(state, graph){
            var v = Math.round(graph.value()*100)+"%";
            graph.setText(v);
        }
    });

    $("#ability_area > h1").textillate({
        autoStart:false,
        in:{
            effect:"bounceInDown",
            sync:true,
            callback:function(){
                for(var i=0; i<6; i++){
                    $(".graph").eq(i).css("transition-delay", i*150+"ms");
                }
                $(".graph").css("opacity", 1);
                setTimeout(function(){ html.animate(1); }, 1000);
                setTimeout(function(){ css.animate(1); }, 1150);
                setTimeout(function(){ js.animate(1); }, 1300);
                setTimeout(function(){ jq.animate(1); }, 1450);
                setTimeout(function(){ db.animate(1); }, 1600);
                setTimeout(function(){ php.animate(1); }, 1750);
            }
        }
    });

    $("#works_area > h1").textillate({
        autoStart:false,
        in:{
            effect:"bounceInDown",
            sync:true,
            callback:function(){
                var len = $(".gallery_item").length;
                for(var i=0; i<len; i++){
                    $(".gallery_item").eq(i).css("transition-delay", 100*i+"ms");
                }
                $(".gallery_item").css("opacity", 1);
            }
        }
    })

    $("#contact_area > h1").textillate({
        autoStart:false,
        in:{
            effect:"bounceInDown",
            sync:true,
            callback:function(){
                $(".contact_item").css("opacity", 1)
                .addClass("animated jackInTheBox");
            }
        }
    })
})
