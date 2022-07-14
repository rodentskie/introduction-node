const { expect } = require("chai");
const {
  getName,
  getFavoriteFood,
  deconstruct,
  spread,
  updatingProperty,
  lookUp,
  testForProperty,
  accessProperty,
} = require("./index");

describe("Object suite", () => {
  it("Get name.", async () => {
    const name = getName();
    expect(name).which.is.a("string").eq("Ben Walter");
  });
  it("Get favorite food.", async () => {
    const food = getFavoriteFood();
    expect(food).which.is.a("string").eq("Bulalo");
  });
  it("Deconstruct.", async () => {
    const { address, occupation } = deconstruct();
    expect(address).which.is.a("string").eq("Gensan City");
    expect(occupation).which.is.a("string").eq("Programmer");
  });
  it("Spread.", async () => {
    const info = spread();
    expect(info).which.is.an("object").eql({
      name: "Ben Walter",
      age: 33,
      address: "Gensan City",
      "Favorite Food": "Bulalo",
      occupation: "Programmer",
    });
  });
  it("Update value of a property.", async () => {
    const data = updatingProperty();
    expect(data).which.is.an("string").not.eq("Ben Walter");
  });
  it("lookUp -> alpha = Adams", async () => {
    const data = lookUp("alpha");
    expect(data).which.is.an("string").eq("Adams");
  });
  it("lookUp -> bravo = Boston", async () => {
    const data = lookUp("bravo");
    expect(data).which.is.an("string").eq("Boston");
  });
  it("lookUp -> charlie = Chicago", async () => {
    const data = lookUp("charlie");
    expect(data).which.is.an("string").eq("Chicago");
  });
  it("lookUp -> delta = Denver", async () => {
    const data = lookUp("delta");
    expect(data).which.is.an("string").eq("Denver");
  });
  it("lookUp -> echo = Easy", async () => {
    const data = lookUp("echo");
    expect(data).which.is.an("string").eq("Easy");
  });
  it("lookUp -> foxtrot = Frank", async () => {
    const data = lookUp("foxtrot");
    expect(data).which.is.an("string").eq("Frank");
  });
  it("testForProperty that exists.", async () => {
    const data = testForProperty("name");
    expect(data).which.is.an("boolean").eq(true);
  });
  it("testForProperty that doesn't exists.", async () => {
    const data = testForProperty("hobby");
    expect(data).which.is.an("boolean").eq(false);
  });
  it("Access complex property", async () => {
    const data = accessProperty();
    expect(data).which.is.an("string").eq("maps");
  });
});
