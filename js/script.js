/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//initialize the array quotes with five empty objects
//this could all be done much more easily with a constructor and class but for now we'll do it this way.
const quotes = [{
  //object 1 information addition
  quote:"Happiness is a warm puppy",
  source:"Charles M. Schulz",
  citation:"Super Box of Snoopy:A PEANUTS Collection",
  //utilize the getWordCount() function to populate the wordcount property
  wordcount:getWordCount("Happiness is a warm puppy")
},
{
  //object 2 information addition

  quote:"When an eighty-five pound mammal licks your tears away, then tries to sit on your lap, it’s hard to feel sad.",
  source:"Kristan Higgins",
  year:2020,
  citation:"Catch of the Day",
  //utilize the getWordCount() function to populate the wordcount property
  wordcount:getWordCount("When an eighty-five pound mammal licks your tears away, then tries to sit on your lap, it’s hard to feel sad."),

},
{
  //object 3 information addition

  quote:"Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
  source:"Jimmy Husson",
  year:1952,
  citation:"The Nashville Tennessean",
  //utilize the getWordCount() function to populate the wordcount property
  wordcount:getWordCount("Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.")

},
{
  //object 4 information addition

  quote:"Petting, scratching, and cuddling a dog could be as soothing to the mind and heart as deep meditation and almost as good for the soul as prayer.",
  source:"Dean Koontz",
  year:2007,
  citation:"False Memory",
  //utilize the getWordCount() function to populate the wordcount property
  wordcount:getWordCount("Petting, scratching, and cuddling a dog could be as soothing to the mind and heart as deep meditation and almost as good for the soul as prayer.")

},
{
  //object 5 information addition

  quote:"If there are no dogs in Heaven, then when I die I want to go where they went",
  source:"Will Rogers",
  //utilize the getWordCount() function to populate the wordcount property
  wordcount:getWordCount("If there are no dogs in Heaven, then when I die I want to go where they went")

}]



/***
 * `getRandomQuote` function
***/

//this function generates a random number based on the length of the quotes array.
//it then utilizes that random number to return an object from the quotes array.

function getRandomQuote(){
  let randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

//This function calls the getRandomQuote() function. It then utilizes the returned object to generate a string.
//That string is then pushed to the quote box HTML element and displayed to the user.

function printQuote(){
  let quote = getRandomQuote();
  let string = `<p class="quote"> ${quote.quote}</p> <p class="source">${quote.source}`;
  if (quote.citation) {string+=`<span class="citation">${quote.citation}</span>`}
  if (quote.year) {string+=`<span class ="year">${quote.year}</span>`}
  if (quote.wordcount) {string+=`<span class="year">Word Count: ${quote.wordcount}</span>`}
  string+=`</p>`;
  //this identifies the quote-box object on the HTML side and updates it's value to the above string
  document.getElementById('quote-box').innerHTML = string;
  //invokes the colorChanger() function to wrap up this function.
  colorChanger();
}

//below i created a function to procedurally determine the word length of quotes.
// this hoisted function is used to create the wordcount property in each quote object.

function getWordCount(string){
  let array = string.split(" ");
  return array.length;
}

//utilize setInterval() to update the page every 10 seconds

setInterval(function(){printQuote()},10000);

//create a function that changes the actual CSS values for background.

function colorChanger (){
  //declare an array of colors to be drawn upon randomly
  let colorArray = ['blue','purple','pink','green','red']
  //picks a color at random using Math object methods.
  let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
  //identifies the body css object and stores it's path in the element variable.
  const element = document.querySelector('body');
  //updates the CSS with the above color.
  element.style.backgroundColor=randomColor;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);