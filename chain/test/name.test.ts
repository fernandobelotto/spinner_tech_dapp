import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";

describe("Name", () => {
  it("should say name Some Name", async () => {
    const Name = await ethers.getContractFactory("Name");
    const instance = await Name.deploy();

    expect(await instance.readName()).to.equal("Some name");
  });
});
