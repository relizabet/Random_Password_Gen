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

generateBtn.addEventListener("click", generatePassword);
// capture the mouse click on the checkbox
// let upper = uppercaseCheck.addEventListener("click", function () {
//   console.log("got upper");
//   return true;
// });
// // let lower = lowercaseCheck.addEventListener("click", function () {
// //   console.log("got lower");
// //   return true;
// // });
// let symbol = symbolCheck.addEventListener("click", function () {
//   return true;
// });
// let number = numberCheck.addEventListener("click", function () {
//   return true;
// });
// let length = passwordLength.addEventListener("click", getValue);

// lower level functions ******************************************

// provided function code, changed var to const:
// function writePassword() {
//   const password = generatePassword();
//   const passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// method for checkboxes
function createSourceArr() {
  let sourceArr = [];

  // reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  if (lowercaseCheck.checked) {
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

  return sourceArr;
}

// generate the password
function generatePassword() {
  let createdSourceArray = createSourceArr();

  desiredPasswordLength = passwordLength.value;

  if (desiredPasswordLength < 8 || desiredPasswordLength > 128) {
    alert("Please enter a value between 8 - 128");
  } else {
    // get length input
    let generatedPassword = [];
    for (let i = 0; i < desiredPasswordLength; i++) {
      const index = Math.floor(Math.random() * createdSourceArray.length);
      generatedPassword = generatedPassword.concat(createdSourceArray[index]);
    }
    printPassword.innerHTML = generatedPassword.join("");
  }
}
