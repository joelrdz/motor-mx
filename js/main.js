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