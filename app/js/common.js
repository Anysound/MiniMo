$(function() {
	$('div').slice(0, 4).show();
	$('#loadMore').on('click', function(e) {
		e.preventDefault();
		$('.lazyload').slice(0, 4).fadeIn(2000);
		$('.lazyload').css('display', 'flex');
		$('#loadMore').fadeOut();
	})
});
$(function() {
	$('div').slice(0, 4).show();
	$('.header__text_comment').on('click', function(e) {
		e.preventDefault();
		$('#commentField').slice(0, 4).slideToggle();
		$('#comment__send').slice(0, 2).slideToggle();	
		$('#commentField').css('display', 'flex');
		$('#comment__send').css('display', 'flex');
		$('.share').slideToggle();
	})
});

$(window).scroll(function() {
	if ($(this).scrollTop() > $(this).height()) {
		$('.to-top').addClass('active');
	} else {
		$('.to-top').removeClass('active');
	}
})

$('.to-top').click(function() {
	$('html, body').stop().animate({
		scrollTop: 0
	}, 'slow', 'swing');
})

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow')
})

 $(document).ready(function() {
	 $('.menu-link').click(function() {
		 $('.menu-link').toggleClass('menu-link_active');
	 });
	 
	 $('.menu-link').click(function() {
		 $('.menu').toggleClass('menu_active');
	 });
	 $(window).resize(function() {
		 if ($(window).width() > 500) {
			 $('.menu').removeAttr('style');
		 }
	 })
 })