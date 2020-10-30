// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  checkChar();
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
  // initialize character types and if they are true
  var charTypes = [
    "lowercase",
    "uppercase",
    "numeric",
    "special"
  ];

  // initialize empty array to store boolean values tied to charTypes by index
  var boolList = [];

  
  charTypes.forEach(function (charType, index) {
    var charBool = confirm("Include " + charType + " characters?");
    boolList.push(charBool);
    console.log(boolList[index]);
  })

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
