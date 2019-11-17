// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

$( document ).ready(function() {
	
	// hide the Holdings and Net Portfolio amounts
	$('.account-overview').each(function(i, obj) {

		// find spans
		var $this = $(this);
		var $items = $this.find("span");

		$($items).each(function(i, obj) {

			// index 0 = holdings
			// index 4 = net portfolio
			if (i == 0 || i == 4) {
				$(obj).replaceWith( "<span style='color: #000000; background-color: #000000'>hidden ;)</span>" );	
			}
		});
	});

	// hide two widgets - iterate over each div with the class widget
	$('.widget').each(function(i, obj) {

		// index 0 = estimated earnings today
		// index 2 = live performance (daily)
		if (i == 0) {
			$(obj).replaceWith( "<h3>Our favorite holding period is forever. - Warren Buffett</h3>" );
		} else if (i == 2) {
			$(obj).replaceWith( "<h3>Someone’s sitting in the shade today because someone planted a tree a long time ago. - Warren Buffett</h3>" );
		}
	});	
});
