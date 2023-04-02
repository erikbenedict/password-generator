// TODO: fix bug- doesn't clear password inputs

// * Array of users choices
var choicePool = [];
// * Actual password generated
var password = [];
// * Lowercase Alphabet Characters
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
alphaLower = alphaLower.split('');
// * Numeric Characters
var number = '123456789';
number = number.split('');
// * Special Characters 
var special = "!@#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
special = special.split('');
// * Uppercase Alphabet Characters
var upperCase = function (letters) {
    return letters.toUpperCase();
};
var alphaUpper = alphaLower.map(upperCase);

// * Function to generate random password based off user input
function generatePassword() {
    var userInput = prompt('How many characters would you like in your password? Choose between 8 and 128 ');

    if (!userInput) {
        alert('This needs a value');
        generatePassword();
        return;
    }
    if (userInput < 8 || userInput > 128 || isNaN(userInput)) {
        alert("You must choose between 8-128 and it must be a number");
        generatePassword();
        return;
    }

    var confirmLowercase = confirm('Will this password contain lowercase characters?');
    var confirmUppercase = confirm('Will this password contain uppercase characters?');
    var confirmNumbers = confirm('Will this password contain numbers?');
    var confirmSpecial = confirm('Will this password contain special characters?');

    if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecial) {
        alert('You must choose one criteria');
        generatePassword();
    } 
    if (confirmLowercase) {
        choicePool = choicePool.concat(alphaLower);
    }
    if (confirmUppercase) {
        choicePool = choicePool.concat(alphaUpper);
    }
    if (confirmNumbers) {
        choicePool = choicePool.concat(number);
    }
    if (confirmSpecial) {
        choicePool = choicePool.concat(special)
    }
    for (var i = 0; i < userInput; i++) { 
        var randomIndex = Math.floor(Math.random() * choicePool.length);
        var indexValue = choicePool[randomIndex];
        password.push(indexValue);
    }
    return password.join("");

}

//* Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//* Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);