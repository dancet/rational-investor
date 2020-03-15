// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

// import utils (as this file matches *, it's accessible everywhere)
chrome.runtime.getURL('utils.js');

$( document ).ready(function() {

	// hide the portfolio value in the header
	$('[class^="HeaderBar__HeaderStats"]').replaceWith( "<span style='color: #000000; background-color: #000000; margin-left: auto; margin-right: 0'>Don't worry about it :)</span>" );

	// hide the rest of the page. All of it.
	$('[class^="ContentContainer-sc"]').replaceWith("<h3>" + getRandomQuote() + "</h3>");

});

/* TODOs

- Update files and add selfwealth_ prefix (or consider adding to specific folders)
- Add more support for sharesight

*/
