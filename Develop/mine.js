//provided var, this traverses the DOM to grab the generate ID, changed to const
const generateBtn = document.querySelector("#generate");

// arrays that hold our information, there are probably a million better/cleaner ways to do this, but this is how we will do it for now
const letterArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
];
const specialCharArray = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "=",
  "-",
  "{",
  "}",
  "|",
  "[",
  "]",
  "\\",
  ":",
  '"',
  ";",
  "'",
  "<",
  ">",
  "?",
  ",",
  ".",
  "/",
];
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//randomize the output of each array, again, probably better ways to do this, but this is where we're starting
const randomLowerLetter =
  letterArray[Math.floor(Math.random() * letterArray.length)];
const randomUpperLetter = randomLowerLetter.toUpperCase();
const randomNumber =
  numberArray[Math.floor(Math.random() * numberArray.length)];
const randomSpecChar =
  specialCharArray[Math.floor(Math.random() * numberArray.length)];

//prompt on screen to decide what to include in the password
const critLower = confirm("Would you like lowercase letters?");
const critUpper = confirm("Would you like to use uppercase letters?");
const critSpecial = confirm("Would you like special characters?");
const critNumber = prompt(
  "How many characters would you like? Enter a number between 8 and 128."
);

//log to console if working
if (critLower === true) {
  console.log(randomLowerLetter);
}

if (critUpper === true) {
  console.log(randomUpperLetter);
}

if (critSpecial === true) {
  console.log(randomSpecChar);
}

if (critNumber === 8 < 128) {
  console.log(critNumber);
}

//provided function code, changed var to const:
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  // added
  const length = prompt("Choose a number between 8 and 128.");
  if (length === 8) {
    alert("good");
  }

  //   passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
