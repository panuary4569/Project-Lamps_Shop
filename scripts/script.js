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
	})
	$('.cancelSearch').on('click', function(){
		$('.inputForSearch').removeClass('inputWidth').removeClass('-visibleContent');
		$(this).addClass('-hideContent');
		setTimeout(function() {
			$('.linkRow').removeClass('-hideContent')
		}, 500);
		$('.searchBtn').removeClass('-readyToSearch');
	});
})(jQuery);