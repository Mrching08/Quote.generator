const quotes = [{
    quote: `"Love that person from your heart, Not only for your mood and needs."`,
    writer: `-Ritchie John`
}, {
    quote: `"Why would you waste you're time with someone doesn't even care about your feelings?"`,
    writer: `-Ching Ching`
}, {
    quote: `"don't force a fish to climb a tree"`,
    writer: `-Prince Ea`
}, {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall"`,
    writer: `-Nelson Mandela`
}, {
    quote: `"The way to get started is to quit talking and begin doing."`,
    writer: `-Walt Disney`
}, {
    quote: `"If life were predictable it would cease to be life, and be without flavor."`,
    writer: `-Eleanor Roosevelt`
}, {
    quote: `"If you set your goals ridiculously high and it is a failure, you will fail above everyone else success"`,
    writer: `-James Cameron`
}, {
    quote: `"Life is what happens when you are busy making other plans."`,
    writer: `-John Lennon`
}, {
    quote: `"You save other people from being sad, but no one saves you"`,
    writer: `-Ritchie John`
}, {
    quote: `"ang panahon mo paling rasad na sa ato sa sakto sad na panahun"`,
    writer: `-Ritchie Gumera`
} , {
    quote: `"The purpose of our lives is to be happy"`,
    writer: `-Dalai Lama`
}, {
    quote: `"pasagdi lang ng mga nanaot og mga nay bati nga ge istorya"`,
    writer: `-John john`
}, {
    quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    writer: `-Mother Teresa`
}, {
    quote: `"Life is what happens when you're busy making other plans."`,
    writer: `-John Lennon`
}, {
    quote: `"You only live once, but if you do it right, once is enough."`,
    writer: `-Mae West`
}, {
    quote: `"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
    writer: `-Thomas A. Edison`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    writer: `-Albert Einstein`
}, {
    quote: `"Money and success don't change people, they merely amplify what is already there."`,
    writer: `-Will Smith`
}, {
    quote: `"Not how long, but how well you have lived is the main thing."`,
    writer: `-Seneca`
}, {
    quote: `"If life were predictable it would cease to be life, and be without flavor."`,
    writer: `-Eleanor Roosevelt`
}, {
    quote: `"The whole secret of a successful life is to find out what is one's destiny to do, and then do it."`,
    writer: `-Henry Ford`
}, {
    quote: `"The big lesson in life, baby, is never be scared of anyone or anything."`,
    writer: `-Frank Sinatra`
}, {
    quote: `"Curiosity about life in all of its aspects, I think, is still the secret of great creative people."`,
    writer: `-Leo Burnett`
}, {
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    writer: `-Soren Kierkegaard`
}, {
    quote: `"The way I see it, if you want the rainbow, you gotta put up with the rain"`,
    writer: `-Dolly Parton`
}, {
    quote: `"Do all the good you can, for all the people you can, in all the ways you can, as long as you can"`,
    writer: `-Hillary Clinton`
}, {
    quote: `"Don't settle for what life gives you; make life better and build something."`,
    writer: `-Ashton Kutcher`
}, {
    quote: `"Life imposes things on you that you can't control, but you still have the choice of how you're going to live through this."`,
    writer: `-Celine Dion`
}, {
    quote: `"Life is like a coin. You can spend it any way you wish, but you only spend it once"`,
    writer: `-Lillian Dickson`
}, {
    quote: `"The best portion of a good man's life is his little nameless, unencumbered acts of kindness and of love."`,
    writer: `-Wordsworth`
}, {
    quote: `"Keep calm and carry on."`,
    writer: `-Winston Churchill`
}, {
    quote: `"Keep smiling, because life is a beautiful thing and there's so much to smile about."`,
    writer: `-Marilyn Monroe`
}, {
    quote: `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."`,
    writer: `-Dr. Seuss`
}, {
    quote: `"The greatest pleasure of life is love."`,
    writer: `-Euripides`
},] 

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})