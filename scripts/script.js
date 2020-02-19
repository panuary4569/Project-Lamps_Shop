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
	$('.disProdSlider1').slick({
		infinite: true,
		dots: true,
		arrows: true,
		spped: 500,
		autoplay: true,
		slidesToShow: 2,
  		slidesToScroll: 2,
		autoplaySpeed: 10000,
		responsive: [
		{
			
			breakpoint: 1070,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	})


	var quanityPrice = {
		'Summer Dress': [21, 0], //productName : [price, quanity]
		'Summer Dress Red' : [21, 0],
		'Summer Dress Blue' : [21, 0],
		'Summer Dress Green' : [21, 0],
		'Winter Dress': [23, 0],
		'Winter Dress Red': [23, 0],
		'Winter Dress Blue': [23, 0],
		'Winter Dress Green': [23, 0],
		'Spring Dress': [29, 0],
		'Spring Dress Red': [29, 0],
		'Spring Dress Blue': [29, 0],
		'Spring Dress Green': [29, 0],
		'Autumn Dress': [27, 0],
		'Autumn Dress Red': [27, 0],
		'Autumn Dress Blue': [27, 0],
		'Autumn Dress Green': [27, 0]
	}
	var productInCart = {
		'#1' : [0],
	}
	// for (key in quanityPrice){
	// 	console.log(key, quanityPrice[key][0], quanityPrice[key][1]);
	// }
	$('.minusBtn').on('click', function(){
		var productName = $(this).siblings('i').text(), 
			//Узнаём имя товара
			minBtn = $(this),
			productPrice = $(this).closest('.productItem').find('.productPrice'), 
			//Находим блок с ценой товара
			colorPr = $(this).closest('.colTwo').find('.productColor');
			//Находим блок с цветом товара
		productName = productName + colorPr.text(); 
			// Склеиваем значения для поиска по обьекту quanityPrice

			for( key in quanityPrice) {
				// Перебираем массив (обьект)
				if( key === productName && quanityPrice[key][1] > 0) {
					// Как только имя товара совпало а его количество больше нуля тогда
					quanityPrice[key][1] = quanityPrice[key][1] - 1;
					// Уменьшаем его количество на единицу
					minBtn.siblings('.quanityNum').text(quanityPrice[key][1]);
					// Записываем количество в специальный блок
					productPrice.text('$' + (quanityPrice[key][0] * quanityPrice[key][1]));
					// Записываем в блок с ценой товара его значение умноженое на количество товара
					// console.log(key, quanityPrice[key]);
				}

			}
	});
	$('.plusBtn').on('click', function(){
		var productName = $(this).siblings('i').text(),
			plsBtn = $(this),
			productPrice = $(this).closest('.productItem').find('.productPrice'), 
			colorPr = $(this).closest('.colTwo').find('.productColor');
		productName = productName + colorPr.text();

		for( key in quanityPrice ) {
			if( key === productName && quanityPrice[key][1] < 100) {
				quanityPrice[key][1] = quanityPrice[key][1] + 1;
				plsBtn.siblings('.quanityNum').text(quanityPrice[key][1]);
				productPrice.text('$' + (quanityPrice[key][0] * quanityPrice[key][1]));
				// console.log(key, quanityPrice[key]);
			}
		}
	});
	

	// COLORBUTTONS

	$('.colorBtn').on('click', function(){
		var colorB = $(this),
			colorData = $(this).siblings('.productColor');

		function backImageColorChange (color) {
			var bbb = colorB.closest('.colTwo').find('.productData').text();
			bbb = 'url("./image/' + bbb + color + '.png")';
			colorB.closest('.productItem').children('.colOne').css({'background-image' : bbb});
			// console.log(bbb)
		}
		if(colorB.hasClass('-backGreen')){
			colorData.text(' Green');
			backImageColorChange(' Green');
		}else if(colorB.hasClass('-backBlue')){
			colorData.text(' Blue');
			backImageColorChange(' Blue')
		}else if(colorB.hasClass('-backRed')){
			colorData.text(' Red');
			backImageColorChange(' Red');
		};
	});

	//BUYBTN
	var cartNum = $('.cartCost').text();

	$('.buyBtn').on('click', function(){
		var buyBtn = $(this),
			buyNum = $(this).siblings('.quanity').find('.quanityNum'),
			buyDataName = $(this).siblings('.quanity').find('.productData').text(),
			buyDataColor = $(this).siblings('.colorChoose').find('.productColor').text(),
			buyPrice = $(this).siblings('.productPrice').text();
			cartNum = Number(cartNum) + Number(buyNum.text());
		if(buyNum.text() > 0){
			buyName = buyDataName + buyDataColor;

		setTimeout(function(){
			productInCart[buyPrice] = [buyName, buyPrice, buyNum.text()];
			// var boughtProduct = buyName + ' ' + buyPrice + ' ' + buyNum.text();
			$('.cartCost').addClass('-showContent');
			$('.cartCost').text(cartNum);
		}, 200);
		}
		console.log(productInCart);
	});


	$('.cartBtn').on('click', function(){
		var a;
		if( $('.cartCost').text() == 0 ){
			alert('No product (');
		}else{
			for(key in productInCart){
				a = '\n' + a + (key, productInCart[key][0], productInCart[key][1])
			}
			alert(a);
			console.log(a);
		}
	});

	$('.linkUp').on('click', function(){
		$('html, body').animate({scrollTop: 0}, 1500);
	})

	$(".collectForm").submit(function(e){
        e.preventDefault();
        $.ajax({
                    url: $(this).attr('action'),
                    data: $(this).serialize(),
                    method: $(this).attr('method'),
                    dataType: 'html',
                    success: function(data) {
                        alert("Запрос доставлен. Вернулся ответ: "+data);
                    },
                    error: function(xhr,status) {
                        alert("Ошибка: "+status);
                    }
                });
    });

})(jQuery);