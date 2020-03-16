// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

$( document ).ready(function() {

	// 0th .widget class = my portfolio performance
	$('.widget:eq(0)').replaceWith("<h3>" + getRandomQuote() + "</h3>");

	// hide the holdings table (portfolio weighting is available from the Graph > Holdings tab)
	$('#table').replaceWith("<h3>" + getRandomQuote() + "</h3>");

	// hide the numbers in the overall distribution (holdings + cash, assets, liabilities, net worth)
	$('#totals').replaceWith("<h3>" + getRandomQuote() + "</h3>");
});
