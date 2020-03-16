// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

$( document ).ready(function() {

	// hide the Holdings and Net Portfolio titles in the menu
	$('.account-overview').each(function(i, obj) {
		// find dd's
		var $this = $(this);
		var $items = $this.find("dd");

		$($items).each(function(i, obj) {
			// index 0 = holdings
			// index 4 = net portfolio
			if (i == 0 || i == 4) {
				// replace the title with an empty string
				$(obj).prop('title', '');
			}
		});
	});
});
