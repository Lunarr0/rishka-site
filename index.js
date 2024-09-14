var quoteList = [
    "No! You're not fat, just stupid.",
    "Hahaha, not wibe, It's vibe mf",
    "You can't rush perfection Barbie chill, you got this!!",
    "SHUT UP! You're good enough",
    "Yes Barbie!!! You have muscles, shut up",
    "You are not fat mf!!!! Don't be dumb"
    
];






document.querySelector(".btn").addEventListener("click", changeQuote);


function changeQuote(){
    var randomQuotes = quoteList[Math.floor(Math.random() * quoteList.length)] ;
    document.querySelector(".random-quote").innerHTML = randomQuotes;
}

//console.log(randomQuotes);