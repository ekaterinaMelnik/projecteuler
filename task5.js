// TASK 5

//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let result = smallestDivisibleNumber(20);

console.log(result);

function smallestDivisibleNumber(start) {
  for (let i = start; ; i++) {
    if (isDivisible(i)) {
      return i;
    }
  }
}

function isDivisible(number) {
  let arrNumbers = new Array(20);

  for (let i = 0; i < arrNumbers.length; i++) {
    if (number % (i + 1) !== 0) {
      return false;
    }
  }

  return true;
}
