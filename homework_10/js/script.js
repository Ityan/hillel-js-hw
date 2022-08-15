"use strict";

class Employee {

  static vacationDaysPerYear = 18;

  constructor(firstName, lastName, age, jobPosition, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  calcAnnualSallary() {
    return this.salary * 12;
  }

}

const empMike = new Employee("Mike", "Tyson", 55, "Boxer", 50000);
console.log(empMike.fullName);
console.log(empMike.calcAnnualSallary());

const empJohn = new Employee("John", "Constantine", 38, "Exorcist", 0);
console.log(empJohn.fullName);
console.log(empJohn.calcAnnualSallary());

