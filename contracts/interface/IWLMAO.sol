// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;
interface IWLMAO {
     function deposit(uint _amount) external;
     function WithdrawToken (uint _amount) external; 
      function totalSupply() external view returns (uint256);
    function balanceOf(address _owner) external view returns (uint256 balance);
    function transfer(address _to, uint256 _value) external returns (bool success);
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool success);
    function allowance(address _owner, address _spender) external view returns (uint256 remaining);
    function approve(address _spender, uint256 _value) external returns (bool success);

}