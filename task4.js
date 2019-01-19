// TASK 4

// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two 3-digit numbers.

let palindrome = getMaxPalindrome(100, 1000);

console.log(palindrome);

function getMaxPalindrome(start, end) {
  let maxPalindrome = 0;

  for (let i = start; i < end; i++) {
    for (let j = start; j < end; j++) {
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
