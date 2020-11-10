var quotes = [
	'I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.― Marilyn Monroe', 
	'Be yourself; everyone else is already taken.― Oscar Wilde',
	'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.― Albert Einstein', 	
	'So many books, so little time.― Frank Zappa' 
]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}