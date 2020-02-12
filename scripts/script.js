;(function($){
	$('.leftMenuBar').on('click', function(){
		if( $('.leftMenuBar i').attr('class') === 'fas fa-times'){
			$('nav').removeClass('-blockContent');
			$('.leftMenuBar i').attr('class', 'fas fa-bars');
		}else{
			$('nav').addClass('-blockContent');
			$('.leftMenuBar i').attr('class', 'fas fa-times');
		}
	});

	$('.searchBtn').on('click', function(){

		if( $(window).width() > 700) {
			if( $('.searchBtn').hasClass('-readyToSearch') ) {
				console.log('123');
			}else {
				$(this).addClass('-readyToSearch');
				$('.linkRow').addClass('-hideContent');
				$('.inputForSearch').addClass('-visibleContent')
				.addClass('inputWidth');
				$('.cancelSearch').removeClass('-hideContent');
			}
		}else {
			console.log('456')
		}	
	});

	$('.cancelSearch').on('click', function(){
		$('.inputForSearch').removeClass('inputWidth').removeClass('-visibleContent');
		$(this).addClass('-hideContent');
		setTimeout(function() {
			$('.linkRow').removeClass('-hideContent')
		}, 500);
		$('.searchBtn').removeClass('-readyToSearch');
	});


	$('.slider').slick({
		infinite: true,
		dots: true,
		arrows: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 10000,
		responsive: [
		{
			breakpoint: 1000,
			settings: {
				arrows: false
			}
		}
		]
	});


	var quanity = {
		'Summer Dress': 0,
		'Summer Dress Red' : 0,
		'Summer Dress Blue' : 0,
		'Summer Dress Green' : 0,
		'Winter Dress': 0,
		'Winter Dress Red': 0,
		'Winter Dress Blue': 0,
		'Winter Dress Green': 0,
		'Spring Dress': 0,
		'Spring Dress Red': 0,
		'Spring Dress Blue': 0,
		'Spring Dress Green': 0,
		'Autumn Dress': 0,
		'Autumn Dress Red': 0,
		'Autumn Dress Blue': 0,
		'Autumn Dress Green': 0
	}
	console.log(quanity['Summer Dress']);
	$('.minusBtn').on('click', function(){
		var a = $(this).siblings('i').text();
		var b = $(this);
		if( (a === 'Winter Dress') && (quanity['Winter Dress'] > 0) ){
			quanity['Winter Dress'] = quanity['Winter Dress'] - 1;
			b.siblings('.quanityNum').text(quanity['Winter Dress']);
			console.log(quanity['Winter Dress']);
		}else if( (a === 'Spring Dress')  && (quanity['Spring Dress'] > 0) ){
			quanity['Spring Dress'] = quanity['Spring Dress'] - 1;
			b.siblings('.quanityNum').text(quanity['Spring Dress']); 
		}
		else if( (a === 'Summer Dress')  && (quanity['Summer Dress'] > 0) ){
			quanity['Summer Dress'] = quanity['Summer Dress'] - 1;
			b.siblings('.quanityNum').text(quanity['Summer Dress']); 
		}
		else if( (a === 'Autumn Dress')  && (quanity['Autumn Dress'] > 0) ){
			quanity['Autumn Dress'] = quanity['Autumn Dress'] - 1;
			b.siblings('.quanityNum').text(quanity['Autumn Dress']); 
		}
	});
	$('.plusBtn').on('click', function(){
		var a = $(this).siblings('i').text();
		var b = $(this);
		if( (a === 'Winter Dress') && (quanity['Winter Dress'] < 100)){
			quanity['Winter Dress'] = quanity['Winter Dress'] + 1;
			b.siblings('.quanityNum').text(quanity['Winter Dress']);
		}else if( (a === 'Spring Dress')  && (quanity['Spring Dress'] < 100) ){
			quanity['Spring Dress'] = quanity['Spring Dress'] + 1;
			b.siblings('.quanityNum').text(quanity['Spring Dress']); 
		}
		else if( (a === 'Summer Dress')  && (quanity['Summer Dress'] < 100) ){
			quanity['Summer Dress'] = quanity['Summer Dress'] + 1;
			b.siblings('.quanityNum').text(quanity['Summer Dress']); 
		}
		else if( (a === 'Autumn Dress')  && (quanity['Autumn Dress'] < 100) ){
			quanity['Autumn Dress'] = quanity['Autumn Dress'] + 1;
			b.siblings('.quanityNum').text(quanity['Autumn Dress']); 
		}
	});
	

	// COLORBUTTONS

	$('.colorBtn').on('click', function(){
		var colorB = $(this);
		function backImageColorChange (color) {
			var bbb = colorB.closest('.colTwo').find('.productData').text();
			// colorB.closest('.colTwo').find('.productData').text(bbb + color);
			bbb = 'url("./image/' + bbb + color + '.png")';
			colorB.closest('.productItem').children('.colOne').css({'background-image' : bbb});
			console.log(bbb)
		}
		if(colorB.hasClass('-backGreen')){
			backImageColorChange(' Green');
		}else if(colorB.hasClass('-backBlue')){
			backImageColorChange(' Blue')
		}else if(colorB.hasClass('-backRed')){
			backImageColorChange(' Red');
		};
	});

})(jQuery);