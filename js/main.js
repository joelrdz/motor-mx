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





// Glide slider
new Glide('#glide-exponents').mount();




// Countdown

// Set the date we're counting down to
let countDownDate = new Date("Mar 24, 2020 15:37:25").getTime();

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
	document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m ";

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "LLEGÓ EL DÍA";
	}
}, 1000);