
// Assignment Code
var generateBtn = document.querySelector("#generate");


//array of options to randomize
var numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
var letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","{","]","}","|",":",";","'","<",",",".","/","?"];
var upperCase = letters.map(letters => letters.toUpperCase());
var lowerCase = letters.map(letters => letters.toLowerCase());


function generatePassword() {

  //user inputs preference for character length
  var charLength = prompt("How many characters would you like this password to be? Choose between 8-128 characters");
  while (charLength < 8 || charLength > 128) { // while loop will continiously loop until condition is met (within character limit)
    alert("Invalid amount of characters. Your password must be between 8-128 characters.");
    var charLength = prompt("How many characters would you like this password to be? Choose between 8-128 characters");

  }
  //user inputs preference for password
  var specialCharQuestion = confirm("Would you like your password to have special characters?");
  var lowerLetterQuestion = confirm("Would you like your password to have lower-case characters?");
  var capitalLetterQuestion = confirm("Would you like your password to have capital characters?");
  var numberQuestion = confirm("Would you like your password to have numbers?");


//if all false, then repeat
  while (specialCharQuestion === false && lowerLetterQuestion === false && capitalLetterQuestion === false && numberQuestion === false) {
    alert("Your password must contain at least 1 special character, lower case letter, uppercase letter, or one number.");
    var specialCharQuestion = confirm("Would you like your password to have special characters?");
    var lowerLetterQuestion = confirm("Would you like your password to have lower-case characters?");
    var capitalLetterQuestion = confirm("Would you like your password to have capital characters?");
    var numberQuestion = confirm("Would you like your password to have numbers?");
  }

  var passwordCriteria = []; //concats details based on selection
//inputs characters based off user response
  if (specialCharQuestion) {
    passwordCriteria= `${passwordCriteria}${specialCharQuestion}`
  }
  
  if (lowerLetterQuestion) {
    passwordCriteria= `${passwordCriteria}${lowerLetterQuestion}`
  }
  if (capitalLetterQuestion) {
    passwordCriteria= `${passwordCriteria}${capitalLetterQuestion}`
  }
  if (numberQuestion) {
    passwordCriteria= `${passwordCriteria}${numberQuestion}`
  }

















}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //call function to prompt users and generate password

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);