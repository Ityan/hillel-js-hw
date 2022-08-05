"use strict";

// 1
const sumTo = a => a > 1 ? a + sumTo(--a) : a;

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));

// 2
const findShort = str => str.split(" ").sort((a, b) => a.length - b.length)[0];

console.log(findShort("Lorem ipsum dolor sit amet"));
console.log(findShort("Hello world!"));
console.log(findShort("Hi"));
console.log(findShort("She is David's sister"));