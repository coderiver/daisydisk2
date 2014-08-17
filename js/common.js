head.ready(function() {
	var onIndexPage = window.location.href.indexOf("index.html") != -1;

	if (onIndexPage) {
		var $doc = $(document),
			$win = $(window),
			winW = $win.width(),
			winH = $win.height(),
			$body = $('body'),
			$panels = $('.item-slider'),
			$nav = $('.nav li');
			panelsLen = $panels.length,
			$header = $('.header'),
			linkScrollDuration = 1100,
			flag = true,
			$clientVideo = $('.client-video .jp-jplayer'),
			isHomepage = $body.hasClass('index');

		function initPanels(){
			$.each($panels, function(panelIdx){
				var $panel = $panels.eq(panelIdx);
					// panelStart = panelIdx == 0 ? '0%' : '100%',
				$panel.attr('data-'+(panelIdx-1)*100+'p', 'transform:translate(0,100%)') // -1 - in-start
				$panel.attr('data-'+(panelIdx-0.5)*100+'p', 'transform:translate(0,0%)') // -0.5 - in-end
				$panel.attr('data-'+(panelIdx)*100+'p', 'transform:translate(0,0%)') // 0 - out-start

				if (panelIdx + 1 < panelsLen){
					$panel.attr('data-'+(panelIdx+1)*100+'p', 'transform:translate(0,-100%)') // +1 - out-end
				}
			})
		}

		function scrollTo(blockToScroll) {
			var curPos = $(document).scrollTop(),
				heightScroll = $(window).height() * $(blockToScroll).index(),
				scrollTime = Math.abs(heightScroll-curPos)/7.73;
			s.animateTo(heightScroll);
		}

		initPanels();

		s = skrollr.init({
			smoothScrollingDuration:linkScrollDuration,
			render: function(data){
				var secMax = data.maxTop/winH,
					curSecIdx = Math.round(data.curTop / winH),
					a = ($nav.filter('.active').index()),
					b = ($nav.eq(curSecIdx).index());

		    	if(flag) {
					$nav.eq(curSecIdx).addClass('active').siblings().removeClass('active');
					flag = false;
				} else {
					if(a != b) flag = true;
				}
			}
		});

		$(window).resize(function() {
			$(window).scrollTop($panels.eq($nav.filter('.active').index()).offset().top);
		});

		$nav.click(function(){
			scrollTo(this);
		});
	} else {
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
		$('.fa-bars').click(function(event) {
			$(this).parent().find('.menu').slideToggle('fast');
		});

		//some stuff on textarea/input focus
		$('.focus').focusin(function(event) {
			$(this).prev().addClass('is-active');
		});
		$('.focus').focusout(function(event) {
			$(this).prev().removeClass('is-active');
		});

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
	}
});