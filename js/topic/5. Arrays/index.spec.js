const { expect } = require("chai");
const {
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
} = require("./index");

describe("Array suite", () => {
  it("Get elements.", async () => {
    const str = getElementsOfArray();
    expect(str).to.eq("NodeJS");
  });

  it("Array length.", async () => {
    const len = getArrayLength();
    expect(len).which.is.a("number").eq(5);
  });

  it("Add element at the end of the array.", async () => {
    const el = addElementAtTheEnd();
    expect(el).which.is.a("string").not.eq("NodeJS");
  });

  it("Add element at the beginning of the array.", async () => {
    const el = addElementAtTheBeginning();
    expect(el).which.is.a("string").not.eq("I");
  });

  it("Remove element at end of array.", async () => {
    const el = removeElementAtEnd();
    expect(el).which.is.a("string").eq("and");
  });

  it("Remove element at beginning of array.", async () => {
    const el = removeElementAtBeginning();
    expect(el).which.is.a("string").eq("love");
  });

  it("Merge array.", async () => {
    const firstArr = [1, 2, 3];
    const secondArr = [4, 5, 6];

    const mergedArr = mergeArrays(firstArr, secondArr);
    expect(mergedArr).which.is.an("array").eql([1, 2, 3, 4, 5, 6]);
  });

  it("Remove specific index and replace.", async () => {
    const el = removeElementSpecificIndex();
    expect(el).which.is.a("string").not.eq("love");
  });

  it("Filter array return only female students", async () => {
    const arr = filterArray();
    expect(arr)
      .which.is.a("array")
      .eql([
        {
          id: 3,
          f_name: "Rubi",
          l_name: "S",
          gender: "F",
          married: false,
          age: 27,
          paid: 350,
          courses: ["Blogging", "React", "UX"],
        },
      ]);
  });

  it("Map array concat first name and last name", async () => {
    const arr = mapArray();
    expect(arr)
      .which.is.a("array")
      .eql([
        {
          id: 1,
          f_name: "Alex",
          l_name: "B",
          gender: "M",
          married: false,
          age: 22,
          paid: 250,
          courses: ["JavaScript", "React"],
          fullName: "Alex B",
        },
        {
          id: 2,
          f_name: "Ibrahim",
          l_name: "M",
          gender: "M",
          married: true,
          age: 32,
          paid: 150,
          courses: ["JavaScript", "PWA"],
          fullName: "Ibrahim M",
        },
        {
          id: 3,
          f_name: "Rubi",
          l_name: "S",
          gender: "F",
          married: false,
          age: 27,
          paid: 350,
          courses: ["Blogging", "React", "UX"],
          fullName: "Rubi S",
        },
        {
          id: 4,
          f_name: "Zack",
          l_name: "F",
          gender: "M",
          married: true,
          age: 36,
          paid: 250,
          courses: ["Git", "React", "Branding"],
          fullName: "Zack F",
        },
      ]);
  });

  it("Reduce array get total amount paid by all students.", async () => {
    const total = reduceArray();
    expect(total).which.is.a("Number").eq(1000);
  });

  it("Some method array check if a students has age greater than 30.", async () => {
    const bool = someArray();
    expect(bool).which.is.a("boolean").eq(true);
  });

  it("Find array get student record which has age greater than 30.", async () => {
    const student = findArray();
    expect(student)
      .which.is.a("object")
      .eql({
        id: 2,
        f_name: "Ibrahim",
        l_name: "M",
        gender: "M",
        married: true,
        age: 32,
        paid: 150,
        courses: ["JavaScript", "PWA"],
      });
  });

  it("Every method array check if a students has subscribe two or more subjects.", async () => {
    const bool = everyArray();
    expect(bool).which.is.a("boolean").eq(true);
  });
});
