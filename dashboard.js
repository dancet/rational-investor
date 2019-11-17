// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

$( document ).ready(function() {
	
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
