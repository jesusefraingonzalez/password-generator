// Assignment Code
var generateBtn = document.querySelector("#generate");

// password object with length and character type bools
var myPassword = {
  length: 8,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false,

  setLength: function () {
    //get desired length of password
    var charLength = prompt("How long do you want your password to be? (8-128 characters)");
    // see if length is acceptable
    if (charLength >= 8 && charLength <= 128) {
      alert("Password length is good!");
      this.length = charLength;
    }
    else {
      alert("Password length is not valid, password must be between 8 and 128 characters")
      setLength();
    }
  },

  setChar: function () {
    this.lowercase = confirm("Include lowercase characters?");
    this.uppercase = confirm("Include uppercase characters?");
    this.numeric = confirm("Include numeric characters?");
    this.special = confirm("Include special characters?");

    if (!this.lowercase && !this.uppercase && !this.numeric && !this.special) {
      alert("Please select at least one character type");
      this.setChar();
    }
    else {
      alert("At least one criteria is selected");
    }
  },

};










//functions
// Write password to the #password input
function writePassword(event) {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // var passwordLength = setLength();
  //var includeChar = checkChar();
  passwordText.value = password;

}

function generatePassword(arr) {
  var alphabet = ["abcdefghijklmnpoqrstuvwxyz"];
  var specialChar = ["!@#$%^&*()-_=+"];

  //produces a random character in alphabet
  // var randomChar = alphabet[Math.floor(Number.random() * alphabet.length)];

}

// function to get random element from an array
function randomChar(arr) {
  return arr[Math.floor(Number.random() * arr.length)];
}

// checks desired length of the password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(myPassword);
myPassword.setChar();
console.log(myPassword);



