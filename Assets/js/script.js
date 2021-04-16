
// Assignment Code
var generateBtn = document.querySelector("#generate");


//array of options
var numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
var letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
// var upperCase = String.prototype.toUpperCase.apply(letters).split(",");
// var lowerCase = String.prototype.toLowerCase.apply(letters).split(",");

var upperCase = letters.map(letters => letters.toUpperCase());
var lowerCase = letters.map(letters => letters.toLowerCase());

//code here
function generatePassword() {

  var charLength = prompt("How many characters would you like this password to be? Choose between 8-128 characters");
  if (charLength<8 || charLength > 128) {
    alert("Invalid amount of characters. Your password must be between 8-128 characters.")
  } else {
    alert(charLength)
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

//make a function to generate a password


/*



*/