var quoteList = [
   "No! You're not fat, just stupid.",
    "Hahaha, not wibe, It's vibe mf",
    "You can't rush perfection Barbie chill, you got this!!",
    "SHUT UP! You're good enough",
    "Yes Barbie!!! You have muscles, shut up",
    "You are not fat mf!!!! Don't be dumb",
    "Gyonyoru Vagy",
    "csinos vagy",
    "Megbabonáz a szemed.",
    "Szia, cica! Van gazdád?",
    "Nagyon szeretlek",
    "Meg tudod csinálni!",
    "Gyerünk bazdmeg.",
    "Mit veszíthetsz?",
    "Ne add fel!",
    "Higgy magadban!",
    "Ez nagyon szeretelek",
    "Gyonyoru Vagy, meg nagyon szeretlek",
    "Ez az! let's go!",
    
];






document.querySelector(".btn").addEventListener("click", changeQuote);


function changeQuote(){
    var randomQuotes = quoteList[Math.floor(Math.random() * quoteList.length)] ;
    document.querySelector(".random-quote").innerHTML = randomQuotes;
}

//console.log(randomQuotes);
