// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

$( document ).ready(function() {

	// hide the my portfolio performance widget
	$('.widget').each(function(i, obj) {

		// index 0 = my portfolio performance
		if (i == 0) {
			$(obj).replaceWith( "<h3>Our favorite holding period is forever. - Warren Buffett</h3>" );
		}
	});	
});
