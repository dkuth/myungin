$(function(){
	var gnbA = $(".g1>li");
	var sub = $(".g1>li>ul");

	var headerMin = $(".gnb").height();
	var headerMax = sub.innerHeight() + headerMin;	

	var state = false; //참-거짓설정변수
	var speed = 300;
	gnbA.mouseenter(function(){
		if(!state){ 
			$(".gnb").stop().animate({height:headerMax},speed,function(){
				sub.stop().fadeIn(speed);
			});
			state = true;
		}
		
		$(this).find(sub).addClass("on"); //sub는 변수이므로 ""생략
	});

	gnbA.mouseleave(function(){
		$(this).find(sub).removeClass("on");
	});   
	
	
	$(".gnb").mouseleave(function(){
		sub.stop().fadeOut(speed,function(){
			$(".gnb").stop().animate({height:headerMin},speed);            
		});
		state = false;
	});
	
	$(".g1>li>a").focus(function(){
		$(".gnb").stop().animate({height:headerMax},speed);
		sub.stop().fadeIn(speed);
	}).blur(function(){
		$(".gnb").stop().animate({height:headerMin},speed);
		sub.stop().fadeOut(speed);		  
	});	
});