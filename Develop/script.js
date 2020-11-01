// Assignment Code
var generateBtn = document.querySelector("#generate");

//functions

// Write password to the #password input
function writePassword(event) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {
    // password
    var myPassword = "";

    // char lists
    var alphabet = "abcdefghijklmnpoqrstuvwxyz"; // alphabet chars
    var special = "!@#$%^&*()-_=+"; // special chars
    var numbers = "0123456789"; //number chars
    var availChar = ""; // available characters for the password

    // password criteria
    while (availChar === "") {
        var isLowercase = confirm("Include lowercase characters?");
        var isUppercase = confirm("Include uppercase characters?");
        var isSpecial = confirm("Include special characters?");
        var isNumber = confirm("Include number characters?");
        
        //add relevant chars to chars available for password
        if (isLowercase) {
            availChar += alphabet;
        }
        if (isUppercase) {
            availChar += alphabet.toUpperCase();
        }
        if (isNumber) {
            availChar += numbers;
        }
        if (isSpecial) {
            availChar += special;
        }

        // validates that at least one criteria is selected
        if(availChar === ""){
            alert("Please select at least one criteria");
        }
    }
    
    //sets password length
    var length = setLength();

    //generates the password of given length using available chars
    for (var i = 0; i < length; i++) {
        myPassword += randomChar(availChar);
    }

    // console.log(availChar);
    // console.log(myPassword);
    return myPassword;
}

//sets password length
function setLength() {
    var charLength = parseInt(prompt("How long do you want your password to be? (8-128 characters)"));
    // see if length is acceptable
    if (charLength >= 8 && charLength <= 128) {
        alert("Password length is valid!");
        return charLength;
    }
    // error message if length is unacceptable
    else {
        alert("Password length is not valid. Password must be between 8 and 128 characters")
        setLength();
    }
}

// function to get random element from an array
function randomChar(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);