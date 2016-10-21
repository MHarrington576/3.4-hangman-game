(function(){
  "use strict";

  var approvedWords = commonWords.filter(function(word){
    if(word.length >= 3){
      return word;
    }
  });

  var secretWord = randomization();
  var guessesLeft = 10;
  var guessButton = document.getElementById("guess-button")
  guessButton.addEventListener('click', retrieve);
  var wordContainer = document.querySelector(".unknown-word-container");
  var header = document.querySelector("h2");
  var correctGuesses = 0;
  var remainingGuesses = document.getElementById("remaining-lives").textContent;
  var secretWordContainer = document.querySelector(".unknown-word-container");

  console.log(secretWord);

  function randomization(){
    var randomValue = Math.floor(Math.random() * approvedWords.length);
    return approvedWords[randomValue];
  }

  function retrieve(){
    var guessedLetter = document.getElementById("guess").value;
    // console.log(guess);
    // var guessedLetter = guess.value;
    comparison(guessedLetter);
    decreaseGuesses();
    guess.value = "";
  }

  function comparison(guessedLetter){
    for (var i = 0; i < secretWord.length; i++){
      if(secretWord[i] == guessedLetter) {
        console.log(wordContainer);
        wordContainer.children[i+1].textContent = guessedLetter;
        correctGuesses += 1;
      }
      if(correctGuesses == secretWord.length){
        header.textContent = "CONGRATULATIONS! YOU WON!"
      }
    }
  }

  function decreaseGuesses(){
    console.log(remainingGuesses);
    remainingGuesses -= 1;
    var guessNumber = document.getElementById("remaining-lives");
    guessNumber.textContent = remainingGuesses;
    // for (var l=5; l < 1; l--){
    //   remainingGuesses = l
    //   return remainingGuesses;
    // }
    if(remainingGuesses == 0){
      header.textContent = "Sorry, li'l sport. You'll get 'em next time."
    }
  }

  for(var i = 0; i < secretWord.length; i++){
    var blankSpaces = document.createElement("span");
    var blankSpacesContent = document.createTextNode("_");
    blankSpaces.appendChild(blankSpacesContent);
    secretWordContainer.appendChild(blankSpaces);
  }

}());
