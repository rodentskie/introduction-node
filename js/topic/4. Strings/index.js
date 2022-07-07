const escapingQuotes = () => {
  /**
   * The 'str' variable should have value of: I am taking my "college" at "Holy Trinity College"
   *
   */

  const str = 'I am taking my "college" at "Holy Trinity College"'; // change this line

  return str;
};

const concatString = () => {
  /**
   * The 'str' variable should have the result of, please use the myName and myAge variable.
   *
   * Good day, today is Friday and I love programming JavaScript.
   */

  const day = "Friday";
  const language = "JavaScript";

  const str = `Good day, today is ${day} and I love programming ${language}.`; // change this line

  return str;
};

module.exports = {
  escapingQuotes,
  concatString,
};
