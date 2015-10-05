$(document).ready(function(){
	$('.projects').slick();

	$('.project-godfather-barbers').on('click', function(){
		$('.the-godfather-barbers').addClass('active');
	});


	// closes current overlay
	$('.project-close-btn').on('click', function(){
		$(this).parent().removeClass('active');
	});
});

