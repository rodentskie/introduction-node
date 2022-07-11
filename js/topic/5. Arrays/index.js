const getElementsOfArray = () => {
  const arr = ["I", "love", "HTC", "and", "NodeJS"]; // do not change

  // get NodeJS index and store to the variable 'element'
  const element = arr[4]; // change this line
  return element;
};

const getArrayLength = () => {
  const arr = ["I", "love", "HTC", "and", "NodeJS"]; // do not change

  // get the length of the array
  const len = arr.length; // change this line
  return len;
};

const addElementAtTheEnd = () => {
  const arr = ["I", "love", "HTC", "and", "NodeJS"]; // do not change

  // add elements at the end of the array
  arr.push("Php");
  // do not change code below this comment
  const element = arr[arr.length - 1];
  return element;
};

const addElementAtTheBeginning = () => {
  const arr = ["I", "love", "HTC", "and", "NodeJS"]; // do not change

  // add elements at the beginning of the array
  arr.unshift("Any");
  // do not change code below this comment
  const element = arr[0];
  return element;
};

const removeElementAtEnd = () => {
  const arr = ["I", "love", "HTC", "and", "NodeJS"]; // do not change

  // remove elements at the end of the array
  arr.pop();
  // do not change code below this comment
  const element = arr[arr.length - 1];
  return element;
};

const removeElementAtBeginning = () => {
  const arr = ["I", "love", "HTC", "and", "NodeJS"]; // do not change

  // remove elements at the beginning of the array
  arr.shift();
  // do not change code below this comment
  const element = arr[0];
  return element;
};

const mergeArrays = (firstArr, secondArr) => {
  // combine the two array parameters and return
  return [...firstArr, ...secondArr];
};

const removeElementSpecificIndex = () => {
  const arr = ["I", "love", "HTC", "and", "NodeJS"]; // do not change

  // remove the element "love" and replace it with any adjective
  arr.splice(1, 1, "hate");
  // do not change code below this comment
  const element = arr[1];
  return element;
};

// for the functions below use this array of objects
// do not alter this object

const students = [
  {
    id: 001,
    f_name: "Alex",
    l_name: "B",
    gender: "M",
    married: false,
    age: 22,
    paid: 250,
    courses: ["JavaScript", "React"],
  },
  {
    id: 002,
    f_name: "Ibrahim",
    l_name: "M",
    gender: "M",
    married: true,
    age: 32,
    paid: 150,
    courses: ["JavaScript", "PWA"],
  },
  {
    id: 003,
    f_name: "Rubi",
    l_name: "S",
    gender: "F",
    married: false,
    age: 27,
    paid: 350,
    courses: ["Blogging", "React", "UX"],
  },
  {
    id: 004,
    f_name: "Zack",
    l_name: "F",
    gender: "M",
    married: true,
    age: 36,
    paid: 250,
    courses: ["Git", "React", "Branding"],
  },
];

const filterArray = () => {
  // return all students who are female
  return students.filter((data) => data.gender === "F");
};

const mapArray = () => {
  // concatenate the names of all student to full name
  // add property fullName to each student's record
  // fullName = f_name + l_name

  /*
    Sample:

    {
        id: 4,
        f_name: 'Zack',
        l_name: 'F',
        gender: 'M',
        married: true,
        age: 36,
        paid: 250,
        courses: [ 'Git', 'React', 'Branding' ],
        fullName: 'Zack F'
    }
    
  */

  return students.map((data) => {
    return {
      ...data,
      fullName: `${data["f_name"]} ${data["l_name"]}`,
    };
  });
};

const reduceArray = () => {
  // get the total amounts paid by all students
  return students.reduce((initial, data) => (initial += data.paid), 0);
};

const someArray = () => {
  // check if there are some students whose age is greater than 30;
  return students.some((data) => data.age > 30);
};

const findArray = () => {
  // get a student's record whose age is greater than 30;
  return students.find((data) => data.age > 30);
};

const everyArray = () => {
  // check if every student has two or more courses subscribed
  // return boolean
  return students.every((data) => data.courses.length >= 2);
};

module.exports = {
  getElementsOfArray,
  getArrayLength,
  addElementAtTheEnd,
  addElementAtTheBeginning,
  removeElementAtEnd,
  removeElementAtBeginning,
  mergeArrays,
  removeElementSpecificIndex,
  filterArray,
  mapArray,
  reduceArray,
  someArray,
  findArray,
  everyArray,
};
