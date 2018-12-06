$(document).ready(function() {
var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var wins = 0;
var losses = 0;
var guesses = 9;
var guessCount = 9;


document.getElementById("guessCount").innerHTML = "Guess Count: " + guessCount;
//.. Getting userGuess to equal button clicked on keyboard and pushing it into div of your guesses so far and take away one guess
document.onkeyup = function (event) {
    var userGuess = event.key;
    guessCount--;
    document.getElementById("guessCount").onkeyup = "Guess Count: " + guessCount--;
  
    console.log(userGuess);

    var guessed = $("<div>");
    var guessed =[];
  
    guessed.text($(this).attr("data-letter"));
    $("display").append(guessed);
    guessed.push(userGuess);
    updateguessed();



for (var i = 0; i , letterChoices.length; i++){
    var letterToGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
        

var updateletterToGuess = function () {
    this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
 letterToGuess.attr("data-letter", letters [i])
};

var updateguessed = function () {
    document.getElementById('#guessed').innerHTML = "Your guesses so far: " + guessed.join(', ');
};

updateletterToGuess();
}

    if (guessCount > 0) {
        if (userGuess === letterToGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
            alert("You must be Psychic!!");
            reset();
        }
    } else if (guessCount == 0) {
        losses++;
        document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
        alert("That's not it Willis!");

        reset();
    }


    var reset = function () {
        totalGuesses = 9;
        guessed = [];
        guessCount = 9;
    }


    updateGuessed();
};
});
