// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//genertate password function
function generatePassword() {
  console.log("Generate password HERE");
  var length = Number(
    prompt(
      "How long would you like this password? (Please choose a value from 8-128)"
    )
  );

  console.log("User chose X Length: ", length);

  if (length < 8) {
    alert(
      "Try again, the password length you have selected was under 8 characters"
    );
    return;
  }

  if (length > 128) {
    alert(
      "Try again, the password length you have selected was over 128 characters"
    );
    return;
  }

  console.log("you passed step 1");
//these are the options to pick from
  var numerical = "0123456789";
  var LowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = LowerCase.upperCase;
  var special = "~!@#$%^&*()_+=";
  var chosenCharacters = "";
//these are confirm statements
  var useNumerical = confirm("Would you like to us Numerical characters?");
  var useLowerCase = confirm("Would you like to use Lowercase characters?");
  var useUpperCase = confirm("Would you like to Uppercase characters?");
  var useSpecial = confirm("would you like to use special characters?");

  console.log({ useNumerical, useLowerCase, useUpperCase, useSpecial });
//the "if statements"
  if (useNumerical) {
    chosenCharacters += numerical;
  }
  if (useLowerCase) {
    chosenCharacters = chosenCharacters.concat(LowerCase);
  }
  if (useUpperCase) {
    chosenCharacters += upperCase;
  }
  if (useSpecial) {
    chosenCharacters += special;
  }

  console.log("chosenCharacters", chosenCharacters);

  return randomize(chosenCharacters, length);
}
//the actual generator 
function randomize(options, length) {
  options = options.split("");
  var password = [];

  console.log(options);
  console.log("length", length);
  console.log("randIndex", randIndex);
  //for loop that uses password length

  for (var i = 0; i < length; i++) {
    var randIndex = Math.floor(Math.random() * options.length);
    password.push(options[randIndex]);
    console.log("password", password);
  }

  password = password.join("");

  return password;
}

//add event listener to genrerate button
generateBtn.addEventListener("click", writePassword);
