/*------------------
You will be equally evaluated on the
quality of tests you write for this!

1. Create a class named Building. (already done for you)
2. Add two properties (your choice) and test them.
3. Add two methods (your choice) and test them.
You should test that they exist and that they work correctly.
You can add as many tests as you see fit.
------------------*/

class Building {
  constructor(location, type) {
    this.location = "Japan";
    this.type = "Skyscrapper";
  }

  startDate() {
    console.log(`Construction will commence at ${this.location} on Monday.`);
  }
  buildingType() {
    console.log(`We will be building a ${this.type} at this ${this.location}.`);
  }
}

module.exports = Building;
