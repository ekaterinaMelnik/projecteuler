// TASK 4

// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two 3-digit numbers.

let result = getMaxPalindrome(100, 1000);

console.log(result);

function getMaxPalindrome(start, end) {
  let maxPalindrome = 0;

  for (let i = end; i >= start; i--) {
    for (let j = i; j >= start; j--) {
      if (isPalindrome(i * j) && i * j > maxPalindrome) {
        maxPalindrome = i * j;
      }
    }
  }

  return maxPalindrome;
}

function isPalindrome(number) {
  let reverseNumber = reverseString(number.toString());

  return number === reverseNumber;
}

function reverseString(str) {
  return +str.split("").reverse().join("");
}
