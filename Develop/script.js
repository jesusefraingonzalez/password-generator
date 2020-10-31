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

  setChar: function(arr){
    
  }

};

passArray[0][1] = setLength();
console.log(passArray);

// Write password to the #password input
function writePassword(event) {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = setLength();
  var includeChar = checkChar();
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


//function to check the characters to be used for password, returns boolList array
function checkChar() {
  // initialize character types and if they are true
  var charTypes = [
    ["lowercase", true],
    ["uppercase", true],
    ["numeric", true],
    ["special", true]
  ];

  //prompt user for each charType, store response in boolList array
  charTypes.forEach(function (charType, index) {
    var charBool = confirm("Include " + charType[index] + " characters?");
    charType[1] = charBool;
    console.log(charType[0] + ":" + charType[1]);
  })

  // check if all values are false
  var falseArray = charTypes.every(function (element) {
    return element[1] === false;
  })

  // if array is false, then prompt user to select at least one character type and call function again
  if (falseArray) {
    console.log("Array is false");
    alert("Please select at least one character type");
    checkChar();
  }
  else {
    console.log("At least one criteria is selcted");
    return charTypes;
  }
}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
