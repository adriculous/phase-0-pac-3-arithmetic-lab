// basic math
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Increments and Decrements
function increment(n) {
  return ++n;
}

function decrement(n) {
  return --n;
}

// Parsing Numbers: parseInt() and parseFloat()
function makeInt(n) {
  return parseInt(n, 10);
}

function preserveDecimal(n) {
  return parseFloat(n);
}

console.log(add(56, 19));
console.log(subtract(24, 19));
console.log(multiply(98, 20));
console.log(divide(100, 5));
console.log(increment(145));
console.log(decrement(3456));
console.log(makeInt("14.555"));
console.log(preserveDecimal("25.1111"));
