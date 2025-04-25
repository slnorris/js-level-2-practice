// EVENT LISTENERS FOR BUTTON COUNTER

let count = 0;
let counterBtnElem = document.getElementById("counter-btn");
let counterOutputElem = document.getElementById("counter-output");

// add click event listener to our counter btn element
counterBtnElem.addEventListener("click", counterBtnClickHandler);

// event handler for the counter btn click
function counterBtnClickHandler(event) {
  event.preventDefault(); //prevents default behaviors
  count++;
  counterOutputElem.innerHTML = `Clicked ${count} times`;
}

// *************************************************************************

let boxElements = document.getElementsByClassName("box");

// need to attach event listeners to each box element
console.log(boxElements[0].firstElementChild.innerHTML);

for (let elem of boxElements) {
  elem.addEventListener("click", boxClickHandler);
}

function boxClickHandler(event) {
  event.preventDefault();
  document.body.style.backgroundColor =
    event.target.firstElementChild.textContent;
  console.log("box click handler");
}

// *************************************************************************

// FORM

let loginFormElement = document.getElementById("login-form");
let loginStatusElement = document.getElementById("login-status");
loginFormElement.addEventListener("submit", loginFormEventHandler);

function loginFormEventHandler(event) {
  event.preventDefault();
  loginStatusElement.innerHTML = `Logged in as ${event.target["username-input"].value}`;
  event.target.reset();
}

// FORM VALIDATION

let usernameValidationElement = document.getElementById("username-validation");
let usernameInputElement = document.getElementById("username-input");
// this listens to the input as it is being typed

// on input event handler for username input
usernameInputElement.addEventListener("input", handleValidateUsername);

function handleValidateUsername(event) {
  event.preventDefault();

  if (event.target.value.length < 5) {
    usernameValidationElement.innerHTML = "Please enter more than 5 characters";
  } else {
    usernameValidationElement.innerHTML = "Hiii there!";
  }
}

// ******************************************************
// IMPLEMENTING DARK MODE & LIGHT MODE
// STEP 1 implement a class in CSS
let darkModeButtonElement = document.getElementById("dark-mode");

darkModeButtonElement.addEventListener("click", handleToggleDarkMode);

function handleToggleDarkMode(event) {
  event.preventDefault();
  document.body.classList.toggle("dark");
  // if the body has a class of dark, show "light mode" on the btn
  // console.log(document.body.classList[0]);
  // if (document.body.classList[0] === "dark") {
  //   darkModeButtonElement.innerHTML = "light";
  // } else {
  //   darkModeButtonElement.innerHTML = "dark";
  // }

  document.body.classList[0] === "dark"
    ? (darkModeButtonElement.innerHTML = "light")
    : (darkModeButtonElement.innerHTML = "dark");
}

// TERNARY STATEMENTS
//  conditional statements with 3 operands
// WTF - What ? True : False
// condition to evaluate ? do this if true : do this if false
// let something = true;

// something ? console.log('something is true... do this') : console.log("do this if false!")
// if(something === true) {
//   console.log("something is true... do this")
// } else if (something===false) {
//   console.log("do this if false!")
// }
