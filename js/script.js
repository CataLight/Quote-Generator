/******************************************
 A Random Quote Generator
 - Ritesh Maharjan
******************************************/

// Declaring global variables

var sameQuote, sameColour = 0;


// Array storing quotes in object with properties of quote, citation, source and year'

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
  var randNum;

  // run if the samequote and randnum matches in order to avoid having same quotes
  do{
    randNum = Math.floor(Math.random()*quotes.length);
  }while(sameQuote == randNum);

  // assigning randNum value to samequote in order for the do while to run
  sameQuote = randNum;

  return quotes[randNum];
}

var addTimer;
//setting up the timer to change the quote every 20 sec and clearing the old timer
function timer(){
  clearInterval(addTimer);
  addTimer = setInterval(printQuote, 3000);
}

// Function that replaces the HTML to put new quote
function printQuote(){
  var randQuote = getRandomQuote();
  var htmlQuote = '';

  htmlQuote += '<p class="quote">' + randQuote.quote +' </p>'
  htmlQuote += '<p class="source">' + randQuote.source;

  // Check to see if there is value on citation and year, if no value then dont show on HTML
  if(randQuote.citation != null){
    htmlQuote += '<span class="citation">' + randQuote.citation + '</span>';
  }
  if(randQuote.year != null){
    htmlQuote += ' <span class="year"> ' +  randQuote.year + '</span>';
  }
  if(randQuote.category != null){
    htmlQuote += ' <span class="category"> ' +  randQuote.category + '</span>';
  }

  htmlQuote += '</p>';

  //Changing the color and resetting the interval time
  colorChange();

  document.getElementById('quote-box').innerHTML = htmlQuote;
  timer();
}


//add class to the body tag to change color
function colorChange(){
  
  var rand;
  
  // checks to see if rand matches with samecolour in order to avoid having same colour
  do{
    rand = Math.floor(Math.random()*3);
  }while(rand == sameColour);

  //assigning rand value to samecolour in order for the do while to run
  sameColour = rand;

  //assigning value to the variable in order to add class and change color
  var backgroundEle = document.getElementById("background");
  var loadEle = document.getElementById("loadQuote");

  //adds the colour depending upon the rand value generated through random number
  if(rand == 0){
    backgroundEle.classList.add("color1");
    backgroundEle.classList.remove("color2");
    loadEle.classList.add("color1");
    loadEle.classList.remove("color2");
    backgroundEle.classList.remove("color3");
    loadEle.classList.remove("color3");
  }
  else if(rand == 1){
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

  return sameColour;
}


// Calling the printQuote function to change the quote when show another quote button is pressed
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//calling the printQuote in order to change the quotes
printQuote();
