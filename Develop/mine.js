//provided var, this traverses the DOM to grab the generate ID, changed to const
const generateBtn = document.querySelector("#generate");
// hook onto the id's of the checked boxes
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#number");
const symbolCheck = document.querySelector("#symbol");
const passwordLength = document.querySelector("#passwordLength");
const printPassword = document.querySelector("#password");

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
let checkedBox = [];

// capture the mouse click on the checkbox
// let upper = uppercaseCheck.addEventListener("click", getValue);
// let lower = lowercaseCheck.addEventListener("click", getValue);
// let symbol = symbolCheck.addEventListener("click", getValue);
// let number = numberCheck.addEventListener("click", getValue);
// let length = passwordLength.addEventListener("click", getValue);
// let button =

// on button click random password is generated
generateBtn.addEventListener("click", function () {
  printPassword.innerHTML = generatePassword(10);
});

// generate password **********************************************
// function generatePassword() {
//   const length = parseInt(passwordLength.value);
// console.log(length);
// }

// lower level functions ******************************************

// function that

// function that adds arrays to empty arround when checked
// function getValue() {}

//bigarray holds small arrays
//for password.length < requested number of characters DO:
//randomly select small array from bigarray
//randomly select value from small array
//add to password

// function that randomizes a character output
// function randomCharFun(arr) {
//   const randomItem = arr[Math.floor(Math.random() * arr.length)];
//   return randomItem;
// }

// provided function code, changed var to const:
// function writePassword() {
//   const password = generatePassword();
//   const passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// generate the password
function generatePassword(passwordLength) {
  // concat worked to add all items in the provided arrays to the empty arrays
  checkedBox = checkedBox.concat(
    lowercaseArr,
    uppercaseArr,
    symbolArr,
    numberArr
  );
  let generatedPassword = [];
  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * checkedBox.length);
    generatedPassword = generatedPassword.concat(checkedBox[index]);
  }
  return generatedPassword;
}

// function checkedBoxFunc() {
//   for (let i = 0; i < checkedBox.length - 1; i++) {
//     // referenced https://www.dyn-web.com/javascript/arrays/add.php
//     checkedBox.push(lower);
//   }
// }
