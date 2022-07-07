const add = (x, y, z) => {
  /*
    1. Add numbers x, y and z then assign to 'sum' variable
    2. Do not change the return statement
  */

  const sum = x + y + z;

  return { sum };
};

const subtract = (x, y) => {
  /*
      1. Subtract numbers x and y then assign to 'diff' variable
      2. Do not change the return statement
    */

  const diff = x - y;

  return { diff };
};

const multiply = (x, y) => {
  /*
    1. Multiply numbers x and y then assign to 'product' variable
    2. Do not change the return statement
    */

  const product = x * y;

  return { product };
};

const division = (x, y) => {
  /*
    1. Divide numbers x and y then assign and assign to 'quotient' variable
    2. Do not change the return statement
    */

  const quotient = x / y;

  return { quotient };
};

const remainder = (x, y) => {
  /*
    1. Get the remainder of numbers x and y then assign and assign 'result' variable
    2. Do not change the return statement
    */

  const result = x % y;

  return { result };
};

module.exports = {
  add,
  subtract,
  multiply,
  division,
  remainder,
};
