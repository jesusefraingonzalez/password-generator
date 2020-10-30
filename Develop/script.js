// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}

function checkLength() {
  //get desired length of password
  var charLength = prompt("How long do you want your password to be? (8-128 characters)");

  if (charLength >= 8 && charLength <= 128) {
    alert("Password length is good!");
    return charLength;
  }
  else {
    alert("Password length is not valid, password must be between 8 and 128 characters")
    checkLength();
  }
}

function checkChar() {
  var charTypes = [
    "lowercase",
    "uppercase",
    "numeric",
    "special"
  ];

  var isLowercase = true;
  var isUppercase = true;
  var isNumeric = true;
  var isSpecial = true;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
