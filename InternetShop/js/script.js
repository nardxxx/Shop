//SLIDERS
if ($('.slider__body').length > 0) {
	$('.slider__body').slick({
		//autoplay: true,
		//infinite: false,
		dots: false,
		arrows: true,
		infinite: false,
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


	//<ANIMATE>
	const animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll)
		function animOnScroll(params) {
			animItems.forEach(animItem => {
				const animItemHeight = animItem.offsetHeight; //высота элемента с учётом вертикальных полей и границ в пикселях. 
				const animItemOffset = offset(animItem).top;
				const animItemStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animItemStart;// срабатывает после прохождения 1/4 элемента
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animItemStart;
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				} else {
					if (!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove('_active');
					}
				}
			});

		}
		setTimeout(() => { //Задаем delay для вызова функции
			animOnScroll();
		}, 300);
	}
	function offset(el) { // Вычисляет на сколько элемент ушел от верха страницы
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft, }
	}
	//</ANIMATE>

	//RATING
	let index = 1,
		count = 5;
	$('.simple-rating__items').each(function () {
		$(this).children('.simple-rating__item').attr('name', `simple-rating-${index}`);


		++index;
	})
	$('.simple-rating__item').each(function () {
		$(this).children('.simple-rating__item').attr('id', `simple-rating__${count}-${index}`);
		--count;
	})
	//RATING
})
