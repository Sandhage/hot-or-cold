
$(document).ready(function(){
	
  // Global Variables
  var newGuess = null;
  var oldGuess = null;
  var hcAnswer = Math.floor(Math.random()*100) + 1;
    console.log(hcAnswer);
  var guessCount = 0;

	  // Display information modal box
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	// Hide information modal box
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// New Game Function
  	document.getElementById("newGame").addEventListener("click", function() {
  		hcAnswer = Math.floor(Math.random()*100) + 1;
  		console.log(hcAnswer)

  		guessCount = 0;
      document.getElementById("count").innerHTML = guessCount;
      document.getElementById("feedback").innerHTML = 'Make your Guess!';
  		document.getElementById("guessList").innerHTML = '';      
      document.getElementById("guessForm").reset();
  	});

  	// Guess Events and Functions
  	document.getElementById("guessButton").addEventListener("click", function(e) {
      e.preventDefault();

      guessCount++;
      document.getElementById("count").innerHTML = guessCount;

      oldGuess = newGuess;
      console.log('oldGuess: ' + oldGuess);

      newGuess = document.querySelector("#userGuess").value;
      console.log('new(est)Guess: ' + newGuess);

      if ( isNaN(newGuess) ) {
        alert("Sorry, bud -- you have to guess a number!");
        return false;
      } else if ( newGuess == '' ) {
        alert("Sorry, bud -- you have to guess a number!");
        return false;
      }

      document.getElementById("guessList").innerHTML += '<li>' + newGuess + '</li>';

      var difference = Math.abs(newGuess - hcAnswer);
      var oldDifference = Math.abs(oldGuess - hcAnswer);
      var feedback = null;


      if ( oldGuess == null ) {
        if ( newGuess == hcAnswer ) {
          feedback = 'You won in: ' + guessCount + ' guesses -- Wow!';
        } else if ( difference <= 10 ) {
          feedback = 'That guess must have been your mixtape -- BECAUSE IT WAS SUPER HOT FIRE';
        } else if ( difference <= 20 ) {
          feedback = 'Pretty hot!!';
        } else if ( difference <= 30 ) {
          feedback = 'Tepid. Lukewarm. Try again.';
        } else if ( difference <= 40 ) {
        	feedback = 'Your guess is akin to my heart: Cold and Slimey.';
        } else if ( difference <= 60 ) {
        	feedback = 'You could build a snowman with those guesses. Try another!';
        } else {
        	feedback = 'Too cold to think. Brainfreeze. Frozen solid.';
        };
      } else {
        if ( newGuess == hcAnswer ) {
          feedback = 'You won in: ' + guessCount + ' guesses -- Wow!';
        } else if ( difference == oldDifference ) {
          feedback = 'You should probably guess a different number...';
          return false;
        } else if (difference < oldDifference) {
          feedback = 'Hotter!';
        } else if (difference > oldDifference) {
          feedback = 'Colder...';
        }
      }



      document.getElementById("feedback").innerHTML = feedback;
      document.getElementById("guessForm").reset();
  	})

});