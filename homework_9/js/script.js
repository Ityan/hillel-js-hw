"use strict";

// 1

const birthdate = new Date("1999-11-25");
console.log(`${birthdate.getDate()}.${birthdate.getMonth() + 1}.${birthdate.getFullYear()}`);

// 2

function getDiffDays(startDate, endDate) {
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

  return diff / (24 * 60 * 60 * 1000);
}

console.log(getDiffDays('2020-01-01', '2020-01-17')); // 16
console.log(getDiffDays('2020-01-01', '2020-03-15')); // 74
console.log(getDiffDays('2222222222', '2020-03-15')); // Error: invalid date
console.log(getDiffDays('2021-01-02', '2020-03-15')); // Error: your start date is later than end