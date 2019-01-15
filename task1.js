// TASK 1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

let sum = 0,
    limit = 1000;

for (let i = 0; i < limit; i++) {
  sum += (i % 3 === 0 || i % 5 === 0) ? i : 0;
}

console.log(sum);
