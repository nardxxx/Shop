//SLIDERS
if ($('.slider__body').length > 0) {
	$('.slider__body').slick({
		//autoplay: true,
		//infinite: false,
		dots: false,
		arrows: true,
		accessibility: false,
		slidesToShow: 1,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}
//SLIDERS


$(function () {
	var mql = window.matchMedia('(max-width: 767px)')
	mediaqueryresponse(mql); // call listener function explicitly at run time
	mql.addListener(mediaqueryresponse); // attach listener function to listen in on state changes
	function mediaqueryresponse(mql) {
		if (mql.matches) {
			//ACARDEON
			$('.footer__title').click(function () {
				if ($('.footer__row').hasClass('one')) {
					$('.footer__title').not($(this)).removeClass('active');
					$('.footer__title').not($(this)).next().slideUp(300);
				}
				$(this).toggleClass('active').next().slideToggle(300);
			});
			//ACARDEON
		}
	}

	//MENU BURGER
	$('.wrapper').addClass('loaded');
	$('.icon-menu').click(function (event) {
		$(this).toggleClass('active');
		$('.menu-header__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
	//MENU BURGER

	//INPUT FOCUS
	$(".form__input input").on('focus', function () {
		$(this).attr("rel", $(this).attr("placeholder"));
		$(this).removeAttr("placeholder");
	});

	$(".form__input input").on('blur', function () {
		$(this).attr("placeholder", $(this).attr("rel"));
		$(this).removeAttr("rel");
	});
	//INPUT FOCUS
})

