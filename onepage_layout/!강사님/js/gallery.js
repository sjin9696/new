// js/gallery.js
$(function(){
    var expand = 1;
    var imgWidth;

    $("#expand").click(function(){
        expand += 0.25;
        $(".gallery_detail > img").css("width", imgWidth*expand+"px")
            .css("margin-left", -(imgWidth*expand/2)+"px");

        $(".ratio").html(expand*100+"%");
    });

    $("#contract").click(function(){
        expand -= 0.25;
        $(".gallery_detail > img").css("width", imgWidth*expand+"px")
            .css("margin-left", -(imgWidth*expand/2)+"px");
        $(".ratio").html(expand*100+"%");
    });

    $(".gallery_detail > img").draggable({
        axis:"y"
    });
    $(".gallery_detail > img").on("load", function(){
        // img 태그의 데이터 로드가 완료되었을 때 실행할 코드
        // 이미지의 다운로드가 완료되었을 때
        var w = $(".gallery_detail > img").width();
        imgWidth = w;
        $(".gallery_detail > img").css("margin-left", -(w/2)+"px");
    })
    $(".gallery_item").click(function(){
        $(".gallery_detail").css("display", "block");
        var img = $(this).attr("data-raw");
        $(".gallery_detail > img").attr("src", img);

    })
    $("#gallery_close").click(function(){
        // .gallery_detail의 display속성을 기존 상태로 변경한다.
        $(".gallery_detail").css("display", "");
    })
})
