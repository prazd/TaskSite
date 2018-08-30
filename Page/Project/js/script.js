$(document).ready(function(){
	$('.popup-btn').on('click', function(event){
		event.preventDefault();
		$('.popup').show();
	});
	$('.popup-close').on('click', function(event){
		event.preventDefault();
		$('.popup').hide();
	});
	$('.icon').on('click', function(event){
		event.preventDefault();
		$('.top-nav').toggleClass('top-nav-active');
	});
});