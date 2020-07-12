//provided var, this traverses the DOM to grab the generate ID, changed to const
const generateBtn = document.querySelector("#generate");
// hook onto the id's of the checked boxes to later evaluate if it has been checked, chose getElementById instead of querySelector as I was running into issues with querySelector and getting .checked to work
let uppercaseCheck = document.getElementById("uppercase");
let lowercaseCheck = document.getElementById("lowercase");
let numberCheck = document.getElementById("number");
let symbolCheck = document.getElementById("symbol");
// gets
const passwordLength = document.querySelector("#passwordLength");
const printPassword = document.querySelector("#password");
// strings that hold password options that are turned into arrays by .split
const lowercaseStr = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const symbolStr = "~!@#$%^&*()_+`-={}|[]:;'<>?,./".split("");
const numberStr = "1234567890".split("");

// creates a source array based on what checkboxes are checked by user that will be used in the generate password function
function createSourceArr() {
  // empty array that will have strings added onto it depending on what boxes have been checked
  let sourceArr = [];

  // reference for push https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  // reference for spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

  // set of if statements that will push their arrays onto the sourceArr if it is true that the corresponding box has been checked in the HTML
  if (lowercaseCheck.checked) {
    // spread operator is allowing sourceArr to be expanded by .push
    sourceArr.push(...lowercaseStr);
  }
  if (uppercaseCheck.checked) {
    sourceArr.push(...uppercaseStr);
  }
  if (symbolCheck.checked) {
    sourceArr.push(...symbolStr);
  }
  if (numberCheck.checked) {
    sourceArr.push(...numberStr);
  }
  // the function will return the completed source array with all data
  return sourceArr;
}

// this function generates the password based on the source array and listens for length of the password
function generatePassword() {
  // allows the use of the array created based on user preferences
  let createdSourceArray = createSourceArr();
  // gets the value based on user input
  desiredPasswordLength = passwordLength.value;

  // checks to make sure the password is between 8 and 128, otherwise alerts an error
  if (desiredPasswordLength < 8 || desiredPasswordLength > 128) {
    alert("Please enter a value between 8 - 128.");
  } else {
    // empty array for randomized characters based on user length
    let generatedPassword = [];
    // randomizes however many characters user wants
    for (let i = 0; i < desiredPasswordLength; i++) {
      const index = Math.floor(Math.random() * createdSourceArray.length);
      // final password array is then concatinated to one string
      generatedPassword = generatedPassword.concat(createdSourceArray[index]);
    }
    // changes innerHTML of textarea element to show generated password
    printPassword.innerHTML = generatedPassword.join("");
  }
}

// when generate button is clicked, run the generate password function and print it to the screen
generateBtn.addEventListener("click", generatePassword);
