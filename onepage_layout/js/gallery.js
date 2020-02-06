$(function() {
		var expand = 1;
		var imgWidth;

		$(".gallery_detail > img").on("load",function(){
			var w = $(".gallery_detail > img").width();
			console.log(w);
			w *= expand;
			$(".gallery_detail > img").css("margin-left", -(w/2)+"px");
		})

		$("#expand").click(function() {
			expand += 0.25;
			console.log("#expand");
			$(".gallery_detail > img").css("width", imgWidth*expand+"px").css("margin-left", +(imgWidth*expand/2)+"px");
			$(".ratio").html(expand * 100 + "100%");
		})
		$("#contract").click(function() {
			expand -= 0.25;
			console.log("#contract");
			$(".gallery_detail > img").css("width", imgWidth*expand+"px").css("margin-left", -(imgWidth*expand/2)+"px")
			$(".ratio").html(expand * 100 + "100%");

		})

		//
		$(".gallery_item").click(function() {
			$(".gallery_detail").css("display", "block");
			var img = $(this).attr("data-raw");
			$(".gallery_detail > img").attr("src", img);

		}) //(".gallery_item").click(function(){ end
		//
		$("#gallery_close").click(function() {
			//기존상태로 변경한다.
			$(".gallery_detail").css("display", "");
		}) //(".gallery_close").click(function(){ end
	})
