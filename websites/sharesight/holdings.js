// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

$( document ).ready(function() {

	// hide the portfolio value and performance items
	$('.value-body').replaceWith( "<span style='color: #000000; background-color: #000000'>Don't worry about it :)</span>" );

	// hide the sidebar panels - too much info in there...
	$('#sidebar_panels').hide();

	// hide the big old chart comparing it with the market
	// the 1st item in the array is the main chart (this is hacky, but it works)
	var $this = $(this);
	var $items = $this.find('[class^="page-wrapper"]');

	$($items).each(function(i, obj) {
		if (i == 1) {
			$(obj).replaceWith("<h3>" + getRandomQuote() + "</h3>");
		}
	});	

});
