// Complete the "getPeopleOver" method.
// This method takes a number (age) as its only argument
// This method should return an array of strings with
// the first + last name of every person that's older than
// "age" years old.

// Read the associated test file to understand the expected result format

// The "people" property passed to initialize the class
// is an array of objects in this form:
// [
//   { firstName: "John", lastName: "Smith", age: 40 },
//   { firstName: "Jane", lastName: "Doe", age: 68 },
//   { firstName: "Grace", lastName: "Hopper", age: 85 },
//   { firstName: "Bart", lastName: "Simpson", age: 10 }
// ];

// To build this method, you can only use Higher Order Functions available
// in the Array prototype (forEach, map, filter, find, reduce or others)
// You can use as many of those as you need

class Inhabitants {
  constructor(people) {
    this.people = people;
    this.age = 0;
  }

  getPeopleOver() {
    let inhabitants = [
      { firstName: "John", lastName: "Smith", age: 40 },
      { firstName: "Jane", lastName: "Doe", age: 68 },
      { firstName: "Grace", lastName: "Hopper", age: 85 },
      { firstName: "Bart", lastName: "Simpson", age: 10 }
    ];

    let people = this.inhabitants.getPeopleover(50);

    for (let p of people) {
      this.newInhabitants = [];
      if (age >= 50) {
        return people.filter();
      }
    }
    return this.newIhabitants;
  }
}

module.exports = Inhabitants;
