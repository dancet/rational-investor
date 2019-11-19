// By Tom Dance <tom.dance@gmail.com>
// Twitter: @tomdance

const quotes = [
    "'Our favorite holding period is forever.' -- Warren Buffett",
    "'Someone’s sitting in the shade today because someone planted a tree a long time ago.' -- Warren Buffett",
    "'The investor's chief problem -- even his worst enemy -- is likely to be himself.' -- Benjamin Graham",
    "'If you have trouble imagining a 20% loss in the stock market, you shouldn't be in stocks.' -- John Bogle",
    "'There are plenty of ways to get ahead. The first is so basic I’m almost embarrassed to say it: spend less than you earn' -- Paul Clitheroe,",
    "'An investment in knowledge pays the best interest.' -- Benjamin Franklin",
    "'There are two times in a man’s life when he should not speculate: when he can’t afford it and when he can.' -- Mark Twain",
    "'Time is your friend, impulse is your enemy.' -- John Bogle",
    "'Only buy something that you’d be perfectly happy to hold if the market shut down for 10 years.' -- Warren Buffett",
    "'We don’t have to be smarter than the rest. We have to be more disciplined than the rest.' -- Warren Buffett",
    "'Calling someone who trades actively in the market an investor is like calling someone who repeatedly engages in one-night stands a romantic.' -- Warren Buffett",
    "'In the long run, it’s not just how much money you make that will determine your future prosperity. It’s how much of that money you put to work by saving it and investing it.' -- Peter Lynch",
    "'It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent.' -- Charlie Munger",
    "'Don't look for the needle in the haystack. Just buy the haystack!' -- John Bogle",
    "'The two greatest enemies of the equity fund investor are expenses and emotions.' -- John Bogle"
];

// return a random quote from the array
function getRandomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
}
