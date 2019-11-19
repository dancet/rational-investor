// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

$( document ).ready(function() {

	// 0th = estimated earnings today
	// 2nd = live performance (daily)
	// note: the order matters here, for some reason. If I swap them, the 3rd widget class element isn't replaced. No idea why
	$('.widget:eq(2)').replaceWith("<h3>" + getRandomQuote() + "</h3>");
	$('.widget:eq(0)').replaceWith("<h3>" + getRandomQuote() + "</h3>");
});
