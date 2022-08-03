"use strict";

// 1
const sumTo = a => a > 1 ? a + sumTo(--a) : a;

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));