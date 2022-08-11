"use strict";

// 1

const birthdate = new Date("1999-11-25");
console.log(`${birthdate.getDate()}.${birthdate.getMonth() + 1}.${birthdate.getFullYear()}`);

// 2

function getDiffDays(startDate, endDate) {
  const DAY_IN_MILLIS = 24 * 60 * 60 * 1000;

  const start = Date.parse(startDate);
  const end = Date.parse(endDate);
  if (isNaN(start) || isNaN(end)) {
    console.error("invalid date");
    return;
  }

  const diff = end - start;
  if (diff < 0) {
    console.error("your start date is later than end");
    return;
  }

  return diff / DAY_IN_MILLIS;
}

console.log(getDiffDays('2020-01-01', '2020-01-17')); // 16
console.log(getDiffDays('2020-01-01', '2020-03-15')); // 74
console.log(getDiffDays('2222222222', '2020-03-15')); // Error: invalid date
console.log(getDiffDays('2021-01-02', '2020-03-15')); // Error: your start date is later than end

// 3
function isWeekend(dateStr) {
  const dayOfWeek = new Date(dateStr).getDay();
  return dayOfWeek === 6 || dayOfWeek === 0;
}

console.log(isWeekend('2022-02-12')); // true
console.log(isWeekend('2022-02-13')); // true
console.log(isWeekend('2022-02-09')); // false

// 4

const person = {
  fullName: 'Sherlock Holmes',
  address: {
    street: "Baker Street",
    city: "London",
    house: "221b"
  }
}

const personStr = JSON.stringify(person);
console.log("JSON:", personStr);

const convertedPerson = JSON.parse(personStr);
console.log("Object:", convertedPerson);

const { fullName, address: { street, city, house } } = person;
console.log(fullName, street, city, house);