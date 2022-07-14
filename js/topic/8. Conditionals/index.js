const ifElse = (x, y) => {
  /*    
    Create the following condition using if-else statement:
    
    1. Return x if x is less than y;
    2. Return the difference of x and y if x is greater than y;
    3. If no conditions met return the sum of the two numbers;
    */

  if (x < y) return x;
  else if (x > y) return x - y;
  else return x + y;
};

const switchCondition = (x) => {
  /*
    Do the following conditions using switch statement:

    1. If x is less than to 10 return 'X';
    2. If x is in between 10 to 20 return 'Y';
    3. Default return value is 'Z';
    
    */

  let result = "";
  switch (true) {
    case x < 10:
      result = "X";
      break;
    case x >= 10 && x <= 20:
      result = "Y";
      break;
    default:
      result = "Z";
      break;
  }
  return result;
};

const ternary = (x, y) => {
  /*    
    Create the following condition using ternary:
    
    1. Return x if x is less than y;
    2. Return the difference of x and y if x is greater than y;
    3. If no conditions met return the sum of the two numbers;
    */

  const result = x < y ? x : x > y ? x - y : x + y;

  return result;
};

module.exports = {
  ifElse,
  switchCondition,
  ternary,
};
