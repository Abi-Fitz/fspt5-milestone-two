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
      expect(Building.hasOwnProperty("location")).to.equal("true");
    });
    expect(Building.hasOwnProperty("type")).to.equal("true");
  });

  describe("startDate method", () => {
    it("should exist on the Building prototype", () => {
      expect(Building.prototype.startDate).to.exist;
    });

    it("should return the location when called", () => {
      const location = "Japan";
      Building.location = location;
    });

    Building.type = type;
    expect(Building.startDate()).to.equal(location);
  });

  describe("buildingType method", () => {
    it("should exist on the Building prototype", () => {
      expect(Building.prototype.buildingType).to.exist;
    });

    it("should return the location and type when called", () => {
      const location = "Japan";
      Building.location = location;
      const type = "Skyscrapper";
      Building.type = type;
    });

    expect(Building.buildingType()).to.equal([location, type]);
  });
});
