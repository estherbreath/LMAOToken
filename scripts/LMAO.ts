import { ethers } from "hardhat";

async function main() {
  const LMAOAddr = "0x6d7D9E7d0A403589658A8a136B53F987A1eF1def"


    const LMAO = await ethers.deployContract("LMAOToken", []) 
      await LMAO.waitForDeployment();
     console.log(' LMAO contract deployed to:', LMAO.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

 