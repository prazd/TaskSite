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



$(window).scroll(function(){
	parallax();
})

function parallax() {

	var wScroll = $(window).scrollTop();

	$('.parallax--bg').css('background-position', 'center '+(wScroll*0.5)+'px')

}