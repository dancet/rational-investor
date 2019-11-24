# Rational Investor
## Background
Rational investor is a Google Chrome extension for keeping your head clear while investing in shares through Australian stock brokers. 

Most days, share markets will gain or lose value. It can be intimitating trying to build up your portfolio over time with a sensible buy and hold strategy while seeing your holdings have dropped invalue hundreds of thousands of dollars in a day. 

This extensions hides parts of common Aussie stock broking websites that may influence negative investor behaviour in bad times. Things like daily share price movement, comparisons to indexes and your total portfolio amount are all hidden on purpose. 

It also hides the details of your holdings and the sell button, so you can't sell anything while this extension is running. 

Portfolio allocation by percentage is still accessible (where possible) to help with rebalancing when buying more shares. 

## Supported stock brokers
Currently Rational Investor supports the following brokers:

* [https://selfwealth.com.au](https://selfwealth.com.au)

## Installation

1. Download rational-investor.crx
2. Open your Chrome extension page by browsing to [chrome://extensions/](chrome://extensions/)
3. Drag the rational-investor.crx file into the extensions page
4. Read and accept any notices Chrome displays

## How to use this extension

1. Log in to your supported broker of choice
2. Enjoy clear headed investing

That's it, the extension does everything for you. No confguration needed. 

## FAQ

**Q:** I feel uneasy about running this extension, can you explain how it works?

**A:** Chrome Extensions allow "content scripts", which can access the browsers rendered HTML. Rational Investor finds the distracting elements on the page and hides or blanks them out, often replacing them with pithy quotes from famous investors. The extension does NOT access any of your personal information in any way. 

If you are still concerned, you are free to inspect the code and can even run it as an unpacked Chrome Extension for extra caution. 


**Q:** I need to sell some of my shares, or I want to see my portfolio total, how can I do that?

**A:** First thing, make 100% sure this is a smart idea, don't panic because the market has dropped. You are a long term investor, aren't you?

If you're certain you need to sell or want to view your portfolio, here are a few options. 

1. Log in via Firefox, Safari or Edge
2. Use your brokers app on your phone
3. Temporarily disable the Rational Investor extension in Chrome (remember to re-enable it later)


**Q:** I don't see my broker in the list of supported brokers, can you add it?

**A:** I am trying to add more brokers, but it will take time. If you are handy with JavaScript, please feel free to submit a PR with support for your favourite broker. 


**Q:** My question isn't answered, where can I find an answer?

**A:** Open an issue on GitHub or contact me on [Twitter @tomdance](https://twitter.com/tomdance)

## Todo

* Add support for CommSec
* Add support for CMC Markets
* Consider finding someone to add support for major broker platforms in the US and/or UK
