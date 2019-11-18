// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

const quotes = [
    "'Our favorite holding period is forever.' - Warren Buffett",
    "'Someone’s sitting in the shade today because someone planted a tree a long time ago.' - Warren Buffett"
];

// return a random quote from the array
function getRandomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
}
