const quotes = [
{
    name:'Stephen King',
    quote: 'Get busy living or get busy dying'
},

{
    name:'John F Kennedy',
    quote: 'Those who dare to fail miserably can achive greatly'
},

{
    name:'Abraham Lincoln',
    quote: 'I m a success today because I had friend who believed in me and I did not have the heart to let him down'
},

{
    name:'Leonardo Da Vinci',
    quote: 'The noblest pleasure is the joy of understanding'
},

{
    name:'Leo Tolstoy',
    quote: 'If you want to be happy, be.'
}

]


const quoteBtn = document.getElementById('quoteBtn');
const quoteAuthor = document.getElementById('quoteAuthor');
const quote = document.getElementById('quote');

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;

}