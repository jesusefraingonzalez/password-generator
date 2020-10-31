// Assignment Code
var generateBtn = document.querySelector("#generate");

//functions
// function to get random element from an array
function randomChar(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Write password to the #password input
function writePassword(event) {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

function generatePassword() {
  var alphabet = "abcdefghijklmnpoqrstuvwxyz"; // alphabet chars
  var special = "!@#$%^&*()-_=+"; // special chars
  var numbers = "0123456789"; //number chars
  var availChar = ""; // available characters for the password

  // password object with length and character type bools
  var myPassword = {
    length: 8,
    lowercase: false,
    uppercase: false,
    numeric: false,
    special: false,
    actualPass: "",

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
        this.setLength();
      }
    },

    // prompt criteria for chars
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

    generate: function (arr) {
      for (var i = 0; i < this.length; i++) {
        this.actualPass += randomChar(arr);
        console.log(this.actualPass);
      }
    },
  };

  myPassword.setLength();
  myPassword.setChar();


  if (myPassword.lowercase) {
    availChar += alphabet;
  }
  if (myPassword.uppercase) {
    availChar += alphabet.toUpperCase();
  }
  if (myPassword.numeric) {
    availChar += numbers;
  }
  if (myPassword.special) {
    availChar += special;
  }

  console.log(availChar);
  myPassword.generate(availChar);
  console.log(myPassword);
  return myPassword.actualPass;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


