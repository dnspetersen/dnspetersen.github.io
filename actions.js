

$(function() {
	
	$('.menu').find('a').click(function(e) {
		$('.menu > li').removeClass('active');
		$(this).parent().addClass('active');
		
		$('.panels').find('ul').removeClass('open');
		$('article').removeClass('active');
		$('.work').removeClass('set');
		var id = $(this).attr('href');
		console.log(id);
		if (id !== '#about' ) {
			$(id).addClass('open');
		} else {
			$(id).addClass('active')
		}
		e.preventDefault();
	});
	
	$('#digital-menu').find('li').click(function() {
		$('.panels').find('ul').removeClass('open');
		$('#digital').addClass('active');
		var order = $(this).index() + 1;
		$('#work-'+order).addClass('set');
	})
	$('#identity-menu').find('li').click(function() {
		$('.panels').find('ul').removeClass('open');
		$('#identity').addClass('active');
		var order = $(this).index() + 1;
		$('#design-'+order).addClass('set');
	});
	
	$("#btn-digital").click(function() {
		$('.menu>li:first-child').addClass('active');
		$('#digital-menu').addClass('open');
	});
	
});