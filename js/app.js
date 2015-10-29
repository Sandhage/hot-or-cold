
$(document).ready(function(){
	
  // Global Variables
  var newGuess = null;
  var oldGuess = null;
  var hcAnswer = Math.floor(Math.random()*100) + 1;
    console.log(hcAnswer);
  var guessCount = 0;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// New Game Function
  	document.getElementById("newGame").addEventListener("click", function() {
  		hcAnswer = Math.floor(Math.random()*100) + 1;
  		console.log(hcAnswer)
  	});

  	// Guess Events and Functions
  	document.getElementById("guessButton").addEventListener("click", function(e) {
      e.preventDefault();

      guessCount++;
      document.getElementById('count').innerHTML = guessCount;

      oldGuess = newGuess;
      console.log('oldGuess: ' + oldGuess);

      newGuess = document.querySelector("#userGuess").value;
  		console.log('new(est)Guess: ' + newGuess);

      document.getElementById('guessList').innerHTML += '<li>' + newGuess + '</li>';

      var difference = Math.abs(newGuess - hcAnswer);
      var feedback = null;

      if ( newGuess == hcAnswer ) {
        feedback = 'You win! Wow!';
      } else if ( difference <= 10 ) {
        feedback = 'Is that your mixtape? THATS SUPER HOT FIRE';
      } else if ( difference <= 20 ) {
        alert('Pretty hot!!');
      } else if ( difference <= 30 ) {
        alert('Tepid. Lukewarm. Try again.')
      }

      document.getElementById('feedback').innerHTML = feedback;
  	})

});


// THINGS TO DO WHEN REFACTORING:
// 1. make Math.floor a function to keep it neat and tidy.