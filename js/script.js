/******************************************
 A Random Quote Generator
 - Ritesh Maharjan
******************************************/



// Array storing quotes in object with properties of quote, citation, source and year
var quotes = [

  {
    quote: 'Get busy living or get busy dying.',
    citation: 'shmoop',
    source: 'Stephen King',
    year: 1994,
    category: 'life'
  },
  {
    quote: 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.',
    source: 'Helen Keller',
    category: 'success'
  },
  {
    quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
    citation: 'huffpost',
    source: 'Mark Twain',
    year: 2013,
    category: 'success'
  },
  {
    quote: 'When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',
    citation: 'The Cancer Journals',
    source: 'Audre Lorde',
    category: 'life'
  },
  {
    quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
    citation: 'brainyquote',
    source: 'Eleanor Roosevelt',
    category: 'life'
  },
  {  
    quote: 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.',
    source: 'Marilyn Monroe',
    category: 'love'
  },
  {  
    quote: 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
    source: 'Marilyn Monroe',
    year: 2013,
    category: 'love'
  },
  {
    quote: 'Today you are You, that is truer than true. There is no one alive who is Youer than You.',
    citation: 'odyssey',
    source: 'Dr.Seuss',
    category: 'comedy'
  },
  {
    quote: 'Life is a tragedy when seen in close-up, but a comedy in long-shot.',
    source: 'Charlie Chaplin',
    year: 1972,
    category: 'comedy'
  },

];

// Function that generates a random number in order to generate random quotes
function getRandomQuote(){
  return Math.floor(Math.random()*quotes.length);
}


// Runs the printQuote function every 5 second to change the quotes
var timer = function(){
  setInterval(printQuote, 5000);
}

// Function that replaces the HTML to put new quote
function printQuote(){
  var randQuote = getRandomQuote();
  var htmlQuote = '';

  htmlQuote += '<p class="quote">' + quotes[randQuote].quote +' </p>'
  htmlQuote += '<p class="source">' + quotes[randQuote].source;

  // Check to see if there is value on citation and year, if no value then dont show on HTML
  if(quotes[randQuote].citation != null){
    htmlQuote += '<span class="citation">' + quotes[randQuote].citation + '</span>';
  }
  if(quotes[randQuote].year != null){
    htmlQuote += ' <span class="year"> ' +  quotes[randQuote].year + '</span>';
  }
  if(quotes[randQuote].category != null){
    htmlQuote += ' <span class="category"> ' +  quotes[randQuote].category + '</span>';
  }

  htmlQuote += '</p>';

  colorChange();
  timer();
  document.getElementById('quote-box').innerHTML = htmlQuote;
}


//add class to the body tag to change color
function colorChange(){

  var rand = Math.floor(Math.random()*3);
  console.log(rand);
  var backgroundEle = document.getElementById("background");
  var loadEle = document.getElementById("loadQuote");

  if(rand == 1){
    backgroundEle.classList.add("color1");
    backgroundEle.classList.remove("color2");
    loadEle.classList.add("color1");
    loadEle.classList.remove("color2");
    backgroundEle.classList.remove("color3");
    loadEle.classList.remove("color3");
  }
  else if(rand == 2){
    backgroundEle.classList.add("color2");
    backgroundEle.classList.remove("color1");
    loadEle.classList.add("color2");
    loadEle.classList.remove("color1");
    backgroundEle.classList.remove("color3");
    loadEle.classList.remove("color3");
  }
  else{
    backgroundEle.classList.remove("color1");
    loadEle.classList.remove("color1");
    backgroundEle.classList.remove("color2");
    loadEle.classList.remove("color2");
    backgroundEle.classList.add("color3");
    loadEle.classList.add("color3");
  }

}
// Calling the printQuote function to change the quote when show another quote button is pressed
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


printQuote();
