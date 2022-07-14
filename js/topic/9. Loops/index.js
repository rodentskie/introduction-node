const whileLoop = () => {
  // use while loop to populate the array
  // arr should have value of [5,4,3,2,1]

  const arr = [];
  // change code below this line

  let counter = 5;
  while (counter !== 0) {
    arr.push(counter);
    counter--;
  }

  // change code above this line

  return arr;
};

const doWhileLoop = () => {
  // use do while loop to populate the array
  // arr should have value of [5,4,3,2,1,0]

  const arr = [];
  // change code below this line
  let counter = 5;

  do {
    arr.push(counter);
    counter--;
  } while (counter !== 0);
  // change code above this line

  return arr;
};

const forLoop = () => {
  // loop thru arr using for loop and concatenate it into a string all elements of the array
  // comma separated
  // expected result is "5, 4, 3, 2, 1, 0"
  const arr = [5, 4, 3, 2, 1, 0];
  let str = "";

  // change code below this line
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (i !== arr.length - 1) str += `${e}, `;
    else str += `${e}`;
  }
  // change code above this line

  return str;
};

const recursion = (arr, n) => {
  // loop thru arr using recursion
  // n is the counter
  // n should not exceed the length of the array
  // when n is 0 return the last element of the array

  /*
    ([1], 0) = 1;
    ([2, 3, 4], 1) = 6;
    ([2, 3, 4, 5], 3) = 14;
    
    */
  // Only change code below this line
  if (n <= 0) {
    return arr[arr.length - 1];
  } else {
    return recursion(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
};

module.exports = {
  whileLoop,
  doWhileLoop,
  forLoop,
  recursion,
};
