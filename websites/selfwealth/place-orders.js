// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

$( document ).ready(function() {

	// rename the title
	$('.main-title').text('Place Orders - Buy');

	// hide the sell button
	$('label[for="orderTypeSell"]').hide();
});
