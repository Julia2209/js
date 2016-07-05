$(document).ready(function(){

	$(".auth-buttons").click(function(){
		$(this).next().slideToggle();
	});

	$(".main-menu-button").click(function(){
		$(this).next().slideToggle();
	});

	$(window).scroll(function(){

		var pxTop = $(this).scrollTop();

		if(pxTop > 170){
			$(".hidder-img").fadeIn(500);

			$(".main-menu").animate({
				marginTop: -50,
			},200);	

		}
		else{
			$(".hidder-img").fadeOut(500);

			var marginTopCss = $(".main-menu").css("margin-top");

			if(marginTopCss == "-50px"){	
				$(".main-menu").animate({
					marginTop: 0,

				},200);	
			};
		};
	});

});