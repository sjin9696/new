/*prograssbar*/
$(function(){
	function progressbar_custom(color)
	{

	}
	var html = new ProgressBar.Circle("#html",{
		color:"#afb",		//채워지는 색
		strokeWidth:4,		//채워지는 선 굵기
		trailColor:"#ccc",	//배경선 색
		trailWidth:4,			//배경 선 굵기
		duration:1000,		//애니메이션시간 0:빠름 5000:느림
		text:{
			//value:"asd", //값변경
			style:{
				position:"absolute",
				left:"50%",
				top:"50%",
				transform:"translate(-50%,-50%)",
				fontSize:"30px",
				fontFamily: 'Bangers',
				fontWeight:"bold",
				color:"#f4f4f4"
			}
		},
		step:function(state,graph){
			var percent = Math.round(graph.value()*100)+"%";
			graph.setText(percent);
		}
	})

	var css = new ProgressBar.Circle("#css",{
		color:"#abf",		//채워지는 색
		strokeWidth:4,		//채워지는 선 굵기
		trailColor:"#ccc",	//배경선 색
		trailWidth:4,			//배경 선 굵기
		duration:1000,		//애니메이션시간 0:빠름 5000:느림
		text:{
			//value:"asd", //값변경
			style:{
				position:"absolute",
				left:"50%",
				top:"50%",
				transform:"translate(-50%,-50%)",
				fontSize:"30px",
				fontFamily: 'Bangers',
				fontWeight:"bold",
				color:"#f4f4f4"
			}
		},
		step:function(state,graph){
			var percent = Math.round(graph.value()*100)+"%";
			graph.setText(percent);
		}
	})

	var js = new ProgressBar.Circle("#js",{
		color:"#fab",		//채워지는 색
		strokeWidth:4,		//채워지는 선 굵기
		trailColor:"#ccc",	//배경선 색
		trailWidth:4,			//배경 선 굵기
		duration:1000,		//애니메이션시간 0:빠름 5000:느림
		text:{
			//value:"asd", //값변경
			style:{
				position:"absolute",
				left:"50%",
				top:"50%",
				transform:"translate(-50%,-50%)",
				fontSize:"30px",
				fontFamily: 'Bangers',
				fontWeight:"bold",
				color:"#f4f4f4"
			}
		},
		step:function(state,graph){
			var percent = Math.round(graph.value()*100)+"%";
			graph.setText(percent);
		}
	})

	var jq = new ProgressBar.Circle("#jq",{
		color:"#baf",		//채워지는 색
		strokeWidth:4,		//채워지는 선 굵기
		trailColor:"#ccc",	//배경선 색
		trailWidth:4,			//배경 선 굵기
		duration:1000,		//애니메이션시간 0:빠름 5000:느림
		text:{
			//value:"asd", //값변경
			style:{
				position:"absolute",
				left:"50%",
				top:"50%",
				transform:"translate(-50%,-50%)",
				fontSize:"30px",
				fontFamily: 'Bangers',
				fontWeight:"bold",
				color:"#f4f4f4"
			}
		},
		step:function(state,graph){
			var percent = Math.round(graph.value()*100)+"%";
			graph.setText(percent);
		}
	})

	var db = new ProgressBar.Circle("#db",{
		color:"#faf",		//채워지는 색
		strokeWidth:4,		//채워지는 선 굵기
		trailColor:"#ccc",	//배경선 색
		trailWidth:4,			//배경 선 굵기
		duration:1000,		//애니메이션시간 0:빠름 5000:느림
		text:{
			//value:"asd", //값변경
			style:{
				position:"absolute",
				left:"50%",
				top:"50%",
				transform:"translate(-50%,-50%)",
				fontSize:"30px",
				fontFamily: 'Bangers',
				fontWeight:"bold",
				color:"#f4f4f4"
			}
		},
		step:function(state,graph){
			var percent = Math.round(graph.value()*100)+"%";
			graph.setText(percent);
		}
	})

	var php = new ProgressBar.Circle("#php",{
		color:"#baf",		//채워지는 색
		strokeWidth:4,		//채워지는 선 굵기
		trailColor:"#ccc",	//배경선 색
		trailWidth:4,			//배경 선 굵기
		duration:1000,		//애니메이션시간 0:빠름 5000:느림
		text:{
			//value:"asd", //값변경
			style:{
				position:"absolute",
				left:"50%",
				top:"50%",
				transform:"translate(-50%,-50%)",
				fontSize:"30px",
				fontFamily: 'Bangers',
				fontWeight:"bold",
				color:"#f4f4f4"
			}
		},
		step:function(state,graph){
			var percent = Math.round(graph.value()*100)+"%";
			graph.setText(percent);
		}
	})

	$("#ability_area > h1").textillate({
		autoStart:false,
		in:{
			effect:"bounceInDown",
			sync:true,
			callback:function(){
				for(var i = 0; i<6; i++){
					$(".graph").eq(i).css("transition-delay",i*150+"ms");
				}
				$(".graph").css("opacity",1);
				setTimeout(function(){html.animate(1);}	,1000);
				setTimeout(function(){css.animate(1);}	,1150);
				setTimeout(function(){js.animate(1);}	,1300);
				setTimeout(function(){jq.animate(1);}	,1450);
				setTimeout(function(){db.animate(1);}	,1600);
				setTimeout(function(){php.animate(1);}	,1750);
			} //callback:function(){ end
		} //in:{ end
	}) //$("#ability_area > h1").textillate({ end
})
