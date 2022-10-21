import { ethers } from "hardhat";

async function main() {


  const Whitelist = await ethers.getContractFactory("Whitelist");
  const whitelist = await Whitelist.deploy("20");

  await whitelist.deployed();

  console.log(`whitelist deployed to ${whitelist.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
