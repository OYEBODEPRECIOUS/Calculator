/** @format */

const outputMessage = document.getElementById("output-message");
console.log(outputMessage);

function zero() {
  outputMessage.value += "0";
  console.log("zero");
}
function one() {
  outputMessage.value += "1";
  console.log("one");
}

function two() {
  outputMessage.value += "2";
  console.log("two");
}

function three() {
  outputMessage.value += "3";
  console.log("three");
}
function four() {
  outputMessage.value += "4";
  console.log("four");
}

function five() {
  outputMessage.value += "5";
  console.log("five");
}

function six() {
  outputMessage.value += "6";
  console.log("six");
}
function seven() {
  outputMessage.textContent += "7";
  console.log("seven");
}

function eight() {
  outputMessage.value += "8";
  console.log("eight");
}

function nine() {
  outputMessage.value += "9";
  console.log("nine");
}

function dot() {
  outputMessage.value += ".";
  console.log("dot");
}

function numberClear() {
  outputMessage.value = "";
  console.log("clear");
}

function equal() {
  outputMessage.value = eval(outputMessage.value);
  console.log("equal");
}

function plus() {
  outputMessage.value += "+";
  console.log("plus");
}

function minus() {
  outputMessage.value += "-";
  console.log("minus");
}

function division() {
  outputMessage.value += "/";
  console.log("division");
}

function percentage() {
  outputMessage.value += "%";
  console.log("percentage");
}

function multiply() {
  outputMessage.value += "*";
  console.log("multiply");
}

function numberDelete() {
  outputMessage.value = outputMessage.value.slice(0, -1);
  console.log("remove");
}
