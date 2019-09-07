/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

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

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(){

  var rand;

  return rand = Math.floor(Math.random()*quotes.length);
  
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(){
  var randQuote = getRandomQuote();
  var htmlQuote = '';

  htmlQuote += '<p class="quote">' + quotes[randQuote].quote +' </p>'
  htmlQuote += '<p class="source">' + quotes[randQuote].source;
  htmlQuote += '<span class="citation">' + quotes[randQuote].citation + '</span>';
  htmlQuote += ' <span class="year"> ' +  quotes[randQuote].year + '</span>';



  document.getElementById('quote-box').innerHTML = htmlQuote;
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.