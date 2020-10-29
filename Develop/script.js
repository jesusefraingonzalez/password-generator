// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword(){
  //get desired length of password
  var charLength = prompt("How long do you want your password to be? (8-128 characters)");

  if(charLength >= 8 && charLength <= 128){

  }
  else{
    generatePassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
