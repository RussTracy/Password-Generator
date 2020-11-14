// Assignment code here

// Function to capture the proper password length or continue to prompt
var pwLength = function() {
  var lengthValue = "";
  // prompt cannot be empty, be less than 8, more than 128 and cannot contain text
  while (lengthValue === "" || lengthValue === null || parseInt(lengthValue) < 8 || parseInt(lengthValue) > 128 || isNaN(parseInt(lengthValue))){
    lengthValue = prompt('Choose Password Length: 8 - 128');
  }
  console.log("password length is " + lengthValue)
  return lengthValue;
}


function generatePassword(){
   
  var passwordLength =  pwLength(); // Length of Password Requestd
  var passwordcharacters = "abcdefghijklmnopqrstuvwxyz"; // Type of Characters to be used in password
  var newPassword = "" 

for (var i = 0, password = passwordcharacters.length; i < passwordLength; ++i) {
  newPassword += passwordcharacters.charAt(Math.floor(Math.random() * password))
}
 return newPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
