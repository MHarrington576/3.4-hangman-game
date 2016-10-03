(function(){
  "use strict";

  var approvedWords = commonWords.filter(function(word){
    if(word.length >= 3){
      return word;
    }
  });

  var secretWord = randomization();
  var livesLeft = 5;
  var guessButton = document.getElementById("guess-button");
    guessButton.addEventListener('click', retrieve());
  var wordContainer = document.querySelector(".unknown-word-container");
  var header = document.querySelector("h2");
  var correctGuesses = 0;
  var remainingLives = document.getElementById("remaining-lives");
  var secretWordContainer = document.querySelector(".unknown-word-container");

  console.log(secretWord);

  function randomization(){
    var randomValue = Math.floor(Math.random() * approvedWords.length);
    return approvedWords[randomValue];
  }

  function retrieve(){
    var guess = document.getElementById("guess");
    var guessedLetter = guess.value;
    comparison(guessedLetter);
    guess.value = "";
  }

  function comparison(guessedLetter){
    for (var i=0; i < secretWord.length; i++){
      if(secretWord[i] == guessedLetter) {
        wordContainer.children[i].textContent = guessedLetter;
        correctGuesses += 1;
      }
      if(correctGuesses == secretWord.length){
        header.textContent = "CONGRATULATIONS! YOU WON!"
      }
      else{
        decreaseLives();
      }
    }
  }

  function decreaseLives(){
    for (var l=5; l < 1; l--){
      remainingLives = l
      return remainingLives;
    }
    if(remainingLives == 0){
      header.textContent = "Sorry, li'l sport. You'll get 'em next time."
    }
  }

  for(var j=0; j < secretWord.length; j++){
    var blankSpaces = document.createElement("span");
    var blankSpacesContent = document.createTextNode("_");
    secretWordContainer.appendChild(blankSpacesContent);
  }

}());
