// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

// import utils (as this file matches *, it's accessible everywhere)
chrome.runtime.getURL('utils.js');

$( document ).ready(function() {

	// hide the Holdings and Net Portfolio amounts in the menu
	$('.account-overview').each(function(i, obj) {

		// find spans
		var $this = $(this);
		var $items = $this.find("span");

		$($items).each(function(i, obj) {

			// index 0 = holdings
			// index 4 = net portfolio
			if (i == 0 || i == 4) {
				$(obj).replaceWith( "<span style='color: #000000; background-color: #000000'>Don't worry about it :)</span>" );	
			}
		});
	});

	// hide the Comparisons menu item
	$('.nav-compare').hide();
});
