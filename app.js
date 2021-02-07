let btn = document.querySelector(".btn");
let quote = document.querySelector(".quote-text");
let author = document.querySelector(".author-name");
let quoteList = [
	{
		quote: "If you tell the truth you don’t have to remember anything.",
		author: "Mark Twain",
	},
	{
		quote: "Have enough courage to start and enough heart to finish.",
		author: "Jessica N. S. Yourko",
	},
	{
		quote: "Hate comes from intimidation, love comes from appreciation.",
		author: "Tyga",
	},
	{
		quote:
			"It Doesn’t Matter Where You Came From. All That Matters Is Where You Are Going.",
		author: "Brian Tracy",
	},
	{
		quote:
			"Think Big And Don’t Listen To People Who Tell You It Can’t Be Done. Life’s Too Short To Think Small.",
		author: "Tim Ferris",
	},
	{
		quote:
			"The Person Who Says It Cannot Be Done Should Not Interrupt The Person Who Is Doing It.",
		author: "Chinese Proverb",
	},
	{
		quote:
			"Don’t Be Too Timid And Squeamish About Your Actions. All Life Is An Experiment. The More Experiments You Make The Better.",
		author: "Ralph Waldo Emerson",
	},
	{
		quote:
			"Develop An Attitude Of Gratitude This Year, And Give Thanks For Everything That Happens To You, Knowing That Every Step Forward Is A Step Toward Achieving Something Bigger And Better Than Your Current Situation.",
		author: "Brian Tracy",
	},
	{
		quote:
			"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
		author: "Steve Jobs",
	},
	{
		quote: "In order to write about life first you must live it.",
		author: "Ernest Hemingway",
	},
	{
		quote:
			"The big lesson in life, baby, is never be scared of anyone or anything.",
		author: "Frank Sinatra",
	},
	{
		quote:
			"Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
		author: "John Kenneth Galbraith",
	},
	{
		quote: "God save me from my friends. I can protect myself from my enemies.",
		author: "Claude Louis Hector de Villars ",
	},
	{
		quote: "The price of anything is the amount of life you exchange for it.",
		author: "David Thoreau",
	},
	{
		quote:
			"Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
		author: "Charles Lindbergh",
	},
	{
		quote:
			"A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
		author: "Tyne Daly",
	},
];

btn.addEventListener("click", function () {
	for (obj of quoteList)
		rando = quoteList[Math.floor(Math.random() * quoteList.length)];
	author.innerHTML = `~${rando.author}`;
	quote.innerHTML = `"<em>${rando.quote}</em>"`;
});
