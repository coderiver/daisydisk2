head.ready(function() {

	var onIndexPage = window.location.href.indexOf("index.html") != -1;
	var onInnerPage = window.location.href.indexOf("index.html") != 1;

	$(document.documentElement).keyup(function (event) {
	        if (event.keyCode == 37) {
	            $('.cycle-slideshow').cycle('prev');
	        } else if (event.keyCode == 39) {
	            $('.cycle-slideshow').cycle('next')
	    }
	});

	if (onIndexPage) {

		$(".scrollThis").click(function (){
			$('html, body').animate({scrollTop: $(".reviews").offset().top}, 700);
		});

		//menu mobile
		$('.fa.fa-bars').click(function(event) {
			$(this).parent().find('.menu').slideToggle();
		});

		//fixed menu
		function menuChange(event){
	    var scrollPos = $(document).scrollTop();

	    if (scrollPos > 0) {
	    	$('.header').addClass('fixed');
	        $('.menu__item.last').hide();
	        $('.menu').find('button').show();

	    }
	    else {
	        $('.header').removeClass('fixed');
	        $('.menu__item.last').show();
	        $('.menu').find('button').hide();
	    }

	}
		$(document).on("scroll", menuChange);
		menuChange();

	} else if (onInnerPage) {
		$("body", "html").css('height', 'auto');
		$("header").css('position', 'static');

		//FAQ
		$('.ask__list-item').click(function(event) {
			$(this).toggleClass('is-active');
			$(this).find('.ask__answered').slideToggle('200');
		});

		//textarea autosize
		$(document).on('input.textarea','.autoExpand', function(){
			var minRows = this.getAttribute('data-min-rows')|0,
			rows = this.value.split("\n").length;

			this.rows = rows < minRows ? minRows : rows;
		});

		//menu mobile
		$('.fa.fa-bars').click(function(event) {
			$(this).parent().find('.menu').slideToggle();
		});

		//some stuff on textarea/input focus
		$('.focus').focusin(function(event) {
			$(this).prev().addClass('is-active');
		});
		$('.focus').focusout(function(event) {
			$(this).prev().removeClass('is-active');
		});

		//double hover on link with same href
		var doubleHover = function(selector, hoverClass) {
		$(document).on('mouseover mouseout', selector, function(e) {
			$(selector)
				.filter('[href="' + $(this).attr('href') + '"]')
				.toggleClass(hoverClass, e.type == 'mouseover');
			});
		}

		doubleHover('a', 'hover');

		//store page select
		function showCountryList(elem) {
			elem.find('.country').toggleClass('is-visible');
			elem.toggleClass('is-active');
		}

		$('#worldMap').click(function() {
			showCountryList($(this));
			return false;
		});

		$('#countryList').click(function() {
			showCountryList($(this));
			return false;
		});

		$('#worldMap').find('.country a').click(function() {
			var countryChange = $(this).data('name');
			var currencyChange = $(this).data('currency');
			var priceChange = $(this).data('price');
			var countryFlag = $(this).attr('class');
			var chosen = $('#worldMap').children('.chosen');

			$(chosen).removeAttr('class').addClass('chosen ' + countryFlag).text(countryChange);
			$('.product__info').find('.currency').text(currencyChange);
			$('.product__info').find('.price').text(priceChange);
		});

		$('#countryList').find('.country a').click(function(event) {
			var countryChange = $(this).data('name');
			var chosen = $('#countryList').children('.chosen');

			$(chosen).text(countryChange);
		});

		//hide select on click outside of it
		$('html').click(function() {
			$('.select').removeClass('is-active');
			if($('.country').is(':visible')) {
				$('.country').hide();
			}
		});

		$('.select').click(function(event){
			if($(this).hasClass('is-active')) {
				$(this).children('.country').show();
			} else {
				$(this).children('.country').hide();
			}
		});
	}


});