/*$(function () {
	$('button').click(function(){
	$('img').fadeIn(3000);
	});
});*/

$(document).ready(function(){ 
	$('button').click(function(){
		if($('button').hasClass('fadeOut')){
			$('img').fadeIn(2000);
			$('button').toggleClass();
		}
		else {
			$('img').fadeOut(2000);
			$('button').toggleClass();
		}
	});
});
