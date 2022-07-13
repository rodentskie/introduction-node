// setup
const data = {
  name: "Ben Walter",
  age: 33,
  address: "Gensan City",
  "Favorite Food": "Bulalo",
  occupation: "Programmer",
};

const getName = () => {
  const name = data.name; // change this line

  return name; // do not change this line
};

const getFavoriteFood = () => {
  const favFood = data["Favorite Food"]; // change this line

  return favFood; // do not change this line
};

const deconstruct = () => {
  // get address and occupation and return through deconstruct
  const { address, occupation } = data;

  return { address, occupation };
};

const spread = () => {
  // copy data object to info object using spread
  const info = {
    ...data,
  };

  return info; // do not change this line
};

const updatingProperty = () => {
  // change the name property in the data
  data.name = "test";
  return data.name; // do not change this line
};

const lookUp = (val) => {
  let result = "";

  // Only change code below this line
  /*
  
   switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  */
  const data = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = data[val];
  // Only change code above this line
  return result;
};

const testForProperty = (val) => {
  // test for any property in data that must exist
  // return boolean

  const check = data.hasOwnProperty(val);
  return check;
};

const accessProperty = () => {
  // setup

  const myStorage = {
    car: {
      inside: {
        "glove box": "maps",
        "passenger seat": "crumbs",
      },
      outside: {
        trunk: "jack",
      },
    },
  };

  // should return the string 'maps' from the object myStorage
  return myStorage.car.inside["glove box"];
};

module.exports = {
  getName,
  getFavoriteFood,
  deconstruct,
  spread,
  updatingProperty,
  lookUp,
  testForProperty,
  accessProperty,
};
