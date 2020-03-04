/* Scroll Menu Items */
// Cache selectors
let lastId,
	topMenu = $('#header'),
	topMenuHeight = topMenu.outerHeight() + 15,
	menuItems = topMenu.find('.site-nav__link'),
	scrollItems = menuItems.map(function() {
		let item = $($(this).attr('href'));
		// console.log(item);
		if (item.length) { return item; }
	});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
	let href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;

	$('html, body').stop().animate({
		scrollTop: offsetTop
	}, 300);

	e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
	// Get container scroll position
	let fromTop = $(this).scrollTop() + topMenuHeight;

	// Get id of current scroll item
	let cur = scrollItems.map(function(){
		if ($(this).offset().top < fromTop)
		return this;
	});

	// Get the id of the current element
	cur = cur[cur.length-1];
	let id = cur && cur.length ? cur[0].id : "";

	if (lastId !== id) {
		lastId = id;

	console.log(menuItems);

	// Set/remove active class
	menuItems
		.parent().removeClass("site-nav__item--active")
		.end().filter("[href='#"+id+"']").parent().addClass("site-nav__item--active");
	}
});



/* Glide Sliders */
new Glide('#glide-exponents', {
	autoplay: 8500
}).mount();

new Glide('#glide-past', {
	autoplay: 5000
}).mount();



/* Countdown */
// Set the date we're counting down to
let countDownDate = new Date("Mar 24, 2020 10:00:00").getTime();

// Update the count down every 1 second
let x = setInterval( function() {
	// Get today's date and time
	let now = new Date().getTime();

	// Find the distance between now and the count down date
	let distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="countdown"
	// document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	// document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m ";
	document.getElementById("countdown").innerHTML = "Faltan " + days + "d " + hours + "h " + minutes + "m ";

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "LLEGÓ EL DÍA";
	}
}, 1000);



/* Video */
// jQuery is required to run this code
$( document ).ready(function() {
	scaleVideoContainer();

	initBannerVideoSize('.video-container .poster img');
	initBannerVideoSize('.video-container .filter');
	initBannerVideoSize('.video-container video');

	$(window).on('resize', function() {
		scaleVideoContainer();
		scaleBannerVideoSize('.video-container .poster img');
		scaleBannerVideoSize('.video-container .filter');
		scaleBannerVideoSize('.video-container video');
	});
});

function scaleVideoContainer() {
	// this was + 5 before, why??, and why it works with - 275 ??
	var height = $(window).height() - 275;
	var unitHeight = parseInt(height) + 'px';
	$('.homepage-hero-module').css('height', unitHeight);
}

function initBannerVideoSize(element) {
	$(element).each(function(){
		$(this).data('height', $(this).height());
		$(this).data('width', $(this).width());
	});

	scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element) {
	var windowWidth = $(window).width(),
	windowHeight = $(window).height() + 5,
	videoWidth,
	videoHeight;

	// console.log(windowHeight);

	$(element).each(function() {
		var videoAspectRatio = $(this).data('height')/$(this).data('width');

		$(this).width(windowWidth);

		// this was origially 1000
		if(windowWidth < 900) {
			videoHeight = windowHeight;
			videoWidth = videoHeight / videoAspectRatio;
			$(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

			$(this).width(videoWidth).height(videoHeight);
		}

		$('.homepage-hero-module .video-container video').addClass('fadeIn animated');
	});
}



/* Modals */
$('a#modal-participants').click(function(event) {
	$(this).modal({
		blockerClass: 'modal-blocker',
		modalClass: 'modal modal-participants',
		fadeDuration: 250,
		fadeDelay: 0.80,
		closeClass: 'icon-remove'
	});

	return false;
});

$('a#modal-press').click(function(event) {
	$(this).modal({
		blockerClass: 'modal-blocker',
		modalClass: 'modal modal-press',
		fadeDuration: 250,
		fadeDelay: 0.80,
		closeClass: 'icon-remove'
	});

	return false;
});

// $("#open-modal").modal({
// 	fadeDuration: 1000,
// 	fadeDelay: 0.50
// });




// Mobile Menu

$(".navigation__link").click(function() {
	$("#navi-toggle").prop("checked", false);
})