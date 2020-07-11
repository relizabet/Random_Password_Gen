//provided var, this traverses the DOM to grab the generate ID, changed to const
const generateBtn = document.querySelector("#generate");
// hook onto the id's of the checked boxes
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#number");
const symbolCheck = document.querySelector("#symbol");
const passwordLength = document.querySelector("#passwordLength");
// arrays that hold our information, there are probably a million better/cleaner ways to do this, but this is how we will do it for now
const lowercaseArr = [
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
  "w",
  "x",
  "y",
  "z",
];
const uppercaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const symbolArr = [
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
const numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// provided function code, changed var to const:
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// capture the mouse click on the checkbox
uppercaseCheck.addEventListener("click", clickEvent);
lowercaseCheck.addEventListener("click", clickEvent);
symbolCheck.addEventListener("click", clickEvent);
numberCheck.addEventListener("click", clickEvent);
generateBtn.addEventListener("click", clickEvent);

// lower level functions ******************************************

// function for click event
function clickEvent(event) {
  console.log("added");
}

// function that takes in an array and spits out a random character
function randomCharacter(arr) {
  console.log(arr);
}
