"use strict";

function isWeekendInCurrentYear(dateStr) {
  const date = new Date(dateStr);
  date.setFullYear(new Date().getFullYear());
  const dayOfWeek = date.getDay();
  return dayOfWeek === 6 || dayOfWeek === 0;
}

class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = birthDayDate;
  }

  celebrate() {
    return "Happy Birthday, let's celebrate";
  }
}

class Employee extends Person {
  #salary;

  constructor(salary, jobPosition, firstName, lastName, age, birthDayDate) {
    super(firstName, lastName, age, birthDayDate);

    this.#salary = salary;
    this.jobPosition = jobPosition;
  }

  getYearSalary() {
    return this.#salary * 12;
  }

  celebrate() {
    if (isWeekendInCurrentYear(this.birthDayDate)) {
      return super.celebrate();
    }
    return "Happy Birthday, but I need to work";
  }
}

const person = new Person('John', 'Wick', 51, '1979-02-03');
console.log(person.celebrate());

const employee = new Employee(380000, 'lawyer', 'Soul', 'Goodman', 47, '1984-02-03');
console.log(employee.getYearSalary());
console.log(employee.celebrate());