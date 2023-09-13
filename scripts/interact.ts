import { setBalance } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers, network } from "hardhat";

async function main() {
  const WLMAOAddr = "0x8B5154B62E46F9a50fE0B3a677921f656492DDb6";
  const LMAOAddr = "0x6d7D9E7d0A403589658A8a136B53F987A1eF1def";

  // const lmao = await ethers.getContractAt("IERC2", LMAOAddr);
  // const wlmao = await ethers.getContractAt("IWLMAO", WLMAOAddr);
  // const wlmaoERC20 = await ethers.getContractAt("IERC2", wlmao)

  const lmao = await ethers.deployContract("LMAOToken");

  await lmao.waitForDeployment();

  const wlmao = await ethers.deployContract("WLMAOToken", [lmao.target]);
  await wlmao.waitForDeployment();

  const from = "0x77ac3a62c12333dd9604f8d5cd6e350cd33d04b4";

  const [signer, spender] = await ethers.getSigners()

  // const signer = await ethers.getImpersonatedSigner(
  //   "0x77ac3a62c12333dd9604f8d5cd6e350cd33d04b4"
  // );

  // await setBalance(signer.address, "0x24835D67B930ABD6CC000");

  await lmao.transfer(spender, ethers.parseEther("200"))

  console.log(
    "Before Deposit",
    ethers.formatEther(await lmao.balanceOf(spender)),
    ethers.formatEther(await wlmao.balanceOf(spender))
  );

  const approvedAmoont = ethers.parseEther("500000000000000000000000");
  const depositAmount = ethers.parseEther("100");
  await lmao.connect(spender).approve(wlmao.target, approvedAmoont);

  await wlmao.connect(spender).deposit(depositAmount);

  console.log(
    "After Deposit",
    ethers.formatEther(await lmao.balanceOf(spender)),
    ethers.formatEther(await wlmao.balanceOf(spender))
  );

  const getBalance = await wlmao.balanceOf(spender);
  
  await wlmao.connect(spender).WithdrawToken(getBalance);


  console.log(
    "After withdrawal",
    ethers.formatEther(await lmao.balanceOf(spender)),
    ethers.formatEther(await wlmao.balanceOf(spender))
  );



}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
