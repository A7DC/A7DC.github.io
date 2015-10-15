$(document).ready(function(){
	$('.projects').slick();

	$('.project-godfather-barbers').on('click', function(){
		$('.the-godfather-barbers').addClass('active');
		$('.page-content').addClass('active');
		$('.main-content').addClass('no-scroll');
	});

	$('.project').on('click', function(){
		$('.project-studies').addClass('active');
	});


	// closes current overlay
	$('.project-close-btn').on('click', function(){
		$(this).parentsUntil('overlay').removeClass('active');
		$('.page-content').removeClass('active');
		$('.main-content').removeClass('no-scroll');
	});
});

