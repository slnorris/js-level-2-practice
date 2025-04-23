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
  document.body.style.backgroundColor = event.target.firstElementChild.textContent;
  console.log("box click handler");
}


// *************************************************************************

// FORM 

