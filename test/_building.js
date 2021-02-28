const { expect } = require("chai");
const Building = require("../src/classes/building");
const { isClass } = require("./utilities");

let building = null;

describe("Building", () => {
  beforeEach(() => {
    building = new Building();
  });
  describe("Building", () => {
    it("should be a class", () => {
      expect(isClass(Building)).to.be.true;
    });

    it("should have properties for location and type", () => {
      expect(Building.hasOwnProperty("location")).to.equal("Japan");
    });
    expect(Building.hasOwnProperty("type")).to.equal("Skyscrapper");
  });

  xdescribe("Location and type methods", () => {
    xit("should have 2 methods", () => {
      expect(hasMethods(startDate(), buildingType())).to.be.true;
      const location = "Japan";
      const type = "Skyscrapper";
      Building.location = location;
      Building.type = type;
      expect(Building.buildingType()).to.exist;
      expect(Building.startDate()).to.exist;
    });
  });
});
