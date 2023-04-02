
// TODO: Assign variables for user choices
// * Alphabet Characters
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
alphaLower = alphaLower.split('');
// * Numeric Characters
var number = '123456789';
number = number.split('');
// * Special Characters 
var character = "!@#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
character = character.split('');
// * Uppercase Alphabet Characters
var upperCase = function (letters) {
    return letters.toUpperCase();
};
var alphaUpper = alphaLower.map(upperCase);

//* Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//* Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// TODO: write function to generate password ^
function generatePassword() {
    var charLength = prompt('How many characters would you like in your password? Choose between 8 and 128 ');

    if (!charLength) {
        alert('This needs a value');
    } else if (charLength < 8 || charLength > 128) {
        charLength = prompt("You must choose")
        
    }





}
