$(document).ready(function(){

	$(".auth-buttons").click(function(){
		$(this).next().slideToggle();
	});

	$(".main-menu-button").click(function(){
		$(this).next().slideToggle();
	});

});