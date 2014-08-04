head.ready(function() {

	$('.out').fullpage({
		verticalCentered: false,
		resize : true,
		anchors:['main', 'reviews', 'homeuse', 'prouse'],
		scrollingSpeed: 300,
		easing: 'easeInQuart',
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Main', 'Reviews & Advantages', 'Perfect for home use', 'Professional use'],
		autoScrolling: true,
		css3: true,
		normalScrollElements: '#element1, .element2',
		normalScrollElementTouchThreshold: 5,
		keyboardScrolling: true,
		touchSensitivity: 15,
		continuousVertical: false,
		animateAnchor: true,
		sectionSelector: '.section',
		slideSelector: '.slide',

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction){}
	});

});