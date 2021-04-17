
// Assignment Code
var generateBtn = document.querySelector("#generate");


//array of options to randomize
var numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
var letters = [ "abcdefghijklmnopqrstuvwxyz" ];
var symbols = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "{", "]", "}", "|", ":", ";", "<", ",", ".", "/", "?" ];
var upperCase = String.prototype.toUpperCase.apply(letters).split("");
var lowerCase = String.prototype.toLowerCase.apply(letters).split("");


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
    passwordCriteria = passwordCriteria.concat(symbols)
  }

  if (lowerLetterQuestion) {
    passwordCriteria = passwordCriteria.concat(lowerCase)
  }
  if (capitalLetterQuestion) {
    passwordCriteria = passwordCriteria.concat(upperCase)
  }
  if (numberQuestion) {
    passwordCriteria = passwordCriteria.concat(numbers)
  };


  console.log(passwordCriteria)
  

  //allows password to randomize based off of user input
  var randomizePassword = ""

  for (var i = 0; i < charLength; i++) {
    randomizePassword = randomizePassword + passwordCriteria[ Math.floor(Math.random() * passwordCriteria.length) ];
    console.log(randomizePassword);
  }
  return randomizePassword;
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