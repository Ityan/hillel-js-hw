let result = 0;

const set = (n) => result = n;
const add = (n) => result += n;
const mult = (n) => result *= n;
const sub = (n) => result -= n;
const div = (n) => result /= n;

module.exports = {
  set,
  add,
  mult,
  sub,
  div
};

// not sure which way is better

// class Calculator {
//   #result = 0;

//   constructor(init) {
//     this.result = init;
//   }

//   set = (n) => this.result = n;
//   add = (n) => this.result += n;
//   mult = (n) => this.result *= n;
//   sub = (n) => this.result -= n;
//   div = (n) => this.result /= n;
// };

// module.exports = new Calculator(0);