"use strict";

// 1
const USER_KEY = "userData";

function saveUserToLocalStorage() {
  const data = localStorage.getItem(USER_KEY);
  if (data != null) {
    console.log(`User already saved to LS: ${data}`);
    return;
  }

  console.log("Saving user to LS...")
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => localStorage.setItem(USER_KEY, JSON.stringify(data)))
    .catch(err => console.error(err.message));
}

saveUserToLocalStorage();

// 2
function isValidDateFormat(str) {
  const regexp = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$/
  return regexp.test(str);
}

console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false

// 3
function isAfter(date, dateToCompare) {
  return date > dateToCompare;
}

console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); // true
console.log(isAfter(1648636135000, 1648549735000)); // true
console.log(isAfter(1648549735000, 1648636135000)); // false