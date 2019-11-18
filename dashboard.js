// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

$( document ).ready(function() {

	// 0th = estimated earnings today
	// 2nd = live performance (daily)
	$('.widget:eq(0), .widget:eq(2)').replaceWith("<h3>" + getRandomQuote() + "</h3>");
});
