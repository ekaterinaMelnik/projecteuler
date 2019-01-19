// TASK 3

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

//https://ru.wikipedia.org/wiki/Метод_факторизации_Ферма#Описание_алгоритма

let n = 600851475143;
let arrPrimeFactors = [];

getPrimeFactor(n);

console.log(arrPrimeFactors);

function getPrimeFactor(n) {
  let s = Math.ceil(Math.sqrt(n));
  let y, y_sqrt, a, b, k;

  for (let i = 1; ; i++) {
    y = Math.pow(s + i, 2) - n;
    y_sqrt = Math.sqrt(y);
    if (isInteger(y_sqrt)) {
      k = i;
      break;
    }
  }

  a = s + k + y_sqrt;
  b = s + k - y_sqrt;

  if (a !== 1 && b !== 1) {
    getPrimeFactor(a);
    getPrimeFactor(b);
  }
  else {
    a !== 1 && arrPrimeFactors.push(a);
    b !== 1 && arrPrimeFactors.push(b);
  }
}

function isInteger(num) {
  return (num ^ 0) === num;
}
