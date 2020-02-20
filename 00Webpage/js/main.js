// main.js
$(function(){
    var timeout;
    $.ajax({
        dataType:"json",
        type:"post",
        url:"php/lookupBanner.php",
        success:function(data){
            console.log(data);
            for(var i=0; i<5; i++){
                var r = Math.floor(Math.random()*data.length);
                bData = data.splice(r, 1);
                console.log(bData[0]);
                var tag =
                '<div class="banner_item">'+
                    '<div class="b_item_text">'+
                        '<h2>'+bData[0].b_title+'</h2>'+
                        '<h3>'+bData[0].b_sub+'</h3>'+
                        '<a href="'+bData[0].b_link+'">자세히보기</a>'+
                    '</div>'+
                '</div>';
                $(".main_banner_area").append(tag);
                $(".banner_item").eq(i).css("background-image", "url("+bData[0].b_img+")");
                var pagerItem =
                    '<div class="pager_item">'+
                        '<p>'+bData[0].b_title+'</p>'+
                        '<h3>'+bData[0].b_sub+'</h3>'+
                    '</div>';
                $(".pager_area").append(pagerItem);
            }
            $(".pager_item").eq(0).addClass("on");
            $(".pager_item").click(function(){
                pagerClicked = true;
                clearTimeout(timeout);
                timeout = setTimeout(function(){
                    pagerClicked = false;
                }, 4500);
                var i = $(this).index();
                $(".banner_item").eq(bIndex).stop()
                .animate({opacity:0}, 1000, function(){ $(this).css("display", "none");});
                bIndex = i;
                $(".banner_item").eq(bIndex).stop()
                .css("display", "block").animate({opacity:1}, 1000);
                $(".pager_item").removeClass("on");
                $(".pager_item").eq(bIndex).addClass("on");
            });
        }
    })
    var itemPop = [];
    var itemRecommand = [];
    $.ajax({
        dataType:"json",
        type:"post",
        url:"php/lookupItem.php",
        success:function(data){
            console.log(data);
            for(var i=0; i<data.length; i++){
                if(data[i].item_pop == 1){
                    itemPop.push(data[i]);
                }
                if(data[i].item_recommand == 1){
                    itemRecommand.push(data[i]);
                }
            }
            console.log(itemPop);
            console.log(itemRecommand);

            for(var i=0; i<itemRecommand.length; i++){
                var item =
                '<div class="recommand_item">'+
                    '<div class="r_img_area">'+
                        '<img src="'+itemRecommand[i].item_img+'">'+
                        '<div class="icon_area">'+
                            '<div class="new">신규</div>'+
                            '<div class="discount">할인</div>'+
                            '<div class="event">이벤트</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="r_text_area">'+
                        '<h2>'+itemRecommand[i].item_name+'</h2>'+
                        '<p>'+itemRecommand[i].item_description+'</p>'+
                        '<p>'+itemRecommand[i].item_price+'원</p>'+
                    '</div>'+
                '</div>';

                $(".recommand_list").append(item);
                var icon = "";
                if(itemRecommand[i].item_event == 1){
                    icon += "event ";
                }
                if(itemRecommand[i].item_dc == 1){
                    icon += "discount ";
                }
                if(itemRecommand[i].item_new == 1){
                    icon += "new ";
                }
                $(".recommand_list .recommand_item").eq(i).addClass(icon);
            }

            for(var i=0; i<itemPop.length; i++){
                var item =
                '<div class="recommand_item">'+
                    '<div class="r_img_area">'+
                        '<img src="'+itemPop[i].item_img+'">'+
                        '<div class="icon_area">'+
                            '<div class="new">신규</div>'+
                            '<div class="discount">할인</div>'+
                            '<div class="event">이벤트</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="r_text_area">'+
                        '<h2>'+itemPop[i].item_name+'</h2>'+
                        '<p>'+itemPop[i].item_description+'</p>'+
                        '<p>'+itemPop[i].item_price+'원</p>'+
                    '</div>'+
                '</div>';

                $(".pop_list").append(item);
                var icon = "";
                if(itemPop[i].item_event == 1){
                    icon += "event ";
                }
                if(itemPop[i].item_dc == 1){
                    icon += "discount ";
                }
                if(itemPop[i].item_new == 1){
                    icon += "new ";
                }
                $(".pop_list .recommand_item").eq(i).addClass(icon);
            }
        }
    })

    var menu_open = false;
    $("#menu_btn").click(function(e){
        e.preventDefault();
        $(this).toggleClass("on");
        if(!menu_open){
            $(".menu").css("display", "block");
            $(".menu .bg").stop().animate({opacity:1}, 300);
            $(".menu .menu_content").stop().animate(
                {opacity:1, marginLeft:0}, 300);
        }
        else {
            $(".menu .bg").stop().animate({opacity:0}, 300);
            $(".menu .menu_content").stop().animate(
                {opacity:0, marginLeft:"-400px"}, 300, function(){
                    $(".menu").css("display", "");
                });
        }
        menu_open = !menu_open;
    });

    var bIndex = 0;
    var pagerClicked = false;

    var bannerInterval = setInterval(function(){
        if(pagerClicked) return; // pager가 클릭된 상태라면, 아래코드를 실행하지 않는다.
    $(".banner_item").eq(bIndex).stop().animate({opacity:0}, 1000, function(){ $(this).css("display", "none"); });
    bIndex++;
    if(bIndex >= $(".banner_item").length) bIndex = 0;
    $(".banner_item").eq(bIndex).stop().css("display", "block")
        .animate({opacity:1}, 1000, function(){
            $(".pager_item").removeClass("on");
            $(".pager_item").eq(bIndex).addClass("on");
        });
    }, 3000);



    $(window).scroll(function(){
        var t = $(window).scrollTop();
        // console.log(t);
        var sectionTop = $(".parallax_area").offset().top;
        var sectionHeight = $(".parallax_area").height();
        // var leftPos = 초기위치 - ((현재스크롤위치-대상구역의시작위치)/구역의높이*백분율환산)*증가/감소배율(흘러가는속도)
        var leftPos = 100 - ((t-sectionTop)/sectionHeight*100)*4;
        $(".parallax_area h1").css("left", leftPos+"%");

        var imgOpacity = (t-sectionTop)/sectionHeight;
        if(t >= sectionTop && t <= sectionTop + sectionHeight - 1000){
            $(".parallax_area img").css("display", "inline-block")
                .css("opacity", imgOpacity*4);
        }
        else {
            $(".parallax_area img").css("display", "")
                .css("opacity", "");
        }

    });

    $(".filter > a").click(function(e){
        e.preventDefault();
        var filter = $(this).attr("data-filter");
        console.log(filter);
        if(filter == "all"){
            $(".popular_area .recommand_item").css("display", "inline-block");
        }
        else {
            var sel= ".pop_list > ."+filter;
            $(".popular_area .recommand_item").css("display", "none");
            $(sel).css("display", "inline-block");
        }
        $(".filter > a").removeClass("active");
        $(this).addClass("active");
    })
})
