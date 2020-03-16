// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

// import utils (as this file matches *, it's accessible everywhere)
chrome.runtime.getURL('utils.js');

$( document ).ready(function() {

	// hide the portfolio value in the header
	$('[class^="HeaderBar__HeaderStats"]').replaceWith( "<span style='color: #000000; background-color: #000000; margin-left: auto; margin-right: 0'>Don't worry about it :)</span>" );

	// hide the rest of the page items. They have to be selected from inside the ContentContainer
	// class because it's reused on other pages
	$("section[class^='ContentContainer-sc'] div[data-cy='Filters']").hide();
	$("section[class^='ContentContainer-sc'] div[data-cy='ChartContainer']").hide();
	$("section[class^='ContentContainer-sc'] div[class^='StatsBar__StatsContainer-sc']").hide();
	$("section[class^='ContentContainer-sc'] div[data-cy='HoldingsContainer']").replaceWith("<h3>" + getRandomQuote() + "</h3>");

});

// for debugging: // .css("border", "3px solid red");
