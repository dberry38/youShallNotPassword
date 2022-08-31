// Assignment code here
const upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '=', '+', '.', '?', '/', '~'];
let charSet = []
let passString = []


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  console.clear();

  charSet = [];

  let passLength = prompt("How many characters would you like the password to be?", "Enter a number, 8-128");
  if (isNaN(passLength) || (passLength < 8) || (passLength > 128)) {
    window.alert("Invalid entry, please try again.");
  } else {
    //all the confirm prompts needed to be inside the first if/else statement so they don't run independantly if the password length value is not valid.
    let includeL = confirm("Include lowercase letters?");
    if (includeL) {
        charSet.push.apply(charSet, lowCase);
        console.log("Lowercase characters selected");
    }
  let includeU = confirm("Include UPPERCASE letters?");
    if (includeU) {
      charSet.push.apply(charSet, upCase);
      console.log("Uppercase characters selected");
    }
  let includeN = confirm("Include numbers?");
    if (includeN) {
      charSet.push.apply(charSet, numbers);
      console.log("Numbers selected");
    }
  let includeS = confirm("Include special characters?");
    if (includeS) {
      charSet.push.apply(charSet, special);
      console.log("Special characters selected");
    }
  }

  console.log(charSet);

  //this is how items from the selected characters will be chosen randomly and put together in a string.
  function generatePassword() {
    for (let i = 0; i < passLength; i++) {
      var index = Math.floor(Math.random() * charSet.length);
      passString[i] = charSet[index]
    }
        //IT WORKED OMG
    return passString.join('');
  }





  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
