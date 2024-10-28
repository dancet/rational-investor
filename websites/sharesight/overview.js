// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

// import utils (as this file matches *, it's accessible everywhere)
chrome.runtime.getURL('utils.js');

$( document ).ready(function() {

	alert("yeah!!!");

	// hide the portfolio value in the header
	$('[class^="Statsstyled__StatsWrapper"]').replaceWith( "<span style='color: #000000; background-color: #000000; margin-left: auto; margin-right: 0'>Don't worry about it :)</span>" );

	// hide the rest of the page items. They have to be selected from inside the ContentContainer
	// class because it's reused on other pages
	$("section[class^='Containerstyled__ContentContainer'] div[data-cy='Filters']").hide();
	$("section[class^='Containerstyled__ContentContainer'] div[data-cy='ChartContainer']").hide();
	$("section[class^='Containerstyled__ContentContainer'] div[class^='StatsBarstyled__StatsContainer']").hide();
	$("section[class^='Containerstyled__ContentContainer'] div[data-cy='HoldingsContainer']").replaceWith("<h3>" + getRandomQuote() + "</h3>");

});

// for debugging: // .css("border", "3px solid red");
