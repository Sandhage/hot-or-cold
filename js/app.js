
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	// Randomly Generate Number, Store as Variable
	var hcAnswer = Math.floor(Math.random()*100) + 1;
	console.log(hcAnswer);

  	// New Game Function
  	document.getElementById("newGame").addEventListener("click", function() {
  		hcAnswer = Math.floor(Math.random()*100) + 1;
  		console.log(hcAnswer)
  	});

  	// Guess Events and Functions
  	document.getElementById("guessButton").addEventListener("click", function() {
  		var newGuess = document.querySelector("input").val();
  		console.log(newGuess);
  	})

});


