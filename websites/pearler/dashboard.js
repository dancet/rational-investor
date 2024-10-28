// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

// import utils (as this file matches *, it's accessible everywhere)
chrome.runtime.getURL('utils.js');
chrome.runtime.getURL('arrive.min.js');

$( document ).ready(function() {

	
	$('#cio_dashboard_afterChart').replaceWith("<div>YEAH!</div>"); 	//("<h3>" + getRandomQuote() + "</h3>");




	// watch for element creation in the whole HTML document
	$(document).arrive("#cio_dashboard_afterChart", function(newElem) {
		newElem.replaceWith(getRandomQuote());
  	});


});
