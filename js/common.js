head.ready(function() {

	$('.out').fullpage({
		anchors:['main', 'reviews', 'homeuse', 'prouse', 'features', 'monitor'],
		scrollingSpeed: 100,
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Main', 'Reviews & Advantages', 'Perfect for home use', 'Professional use', 'Features', 'Monitor'],
		autoScrolling: true,
		css3: true,
		touchSensitivity: 5,
		animateAnchor: true,
		verticalCentered: false
	});

});