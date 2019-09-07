/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



// Array storing quotes in object with properties of quote, citation, source and year

var quotes = [

  {
    quote: '“Get busy living or get busy dying.”',
    citation: 'shmoop',
    source: 'Stephen King',
    year: 1994
  },
  {
    quote: '“The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.”',
    citation: 'AFB',
    source: 'Helen Keller',
    year: 1929
  },
  {
    quote: '“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."',
    citation: 'huffpost',
    source: 'Mark Twain',
    year: 2013
  },
  {
    quote: '“When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.”',
    citation: 'The Cancer Journals',
    source: 'Audre Lorde',
    year: 1997
  },
  {
    quote: '“Great minds discuss ideas; average minds discuss events; small minds discuss people.”',
    citation: 'brainyquote',
    source: 'Eleanor Roosevelt'
  }

];

// Function that generates a random number in order to generate random quotes

function getRandomQuote(){

  var rand;

  return rand = Math.floor(Math.random()*quotes.length);
  
}

// Function that replaces the HTML to put new quote

function printQuote(){
  var randQuote = getRandomQuote();
  var htmlQuote = '';

  htmlQuote += '<p class="quote">' + quotes[randQuote].quote +' </p>'
  htmlQuote += '<p class="source">' + quotes[randQuote].source;
  htmlQuote += '<span class="citation">' + quotes[randQuote].citation + '</span>';
  htmlQuote += ' <span class="year"> ' +  quotes[randQuote].year + '</span>';



  document.getElementById('quote-box').innerHTML = htmlQuote;
}


// Calling the printQuote function to change the quote when show another quote button is pressed

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

