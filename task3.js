// function to reverse a string (without using .reverse()).

function reverseStringLoop(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseStringLoop("hello")); // "olleh"


// function to check if a number is prime.

function isPrimeLoop(num) {
  if (num <= 1) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrimeLoop(7));  // true
console.log(isPrimeLoop(10)); // false


// function to find the maximum number in an array

function findMaxBuiltIn(arr) {
  return Math.max(...arr);
}

console.log(findMaxBuiltIn([3, 9, 2, 7])); // 9
