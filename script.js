const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn');
generateButton.addEventListener('click', writePassword);

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Prompts that come up after you click generate password

function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var special = confirm("Do you want special characters in your password?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters

  var minimumCount = 0;

  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  // Generator functions**

  var functionArray = {
    getNumbers: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialCharacters: function () {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  };

  // empty string variable for the for loop below

  var randomPasswordGenerated = "";

  // loop getting random characters

  for (let i = 0; i < parseInt(passwordLength); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    if (randomNumberPicked === 0 && numbers === true) {
      randomPasswordGenerated += functionArray.getNumbers ();
    }
    else if (randomNumberPicked === 1 && lowerCases === true) {
      randomPasswordGenerated += functionArray.getLowerCases ();
    }
    else if (randomNumberPicked === 2 && upperCases === true) {
      randomPasswordGenerated += functionArray.getUpperCases ();
    }
    else if (randomNumberPicked === 3 && special === true) {
      randomPasswordGenerated += functionArray.getSpecialCharacters ();
    }
    else {
      i--;
    }
  }

  return randomPasswordGenerated;
}