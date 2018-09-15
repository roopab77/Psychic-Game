//define variables 

var HWins = document.getElementById("HTMLWins");
var HLoses = document.getElementById("HTMLLoses");
var HGuessleft = document.getElementById("HTMLGuessesLeft");
var HguessSoFar = document.getElementById("HTMLGuessesSofar");
var HComputerGuess = document.getElementById("HTMLComputersGuess");
var winflag = false;
var winflagset = false;

//function to reset initial variables
function ResetVariables() {
  HGuessleft.textContent = "10";
  PickaRandomAlphabet();
  HguessSoFar.textContent = "";
  winflag = false;
  winflagset = false;
}

function PickaRandomAlphabet() {
  //alert("inside function");
  var alphatArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var randomChar = alphatArray[Math.floor(Math.random() * alphatArray.length)];
  HComputerGuess.textContent = randomChar;
}



//when user presses a key
document.onkeyup = function (event) {

  var userGuess = event.key;

  HGuessleft.textContent = parseInt(HGuessleft.textContent) - 1;
  //Reset all Variables and get a random alphabet
  //ResetVariables();


  var userGuess1 = HguessSoFar.textContent;
  if (userGuess1 == "") {
    HguessSoFar.textContent = userGuess;
  }
  else {
    HguessSoFar.textContent = userGuess1 + "," + userGuess;
  }

  //Iterate for wins /loses
  if (userGuess === HComputerGuess.textContent) {
    winflag = true;
    if (winflagset == false) {
      HWins.textContent = parseInt(HWins.textContent) + 1;
      winflagset = true;
    }

  }
  if (HGuessleft.textContent == "0") {
    if (winflag == false) {
      HLoses.textContent = parseInt(HLoses.textContent) + 1;
    }

    ResetVariables();

  }

}