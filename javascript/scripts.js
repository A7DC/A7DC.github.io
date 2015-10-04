$(document).ready(function(){
	$('.projects').slick();

	$('.project-preview').on('click', function(){
		$(this).next().addClass('active');
	});

	$('.project-close-btn').on('click', function(){
		$(this).parent().removeClass('active');
	});
});

