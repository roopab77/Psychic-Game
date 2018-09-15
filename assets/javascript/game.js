

//define variables 

var HWins = document.getElementById("HTMLWins");
var HLoses = document.getElementById("HTMLLoses");
var HGuessleft = document.getElementById("HTMLGuessesLeft");
var HguessSoFar = document.getElementById("HTMLGuessesSofar");
var HComputerGuess =  document.getElementById("HTMLComputersGuess");
var wins = parseInt(HWins.textContent);
var loses = parseInt(HLoses.textContent);
var guessesleft = parseInt(HGuessleft.textContent);
var guesses_so_far = HguessSoFar.textContent;
var winflag = false;
var computerGuess;


//when user presses a key
document.onkeyup = function (event) {

  //Get a random alphabet from computer
  if (guessesleft === 10) {
    computerGuess = PickaRandomAlphabet();
    HComputerGuess.textContent = computerGuess;
  }

  if ((guessesleft <= 10) && (guessesleft > 0)) {
   
    var userGuess = event.key;
    if (userGuess === computerGuess) {
      winflag = true;
      HWins.textContent = parseInt(HWins.textContent) + 1;
      computerGuess="";
    }
    
    var userGuess1 = HguessSoFar.textContent;
    if (userGuess1 == "") {
      HguessSoFar.textContent = userGuess;
    }
    else {
      HguessSoFar.textContent = userGuess1 + "," + userGuess;
    }
    guessesleft = guessesleft - 1;
    HGuessleft.textContent =  guessesleft ;
  }
  else {
    alert("guessesleft " + HGuessleft + "winflag is set to " + winflag );
    if (guessesleft == 0) {
      if (winflag === false) {
        HLoses.textContent = parseInt(HLoses.textContent) + 1;
      }
      HguessSoFar.textContent = "";
      guessesleft = 10;
      HGuessleft.textContent = 10;
    }
  }

}

function PickaRandomAlphabet() {
  //alert("inside function");
  var alphatArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var randomChar = alphatArray[Math.floor(Math.random() * alphatArray.length)];
  return randomChar;
}

function reset()
{
  guessesleft = 0;
  PickaRandomAlphabet();
  guesses_so_far="";
  
}
