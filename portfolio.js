// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

$( document ).ready(function() {

	// hide the my portfolio performance widget
	$('.widget').each(function(i, obj) {

		// index 0 = my portfolio performance
		if (i == 0) {
			$(obj).replaceWith( "<h3>" + quotes[0] + "</h3>" );
		}
	});

	// rename the buy/sell holdings button
	$('.btn').each(function(i, obj) {

		if (i == 2) {
			$(obj).text('Buy Holding');
		}
	});	

	// hide the holdings table (portfolio weighting is available from the Graph > Holdings tab)
	$('#table').replaceWith( "<h3>Our favorite holding period is forever. - Warren Buffett</h3>" );

	// hide the numbers in the overall distribution (holdings + cash, assets, liabilities, net worth)
	$('#totals').replaceWith( "<h3>Our favorite holding period is forever. - Warren Buffett</h3>" );
});
