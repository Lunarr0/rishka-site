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
    "You look amazing!",
    "I’m so lucky to be with you.",
    "I love how smart  you are.",
    "I love how kind you are.",
    "I’m so glad you’re in my life.",
    "You’re so fun to be with.",
    "You got this, I believe in you.",
    "I know I can always count on you.",
    "You’re so fun to be with.",
    "The way you do your things  is so inspiring!",
    "You’re so special to me.",
    "I see how hard you’ve been working on yourself ... you got this babe"

    
];






document.querySelector(".btn").addEventListener("click", changeQuote);


function changeQuote(){
    var randomQuotes = quoteList[Math.floor(Math.random() * quoteList.length)] ;
    document.querySelector(".random-quote").innerHTML = randomQuotes;
}

//console.log(randomQuotes);
