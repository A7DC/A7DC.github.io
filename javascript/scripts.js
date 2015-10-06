$(document).ready(function(){
	$('.projects').slick();

	$('.project-godfather-barbers').on('click', function(){
		$('.the-godfather-barbers').addClass('active');
	});

	$('.project').on('click', function(){
		$('.project-studies').addClass('active');
	});


	// closes current overlay
	$('.project-close-btn').on('click', function(){
		$(this).parentsUntil('overlay').removeClass('active');
	});
});

