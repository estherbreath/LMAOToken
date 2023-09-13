import { ethers } from "hardhat";

async function main() {

  const LMAOAddr = "0x6d7D9E7d0A403589658A8a136B53F987A1eF1def"
  const WLMAOAddr = "0x4Ce089d8f79808977691Bc4cb055175Baf3C354F"

    const WLMAO = await ethers.deployContract("WLMAOToken", ["0x6d7D9E7d0A403589658A8a136B53F987A1eF1def"]) 
      await WLMAO.waitForDeployment();
      console.log('WLMAO contract deployed to:', WLMAO.target);





}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });