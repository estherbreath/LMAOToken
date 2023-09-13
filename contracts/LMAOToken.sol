// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract LMAOToken is ERC20("LMAOToken", "LTK"){
      address owner;
      constructor() {
            owner = msg.sender;
      _mint(owner, 1000e18);
      }
function _transfer(address from, address to, uint256 amount) internal virtual override {
      uint feeOnTransfer = (8 * amount) / 100;
      uint remainder = amount - feeOnTransfer;
      super._transfer(from, to, remainder);
      super._transfer(from, owner, feeOnTransfer);
}
}