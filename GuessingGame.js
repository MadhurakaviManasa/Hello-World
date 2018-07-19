// program data:

var number = Math.floor(Math.random() * 100) + 1;
var guess;
var limit =5;
var won = false;
var guesses = [];

// prompt user for their guess 



for(var i = 1; i <= limit; i++){

    do{
        guess =  parseInt(prompt("Guess the number: "));
    }while(isNaN(guess) || isPreviousGuess(guess));
    
// if correct: let the user know they won
    if (guess == number){
        document.write("Congratulations! Your guess is correct!");
        won = true;
        break;
        }
// if incorrect: let the user know
    else{
        guesses[i] = guess;
        alert("Sorry, incorrect guess... \n You have guessed: " + guesses.toString() + "\nRemaiming tries: "+ (limit - i));
        
        }
    }

    if (!won){
        document.write("Sorry you ran out of guesses... Game over! :( <br> The correct number was: " + number);
    }

    function isPreviousGuess(){
        for(var i=1; i < guesses.length; i++){
            if (guesses[i] == guess){
                return true;
            }
            else{
                return false;
            }
        }

    }