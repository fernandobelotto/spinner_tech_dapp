import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
  const Name = await ethers.getContractFactory("Name");
  const name = await Name.deploy();
  await name.deployed();
  console.log(name.address);
  return name;
}

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
