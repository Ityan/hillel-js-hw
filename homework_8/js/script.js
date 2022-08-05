"use strict";

// 1

function sumTwoSmallestNumbers(...args) {
  const numbers = [...args];
  if (numbers.length < 2) {
    console.error("Enter at least 2 numbers")
    return;
  }

  return numbers.sort((a, b) => a - b).slice(0, 2).reduce((sum, number) => sum + number, 0);
}

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")