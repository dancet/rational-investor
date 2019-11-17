// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

/*
TODO

- Blank out select cells in the table, show  the weight though
- Hide the summary row at the bottom of the table
- Hide overall distribution at the bottom (net worth, etc)

*/

$( document ).ready(function() {

	// hide the my portfolio performance widget
	$('.widget').each(function(i, obj) {

		// index 0 = my portfolio performance
		if (i == 0) {
			$(obj).replaceWith( "<h3>Our favorite holding period is forever. - Warren Buffett</h3>" );
		}
	});

	// rename the buy/sell holdings button
	$('.btn').each(function(i, obj) {

		if (i == 2) {
			$(obj).text('Buy Holding');
		}
	});	

	// hide certain values in the holdings table




});
