// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

$( document ).ready(function() {

	// hide two widgets - iterate over each div with the class widget
	$('.widget').each(function(i, obj) {

		// index 0 = estimated earnings today
		// index 2 = live performance (daily)
		if (i == 0 || i == 2) {
			$(obj).replaceWith("<h3>" + getRandomQuote() + "</h3>");
		}
	});	
});
