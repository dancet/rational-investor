// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

$( document ).ready(function() {

	// hide the my portfolio performance widget
	$('.widget').each(function(i, obj) {
		// index 0 = my portfolio performance
		if (i == 0) {
			$(obj).replaceWith("<h3>" + getRandomQuote() + "</h3>");
		}
	});

	// rename the buy/sell holdings button
	$('.btn').each(function(i, obj) {
		// index 2 = Buy/Sell Holdings button
		if (i == 2) {
			$(obj).text('Buy Holding');
		}
	});	

	// hide the holdings table (portfolio weighting is available from the Graph > Holdings tab)
	$('#table').replaceWith("<h3>" + getRandomQuote() + "</h3>");

	// hide the numbers in the overall distribution (holdings + cash, assets, liabilities, net worth)
	$('#totals').replaceWith("<h3>" + getRandomQuote() + "</h3>");
});
