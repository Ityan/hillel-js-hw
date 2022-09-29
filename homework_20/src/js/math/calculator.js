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