var generateBtn = document.querySelector("#generate");

// TODO: Assign variables for user choices
// * Alphabet Characters
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// * Numeric Characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// * Special Characters 
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];



//* Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// TODO: write function to generate password ^
function generatePassword() {
    
}

//* Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
